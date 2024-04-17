// This component defines a modal utility for use across the Archiving & Data Services team
// at the Internet Archive.

import { html, css, LitElement, TemplateResult, PropertyValues } from "lit";
import { property, customElement, state } from "lit/decorators.js";
import { EventHelpers } from "@jeffklein/ads-library";
import { AdsButtonTypes } from "@jeffklein/ads-button";

import "@jeffklein/ads-button";

@customElement("ads-modal")
export class AdsModal extends LitElement {
  @property({ type: Boolean }) confirmOnClose: boolean = false;

  @state() private isOpen: boolean = false;
  @state() private isConfirming: boolean = false;

  connectedCallback() {
    super.connectedCallback();

    // this will give users a confirmation prompt before leaving the page
    window.onbeforeunload = this.browserNativeConfirm;
  }

  private emitEvent(eventName: string, detail = {}) {
    this.dispatchEvent(
      EventHelpers.createEvent(eventName, detail ? { detail } : {}),
    );
  }

  protected updated(_changedProperties: PropertyValues) {
    super.updated(_changedProperties);
    if (_changedProperties.has("isOpen")) {
      this.emitEvent(this.isOpen ? "modal-opened" : "modal-closed");
    }
  }

  private browserNativeConfirm = () => {
    // confirm on navigation away only if modal is open and confirmation flag is set,
    // must be undefined (not false) to disable
    return (this.isOpen && this.confirmOnClose) || undefined;
  };

  onClose = () => {
    if (this.confirmOnClose) {
      this.confirmClose();
    } else {
      this.closeModal();
    }
  };

  confirmClose = () => {
    this.isConfirming = true;
  };

  unConfirmClose = () => {
    this.isConfirming = false;
  };

  openModal = () => {
    this.isOpen = true;
    // clear state on open
    this.isConfirming = false;
  };

  closeModal = () => {
    this.isOpen = false;
    // clear state on close
    this.isConfirming = false;
  };

  onModalKeydown = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      this.onClose();
    }
  };

  onButtonKeydown = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      this.openModal();
    }
  };

  renderModalContent = (): TemplateResult => html`
    <div
      class="modal"
      id="main-modal"
      @keydown=${this.onModalKeydown}
      tabindex="0"
    >
      <div class="modal-contents">
        ${this.isConfirming
          ? html`
              <div class="confirmation-container">
                <div class="confirmation-header">
                  <slot name="confirmation-header"></slot>
                </div>
                <div class="confirmation-text">
                  <slot name="confirmation-text"></slot>
                </div>
                <div class="confirmation-button-group">
                  <ads-button
                    class="close-button"
                    @click=${this.unConfirmClose}
                    type=${AdsButtonTypes.SECONDARY}
                  >
                    Cancel
                  </ads-button>
                  <ads-button
                    id="confirm-close-button"
                    @click=${this.closeModal}
                  >
                    Close
                  </ads-button>
                </div>
              </div>
            `
          : null}
        <div class="heading-container">
          <slot name="heading"></slot>
          <div class="close-button-container">
            <ads-button
              class="close-button"
              @click=${this.onClose}
              flat=${true}
              type=${AdsButtonTypes.SECONDARY}
            >
              <span class="close-button-x-text"> ⨉ </span>
            </ads-button>
          </div>
        </div>
        <div class="modal-body">
          <slot></slot>
        </div>
      </div>
    </div>
  `;

  render() {
    return html`
      <slot
        name="trigger"
        @click=${this.openModal}
        @keydown=${this.onButtonKeydown}
      ></slot>
      ${this.isOpen ? this.renderModalContent() : html``}
    `;
  }

  static styles = css`
    .modal {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100vh;
      z-index: 1001;
      background: rgba(0, 0, 0, 0.3);

      display: flex;
      justify-content: center;
      align-items: center;
      flex: 1;
    }

    .modal-contents {
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      background: white;
      box-shadow: 0 0 12px rgba(136, 132, 125, 0.25);
      border-radius: 4px;
    }

    .modal-body {
    }

    .heading-container {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      width: 94%;
      padding: 12px 0 12px 32px;
      border-bottom: 1px solid #888888;
    }

    .close-button {
      background: none;
      border: none;
      cursor: pointer;
    }

    .close-button-x-text {
      font-size: 20px;
    }

    .confirmation-container {
      position: absolute;
      top: 12px;
      left: 25%;
      padding: 12px;
      border: 1px solid black;
      background: white;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      border-radius: 4px;
      box-shadow: rgba(0, 0, 0, 0.65) 2px 15px 40px -8px;
    }

    .confirmation-header {
      padding: 20px 0;
    }

    .confirmation-text {
      border-top: 1px solid #aa2222;
      padding: 12px 0;
    }
  `;
}
