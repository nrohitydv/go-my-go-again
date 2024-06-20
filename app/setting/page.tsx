"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { toast } from "@/components/ui/use-toast";
import React, { FormEvent } from "react";
const SettingPage = () => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    toast({
      description: "Changes are made!!!",
    });
  };
  return (
    <div className=" w-[600px] p-[100px] border ml-[200px] rounded-md">
      <h2 className="text-2xl font-bold mb-4">Setting</h2>

      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-sm/md text-slate-500">
            Change username?
          </AccordionTrigger>
          <AccordionContent className="flex ">
            <Input type="text" placeholder="Enter username" />
            <Button
              onClick={handleSubmit}
              className=" bg-blue-500 text-white hover:bg-blue-600 ml-2"
            >
              Save
            </Button>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="text-sm/md text-slate-500">
            Change email?
          </AccordionTrigger>
          <AccordionContent className="flex ">
            <Input type="email" placeholder="Enter email" />
            <Button
              onClick={handleSubmit}
              className=" bg-blue-500 text-white hover:bg-blue-600 ml-2"
            >
              Save
            </Button>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="text-sm/md text-slate-500">
            Change password?
          </AccordionTrigger>
          <AccordionContent className="flex ">
            <Input type="password" placeholder="Enter password" />
            <Button
              onClick={handleSubmit}
              className=" bg-blue-500 text-white hover:bg-blue-600 ml-2"
            >
              Save
            </Button>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default SettingPage;
