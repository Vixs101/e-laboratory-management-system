"use client"
//import { useState } from "react";
import Link from "next/link";

export default function Sidebar() {
  // const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 h-full lg:w-64 bg-gray-800 text-white flex flex-col sidebar sidebar-open">
       <h1 className="px-8 py-4  text-2xl font-bold">E-labs</h1>
       <nav className="flex-1  p-4">
          <ul className="text-lg">
            <li className="mb-4 text-white hover:bg-gray-700 block p-2 rounded">
              <Link href="/">
                Home
              </Link>
            </li>
            <li className="mb-4 text-white hover:bg-gray-700 block p-2 rounded">
              <Link href="/">
                Computer Lab
              </Link>
            </li>
            <li className="mb-4 text-white hover:bg-gray-700 block p-2 rounded">
              <Link href="/">
                Biology Lab
              </Link>
            </li>
            <li className="mb-4 text-white hover:bg-gray-700 block p-2 rounded">
              <Link href="/">
                Chemistry Lab
              </Link>
            </li>
            <li className="mb-4 text-white hover:bg-gray-700 block p-2 rounded">
              <Link href="/">
                Physics Lab
              </Link>
            </li>
            <li>
              <button
                type="button"
                className={"rounded text-white text-center w-full p-2 bg-indigo-600 hover:bg-indigo-500"}>
                  Logout
              </button>
            </li>
          </ul>
       </nav>
    </div>
  )
}
