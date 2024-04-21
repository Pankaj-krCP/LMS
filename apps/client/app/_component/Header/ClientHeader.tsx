"use client";

import React, { useState } from "react";
import { Header } from "@repo/ui/header";

export const navItemsData = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "Course",
    url: "course",
  },
  {
    name: "About",
    url: "about",
  },
  {
    name: "Policy",
    url: "policy",
  },
  {
    name: "FAQ",
    url: "faq",
  },
];

interface Props {}

const ClientHeader: React.FC<Props> = () => {
  const [activeItem, setActiveItem] = useState(0);
  return (
    <div>
      <Header navItemsData={navItemsData} activeItem={activeItem} />
    </div>
  );
};

export default ClientHeader;
