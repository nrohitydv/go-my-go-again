"use client";
import React from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Plus, PlusIcon } from "lucide-react";
import { useDispatch } from "react-redux";
import { checklistAction } from "@/store/checklist-slice";

const ChecklistItem = (props: { checklist: { id: string; title: string } }) => {
  const dispatch = useDispatch();
  const { id, title } = props.checklist;
  const checklistAdder = () => {
    dispatch(checklistAction.addChecklist({ id, title }));
  };
  return (
    <div className="">
      <p className="text-sm/md text-slate-600">Checklist</p>
      <p>{title}</p>
      <Dialog>
        <DialogTrigger>
          <Button className="text-blue-700 bg-white hover:bg-white items-center gap-2 p-0">
            <Plus size={15} /> Add checklist item
          </Button>
        </DialogTrigger>
        <DialogContent>
          <form onSubmit={checklistAdder}>
            <Input type="text" required />
            <Button
              className="bg-blue-700 text-white hover:bg-blue-600 mt-2 ml-[400px]"
              type="submit"
            >
              <PlusIcon />
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ChecklistItem;
