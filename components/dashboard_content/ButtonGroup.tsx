import React from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "../ui/button";

const ButtonGroup = () => {
  return (
    <div className="border rounded-md sm:w-[340px] w-[225px] divide-x">
      <Dialog>
        <DialogTrigger>
          <Button className="bg-white text-slate-600  hover:bg-slate-200 ">
            <p>
              <span className="hidden sm:block"> 12 months</span>
              <span className="block sm:hidden">12m</span>
            </p>
          </Button>
        </DialogTrigger>
        <DialogContent>No Data found!!!</DialogContent>
      </Dialog>
      <Dialog>
        <DialogTrigger>
          <Button className="bg-white text-slate-600  hover:bg-slate-200 ">
            <p>
              <span className="hidden sm:block">30 days</span>
              <span className="block sm:hidden">30d</span>
            </p>
          </Button>
        </DialogTrigger>
        <DialogContent>No Data found!!!</DialogContent>
      </Dialog>
      <Dialog>
        <DialogTrigger>
          <Button className="bg-white text-slate-600  hover:bg-slate-200 ">
            <p>
              <span className="hidden sm:block">7 days</span>
              <span className="block sm:hidden">7d</span>
            </p>
          </Button>
        </DialogTrigger>
        <DialogContent>No Data found!!!</DialogContent>
      </Dialog>
      <Dialog>
        <DialogTrigger>
          <Button className="bg-white text-slate-600  hover:bg-slate-200 ">
            <p>
              <span className="hidden sm:block">24 hours</span>
              <span className="block sm:hidden">24h</span>
            </p>
          </Button>
        </DialogTrigger>
        <DialogContent>No Data found!!!</DialogContent>
      </Dialog>
    </div>
  );
};

export default ButtonGroup;
