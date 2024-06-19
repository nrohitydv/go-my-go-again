"use client";
import React, { useState } from "react";
import Image from "next/image";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import { RxCross1 } from "react-icons/rx";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import { LogOut, MoveRight } from "lucide-react";
const NavFooter = () => {
  const [isCardVisible, setIsCardVisible] = useState(true);

  const handleDismiss = () => {
    setIsCardVisible(false);
  };

  const handleShow = () => {
    setIsCardVisible(true);
  };
  return (
    <div>
      <div>
        {/* <Card className="w-[260px]">
        <CardHeader>
          <CardTitle className="text-md flex justify-between cursor-pointer">
            <p className="text">New Features available</p>
            <Popover>
              <PopoverTrigger>
                <p className="text-slate-700">
                  <RxCross1 />
                </p>
              </PopoverTrigger>
              <PopoverContent>
                <p className="text-sm text-slate-600">
                  Are you sure want to cancel?
                </p>
                <div className="space-x-2">
                  <Button className="bg-white text-slate-600 hover:text-blue-700 hover:bg-white hover:underline">
                    Yes
                  </Button>
                  <Button className="bg-white text-slate-600 hover:text-blue-700 hover:bg-white hover:underline ">
                    No
                  </Button>
                </div>
              </PopoverContent>
            </Popover>
          </CardTitle>
          <CardDescription>
            Checkout new dashboard view. Pages now load faster.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Image src="/nav-image.png" alt="" height={136} width={216} />
        </CardContent>
        <CardFooter>
          <div className="flex space-x-4">
            <p className="text-slate-700 font-bold cursor-pointer">Dismiss</p>
            <p className="text-purple-600 font-bold cursor-pointer">
              What&apos;s new?
            </p>
          </div>
        </CardFooter>
      </Card> */}
        {isCardVisible && (
          <Card className="w-[260px]">
            <CardHeader>
              <CardTitle className="text-md flex justify-between cursor-pointer">
                <p className="text">New Features available</p>

                <p className="text-slate-700" onClick={handleDismiss}>
                  <RxCross1 />
                </p>
              </CardTitle>
              <CardDescription>
                Checkout new dashboard view. Pages now load faster.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Image src="/nav-image.png" alt="" height={136} width={216} />
            </CardContent>
            <CardFooter>
              <div className="flex space-x-4">
                <p
                  className="text-slate-700 font-bold cursor-pointer"
                  onClick={handleDismiss}
                >
                  Dismiss
                </p>
                <p className="text-purple-600 font-bold cursor-pointer">
                  What&apos;s new?
                </p>
              </div>
            </CardFooter>
          </Card>
        )}

        {!isCardVisible && (
          <p
            className="font-sm text-slate-600 cursor-pointer hover:text-blue-600 inline-flex gap-2"
            onClick={handleShow}
          >
            Show Updates <MoveRight />
          </p>
        )}
      </div>

      <Separator orientation="horizontal" />
      <div className="flex justify-around mt-2">
        <div className="flex items-center justify-center space-x-2">
          <div className="">
            <Avatar>
              <AvatarImage src="/Avatar.png" alt="@shadcn" />
            </Avatar>
          </div>
          <div className="">
            <h3 className="text-slate-600 font-bold">Olivia Rhye</h3>
            <p className="text-slate-600">olivai@untitledui.com</p>
          </div>
        </div>

        <div className="cursor-pointer">
          <Popover>
            <PopoverTrigger>
              <LogOut />
            </PopoverTrigger>
            <PopoverContent>
              <p className="text-sm text-slate-600">
                Are you sure want to log out?
              </p>
              <div className="space-x-2">
                <Button className="bg-white text-slate-600 hover:text-blue-700 hover:bg-white hover:underline">
                  Yes
                </Button>
                <Button className="bg-white text-slate-600 hover:text-blue-700 hover:bg-white hover:underline ">
                  No
                </Button>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </div>
  );
};

export default NavFooter;
