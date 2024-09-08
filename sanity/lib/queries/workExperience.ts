import { defineQuery, groq, PortableTextBlock } from "next-sanity";
import { client } from "../client";
  export async function getWorkExperience() {
    return client.fetch(
      groq`*[_type == "workExperience"]{
        _id,
        jobTitle,
        companyName,
        location,
        startDate,
        endDate,
        isCurrent,
        description,
        technologiesUsed
      }`
    , {}, {cache: 'no-cache'});
  }
  export type WORK_EXPERIENCE_QUERYResult = Array<{
    _id: string;
    jobTitle: string;
    companyName: string;
    location?: string; 
    startDate: string;
    endDate?: string; 
    isCurrent: boolean;
    description: PortableTextBlock[];  
    technologiesUsed: string[];
  }>;
