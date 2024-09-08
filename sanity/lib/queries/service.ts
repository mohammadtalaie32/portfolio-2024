import { defineQuery, groq } from "next-sanity";
import { client } from "../client";

// Fetch services from Sanity
export async function getServices() {
  return client.fetch(
    groq`*[_type == "services"]{
      _id,
      title,
      description,
      icon
    }`, 
    {}, 
    { cache: 'no-cache' }
  );
}

// Define the TypeScript type for services
export type SERVICES_QUERYResult = Array<{
  _id: string;
  title: string;
  description: string;
  icon: string; // Assuming the icon is a string (URL or class)
}>;
