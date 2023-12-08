"use client";
import { Accordion, AccordionItem, Chip } from "@nextui-org/react";

export default function Home() {
  const codilitySkills = [
    "Atlassian Suite",
    "MySQL",
    "ISO 27001 Standards",
    "SOC 2 Type 2 Standards",
    "React",
    "Node.js",
    "LangChain",
    "REST APIs",
    "Python",
  ];
  return (
    <main className="flex min-h-screen flex-col items-center  p-20">
      <div className="mt-2 block mb-5 font-bold">
        <h1>Professional Experience</h1>
      </div>

      <Accordion isCompact variant="shadow" selectionBehavior="replace">
        <AccordionItem
          key="1"
          subtitle="Details"
          aria-label="Accordion 1"
          title="Codility | Senior Solutions Engineer | September 2021-Present"
        >
          <div className="grid justify-items-center ">
            <h1 className="block mb-2">Skills Developed / Acquired</h1>
            <div className="flex flex-wrap gap-2">
              {codilitySkills.map((skill, index) => (
                <Chip color="primary" key={index} variant="flat" size="sm">
                  {skill}
                </Chip>
              ))}
            </div>
          </div>
        </AccordionItem>
        <AccordionItem
          key="2"
          subtitle="Details"
          aria-label="Accordion 2"
          title="Hired | Enterprise Account Manager | April 2019 - May 2021"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
          necessitatibus soluta quos similique explicabo rerum esse deserunt
          reiciendis at, facere quod adipisci animi perferendis sunt quibusdam
          corporis vero? Alias, suscipit?
        </AccordionItem>
        <AccordionItem
          key="3"
          subtitle="Details"
          aria-label="Accordion 3"
          title="Engtal | Client Relationship Manager | April 2018 - April 2019"
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam ipsam
          facere doloremque minima saepe molestiae fuga illo, perspiciatis
          voluptates repellat omnis sed modi reiciendis est accusantium eius
          explicabo nihil nostrum?
        </AccordionItem>
        <AccordionItem
          key="4"
          subtitle="Details"
          aria-label="Accordion 3"
          title="CareerBuilder | Major Account Executive | January 2016 - April 2018"
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam ipsam
          facere doloremque minima saepe molestiae fuga illo, perspiciatis
          voluptates repellat omnis sed modi reiciendis est accusantium eius
          explicabo nihil nostrum?
        </AccordionItem>
        <AccordionItem
          key="5"
          subtitle="Details"
          aria-label="Accordion 3"
          title="The Jacobson Group | National Territory Manager | March 2014 - January 2016"
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam ipsam
          facere doloremque minima saepe molestiae fuga illo, perspiciatis
          voluptates repellat omnis sed modi reiciendis est accusantium eius
          explicabo nihil nostrum?
        </AccordionItem>
        <AccordionItem
          key="6"
          subtitle="Details"
          aria-label="Accordion 3"
          title="CareerBuilder | Inside Sales Manager | July 2010 - March 2014"
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam ipsam
          facere doloremque minima saepe molestiae fuga illo, perspiciatis
          voluptates repellat omnis sed modi reiciendis est accusantium eius
          explicabo nihil nostrum?
        </AccordionItem>
      </Accordion>
    </main>
  );
}
