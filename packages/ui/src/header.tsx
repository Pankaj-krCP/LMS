"use client";

import { FC, useState } from "react";
import Link from "next/link";
import { ThemeSwitcher } from "./component/theme-switcher";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { ImCancelCircle } from "react-icons/im";

interface NavItems {
  name: string;
  url: string;
}

interface Props {
  navItemsData: NavItems[];
  activeItem: number;
}

export const Header: FC<Props> = ({ navItemsData, activeItem }) => {
  const [openSideBar, setOpenSideBar] = useState(false);

  return (
    <div className="w-full relative">
      <div
        className={`border-b border-gray-500 top-0 left-0 w-full h-[70px] z-[80]`}
      >
        <div className="w-[98%]">
          <div className="h-[70px] flex items-center justify-between p-3">
            <div>
              <Link href={"/"}>
                <span className="text-[25px] font-Poppins font-[500]">
                  CodingSync
                </span>
              </Link>
            </div>
            <div className="flex">
              <div className="hidden 800px:flex">
                {navItemsData &&
                  navItemsData.map((item, index) => (
                    <div key={index} className="mx-1">
                      <Link href={item.url}>
                        <span
                          className={`${
                            activeItem === index
                              ? "text-[crimson] dark:text-[#37a39a]"
                              : ""
                          } py-3 text-[18px] px-6 font-Poppins font-[400]`}
                        >
                          {item.name}
                        </span>
                      </Link>
                    </div>
                  ))}
              </div>
              <ThemeSwitcher />
              <div className="800px:hidden">
                <HiOutlineMenuAlt3
                  className="cursor-pointer ml-4"
                  size={24}
                  onClick={() => setOpenSideBar(true)}
                />
                {openSideBar && (
                  <div className="absolute rounded-bl-lg border-b border-l dark:border-gray-600 border-gray-300 right-0 top-0 bg-zinc-100 dark:bg-zinc-700 w-[60%] p-1">
                    <div className="flex justify-end w-full border-b border-gray-500 p-5">
                      <ImCancelCircle
                        className="cursor-pointer ml-4"
                        size={24}
                        onClick={() => setOpenSideBar(false)}
                      />
                    </div>

                    {navItemsData &&
                      navItemsData.map((item, index) => (
                        <div key={index} className="p-4">
                          <Link href={item.url}>
                            <span
                              className={`${
                                activeItem === index
                                  ? "text-[crimson] dark:text-[#37a39a]"
                                  : ""
                              } py-3 text-[18px] px-6 font-Poppins font-[400]`}
                            >
                              {item.name}
                            </span>
                          </Link>
                        </div>
                      ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
