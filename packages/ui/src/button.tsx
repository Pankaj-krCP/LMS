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
                    border
                    ${fullWidth ? "w-full" : "w-fit"}
                    ${shadow ? "shadow-lg" : ""}
                    ${fullRounded ? "rounded-full" : "rounded-lg"}
                    ${secondary ? "bg-white border-gray-600 text-black" : "bg-blue-500 text-white border-blue-500"}
                    ${large ? "text-xl px-5 py-3" : "text-md px-4 py-2"}
                `}
    >
      {leftArrow && <FaArrowLeft />}
      {label}
      {rightArrow && <FaArrowRight />}
    </button>
  );
};

export default Button;
