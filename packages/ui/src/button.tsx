import { FC } from "react";
import { ButtonHover } from "./utils/constant";

interface Props {
  title: string;
}

const Button: FC<Props> = ({ title }) => {
  return (
    <button
      className={`${ButtonHover} bg-gray-800 dark:bg-gray-100 text-white dark:text-black py-2 px-4 rounded-full font-bold shadow-md`}
    >
      {title}
    </button>
  );
};

export default Button;
