"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import NavbarOpen from "../NavbarOpen";

import logo from "public/logo white.svg";

const Header = () => {
  const [isToggle, setIsToggle] = useState<boolean>(false);
  return (
    <header
      className="main_padding w-full  fixed top-11"
      style={{
        zIndex: 9999,
      }}
    >
      <div className=" max-w-2xl mx-auto flex items-center justify-between">
        <div>
          <Link href="/">
            <Image
              src={logo}
              height={50}
              loading="lazy"
              alt="icon"
              className="object-contain h-16 w-16"
            />
          </Link>
        </div>
        <div onClick={() => setIsToggle(!isToggle)} className="cursor-pointer">
          <svg
            className="h-5 w-auto"
            viewBox="0 0 31 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.69995 1.62634C7.69995 0.797944 8.37155 0.126343 9.19995 0.126343H28.7C29.5283 0.126343 30.2 0.797944 30.2 1.62634C30.2 2.45474 29.5283 3.12634 28.7 3.12634H9.19995C8.37155 3.12634 7.69995 2.45468 7.69995 1.62634ZM28.7 9.12634H1.69995C0.871553 9.12634 0.199951 9.798 0.199951 10.6263C0.199951 11.4547 0.871553 12.1263 1.69995 12.1263H28.7C29.5283 12.1263 30.2 11.4547 30.2 10.6263C30.2 9.798 29.5283 9.12634 28.7 9.12634ZM28.7 18.1263H15.2C14.3716 18.1263 13.7 18.7979 13.7 19.6263C13.7 20.4547 14.3716 21.1263 15.2 21.1263H28.7C29.5283 21.1263 30.2 20.4547 30.2 19.6263C30.2 18.7979 29.5283 18.1263 28.7 18.1263Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
      <NavbarOpen isToggle={isToggle} />
    </header>
  );
};

export default Header;
