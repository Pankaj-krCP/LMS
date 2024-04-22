"use client";

import { FC, useState } from "react";
import { ThemeSwitcher } from "./component/header/ThemeSwitcher";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { ImCancelCircle } from "react-icons/im";
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
    <div className="w-full relative">
      <div
        className={`border-b border-gray-500 top-0 left-0 w-full h-[70px] z-[80]`}
      >
        <div className="w-[98%]">
          <div className="h-[70px] flex items-center justify-between p-3">
            <Logo />
            <div className="flex">
              <div className="hidden 800px:flex">
                <NavItems navItemsData={navItemsData} />
              </div>
              <ThemeSwitcher />
              <Profile auth={auth} setAuth={setAuth} />
              <div className="800px:hidden">
                <HiOutlineMenuAlt3
                  className="cursor-pointer ml-6"
                  size={24}
                  onClick={() => setOpenSideBar(true)}
                />
                {openSideBar && (
                  <div
                    className={`${AbsoluteBox} right-0 top-0 rounded-tl-none rounded-tr-none rounded-br-none`}
                  >
                    <div className="flex justify-end w-full border-b border-gray-500 py-5 pr-4">
                      <ImCancelCircle
                        className="cursor-pointer"
                        size={24}
                        onClick={() => setOpenSideBar(false)}
                      />
                    </div>
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
