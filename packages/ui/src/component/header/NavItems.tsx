import { FC } from "react";
import Link from "next/link";
import { Props } from "../../header";

const NavItems: FC<Props> = ({ navItemsData, activeItem }) => {
  return (
    <>
      {navItemsData &&
        navItemsData.map((item, index) => (
          <div key={index} className="p-4 800px:p-0 800px:mx-1">
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
    </>
  );
};

export default NavItems;
