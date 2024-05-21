import React from "react";

interface CustomInputProps {
  placehoder?: string;
  value?: string;
  type?: string;
  disabled?: boolean;
  small?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const CustomInput: React.FC<CustomInputProps> = ({
  placehoder,
  value,
  type,
  disabled,
  small,
  onChange,
}) => {
  return (
    <input
      type={type || "text"}
      disabled={disabled}
      onChange={onChange}
      placeholder={placehoder}
      value={value}
      className={`w-full ${small ? "p-2" : "p-4"} text-lg bg-inherit border-2 rounded-md outline-none dark:border-gray-600 focus:dark:border-sky-500 focus:border-sky-500 transition disabled:bg-gray-200 dark:disabled:bg-gray-500 disabled:opacity-70`}
    />
  );
};

export default CustomInput;
