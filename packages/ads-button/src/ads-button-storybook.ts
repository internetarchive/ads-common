import { html, css, LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import "./ads-button"

@customElement("ads-button-storybook")
export class AdsButtonStorybook extends LitElement {
  render() {
    return html`
      <div>
        <ads-button>Primary button</ads-button>
        <ads-button type="secondary">Secondary button</ads-button>
      </div>
      <div>
        <ads-button class="sample1">CSS theme 1</ads-button>
        <ads-button class="sample2">CSS theme 2</ads-button>
      </div>
    `;
  }

  static styles = css`
    div {
      padding-bottom: 10px;
    }
   
    :root {
      --ads-primary-theme: black;
    }
   
    .sample1 {
      --ads-button-background-color: #bada55;
      --ads-button-text-color: #442200;
    }
   
    .sample2 {
      --ads-button-background-color: lightblue;
      --ads-button-text-color: firebrick;
      --ads-button-border-color: black;
    }
  `;
}
