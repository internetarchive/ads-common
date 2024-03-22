import { html, css, LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import "./sample-component"

@customElement("sample-component-storybook")
export class SampleComponentStorybook extends LitElement {
  render() {
    return html`
      <sample-component text="Hi Jeff"></sample-component>
    `;
  }

  static styles = css`
  `;
}




