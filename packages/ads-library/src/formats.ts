// map from binary exponents to the corresponding binary data volume unit suffix
const _EXP_UNITS = Object.fromEntries(
  ["Bytes", "KiB", "MiB", "GiB", "TiB", "PiB", "EiB", "ZiB", "YiB"].map(
    (unit, idx) => [idx * 10, unit],
  ),
);

/**
 * Gets a human-friendly representation of numBytes, expressed in binary units.
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

  const exp = Math.floor(Math.log2(Math.abs(numBytes)) / 10) * 10.0;
  const precision = exp > 0 ? 1 : 0;
  return `${(numBytes / Math.pow(2, exp)).toFixed(precision)} ${
    _EXP_UNITS[exp]
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
