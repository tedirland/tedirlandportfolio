"use client";
import { Accordion, AccordionItem } from "@nextui-org/react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Accordion>
        <AccordionItem
          key="1"
          aria-label="Accordion 1"
          title="Codility (2021-2023)"
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur,
          rerum amet. Quia et quisquam perspiciatis repellendus error recusandae
          iusto saepe suscipit reprehenderit. Ea perferendis id tenetur officiis
          unde numquam mollitia.
        </AccordionItem>
        <AccordionItem key="2" aria-label="Accordion 2" title="Hired">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
          necessitatibus soluta quos similique explicabo rerum esse deserunt
          reiciendis at, facere quod adipisci animi perferendis sunt quibusdam
          corporis vero? Alias, suscipit?
        </AccordionItem>
        <AccordionItem key="3" aria-label="Accordion 3" title="Accordion 3">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam ipsam
          facere doloremque minima saepe molestiae fuga illo, perspiciatis
          voluptates repellat omnis sed modi reiciendis est accusantium eius
          explicabo nihil nostrum?
        </AccordionItem>
      </Accordion>
    </main>
  );
}
