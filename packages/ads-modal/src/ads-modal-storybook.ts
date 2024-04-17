import { html, css, LitElement } from "lit";
import { customElement } from "lit/decorators.js";

import "./ads-modal";

@customElement("ads-modal-storybook")
export class AdsModalStorybook extends LitElement {
  render() {
    return html`
      <ads-modal>
        <h1 slot="heading">hi world</h1>
        <p>hi world. this is my modal body</p>
        <button slot="trigger">Basic Modal</button>
      </ads-modal>
      <ads-modal confirmOnClose="true">
        <h1 slot="heading">hi world</h1>
        <p>hi world. this is my modal body</p>
        <button slot="trigger">Modal with close confirmation</button>
      </ads-modal>
    `;
  }

  static styles = css``;
}
