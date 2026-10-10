"use client";

import React, { createContext, useContext } from 'react';

const BlobContext = createContext<Record<string, string>>({});

export function BlobProvider({ blobMap, children }: { blobMap: Record<string, string>, children: React.ReactNode }) {
  return <BlobContext.Provider value={blobMap}>{children}</BlobContext.Provider>;
}

export function useBlobUrl(localPath: string | undefined | null): string | undefined {
  const map = useContext(BlobContext);
  if (!localPath) return undefined;
  if (localPath.includes('morusu-logo.png')) return localPath; // Keep local per user request
  
  // Clean up the path to match the map keys (e.g. ensure leading slash)
  const normalizedPath = localPath.startsWith('/') ? localPath : `/${localPath}`;
  return map[normalizedPath] || localPath;
}
