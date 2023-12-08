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
    "OpenAI",
    "REST APIs",
    "Python",
  ];
  return (
    <main className="flex flex-auto  flex-col items-center pt-3 p-20">
      <div className="mt-2 block mb-5 font-bold">
        <h1>Professional Experience</h1>
      </div>

      <Accordion
        className="flex-auto"
        variant="shadow"
        selectionBehavior="replace"
      >
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, ipsam
          fuga? Sint minus laboriosam fugiat ducimus aut ipsum, quaerat maiores
          suscipit, ab tempore accusamus, nostrum nam quo esse eaque quibusdam.
          Eveniet reprehenderit mollitia illo id tempore laudantium veniam, at
          possimus omnis quae officiis assumenda. Tempora eaque, aliquam
          accusamus magnam assumenda temporibus facilis molestiae consectetur
          debitis recusandae repudiandae, saepe iste commodi! Voluptas debitis,
          quo illo voluptatem perspiciatis vero voluptatum nulla rem eaque
          ratione vel obcaecati aliquid maxime non dicta. Cum, porro dolore. Sit
          alias eligendi, eveniet error atque ea velit porro? Iure
          necessitatibus harum quod quidem laborum praesentium omnis mollitia
          soluta ducimus, ex eligendi assumenda. Commodi vel ratione facere
          incidunt quo officiis cum ad quod, sapiente modi nobis, eveniet
          inventore reprehenderit! Suscipit quibusdam at obcaecati? Officia
          voluptate necessitatibus nemo ratione inventore quam unde error sint
          saepe totam harum laudantium fuga, ipsam quaerat at tempora blanditiis
          minus aspernatur deleniti itaque maiores? Vel? Soluta tenetur nam
          quis, veritatis molestiae exercitationem laudantium repellat
          voluptatum ab. Eaque velit laborum aperiam accusantium culpa
          recusandae ullam harum est quaerat sed reprehenderit accusamus id, sit
          similique et corrupti! Reiciendis in voluptas dicta commodi a
          necessitatibus maiores vero temporibus perferendis minus officiis
          blanditiis, dolor iusto similique possimus inventore accusantium. Sint
          ea libero consequatur perferendis dicta! Libero qui voluptate harum?
          Dolor error omnis incidunt ipsam aspernatur, porro, architecto
          quisquam fugiat corporis tempore, assumenda numquam repellendus
          voluptatibus id facilis odit nisi. Nam ad laudantium, temporibus a
          consequatur soluta ab in vero. Quibusdam soluta facilis voluptate nemo
          sint modi saepe expedita porro, sapiente voluptates, numquam id
          laudantium, vel voluptatem labore libero aliquid. Accusantium
          asperiores, in cupiditate fugiat cumque est assumenda! Quis, magni.
          Beatae alias quisquam neque ut inventore officiis, vitae,
          reprehenderit laborum, corporis voluptates amet placeat iusto eos
          ullam odit dolorum labore provident! Laboriosam amet accusantium
          facere blanditiis inventore sequi omnis natus?
        </AccordionItem>
      </Accordion>
    </main>
  );
}
