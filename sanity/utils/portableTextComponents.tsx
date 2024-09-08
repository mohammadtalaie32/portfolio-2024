import { PortableTextReactComponents } from "next-sanity"

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