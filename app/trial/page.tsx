import SearchField from "@/components/SearchField";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { members } from "@/constants";
import { Bell } from "lucide-react";
import Image from "next/image";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import ProjectComponent from "@/components/ProjectComponent";

const ProjectTrialPage = () => {
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center border-b p-2">
        <h1 className="text-slate-700 font-bold">Project Page</h1>
        <div className="hidden sm:block">
          <SearchField />
        </div>
        <div className="flex items-center gap-5 cursor-pointer">
          <Bell />
          <Avatar>
            <AvatarImage
              src="/Avatar (1).png"
              alt="profile"
              height={20}
              width={20}
            />
          </Avatar>
        </div>
      </div>
      <div className="flex sm:flex-row flex-col">
        <ProjectComponent />

        <div className="">
          <div className="ml-5 mt-2">
            <Select>
              <SelectTrigger className="sm:w-[180px] w-full border-none hover:bg-slate-200">
                <SelectValue placeholder="Progress" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Started</SelectItem>
                <SelectItem value="dark">On hold</SelectItem>
                <SelectItem value="system">Completed</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <ul className="space-y-3 mt-[20px] ml-5 flex sm:flex-col flex-col">
            <p>Members</p>
            {members.map((member) => (
              <Popover key={member.name}>
                <PopoverTrigger>
                  <li className="cursor-pointer">
                    <div className="flex  items-center justify-start gap-4">
                      <Image
                        src={member.profilePic}
                        alt={member.name}
                        width={40}
                        height={40}
                        className="rounded-full"
                      />
                      <div className="flex flex-col ">
                        <p className="text-base font-medium text-gray-800 flex justify-start">
                          {member.name}
                        </p>
                        <p className="text-sm text-gray-500">
                          {member.developerType}
                        </p>
                      </div>
                    </div>
                  </li>
                </PopoverTrigger>
                <PopoverContent className="">
                  <div className="flex items-center gap-4 mb-4">
                    <Image
                      src={member.profilePic}
                      alt={member.name}
                      width={50}
                      height={50}
                      className="rounded-full"
                    />
                    <div>
                      <p className="text-lg font-semibold text-gray-800">
                        {member.name}
                      </p>
                      <p className="text-sm text-gray-500">
                        {member.memberSince}
                      </p>
                    </div>
                  </div>
                  <p className="text-slate-500">{member.developerType}</p>
                  <p className="text-sm text-slate-400">{member.description}</p>
                </PopoverContent>
              </Popover>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectTrialPage;
