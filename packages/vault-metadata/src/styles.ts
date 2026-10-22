import { css } from "lit";

export const keyValueStyles = css`
  p.no-data {
    padding: 20px 5px;
    font-style: italic;
    color: #383a3e;
  }

  dd,
  dt {
    margin-left: 0.5rem;
    font-family: "Open Sans", Helvetica, Arial, sans-serif;
    word-break: break-word;
    word-wrap: break-word;
  }

  dt {
    font-weight: bolder;
    margin-bottom: 0.5rem;
    font-size: 0.85rem;
  }

  dd {
    margin-bottom: 0.85rem;
    font-size: 0.9rem;
  }
`;
