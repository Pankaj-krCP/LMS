"use client";

import React, { FC, useState, useMemo } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { customShadow } from "../../_utils/constant";

interface Props {
  title: string;
  options: string[];
}

const SideLayoutOption: FC<Props> = ({ title, options }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedOptions, setSelectedOptions] = useState<number>();
  const [isOptionSelected, setIsOptionSelected] = useState<{
    [key: string]: boolean;
  }>({});

  const memoizedOptions = useMemo(() => options, [options]);

  const memoizedIsOptionSelected = useMemo(() => {
    return options.reduce(
      (acc, option) => {
        acc[option] = isOptionSelected[option] ?? false;
        return acc;
      },
      {} as { [key: string]: boolean }
    );
  }, [options, isOptionSelected]);

  const checkedAllOptions = () => {
    if (selectedOptions === memoizedOptions.length || isOpen) {
      setIsOpen(false);
      setSelectedOptions(0);
      setIsOptionSelected({});
    } else {
      setIsOpen(true);
      setSelectedOptions(memoizedOptions.length);
      const newIsOptionSelected: { [key: string]: boolean } = {};
      memoizedOptions.forEach((option) => {
        newIsOptionSelected[option] = true;
      });
      setIsOptionSelected(newIsOptionSelected);
    }
  };

  const selectOptionHandler = (item: string) => {
    const newIsOptionSelected = { ...isOptionSelected };
    newIsOptionSelected[item] = !newIsOptionSelected[item];
    setIsOptionSelected(newIsOptionSelected);

    let count = 0;
    Object.values(newIsOptionSelected).forEach((value) => {
      if (value) count++;
    });
    setSelectedOptions(count);
  };

  return (
    <div
      className={`${isOpen ? "bg-blue-500  text-white font-medium" : ""} p-4 mx-2 mt-4 border dark:border-gray-600 rounded-xl ${customShadow}`}
    >
      <div
        className="flex gap-2 items-center justify-start mb-2"
        onClick={() => checkedAllOptions()}
      >
        <input
          type="checkbox"
          id={title}
          checked={selectedOptions === memoizedOptions.length}
        />
        <div className="flex gap-2 items-center justify-start cursor-pointer">
          <div className="font-semibold">{title}</div>
          <div>
            {isOpen ? (
              <FaChevronDown className="inline-block m-2" />
            ) : (
              <FaChevronUp className="inline-block m-2" />
            )}
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="px-4 pb-2">
          {memoizedOptions.map((item, index) => (
            <div key={index} className="flex gap-2">
              <input
                type="checkbox"
                id={item}
                name={item}
                checked={memoizedIsOptionSelected[item]}
                onChange={() => selectOptionHandler(item)}
              />
              <label className="cursor-pointer" htmlFor={item}>
                {item}
              </label>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SideLayoutOption;
