// T is the type you will be comparing and formatting
import { TemplateResult } from "lit";
import { formatDate, humanBytes } from "@jeffklein/ads-library";

export type SortComparisonResult = -1 | 0 | 1;
export type SortComparisonFunction<T> = (a: T, b: T) => SortComparisonResult;

export interface TableDataType<T> {
  compare: SortComparisonFunction<T> | undefined;
  format: (value: T) => string | TemplateResult;
  // will override default sort direction if provided
  defaultSortDirection?: "ascending" | "descending";
}

// Each table column extends a data type associated with it
export interface TableColumn<T> {
  key: keyof T;
  label: string;
  dataType: TableDataType<T>;
  // default is 1
  flexRatio?: number;
  // shown by default
  isHidden?: boolean;
}

// for basic string comparison
export const StringDataType: TableDataType<string> = {
  compare: (a: string, b: string): SortComparisonResult => {
    if (a.toLowerCase() === b.toLowerCase()) {
      return 0;
    }
    return a.toLowerCase() > b.toLowerCase() ? 1 : -1;
  },
  format(value: string): string | TemplateResult {
    return value;
  },
};

// for basic boolean comparison
export const BooleanDataType: TableDataType<boolean> = {
  compare: (a: boolean, b: boolean): SortComparisonResult => {
    if (a !== b) {
      return a ? 1 : -1;
    }
    return 0;
  },
  format(value: boolean): string | TemplateResult {
    return value.toString();
  },
  defaultSortDirection: "descending",
};

// for basic number comparison
export const NumberDataType: TableDataType<number> = {
  compare: (a: number, b: number): SortComparisonResult => {
    if (a === b) {
      return 0;
    }
    return a > b ? 1 : -1;
  },
  format(value: number): string | TemplateResult {
    return value.toFixed(0);
  },
  defaultSortDirection: "descending",
};

// for comparing and formatting dates
export const DateDataType: TableDataType<Date> = {
  compare: (a: Date, b: Date): SortComparisonResult => {
    return NumberDataType.compare?.(a.getTime(), b.getTime()) || 0;
  },
  format: formatDate,
  defaultSortDirection: "descending",
};

// for comparing and formatting numbers that represent bytes
export const BytesDataType: TableDataType<number> = {
  compare: NumberDataType.compare,
  format: humanBytes,
};

// will return a DataType that extends the given DataType to handle undefined values
export const UndefinedHelpers = <T>(
  dataType: TableDataType<T>,
): TableDataType<T | undefined> => {
  // if a compare function exists, extend it to handle potentially undefined inputs
  return {
    compare: dataType.compare
      ? (a: T | undefined, b: T | undefined) => {
          if (a && b) {
            return dataType.compare?.(a, b) || 0;
          } else if (a === b) {
            // both are undefined
            return 0;
          }
          // if a is defined, it's first, if not, b is defined and first
          return a ? 1 : -1;
        }
      : undefined,
    format(value: T | undefined): string | TemplateResult {
      return value ? dataType.format(value) : "–";
    },
  };
};

// quickly define a wrapper around an interface key, applying sorting / formatting rules from a given type
export const FromKey = <S, T>(
  targetDataType: TableDataType<S>,
  key: keyof T,
): TableDataType<T> => ({
  ...targetDataType,
  compare: (a: T, b: T) =>
    targetDataType.compare?.(a[key] as S, b[key] as S) || 0,
  format: (item: T) => targetDataType.format(item[key] as S),
});

// will return a DataType to have an undefined comparison function, turning sorting off for this data type
export const NonSortable = <T>(
  dataType: TableDataType<T>,
): TableDataType<T> => ({
  ...dataType,
  compare: undefined,
});

export interface TableRow<T> {
  data: T;
  // row-specific unique identifier
  id: string;
}
