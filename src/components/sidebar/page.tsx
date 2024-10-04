"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { auth } from "@/app/firebase/config";
import { signOut } from "firebase/auth";
import { IoHome } from "react-icons/io5";
import { FaComputer } from "react-icons/fa6";
import { FaMicroscope } from "react-icons/fa";
import { LuFlaskConical } from "react-icons/lu";
import { GiRadioactive } from "react-icons/gi";
import { FaBookOpen } from "react-icons/fa";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select"

export default function Sidebar() {
  const router = useRouter();

  function handleSignOut() {
    signOut(auth).then(() => {
      router.push("/sign-up");
      return null;
    })
    .catch((error) => {
      //Handle errors with specific messages
      let errorMessage = "Sign out failed, please try again.";
      switch (error.code) {
        case "auth/network-request-failed":
          errorMessage = "Network Error, please check your internet connection.";
          break;
        case "auth/too-many-requests":
          errorMessage = "Too many sign out attempts. Please try again later.";
          break;
        default:
          console.error("sign Out error:", error);
      }
      alert(errorMessage);
    });
  }

  const handleStaffSelect = (value: string) => {
    if (value === "AcademicStaff") {
      router.push("/academic-staffs");
    } else if (value === "nonAcademicStaff") {
      router.push("/non-academic-staffs");
    }
  };

  return (
    <div className="hidden fixed top-0 left-0 h-full md:w-56 lg:w-64 bg-gray-800 text-white md:flex flex-col">
      <h1 className="px-8 py-4 text-3xl font-bold ">E-labs</h1>
      <nav className="flex-1 px-7 py-4">
        <ul className="text-lg">
          <li className="mb-4 text-white hover:bg-gray-700 block p-2 rounded border-b-0 border-white">
            <Link href="/" className="flex gap-2 items-center">
              <IoHome />
              Home
            </Link>
          </li>
          <li className="mb-4 text-white hover:bg-gray-700 block p-2 rounded">
            <Link href="/computer-lab" className="flex gap-2 items-center">
              <FaComputer />
              Computer Lab
            </Link>
          </li>
          <li className="mb-4 text-white hover:bg-gray-700 block p-2 rounded">
            <Link href="/biology-lab" className="flex gap-2 items-center">
              <FaMicroscope className="flex gap-2 items-center" />
              Biology Lab
            </Link>
          </li>
          <li className="mb-4 text-white hover:bg-gray-700 block p-2 rounded">
            <Link href="/chemistry-lab" className="flex gap-2 items-center">
              <LuFlaskConical />
              Chemistry Lab
            </Link>
          </li>
          <li className="mb-4 text-white hover:bg-gray-700 block p-2 rounded">
            <Link href="/physics-lab" className="flex gap-2 items-center">
              <GiRadioactive />
              Physics Lab
            </Link>
          </li>
          <li className="mb-4 text-white hover:bg-gray-700 block p-2 rounded">
            <Link href="/about" className="flex gap-2 items-center">
              <FaBookOpen />
              About
            </Link>
          </li>
        </ul>
        <Select onValueChange={handleStaffSelect}>
          <SelectTrigger className="w-full mb-4">
            <SelectValue placeholder="Staff Menu" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Staffs</SelectLabel>
              <SelectItem value="AcademicStaff">
                Academic Staffs
              </SelectItem>
              <SelectItem value="nonAcademicStaff">
                Non-Academic Staffs
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <button
          type="button"
          onClick={handleSignOut}
          className="rounded text-white text-center w-full p-2 bg-indigo-600 hover:bg-indigo-500"
        >
          Logout
        </button>
      </nav>
    </div>
  );
}
