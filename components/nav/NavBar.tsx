import Link from "next/link";

import Image from "next/image";
import SearchField from "../SearchField";
import NavList from "./NavList";
import NavFooter from "./NavFooter";

const NavBar = () => {
  return (
    <aside className="w-[300px] ml-4  hidden sm:block border-r">
      <div className="flex flex-col justify-start gap-[20px] mt-4">
        <div className="inline-flex gap-1">
          <div className="">
            <Link href="/">
              <Image src="/logo.png" alt="logo" height={31.15} width={50} />
            </Link>
          </div>
          <Link href="/">
            <h1 className="font-bold">Go My Go</h1>
          </Link>
        </div>

        <SearchField />

        <NavList />
        <NavFooter />
      </div>
    </aside>
  );
};

export default NavBar;
