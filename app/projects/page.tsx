"use client";
import React, { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { Textarea } from "@/components/ui/textarea";
import { Plus, X } from "lucide-react";
import { Separator } from "@radix-ui/react-separator";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  title: z.string().min(2, {
    message: "Title required!!!",
  }),
  description: z.string().min(10, { message: "Description required!!!" }),
  team: z.string().min(2, { message: "Team member name required!!!" }),
  startDate: z.string().min(2, { message: "Start date required!!!" }),
  endDate: z.string().min(2, { message: "End date required!!!" }),
});

export interface Project {
  id: string;
  title: string;
  description: string;
  team: string;
  startDate: string;
  endDate: string;
}

const ProjectsPage: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const [projectList, setProjectList] = useState<Project[]>(() => {
    const localValue = localStorage.getItem("ITEMS");
    if (localValue === null) return [];
    return JSON.parse(localValue);
  });

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(projectList));
  }, [projectList]);

  const handleAddProject = (data: z.infer<typeof formSchema>) => {
    const newProject = {
      id: crypto.randomUUID(),
      ...data,
    };
    const updatedProjectList = [...projectList, newProject];
    setProjectList(updatedProjectList);
    reset();
    toast({
      description: <p>Form submitted successfully!!!</p>,
    });
  };

  const handleDeleteProject = (id: string) => {
    const updatedProjectList = projectList.filter(
      (project) => project.id !== id
    );
    setProjectList(updatedProjectList);
  };

  return (
    <div className="flex justify-center items-center p-6 w-[600px] h-full border rounded-md ml-[200px]">
      <div className="space-y-6 max-w-2xl w-full">
        <h1 className="font-bold text-2xl mb-4">Projects List</h1>

        <ul className="space-y-4">
          {projectList.length === 0 && "No projects found!!!"}
          {projectList.map((project) => (
            <li key={project.id} className="border p-4 rounded-md shadow-md">
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-semibold text-lg text-gray-800">
                    {project.title}
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    {project.description}
                  </p>
                  <p className="text-sm/md text-blue-400 mt-1">
                    <span className="text-slate-400 text-sm/md">Team</span> :{" "}
                    {project.team}
                  </p>
                  <div className="flex gap-[20px]">
                    <div className="flex gap-4">
                      <p className="text-sm text-slate-500 mt-1">
                        Start Date: {project.startDate}
                      </p>
                      <Separator orientation="vertical" className="border" />
                      <p className="text-sm text-slate-500  mt-1">
                        End Date: {project.endDate}
                      </p>
                    </div>
                    <Button className="text-white bg-blue-400 hover:bg-blue-300 px-1 py-1 h-5 mt-1">
                      <p className="mt-0  p-0">More Details</p>
                    </Button>
                  </div>
                </div>
                <Button
                  className="bg-white text-slate-600 hover:bg-white"
                  onClick={() => handleDeleteProject(project.id)}
                >
                  <X />
                </Button>
              </div>
            </li>
          ))}
        </ul>
        <Dialog>
          <DialogTrigger className="ml-[500px]">
            <Button className="bg-blue-500 text-white hover:bg-blue-600 border py-2 px-2 rounded-xl">
              <Plus />
            </Button>
          </DialogTrigger>
          <DialogContent className="space-y-4 p-6 rounded-lg">
            <form
              onSubmit={handleSubmit(handleAddProject)}
              className="space-y-4"
            >
              <div>
                <Label htmlFor="title" className="block mb-1 text-gray-700">
                  Title
                </Label>
                <Input
                  type="text"
                  id="title"
                  className="w-full border rounded-md p-2"
                  {...register("title")}
                />
                {errors.title && (
                  <p className="text-red-500">{errors.title.message}</p>
                )}
              </div>
              <div>
                <Label
                  htmlFor="description"
                  className="block mb-1 text-gray-700"
                >
                  Description
                </Label>
                <Textarea
                  id="description"
                  className="w-full border rounded-md p-2"
                  {...register("description")}
                />
                {errors.description && (
                  <p className="text-red-500">{errors.description.message}</p>
                )}
              </div>
              <div className="">
                <Label htmlFor="team" className="block mb-1 text-gray-700">
                  Team
                </Label>
                <Input
                  type="text"
                  id="team"
                  className="w-full border rounded-md p-2"
                  {...register("team")}
                />
                {errors.team && (
                  <p className="text-red-500">{errors.team.message}</p>
                )}
              </div>
              <div>
                <Label htmlFor="startDate" className="block mb-1 text-gray-700">
                  Start Date
                </Label>
                <Input
                  type="date"
                  id="startDate"
                  className="w-full border rounded-md p-2"
                  {...register("startDate")}
                />
                {errors.startDate && (
                  <p className="text-red-500">{errors.startDate.message}</p>
                )}
              </div>
              <div>
                <Label htmlFor="endDate" className="block mb-1 text-gray-700">
                  End Date
                </Label>
                <Input
                  type="date"
                  id="endDate"
                  className="w-full border rounded-md p-2"
                  {...register("endDate")}
                />
                {errors.endDate && (
                  <p className="text-red-500">{errors.endDate.message}</p>
                )}
              </div>
              <Button
                type="submit"
                className="w-full bg-blue-500 text-white hover:bg-blue-600 py-2 px-4 rounded-md"
              >
                Submit
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default ProjectsPage;
