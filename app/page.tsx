import Headline from "./ui/Headline";
import Service from "./ui/Service";
import ExperienceHighlight from "./ui/ExperienceHighlight";

export default function Home() {
  return (
    <section className="flex flex-col  space-y-12">
      <Headline />
      <Service />
      <ExperienceHighlight />
    </section>
  );
}
