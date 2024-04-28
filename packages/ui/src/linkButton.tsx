import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import Link from "next/link";

interface ButtonProps {
  label: string;
  url: string;
  secondary?: boolean;
  fullWidth?: boolean;
  fullRounded?: boolean;
  shadow?: boolean;
  large?: boolean;
  rightArrow?: boolean;
  leftArrow?: boolean;
  outline?: boolean;
}

const LinkButton: React.FC<ButtonProps> = ({
  label,
  url,
  secondary,
  fullWidth,
  fullRounded,
  shadow,
  large,
  rightArrow,
  leftArrow,
  outline,
}) => {
  return (
    <Link
      href={url}
      className={`  
                        inline-flex items-center justify-center gap-2 
                      disabled:opacity-70
                      disabled:cursor-not-allowed
                      font-semibold
                      hover:opacity-80
                      transition
                      border-2
                      ${fullWidth ? "w-full" : "w-fit"}
                      ${shadow ? "shadow-lg" : ""}
                      ${fullRounded ? "rounded-full" : "rounded-lg"}
                      ${secondary ? "bg-white" : "bg-blue-500"}
                      ${secondary ? "text-black" : "text-white"}
                      ${secondary ? "border-black" : "border-blue-500"}
                      ${large ? "text-xl" : "text-md"}
                      ${large ? "px-5" : "px-4"}
                      ${large ? "py-3" : "py-2"}
                      ${outline ? "bg-transparent" : ""}
                      ${outline ? "border-white" : ""}
                      ${outline ? "text-white" : ""}
                  `}
    >
      {leftArrow && <FaArrowLeft />}
      {label}
      {rightArrow && <FaArrowRight />}
    </Link>
  );
};

export default LinkButton;
