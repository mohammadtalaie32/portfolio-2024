import { getWorkExperience, WORK_EXPERIENCE_QUERYResult } from "@/sanity/lib/queries/workExperience";
import { portableTextComponents } from "@/sanity/utils/portableTextComponents";
import { PortableText } from "next-sanity";

export default async function ExperiencePage() {
  const workExperience: WORK_EXPERIENCE_QUERYResult[] = await getWorkExperience();

  console.log({workExperience});
  // return null;

  return (
    <div className="p-6 mx-auto space-y-12">
      {workExperience && workExperience.map((value, index) => (
        <div key={value._id} className="flex flex-col">
          <div className="flex items-start">
            {/* Date Range */}
            <p className="text-gray-300 min-w-[15rem]">
              {value.startDate} — {value.isCurrent ? "Present" : value.endDate}
            </p>
            <div className="flex flex-col">
              {/* Job Title and Company */}
              <div className="flex flex-col">
                <h2 className="text-lg font-semibold text-white">
                  {value.jobTitle} · {value.companyName}
                </h2>
                {value.location && (
                  <p className="text-sm text-gray-400">{value.location}</p>
                )}
              </div>
              <div className="mt-4">
                <PortableText value={value.description} components={portableTextComponents} />
              </div>

              {/* Technologies Used */}
              {value.technologiesUsed && (
                <div className="flex flex-wrap gap-2 mt-8">
                  {value.technologiesUsed.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium bg-gray-700 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>
            
          </div>
        </div>
      ))}
    </div>
  );
}
