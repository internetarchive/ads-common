// Sorting metadata schema properties

export type MetadataStringListValues = {
  [property: string]: {
    values: string[];
    uiOrder?: number;
  };
};

export interface NodeMetadata {
  schema: string;
  metadata: MetadataStringListValues;
}

export type MetadataJsonSchemaProperties = {
  [property: string]: {
    uiOrder: number | undefined;
  };
};

export interface MetadataJsonSchema {
  properties: MetadataJsonSchemaProperties;
  additionalProperties: {
    properties: {
      uiOrder: {
        minimum: number;
      };
    };
  };
}

export type PropertyKeyValue = [string, { uiOrder: number | undefined }];

export const comparePropertyKeyValuesByUiOrder = (
  [, { uiOrder: uiOrderA }]: PropertyKeyValue,
  [, { uiOrder: uiOrderB }]: PropertyKeyValue,
): 0 | 1 | -1 => {
  if (uiOrderA !== undefined && uiOrderB !== undefined) {
    return uiOrderA > uiOrderB ? 1 : -1;
  } else if (uiOrderA === undefined) {
    // b is defined
    return -1;
  } else {
    return 0;
  }
};

// returns a list of strings containing the keys in `schemaProperties`, sorted by their uiOrder property
export function uiOrderedJsonSchemaProperties(
  schemaProperties: MetadataJsonSchemaProperties,
): string[] {
  // iterate over schema property keys and values, return the sorted keys
  return Object.entries(schemaProperties)
    .sort(comparePropertyKeyValuesByUiOrder)
    .map(([propertyKey]) => propertyKey);
}

// Sorting custom properties

// returns the metadata keys that do not appear in the given schema - i.e., the custom properties
export function filterToCustomProperties(
  metadata: MetadataStringListValues,
  schemaProperties: MetadataJsonSchemaProperties,
): string[] {
  const schemaPropertySet = new Set(Object.keys(schemaProperties));
  // filter keys to properties not included in the schema - aka the custom properties
  return Object.keys(metadata).filter(
    (propertyKey) => !schemaPropertySet.has(propertyKey),
  );
}

// returns the custom metadata keys in `metadata` ordered by optional uiOrder
export function uiOrderedCustomProperties(
  metadata: MetadataStringListValues,
  schemaProperties: MetadataJsonSchemaProperties,
): string[] {
  const unsortedCustomKeys = filterToCustomProperties(
    metadata,
    schemaProperties,
  );
  const unsortedEntries: PropertyKeyValue[] = unsortedCustomKeys.map((key) => [
    key,
    { uiOrder: metadata[key].uiOrder },
  ]);
  // sort the object entries, map to list of keys
  return unsortedEntries
    .sort(comparePropertyKeyValuesByUiOrder)
    .map(([customKey]) => customKey);
}
