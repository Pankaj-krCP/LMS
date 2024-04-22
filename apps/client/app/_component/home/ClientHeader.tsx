"use client";

import React, { useEffect, useState } from "react";
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

const ClientHeader = () => {
  const [auth, setAuth] = useState("");

  useEffect(() => {
    if (auth === "login") {
      //Login logic
      console.log("login");
    } else if (auth === "logout") {
      //LogOut logic
      console.log("logout");
    } else if (auth === "profile") {
      //showing profile page logic
      console.log("Show Profile");
    }
  }, [auth]);

  return (
    <div>
      <Header navItemsData={navItemsData} auth={auth} setAuth={setAuth} />
    </div>
  );
};

export default ClientHeader;
