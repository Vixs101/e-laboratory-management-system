"use client";
import { useState } from "react";
import Link from "next/link";
import { auth } from "@/app/firebase/config";
import { useRouter } from "next/navigation";
import {signOut } from "firebase/auth";
import { IoClose, IoHome } from "react-icons/io5";
import { MdOutlineSort } from "react-icons/md";
import { FaComputer } from "react-icons/fa6";
import { FaMicroscope } from "react-icons/fa";
import { LuFlaskConical } from "react-icons/lu";
import { GiRadioactive } from "react-icons/gi";
import { FaUserEdit } from "react-icons/fa";


const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
    icon: <IoHome />,
  },
  {
    id: 2,
    title: "Computer Lab",
    url: "/",
    icon: <FaComputer />,
  },
  {
    id: 3,
    title: "Biology Lab",
    url: "/",
    icon: <FaMicroscope />,
  },
  {
    id: 4,
    title: "Chemistry Lab",
    url: "/",
    icon: <LuFlaskConical />,
  },
  {
    id: 5,
    title: "Physics Lab",
    url: "/",
    icon: <GiRadioactive />,
  },
];



export default function Navbar() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  function handleSignOut() {
    signOut(auth).then(() => {
      router.push("/sign-up");
      return null;
    })
    .catch((error) => {
      let errorMessage = "Sign out failed, please try again.";
      switch (error.code) {
        case "auth/network-request-failed":
          errorMessage = "Network Error, please check your internet connection";
          break;
        case "auth/too-many-requests":
          errorMessage = "Too many signout attempts. Please try again later";
          break;
        default:
          console.error("sign out error:", error);
      }
    })
  }

  return (
    <div className="fixed w-full md:w-auto border-b-2 md:border-b-0 md:static bg-gray-800 flex flex-row-reverse md:flex-row justify-between items-center py-2 px-7 md:px-14 md:ml-56 lg:ml-64 text-white md:border-l-2 border-indigo-600 ">
      <div className="flex w-full justify-between">
        <h1 className="hidden md:flex text-2xl font-semibold cursor-pointer">Home</h1> 
        <FaUserEdit className="hidden md:block w-8 h-8 font-extrabold place-self-end"/>
      </div> 
      <div className="md:hidden w-11/12 md:w-auto flex items-center gap-4">
        {/* rendering the open and close icon conditionally */}

        {!open ? (
          <MdOutlineSort
            className="w-10 h-10 font-extrabold cursor-pointer duration-500"
            onClick={() => setOpen(true)}
          />
        ) : (
          <IoClose
            className="w-10 h-10 font-extrabold cursor-pointer duration-500"
            onClick={() => setOpen(false)}
          />
        )}
        <h1 className="md:hidden text-2xl font-bold">E-labs</h1>       
      </div>
      {/* rendering the links */}

      {open && (
        <div className="absolute flex flex-col gap-5 px-7 py-3 text-lg font-semibold left-0 top-2 mt-12 h-[calc(100vh-7rem)] w-[calc(100vw-10rem)] bg-gray-800 text-white rounded-lg duration-500 border-2 border-indigo-600">
          {links.map((item) => (
            <Link href={item.url} key={item.id} onClick={() => setOpen(false)}>
              <div className="flex gap-2 hover:bg-gray-700 rounded p-2 h-10 items-center">
                {item.icon}
                {item.title}
              </div>

            </Link>
          ))}
          <button
            type="button"
            onClick={() => { handleSignOut()}}
            className={
              "rounded text-white text-center w-3/4 p-2 bg-indigo-600 hover:bg-indigo-500"
            }
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
}
