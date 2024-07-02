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
    <div className="p-8 flex gap-24">
      <div className="w-1/3">
        <h1 className="font-bold text-xl mb-6">Active members</h1>
        <ul className="space-y-4">
          {members.map((member) => (
            <li
              key={member.name}
              className="cursor-pointer p-2 hover:bg-gray-100 rounded-md transition-colors duration-200"
              onClick={() => handleShowDetails(member)}
            >
              <div className="flex items-center gap-4">
                <Image
                  src={member.profilePic}
                  alt={member.name}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div>
                  <p className="text-base font-medium text-gray-800">
                    {member.name}
                  </p>
                  <p className="text-sm text-gray-500">{member.memberSince}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <Card className="h-auto w-96 shadow-lg">
        <CardContent className="p-6">
          <div className="flex items-center gap-4 mb-4">
            <Image
              src={selectMember.profilePic}
              alt={selectMember.name}
              width={50}
              height={50}
              className="rounded-full"
            />
            <div>
              <p className="text-lg font-semibold text-gray-800">
                {selectMember.name}
              </p>
              <p className="text-sm text-gray-500">
                {selectMember.memberSince}
              </p>
            </div>
          </div>
          <CardDescription className="text-gray-700">
            {selectMember.description}
          </CardDescription>
        </CardContent>
      </Card>
    </div>
  );
};

export default UsersPage;
