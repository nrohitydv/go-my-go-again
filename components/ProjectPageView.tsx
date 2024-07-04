import React from "react";
import { SchemaProject } from "./ProjectAdder";
import { Clock } from "lucide-react";
import Image from "next/image";

export const getProjects = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/projects", {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Error fetching projects");
    }
    return res.json();
  } catch (err) {
    console.log("error loading project", err);
  }
};

const ProjectPageView = async () => {
  const { projects } = await getProjects();

  return (
    <div className="">
      {projects.map((project: SchemaProject) => (
        <li
          key={project.projectName}
          className="border-b p-2 space-y-3 cursor-pointer"
        >
          <div className="flex space-x-2">
            <Image src={project.companyLogo} alt="" height={40} width={40} />
            <div className="">
              <h2 className="text-sm/md text-slate-800">
                {project.projectName}
              </h2>
              <p className="text-sm text-slate-500">{project.company}</p>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-sm text-slate-500 bg-slate-200 p-1 flex items-center gap-1 rounded-md">
              <Clock size={15} />
            </p>
          </div>
        </li>
      ))}
    </div>
  );
};

export default ProjectPageView;
