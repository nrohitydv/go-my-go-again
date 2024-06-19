import React, { useState, useRef, useEffect } from "react";
import { Input } from "./ui/input";
import { Search } from "lucide-react";

const SearchInput: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleExpand = () => {
    setIsExpanded(true);
  };

  const handleCollapse = () => {
    setIsExpanded(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      containerRef.current &&
      !containerRef.current.contains(event.target as Node)
    ) {
      handleCollapse();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative hidden sm:block" ref={containerRef}>
      <button
        onClick={handleExpand}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500 focus:outline-none"
      >
        <Search />
      </button>
      <div
        className={`absolute inset-0 pl-10 pr-2 py-1 cursor-pointer ${
          isExpanded ? "w-48" : "w-0"
        }`}
      >
        <Input
          onClick={(event) => {
            event.stopPropagation();
            handleExpand();
          }}
          className={`pl-10 pr-2 py-1 w-full rounded-md border-0 focus:border transition-all duration-300 ease-in-out ${
            isExpanded ? "border" : "w-0"
          }`}
        />
      </div>
    </div>
  );
};

export default SearchInput;
