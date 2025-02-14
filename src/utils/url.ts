export function isValidRelativeUrl(urlString: string | null | undefined): boolean {
  try {
    return !!urlString && Boolean(new URL(urlString, document.baseURI));
  } catch {
    return false;
  }
}

export function isValidHttpsUrl(urlString: string | null | undefined): boolean {
  try {
    return !!urlString && Boolean(new URL(urlString)) && urlString.substring(0, 8) === 'https://';
  } catch {
    return false;
  }
}
