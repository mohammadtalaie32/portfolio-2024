import { defineQuery, groq, PortableTextBlock } from "next-sanity";
import { client } from "../client";

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
    );
  }

export type HEADLINE_QUERYResult = Array<{
    _id: string;
    headline: PortableTextBlock[],
    profileImage: {
        alt: string,
        image: string
    },
    resumeURL: string,
    socialLinks: string[],
    flags: string[],
  }>;