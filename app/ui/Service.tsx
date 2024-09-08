import { getHeadline } from "@/sanity/lib/client";
import { HEADLINE_QUERYResult } from "@/sanity/lib/queries/headline";
import { getServices, SERVICES_QUERYResult } from "@/sanity/lib/queries/service";
import { PortableText } from "next-sanity";
import Image from "next/image";
import Link from "next/link";

export default async function Service() {
  const services: SERVICES_QUERYResult[] = await getServices();

  return (
    <main className="grid grid-cols-3 gap-8">
       {services.map((service) => (
        <div key={service._id} className="bg-[#2C3943] p-12 rounded-3xl text-white">
          <div className="flex items-center gap-5">
            <Image src={service?.icon} alt={service?.title} width={50} height={50} />
            <h3 className="text-xl font-bold text-gray-200">{service.title}</h3>
          </div>
          <p className="mt-6 text-justify leading-8 text-gray-300">{service.description}</p>
        </div>
      ))}
    </main>
  );
}