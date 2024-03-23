// browser-related utility functions

export enum UserOperatingSystem {
  MAC = "MAC",
  WINDOWS = "WINDOWS",
  LINUX = "LINUX",
  OTHER = "OTHER",
}

export function getUserOS(): UserOperatingSystem {
  const userAgent = window.navigator.userAgent.toLowerCase();

  if (userAgent.includes("mac")) {
    return UserOperatingSystem.MAC;
  } else if (userAgent.includes("win")) {
    return UserOperatingSystem.WINDOWS;
  } else if (userAgent.includes("linux")) {
    return UserOperatingSystem.LINUX;
  } else {
    return UserOperatingSystem.OTHER;
  }
}
