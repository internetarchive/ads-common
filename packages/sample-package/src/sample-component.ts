import { html, css, LitElement } from "lit";
import { property, state, customElement } from "lit/decorators.js";

@customElement("sample-component")
export class SampleComponent extends LitElement {
  @property({ type: String }) text: string = "";

  @state() counter: number = 0;

  render() {
    return html`
      <div>
        <div>
          <h3>My Text: ${this.text}</h3>
        </div>
        <div>
          <h3>Count: ${this.counter}</h3>
          <button @click=${() => ++this.counter}>Increment</button>
        </div>
      </div>
    `;
  }

  static styles = css`
    h3 {
      color: blue;
    }

    button {
      color: green;
    }
  `;
}
