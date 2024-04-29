import { FC, useMemo, useState } from "react";
import Link from "next/link";
import { NavItemsProps } from "../../header";
import { UnderLine } from "../../utils/constant";
import { usePathname } from "next/navigation";

interface Props {
  navItemsData: NavItemsProps[];
}

const NavItems: FC<Props> = ({ navItemsData }) => {
  const [activeItem, setActiveItem] = useState("/");
  const pathname = usePathname();

  useMemo(() => {
    setActiveItem(pathname.split("/")[1] || "/");
  }, [pathname]);

  return (
    <>
      {navItemsData &&
        navItemsData.map((item, index) => (
          <div
            key={index}
            className={`${index === 0 ? "mt-1 800px:mt-0" : ""} p-2 800px:p-1 800px:mx-1 rounded-lg`}
          >
            <Link href={item.url}>
              <span
                className={`${
                  activeItem === (item.url.slice(1) || "/")
                    ? `text-[crimson] dark:text-[#37a39a] ${UnderLine}`
                    : ""
                } px-4 py-3 text-[18px] font-Poppins font-[400]`}
              >
                {item.name}
              </span>
            </Link>
          </div>
        ))}
    </>
  );
};

export default NavItems;
