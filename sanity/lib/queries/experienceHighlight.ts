import { groq } from "next-sanity";
import { client } from "../client";

export async function getExperienceHighlight() {
  return client.fetch(
    groq`*[_type == "experienceHighlight"]{
      years,
      description
    }`
  );
}

export type EXPERIENCE_HIGHLIGHT_QUERYResult = Array<{
    _id: string;
    years: number,
    description: string
  }>;