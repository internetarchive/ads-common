import camelcaseKeys from "camelcase-keys";

export function callJsonApi<Rq, Rsp>(options: {
  url: string;
  method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
  errorMessage: string;
  disableCamelize?: boolean;
  body?: Rq;
}): Promise<Rsp> {
  const request: RequestInit = {
    method: options.method,
    headers: {
      ...getCsrfHeader(),
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };
  if (options.body) {
    request.body = JSON.stringify(options.body);
  }
  return (
    fetch(options.url, request)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(options.errorMessage);
        }
      })
      // camelize response keys unless disabled, cast to generic response type
      .then((json) =>
        options.disableCamelize
          ? (json as Rsp)
          : (camelcaseKeys(json, { deep: true }) as Rsp),
      )
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
