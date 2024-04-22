import { FC, useState } from "react";
import Link from "next/link";
import { NavItemsProps } from "../../header";
import { ButtonHover } from "../../utils/constant";

interface Props {
  navItemsData: NavItemsProps[];
}

const NavItems: FC<Props> = ({ navItemsData }) => {
  const [activeItem, setActiveItem] = useState(0);
  return (
    <>
      {navItemsData &&
        navItemsData.map((item, index) => (
          <div
            key={index}
            className={`${index === 0 ? "mt-1 800px:mt-0" : ""} p-4 800px:p-0 800px:mx-1 rounded ${ButtonHover}`}
          >
            <Link href={item.url} onClick={() => setActiveItem(index)}>
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
    </>
  );
};

export default NavItems;
