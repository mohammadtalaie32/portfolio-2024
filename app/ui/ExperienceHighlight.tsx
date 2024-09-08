import { EXPERIENCE_HIGHLIGHT_QUERYResult, getExperienceHighlight } from "@/sanity/lib/queries/experienceHighlight";
import { PortableTextReactComponents } from "next-sanity";

export const portableTextComponents: PortableTextReactComponents = {
  block: {
    // Custom renderer for normal paragraphs
    normal: ({ children }) => <p className="text-gray-400 mb-4">{children}</p>,
    strong: ({ children }) => <p className="text-gray-200 font-bold mb-4">{children}</p>,
    h1: ({ children }) => <h1 className="text-2xl font-bold text-gray-500 mb-4">{children}</h1>,
    h2: ({ children }) => <h2 className="text-xl font-semibold text-white mb-4">{children}</h2>,
    h3: ({ children }) => <h3 className="text-lg font-semibold text-white mb-4">{children}</h3>,
    h5: ({ children }) => <h3 className="text-lg font-semibold text-gray-300 tracking-wide mb-4">{children}</h3>,
  },
  list: {
    // Unordered list (for bullet points)
    bullet: ({ children }) => (
      <ul className="list-disc ml-5 text-gray-400 space-y-2 font-light">{children}</ul>
    ),
    // Ordered list (for numbered lists)
    number: ({ children }) => (
      <ol className="list-decimal ml-5 text-gray-300 space-y-2">{children}</ol>
    ),
  },
  listItem: {
    // Bullet point list item
    bullet: ({ children }) => <li className="mb-2">{children}</li>,
    // Numbered list item
    number: ({ children }) => <li className="mb-2">{children}</li>,
  },
  p: {
    strong: ({ children }) => <strong className="font-bold"></strong>,
  }
};

export default async function ExperienceHighlight() {
  const experience: EXPERIENCE_HIGHLIGHT_QUERYResult = await getExperienceHighlight();
  const entity = experience?.length > 0 ? experience[0] : null;

  if (entity) { 
    return (
        <div className="flex justify-between items-center space-x-8 p-8">
          {/* Years of Experience */}
          <div className="flex flex-col  min-w-[10rem]">
            <h1 className="text-8xl font-bold text-white">
              {entity?.years}+
            </h1>
            <p className="text-gray-300">Years of Experience</p>
          </div>
          
          {/* Description */}
          <p className="text-4xl text-justify font-semibold leading-[3rem] text-white ">
            {entity?.description}
          </p>
        </div>
      );
  }
  return null;
}
