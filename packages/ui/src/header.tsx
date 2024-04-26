"use client";

import { FC, useState } from "react";
import { ThemeSwitcher } from "./component/header/ThemeSwitcher";
import { HiOutlineMenuAlt2, HiOutlineMenuAlt3 } from "react-icons/hi";
import NavItems from "./component/header/NavItems";
import Logo from "./component/header/Logo";
import Profile from "./component/header/Profile";
import { AbsoluteBox } from "./utils/constant";

export interface NavItemsProps {
  name: string;
  url: string;
}
interface Props {
  navItemsData: NavItemsProps[];
  auth: string;
  setAuth: Function;
}

export const Header: FC<Props> = ({ navItemsData, auth, setAuth }) => {
  const [openSideBar, setOpenSideBar] = useState(false);

  return (
    <div className="w-full relative fixed">
      <div
        className={`fixed bg-white dark:bg-slate-900 border-b dark:border-gray-600 top-0 left-0 w-full h-[50px] z-[80]`}
      >
        <div className="w-[98%]">
          <div className="h-[50px] flex items-center justify-between p-3">
            <Logo />
            <div className="flex items-center">
              <div className="hidden 800px:flex">
                <NavItems navItemsData={navItemsData} />
              </div>
              <ThemeSwitcher />
              <Profile auth={auth} setAuth={setAuth} />
              <div className="800px:hidden">
                {openSideBar ? (
                  <HiOutlineMenuAlt2
                    className="cursor-pointer ml-6"
                    size={24}
                    onClick={() => setOpenSideBar(false)}
                  />
                ) : (
                  <HiOutlineMenuAlt3
                    className="cursor-pointer ml-6"
                    size={24}
                    onClick={() => setOpenSideBar(true)}
                  />
                )}
                {openSideBar && (
                  <div
                    className={`${AbsoluteBox} z-[-1] right-0 top-[100%] border-r-0 rounded-tl-none rounded-tr-none rounded-br-none`}
                  >
                    <NavItems navItemsData={navItemsData} />
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
