const FALLBACK_SITE_URL = "http://localhost:3000";

function parseHttpUrl(value: string | undefined): string | undefined {
  const normalized = value?.trim();

  if (!normalized) {
    return undefined;
  }

  try {
    const url = new URL(normalized);
    return url.protocol === "http:" || url.protocol === "https:"
      ? url.toString().replace(/\/$/, "")
      : undefined;
  } catch {
    return undefined;
  }
}

export const publicConfig = {
  siteUrl: parseHttpUrl(process.env.NEXT_PUBLIC_SITE_URL) ?? FALLBACK_SITE_URL,
  steamUrl: parseHttpUrl(process.env.NEXT_PUBLIC_STEAM_URL),
  chatUrl: parseHttpUrl(process.env.NEXT_PUBLIC_CHAT_URL),
  webglUrl: parseHttpUrl(process.env.NEXT_PUBLIC_WEBGL_URL),
  apiBaseUrl: parseHttpUrl(process.env.NEXT_PUBLIC_API_BASE_URL),
} as const;

export type ExternalLinkKey = "steam" | "chat" | "webgl";

export function getExternalLink(key: ExternalLinkKey): string | undefined {
  const links = {
    steam: publicConfig.steamUrl,
    chat: publicConfig.chatUrl,
    webgl: publicConfig.webglUrl,
  };

  return links[key];
}
