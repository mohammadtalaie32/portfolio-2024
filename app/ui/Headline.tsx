import { getHeadline } from "@/sanity/lib/client";
import { HEADLINE_QUERYResult } from "@/sanity/lib/queries/headline";
import { PortableText } from "next-sanity";
import Image from "next/image";
import Link from "next/link";

export default async function Headline() {
  const headline: HEADLINE_QUERYResult[] = await getHeadline();

  return (
    <main>
        {headline &&
          headline.map((data) => (
            <div key={data._id} className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl tracking-tight font-semibold sm:text-6xl mb-8 lg:leading-[4.7rem] max-w-[75%] lg:min-w-[700px]">
                    <PortableText value={data.headline} />
                </h1>
                {
                    data?.flags.map((value, index) => {
                        return <span className="flex w-max items-center gap-3 border-dashed border border-gray-600 bg-[#1B2226] rounded-3xl p-3 px-6">
                            <span class="relative flex h-3 w-3">
                                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-300 opacity-75"></span>
                                <span class="relative inline-flex rounded-full h-3 w-3 bg-green-300"></span>
                            </span>    
                            {value}
                        </span>
                    })
                }
              </div>
              <div className="flex items-center gap-x-6 my-10">
                <div className="relative rounded-l-full  border border-dashed border-gray-800">
                <Image
                    className="rounded-l-full  translate-x-4 scale-95 object-cover max-w-[20rem] max-h-[20rem] shadow-xl  bg-top bg-[#1d1d20]"
                    src={data.profileImage.image}
                    width={600}
                    height={400}
                    quality={100}
                    alt={data.profileImage.alt}
                  />
                </div>
              </div>
            </div>
          ))}
    </main>
  );
}