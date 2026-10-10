import { list } from "@vercel/blob";
import { NextResponse } from "next/server";

export const revalidate = 3600; // Cache for 1 hour

export async function GET() {
  try {
    const { blobs } = await list();
    
    // Create a map of original local path -> Vercel Blob URL
    // e.g., "/images/hero1.png" -> "https://ijxvwstfnhjz7yll.public.blob.vercel-storage.com/images/hero1-xxxx.png"
    const blobMap = blobs.reduce((acc, blob) => {
      // Vercel blob pathnames don't have leading slash, so we add it to match our local paths
      acc[`/${blob.pathname}`] = blob.url;
      return acc;
    }, {} as Record<string, string>);

    return NextResponse.json(blobMap);
  } catch (error) {
    console.error("Failed to fetch blobs from Vercel:", error);
    return NextResponse.json({ error: "Failed to fetch blobs" }, { status: 500 });
  }
}
