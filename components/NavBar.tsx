import React from "react";
import Link from "next/link";
import { BiArrowBack } from "react-icons/bi";

const NavBar = () => {
  return (
    <div className={"w-full pt-24 pb-12 flex text-stone-900"}>
      <Link href="/">
        <a className={"flex items-center gap-2"}>
          <BiArrowBack /> Home
        </a>
      </Link>
      {/*<div>About</div>*/}
    </div>
  );
};

export default NavBar;
