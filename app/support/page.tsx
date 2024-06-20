"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import React, { FormEvent, useState } from "react";

const SupportPage = () => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    toast({
      description: "Thank you for your feedback",
    });
  };

  return (
    <div className=" w-[600px] p-[100px] border ml-[200px] rounded-md">
      <form onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold mb-4">Support</h2>
        <Label htmlFor="email" className="font-bold text-slate-600">
          Your email:
        </Label>
        <Input type="email" id="email" name="email" required />
        <Label htmlFor="problem" className="font-bold text-slate-600">
          Brief about Problem:
        </Label>
        <Textarea id="problem" required className="" />
        <Button
          className="w-full bg-blue-500 text-white hover:bg-blue-600 py-2 px-4 rounded-md mt-[20px]"
          type="submit"
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default SupportPage;
