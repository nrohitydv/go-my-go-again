import React from "react";
import { CiSearch } from "react-icons/ci";
import { Input } from "@/components/ui/input";

const SearchField = () => {
  return (
    <div className="relative sm:w-[250px] w-full">
      <div className="relative">
        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
          <CiSearch size={20} />
        </span>
        <Input
          type="text"
          placeholder="Search"
          className="w-full py-2 pl-10 pr-4 border rounded "
        />
      </div>
    </div>
  );
};

export default SearchField;
