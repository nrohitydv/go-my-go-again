"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Trash2 } from "lucide-react";

interface Project {
  id: string;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
}

const ProjectsPage: React.FC = () => {
  //Omit in newProject is to store new project without id
  const [newProject, setNewProject] = useState<Omit<Project, "id">>({
    title: "",
    description: "",
    startDate: "",
    endDate: "",
  });
  const [projectList, setProjectList] = useState<Project[]>([]);

  const handleAddProject = (e: FormEvent) => {
    e.preventDefault();
    setProjectList((currentProjects) => [
      ...currentProjects,
      { id: crypto.randomUUID(), ...newProject },
    ]);
    setNewProject({ title: "", description: "", startDate: "", endDate: "" });
  };

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setNewProject((prevProject) => ({ ...prevProject, [id]: value }));
  };

  const handleDeleteProject = (id: string) => {
    setProjectList((currentProjects) => {
      return currentProjects.filter((project) => project.id !== id);
    });
  };

  return (
    <div className="flex justify-center items-center p-6 w-[600px] h-full border rounded-md ml-[200px]">
      <div className="space-y-6 max-w-2xl w-full">
        <h1 className="font-bold text-2xl mb-4">Projects List</h1>
        <Dialog>
          <DialogTrigger>
            <Button className="bg-blue-500 text-white hover:bg-blue-600 border py-2 px-4 rounded-md">
              Add Project
            </Button>
          </DialogTrigger>
          <DialogContent className="space-y-4 p-6 rounded-lg">
            <form onSubmit={handleAddProject} className="space-y-4">
              <div>
                <Label htmlFor="title" className="block mb-1 text-gray-700">
                  Title
                </Label>
                <Input
                  type="text"
                  id="title"
                  required
                  className="w-full border rounded-md p-2"
                  value={newProject.title}
                  onChange={handleInputChange}
                />
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
                  value={newProject.description}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <Label htmlFor="startDate" className="block mb-1 text-gray-700">
                  Start Date
                </Label>
                <Input
                  type="date"
                  id="startDate"
                  className="w-full border rounded-md p-2"
                  value={newProject.startDate}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <Label htmlFor="endDate" className="block mb-1 text-gray-700">
                  End Date
                </Label>
                <Input
                  type="date"
                  id="endDate"
                  className="w-full border rounded-md p-2"
                  value={newProject.endDate}
                  onChange={handleInputChange}
                />
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
        <ul className="space-y-4">
          {projectList.map((project) => (
            <li key={project.id} className="border p-4 rounded-md shadow-md">
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-semibold text-lg text-gray-800">
                    Title:{project.title}
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    Des:{project.description}
                  </p>
                  <p className="text-sm text-green-500 mt-1">
                    Start Date: {project.startDate}
                  </p>
                  <p className="text-sm text-red-500 mt-1">
                    End Date: {project.endDate}
                  </p>
                </div>
                <Button
                  className="bg-white text-slate-600 hover:bg-red-400"
                  onClick={() => handleDeleteProject(project.id)}
                >
                  <Trash2 />
                </Button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectsPage;
