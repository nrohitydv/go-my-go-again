"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Plus, Trash2 } from "lucide-react";
import { addChecklist, removeChecklist } from "../lib/store/checklist-slice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { RootState } from "../lib/store/index";
import { Checkbox } from "@/components/ui/checkbox";

interface ChecklistItemProps {
  initialChecklist?: Checklist[];
}

interface Checklist {
  checklistId: string;
  title: string;
}

const ChecklistItem: React.FC<ChecklistItemProps> = () => {
  const [title, setTitle] = useState("");
  const dispatch = useAppDispatch();
  const checklistItems = useAppSelector(
    (state: RootState) => state.checklist.checklist
  );

  const checklistAdder = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newItem: Checklist = {
      checklistId: crypto.randomUUID(),
      title,
    };
    dispatch(addChecklist(newItem));
    setTitle("");
  };
  const checklistRemover = (id: string) => {
    dispatch(removeChecklist(id));
  };

  return (
    <div className="">
      <p className="text-sm/md text-slate-600">Checklist</p>

      <ul>
        {checklistItems.map((item) => (
          <li
            key={item.checklistId}
            className="flex justify-between items-center"
          >
            <p className="text-sm text-slate-500 ml-[20px] inline-flex gap-3 ">
              <Checkbox className="rounded-md border-slate-400 data-[state=checked]:bg-white data-[state=checked]:text-blue-600" />
              {item.title}
            </p>

            <Button
              className="bg-white text-slate-400 text-sm hover:bg-white"
              onClick={() => checklistRemover(item.checklistId)}
            >
              <Trash2 />
            </Button>
          </li>
        ))}
      </ul>
      <Dialog>
        <DialogTrigger>
          <Button className="text-blue-700 bg-white hover:bg-white items-center gap-2 p-0">
            <Plus size={15} /> Add checklist item
          </Button>
        </DialogTrigger>
        <DialogContent>
          <form onSubmit={checklistAdder}>
            <Input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <DialogClose asChild>
              {title ? (
                <Button
                  className="bg-blue-700 text-white hover:bg-blue-600 mt-2 w-full"
                  type="submit"
                >
                  Add
                </Button>
              ) : (
                <Button className="w-full bg-red-500 text-white hover:bg-red-400 mt-2 ">
                  close
                </Button>
              )}
            </DialogClose>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ChecklistItem;
