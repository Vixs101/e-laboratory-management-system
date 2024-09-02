"use client"
import React, { ReactNode } from "react"
import { usePathname } from "next/navigation";
import Sidebar from "../sidebar/page.tsx";

function SidebarWrapper( { children }: {children: React.ReactNode}) {
  const pathname = usePathname();
  const showSideBar = pathname !== "/sign-up";

  return (
    <div className="flex">
      {showSideBar && <Sidebar /> }
      <main className="flex-1"> 
        {children}
      </main>
    </div>
  )
}

export default SidebarWrapper;
