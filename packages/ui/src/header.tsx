"use client";

import { FC, useState } from "react";
import { ThemeSwitcher } from "./component/header/ThemeSwitcher";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { ImCancelCircle } from "react-icons/im";
import NavItems from "./component/header/NavItems";
import Logo from "./component/header/Logo";

export interface NavItemsProps {
  name: string;
  url: string;
}

export interface Props {
  navItemsData: NavItemsProps[];
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
            <Logo />
            <div className="flex">
              <div className="hidden 800px:flex">
                <NavItems navItemsData={navItemsData} activeItem={activeItem} />
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
                    <NavItems
                      navItemsData={navItemsData}
                      activeItem={activeItem}
                    />
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
