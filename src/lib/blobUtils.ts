import { list } from "@vercel/blob";

let cachedBlobMap: Record<string, string> | null = null;
let lastFetchTime = 0;
const CACHE_DURATION_MS = 1000 * 60 * 60; // 1 hour

/**
 * Fetches all blobs from Vercel and maps their pathnames to their public URLs.
 * Results are cached in-memory for 1 hour to prevent excessive API calls.
 */
export async function getBlobMap(): Promise<Record<string, string>> {
  const now = Date.now();

  
  if ( cachedBlobMap && now - lastFetchTime < CACHE_DURATION_MS) {
    return cachedBlobMap;
  }

  try {
    const { blobs } = await list();
    const map: Record<string, string> = {};
    for (const blob of blobs) {
      map[`/${blob.pathname}`] = blob.url;
    }
    
    cachedBlobMap = map;
    lastFetchTime = now;
    return map;
  } catch (error) {
    console.error("Error fetching blobs:", error);
    // Return empty map on error to fallback to local paths
    return {};
  }
}

/**
 * Resolves a local asset path to its Vercel Blob URL if it exists.
 * Falls back to the local path if the blob isn't found.
 */
export async function getAssetUrl(localPath: string): Promise<string> {
  // morusu-logo.png is explicitly in the public folder per instructions
  if (localPath.includes("morusu-logo.png")) {
    return localPath;
  }

  const blobMap = await getBlobMap();
  return blobMap[localPath] || localPath;
}
