"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import IconButton from "./IconButton";

const Logo = () => {
  const { push } = useRouter();
  const onClickLogo = () => {
    push("/"); // home 이동 로직
  };
  const onClickMenu = () => {};

  return (
    <section className="flex flex-row items-center gap-3">
      <div
        onClick={onClickMenu}
        className="flex justify-center items-center h-[35px] w-[36px] hover:bg-[rgba(144,144,144,0.45)] rounded-full cursor-pointer"
      >
        <IconButton icon={<RxHamburgerMenu size={24} />} onClickIcon={onClickMenu} />
      </div>
      <div className="cursor-pointer" onClick={onClickLogo}>
        <Image src={"/main-logo.svg"} width={100} height={30} alt="main-logo" />
      </div>
    </section>
  );
};

export default Logo;
