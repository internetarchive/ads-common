// This component defines a styled button for reuse across Archiving & data services team.
import { html, css, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

export enum AdsButtonTypes {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  CANCEL = "cancel",
}

@customElement("ads-button")
export class AdsButton extends LitElement {
  @property({ type: Boolean, attribute: true, reflect: true }) disabled? =
    false;
  @property() type?: AdsButtonTypes = AdsButtonTypes.PRIMARY;
  // will remove borders
  @property() flat?: boolean = false;
  @property() heightPx?: number = undefined;

  // maps the button type to its relevant class
  private get buttonClass() {
    return (
      this.buttonTypeClass +
      (this.disabled ? " disabled" : "") +
      (this.flat ? " flat" : "")
    );
  }

  private get buttonTypeClass() {
    switch (this.type) {
      case AdsButtonTypes.PRIMARY:
        return "primary";
      case AdsButtonTypes.SECONDARY:
        return "secondary";
      case AdsButtonTypes.CANCEL:
        return "cancel";
    }
    console.warn(
      "Invalid button type provided to ads-button. Defaulting to primary button styles.",
    );
    return "primary";
  }

  private onClick(e: Event) {
    if (this.disabled) {
      e.stopImmediatePropagation();
      e.preventDefault();
    }
  }

  // link to that folder / collection's page
  render() {
    return html`
      <button
        class=${this.buttonClass}
        style=${this.heightPx ? `height: ${this.heightPx}px` : ""}
        @click=${this.onClick}
        aria-disabled=${this.disabled}
      >
        <slot></slot>
      </button>
    `;
  }

  static styles = css`
    :host {
      /* 
      CSS variables:
      // --ads-button-background-color
      // --ads-button-text-color
      // --ads-button-border-color
      */

      /* create local copies falling back on default colors */
      --ads-button-background-color--: var(
        --ads-button-background-color,
        var(--ads-primary-theme, #2e7cb2)
      );
      --ads-button-border-color--: var(
        --ads-button-border-color,
        var(--ads-primary-theme-alt, #194865)
      );
      --ads-button-text-color--: var(
        --ads-button-text-color,
        var(--ads-primary-theme-text, white)
      );
    }

    button {
      cursor: pointer;
      padding: 4px 12px;
      border-radius: 2px;
      display: flex;
      align-items: center;
    }

    button:not(.disabled) {
      transition: filter 0.3s ease-out;
    }

    /* PRIMARY styles */

    button.primary {
      background: var(--ads-button-background-color--);
      color: var(--ads-button-text-color--);
      border: 1px solid var(--ads-button-border-color--);
    }

    button:hover:not(.disabled) {
      filter: brightness(92%);
    }

    /* SECONDARY styles */

    button.secondary {
      background: white;
      color: var(--ads-button-border-color--);
      border: 1px solid var(--ads-button-border-color--);
    }

    /* CANCEL styles */

    button.cancel {
      background: rgba(100%, 75%, 75%);
      color: black;
      border: 1px solid rgba(30%, 15%, 15%);
    }

    /* DISABLED styles */

    button.disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    /* flat styles */

    button.flat {
      border: none;
      background: transparent;
      padding: 8px 10px;
    }
  `;
}
