import { FC } from "react";
import { ButtonHover } from "./utils/constant";

interface Props {
  className?: string;
  title: string;
}

const Button: FC<Props> = ({ className, title }) => {
  return (
    <button
      className={`${ButtonHover} ${className} rounded-lg font-bold shadow-lg`}
    >
      {title}
    </button>
  );
};

export default Button;
