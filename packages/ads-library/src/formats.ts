// map from binary exponents to the corresponding binary data volume unit suffix
// 10x multiplier comes from SI units for each 2^10.
const _EXP_UNITS_BINARY = Object.fromEntries(
  ["Bytes", "KiB", "MiB", "GiB", "TiB", "PiB", "EiB", "ZiB", "YiB"].map(
    (unit, idx) => [idx * 10, unit],
  ),
);

// map from base-10 exponents to the corresponding binary data volume unit suffix.
// 3x multiplier comes from SI units for each 10^3.
const _EXP_UNITS_BASE_10 = Object.fromEntries(
  ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"].map((unit, idx) => [
    idx * 3,
    unit,
  ]),
);

/**
 * Gets a human-friendly representation of numBytes, expressed in binary units.
 *
 * @param numBytes whole number expressing the count of bytes to represent
 * @return the formatted friendly representation of the number of bytes
 */
export function humanBytesBase2(numBytes: number): string {
  switch (numBytes) {
    case -1:
      return "-1 Byte";
    case 0:
      return "0 Bytes";
    case 1:
      return "1 Byte";
  }

  // log 2, exponent 10, for units that change every 2^10
  const exp = Math.floor(Math.log2(Math.abs(numBytes)) / 10) * 10.0;
  const precision = exp > 0 ? 1 : 0;
  return `${(numBytes / Math.pow(2, exp)).toFixed(precision)} ${
    _EXP_UNITS_BINARY[exp]
  }`;
}

/**
 * Gets a human-friendly representation of numBytes, expressed in base-10 units.
 *
 * @param numBytes whole number expressing the count of bytes to represent
 * @return the formatted friendly representation of the number of bytes
 */
export function humanBytes(numBytes: number): string {
  switch (numBytes) {
    case -1:
      return "-1 Byte";
    case 0:
      return "0 Bytes";
    case 1:
      return "1 Byte";
  }

  // log 10, exponent 3, for units that change every 10^3
  const exp = Math.floor(Math.log10(Math.abs(numBytes)) / 3) * 3.0;
  const precision = exp > 0 ? 2 : 0;
  return `${(numBytes / Math.pow(10, exp)).toFixed(precision)} ${
    _EXP_UNITS_BASE_10[exp]
  }`;
}

function isoStringToDateString(
  timestamp: string | Date,
  includeTime = false,
): string {
  const dayConfig: Intl.DateTimeFormatOptions = {
    month: "short",
    day: "numeric",
    year: "numeric",
  };
  const timeConfig: Intl.DateTimeFormatOptions = {
    hour: "numeric",
    minute: "2-digit",
    timeZoneName: "short",
  };
  return includeTime
    ? new Date(timestamp).toLocaleTimeString(navigator.language, {
        ...dayConfig,
        ...timeConfig,
      })
    : new Date(timestamp).toLocaleDateString(navigator.language, dayConfig);
}

export function formatDate(date: Date | string, includeTime = true): string {
  const _formattedDate = isoStringToDateString(date, includeTime);
  return _formattedDate === "Invalid Date" ? "" : _formattedDate;
}
