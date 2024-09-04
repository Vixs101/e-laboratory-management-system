"use client";
import React, { useEffect, useState, ReactNode } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../app/firebase/config.js";
import { usePathname } from "next/navigation";
import Sidebar from "../sidebar/page";
import Navbar from "../navbar/page";

function SidebarWrapper({ children }: { children: React.ReactNode }) {
  const [authenticated, setAuthenticated] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setAuthenticated(!!user);
    });

    return () => unsubscribe();
  }, []);

  const showSideBar = pathname !== "/sign-up" && authenticated;

  return (
    <div className="flex">
      {showSideBar && (
        <>
          <Sidebar /> <Navbar />
        </>
      )}
      <main className="flex-1">{children}</main>
    </div>
  );
}

export default SidebarWrapper;
