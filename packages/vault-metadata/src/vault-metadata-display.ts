import { customElement, property } from "lit/decorators.js";
import { css, html, LitElement, TemplateResult } from "lit";
import {
  MetadataJsonSchema,
  MetadataStringListValues,
  uiOrderedJsonSchemaProperties,
  uiOrderedCustomProperties,
} from "./lib";
import { keyValueStyles } from "./styles";

@customElement("vault-metadata-display")
export class VaultMetadataDisplay extends LitElement {
  @property({ type: Object }) metadata: MetadataStringListValues | undefined =
    undefined;
  @property({ type: Object }) metadataJsonSchema!: MetadataJsonSchema;

  // returns a list of strings containing the keys in `metadataJsonSchema`.
  private get uiOrderedJsonSchemaProperties(): string[] {
    return uiOrderedJsonSchemaProperties(this.metadataJsonSchema.properties);
  }

  // custom properties in the metadata that are outside the given schema
  private get uiOrderedCustomProperties(): string[] {
    return uiOrderedCustomProperties(
      this.metadata || {},
      this.metadataJsonSchema.properties,
    );
  }

  private renderPropertyAndValues = (property: string): TemplateResult =>
    this.metadata?.[property]
      ? html`
          <dt class="metadata-property-name">${property}</dt>
          <dd class="metadata-property-values">
            ${this.metadata[property].values.join(", ")}
          </dd>
        `
      : html``;

  render(): TemplateResult {
    if (!this.metadata || Object.keys(this.metadata).length === 0) {
      return html` <p class="no-data">No metadata added.</p> `;
    }
    return html`
      <dl>
        ${this.uiOrderedJsonSchemaProperties.map(this.renderPropertyAndValues)}
        ${this.uiOrderedCustomProperties.map(this.renderPropertyAndValues)}
      </dl>
    `;
  }

  static styles = css`
    ${keyValueStyles}

    .metadata-property-name {
      font-weight: bold;
    }
  `;
}
