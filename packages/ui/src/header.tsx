"use client";

import { FC } from "react";
import Link from "next/link";
import { ThemeSwitcher } from "./component/theme-switcher";

interface NavItems {
  name: string;
  url: string;
}

interface Props {
  navItemsData: NavItems[];
  activeItem: number;
}

export const Header: FC<Props> = ({ navItemsData, activeItem }) => {
  return (
    <div className="w-full">
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
              <div>
                <ThemeSwitcher />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
