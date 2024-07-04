"use client";
import SearchField from "@/components/SearchField";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Card, CardContent } from "@/components/ui/card";
import { useAppSelector } from "@/lib/hooks";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { projectDetails, projectsProps } from "@/constants";
import { CalendarDays, Clock, EllipsisVertical, MoveRight } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

import { Separator } from "@/components/ui/separator";
import ChecklistItem from "./ChecklistItem";
import CommentPage from "./CommentPage";
import { RootState } from "@/lib/store";
import ProjectAdder from "./ProjectAdder";

const ProjectComponent = () => {
  const [showProject, setShowProject] = useState(projectDetails[0]);
  const handleShowProject = (project: projectsProps) => {
    setShowProject(project);
  };
  const commentList = useAppSelector(
    (state: RootState) => state.comment.comments
  );
  const calculateDaysLeft = (endDate: Date): number => {
    const currentDate = new Date();
    const end = new Date(endDate);
    const timeDifference = end.getTime() - currentDate.getTime();
    const daysLeft = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
    return daysLeft > 0 ? daysLeft : 0;
  };

  return (
    <div className="flex sm:flex-row flex-col">
      <ul className="sm:w-[300px] w-full sm:border-r">
        <div className="p-3">
          <SearchField />
        </div>
        {/* <ProjectPageView /> */}
        <div className="">
          {projectDetails.map((project) => (
            <li
              key={project.ProjectName}
              className="border-b p-2 space-y-3 cursor-pointer"
              onClick={() => handleShowProject(project)}
            >
              <div className="flex space-x-2">
                <Image src={project.logo} alt="" height={40} width={40} />
                <div className="">
                  <h2 className="text-sm/md text-slate-800">
                    {project.ProjectName}
                  </h2>
                  <p className="text-sm text-slate-500">
                    {project.CompanyName}
                  </p>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex space-x-1 ">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <Avatar>
                          <AvatarImage src="/Avatar (1).png" alt="" />
                        </Avatar>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Designer</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <Avatar>
                          <AvatarImage src="/Avatar (2).png" alt="" />
                        </Avatar>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Devloper</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>

                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <Avatar>
                          <AvatarImage src="/Avatar (3).png" alt="" />
                        </Avatar>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Tester</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
                <p className="text-sm text-slate-500 bg-slate-200 p-1 flex items-center gap-1 rounded-md">
                  <Clock size={15} />
                  {calculateDaysLeft(project.EndDate)} days left
                </p>
              </div>
            </li>
          ))}
        </div>
        <div className="">
          <ProjectAdder />
        </div>
      </ul>

      <div>
        <Card className="h-full sm:w-[550px] w-full p-2 sm:border-l-0 pt-3 sm:border-t-0 sm:border-r border-r-0  ">
          <CardContent className="space-y-5">
            <div className="flex justify-between">
              <div className="flex space-x-2">
                <Image src={showProject.logo} alt="" height={40} width={40} />
                <div className="">
                  <h2 className="text-sm text-slate-800">
                    {showProject.ProjectName}
                  </h2>
                  <p className="text-sm text-slate-500">
                    {showProject.CompanyName}
                  </p>
                </div>
              </div>
              <EllipsisVertical />
            </div>
            <div className="space-y-3">
              <p className="text-sm text-slate-700">Details</p>
              <div className="flex justify-between">
                <div className="flex items-center space-x-2">
                  <div className=" bg-green-200">
                    <p className="text-sm/md">$</p>
                  </div>
                  <div className="">
                    <p className="text-slate-500 text-sm">Budget</p>
                    <p className="text-sm text-slate-700">
                      {showProject.Budget}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className=" bg-blue-200">
                    <p className="text-sm/md">
                      <CalendarDays size={15} />
                    </p>
                  </div>
                  <div className="">
                    <p className="text-slate-500 text-sm">Start Date</p>
                    <p className="text-sm text-slate-700">
                      {showProject.StartDate.toLocaleDateString("en-CA")}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className=" bg-orange-200">
                    <p className="text-sm/md">
                      <CalendarDays size={15} />
                    </p>
                  </div>
                  <div className="">
                    <p className="text-slate-500 text-sm">End Date</p>
                    <p className="text-sm text-slate-700">
                      {showProject.EndDate.toLocaleDateString("en-CA")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-sm text-slate-500">{showProject.Description}</p>
            <ChecklistItem />

            <div className="">
              <p className="text-sm/md text-slate-600">Comments</p>
              <ul className="p-2">
                {commentList.map((c) => (
                  <li key={c.id} className="p-1">
                    <p className="text-sm text-slate-600 inline-flex items-center gap-2">
                      <MoveRight />
                      {c.comment}
                    </p>
                  </li>
                ))}
              </ul>

              <Separator orientation="horizontal" />
              <CommentPage />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ProjectComponent;
