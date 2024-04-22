"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { BiMoon, BiSun } from "react-icons/bi";

export const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted)
    return (
      <>
        <div className="mx-4">
          {theme === "light" ? (
            <BiMoon className="cursor-pointer" size={24} fill="black" />
          ) : (
            <BiSun className="cursor-pointer" size={24} fill="white" />
          )}
        </div>
      </>
    );

  return (
    <div className="mx-4">
      {theme === "light" ? (
        <BiMoon
          className="cursor-pointer"
          size={24}
          fill="blue"
          onClick={() => setTheme("dark")}
        />
      ) : (
        <BiSun
          className="cursor-pointer"
          size={24}
          fill="blue"
          onClick={() => setTheme("light")}
        />
      )}
    </div>
  );
};
