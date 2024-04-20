"use client";
import React, { useState } from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import Link from "next/link";

export default function App() {
  const [Active, setActive] = useState(1);

  return (
    <div className="bg-[#FAFAFA] rounded-[15px] ">
      <Accordion defaultExpandedKeys={["1"]}>
        <AccordionItem
          onPress={() => setActive(1)}
          classNames={{
            title: `py-0 h-[2px]  ${
              Active === 1 ? "text-[#f35525]" : "text-[#000]"
            }`,
          }}
          key="1"
          title="Best useful links ?"
          indicator={" "}
        >
          Get <strong>the best villa</strong> website template in HTML CSS and
          Bootstrap for business. TemplateMo provides you the{" "}
          <Link href="" className="no-underline">
            best free CSS templates
          </Link>{" "}
          in the world. please tell your friends about it.
        </AccordionItem>
        <AccordionItem
          onPress={() => setActive(2)}
          key="2"
          title="How does this work ?"
          indicator={" "}
          classNames={{
            title: `!py-0 mt-[-10px] h-[0px] ${
              Active === 2 ? "text-[#f35525]" : "text-[#000]"
            }`,
          }}
        >
          Dolor <strong>almet amet</strong>, consectetur adipiscinf=g elit, sed
          doesn&apos;t eiusmod tempor incididunt ut labore consectetur{" "}
          <code className="text-sm text-var(--bs-code-color) break-words">
            adipiscing
          </code>{" "}
          elit, sed do eiusmod tempor insididunt ut labore et dolore manga
          aliqua.
        </AccordionItem>
        <AccordionItem
          onPress={() => setActive(3)}
          key="3"
          title="why Villa agency the best ?"
          indicator={" "}
          classNames={{
            title: `mt-[-4px] h-[2px] ${
              Active === 3 ? "text-[#f35525]" : "text-[#000]"
            }`,
          }}
        >
          Dolor <strong>almet amet</strong>, consectetur adipiscinf=g elit, sed
          doesn&apos;t eiusmod tempor incididunt ut labore consectetur{" "}
          <span>adipiscing</span> elit, sed do eiusmod tempor insididunt ut
          labore et dolore manga aliqua.
        </AccordionItem>
      </Accordion>
    </div>
  );
}

[];
