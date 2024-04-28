import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
interface ButtonProps {
  label: string;
  secondary?: boolean;
  fullWidth?: boolean;
  fullRounded?: boolean;
  shadow?: boolean;
  large?: boolean;
  onClick: () => void;
  disabled?: boolean;
  outline?: boolean;
  rightArrow?: boolean;
  leftArrow?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  label,
  secondary,
  fullWidth,
  fullRounded,
  shadow,
  large,
  onClick,
  disabled,
  outline,
  rightArrow,
  leftArrow,
}) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`
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
    </button>
  );
};

export default Button;
