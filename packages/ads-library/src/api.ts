import camelcaseKeys from "camelcase-keys";

// HTTP request method options represented as a type
export type ApiRequestMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

// base parameters for calling an API - common to all
export interface BaseApiFetchOptions<RequestT> {
  url: string;
  method: ApiRequestMethod;
  // user-defined error message on failure
  errorMessage: string;
  // request body
  body?: RequestT;
}

// Generic type to extend base api fetch options interface
export type ExtendedApiFetchOptions<RequestT, ExtraOptionsT> =
  BaseApiFetchOptions<RequestT> & ExtraOptionsT;

// additional options for more flexible api calls
export type ApiFetchOptions<RequestT> = ExtendedApiFetchOptions<
  RequestT,
  {
    // Accept header - what content type does the client / caller expect in return?
    acceptType: string;
    // Content-Type header - can omit for GET / DELETE / non-payload requests.
    contentType?: string;
  }
>;

export type JsonApiFetchOptions<RequestT> = ExtendedApiFetchOptions<
  RequestT,
  {
    // all JSON responses are camelized by default due to our Django backend convention
    disableCamelize?: boolean;
  }
>;

// calls our base callApi method and returns a json type, has option to disable response camel-casing
export function callJsonApi<RequestT, ResponseT>(
  options: JsonApiFetchOptions<RequestT>,
): Promise<ResponseT> {
  return (
    callApi({
      ...options,
      body: options.body ? JSON.stringify(options.body) : undefined,
      acceptType: "application/json",
      contentType: "application/json",
    })
      .then((response) => response.json())
      // camelize response keys unless disabled, cast to generic response type
      .then((json) =>
        options.disableCamelize
          ? (json as ResponseT)
          : (camelcaseKeys(json, { deep: true }) as ResponseT),
      )
  );
}

// generic interface on top of JS fetch function. adds:
// - csrf token
// - friendly interface for accept/content type
// - error handling and logging consistent with ADS patterns
export function callApi<RequestT extends BodyInit | null | undefined>(
  options: ApiFetchOptions<RequestT>,
): Promise<Response> {
  const request: RequestInit = {
    method: options.method,
    headers: {
      ...getCsrfHeader(),
      Accept: options.acceptType,
    },
    body: options.body,
  };
  // to add optional Content-Type, we must reinitialize headers after type refinement
  // since HeadersInit doesn't accept optional/mutable types.
  if (options.contentType && request.headers) {
    request.headers = {
      ...request.headers,
      "Content-Type": options.contentType,
    };
  }
  return (
    fetch(options.url, request)
      .then((response) => {
        if (response.ok) {
          return response;
        } else {
          throw new Error(options.errorMessage);
        }
      })
      // log error, return no response
      .catch((error) => {
        console.error(error);
        return Promise.reject(options.errorMessage);
      })
  );
}

const CSRF_REGEX = /csrftoken=([^;$]+)/;

/**
 * Gets an object describing a CSRF header taking the value of the CSRF token
 * found in session cookie.
 */
export const getCsrfHeader = (): { "X-CSRFToken"?: string } => {
  const csrfMatch = CSRF_REGEX.exec(decodeURIComponent(document.cookie));
  if (!csrfMatch) {
    return {};
  }

  return { "X-CSRFToken": csrfMatch[1] };
};
