
import "server-only";

import { createClient, groq, QueryOptions, type QueryParams } from "next-sanity";
import { draftMode } from "next/headers";

import { apiVersion, dataset, projectId } from "../env";
import { token } from "./token";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // Set to false if statically generating pages, using ISR or tag-based revalidation
  stega: {
    studioUrl: "/studio",
  },
})


export async function sanityFetch<const QueryString extends string>({
  query,
  params = {},
  revalidate = 0, // default revalidation time in seconds
  tags = [],
}: {
  query: QueryString;
  params?: QueryParams;
  revalidate?: number | false;
  tags?: string[];
}) {
  const isDraftMode = draftMode().isEnabled;

  if (isDraftMode && !token) {
    throw new Error("Missing environment variable SANITY_API_READ_TOKEN");
  }

  const queryOptions: QueryOptions = {};
  let maybeRevalidate = revalidate;

  if (isDraftMode) {
    queryOptions.token = token;
    queryOptions.perspective = "previewDrafts";
    queryOptions.stega = true;

    maybeRevalidate = 0; // Do not cache in Draft Mode
  } else if (tags.length) {
    maybeRevalidate = false; // Cache indefinitely if tags supplied
  }
  
  return client.fetch(query, params, {
    ...queryOptions,
    next: {
      revalidate: maybeRevalidate,
      tags,
    },
  });
}

export async function getHeadline() {
  return client.fetch(
    groq`*[_type == "headline"]{
      _id,
      headline,
      profileImage {alt, "image": asset->url},
      "resumeURL": resumeURL.asset->url,
      socialLinks,
      flags
    }`
  , {}, {cache: 'no-store'});
}