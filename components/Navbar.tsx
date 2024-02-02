"use client";
import Link from "next/link";
import Image from "next/image";
import { useMediaQuery } from "@react-hook/media-query";

import CustomButton from "./CustomButton";

const NavBar = () => {
  const isSmallScreen = useMediaQuery("(max-width: 640px)");
  const isMediumScreen = useMediaQuery(
    "(min-width: 641px) and (max-width: 1024px)"
  );

  return (
    <header className="w-full  absolute z-10">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4 bg-transparent">
        <Link href="/" className="flex justify-center items-center">
          <Image
            src="/grocerylogo.png"
            alt="logo"
            width={38}
            height={38}
            className="object-contain"
          />
          <h2 className="text-2xl font-bold">
            Grocery<span className="text-orange-400">Hub</span>
          </h2>
        </Link>

        <CustomButton
          title="Sign in"
          btnType="button"
          containerStyles={`min-w-[130px] ${
            isSmallScreen || isMediumScreen
              ? "text-white bg-orange-400"
              : "text-primary-blue bg-white"
          } rounded-full`}
        />
      </nav>
    </header>
  );
};

export default NavBar;
