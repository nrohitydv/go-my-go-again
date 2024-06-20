"use client";
import { memberProps, members } from "@/constants";
import Image from "next/image";
import { Card, CardContent, CardDescription } from "@/components/ui/card";
import { useState } from "react";
const UsersPage = () => {
  const [selectMember, setSelectMember] = useState(members[0]);
  const handleShowDetails = (member: memberProps) => {
    setSelectMember(member);
  };
  return (
    <div className="p-[20px] flex gap-[100px]">
      <ul className="space-y-[20px]">
        <h1 className="font-bold">Active members</h1>
        {members.map((member) => (
          <li
            key={member.name}
            className="cursor-pointer"
            onClick={() => handleShowDetails(member)}
          >
            <div className="flex gap-[20px]">
              <div className="">
                <Image
                  src={member.profilePic}
                  alt={member.name}
                  width={40}
                  height={40}
                />
              </div>
              <div className="">
                <p className="text-sm/md text-slate-800">{member.name}</p>
                <p className="text-sm text-slate-500">{member.memberSince}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>

      <Card className="h-[300px] w-[400px] ">
        <CardContent className="p-4">
          <div className="flex gap-[20px]">
            <div className="">
              <Image
                src={selectMember.profilePic}
                alt={selectMember.name}
                width={40}
                height={40}
              />
            </div>
            <div className="">
              <p className="text-sm/md text-slate-800">{selectMember.name}</p>
              <p className="text-sm text-slate-500">
                {selectMember.memberSince}
              </p>
            </div>
          </div>
          <CardDescription className="mt-[20px]">
            {selectMember.description}
          </CardDescription>
        </CardContent>
      </Card>
    </div>
  );
};

export default UsersPage;
