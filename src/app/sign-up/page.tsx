"use client";
import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "@/app/firebase/config";
import { useRouter } from "next/navigation";
import ForgotPassword from "@/components/forgot-password/page";

interface UserCredentials {
  email: string;
  password: string;
}

export default function SignUp() {
  const [loginType, setLoginType] = useState("login");
  const [userCredentials, setUserCredentials] = useState<UserCredentials>({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [forgotPassword, setForgotPassword] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const router = useRouter();

  //retrieve user details
  function handleCredentials(e: React.ChangeEvent<HTMLInputElement>) {
    setUserCredentials({ ...userCredentials, [e.target.name]: e.target.value });
  }

  function handleSignUp(e: React.FormEvent<HTMLButtonElement>) {
    e.preventDefault();
    setError("");

    createUserWithEmailAndPassword(
      auth,
      userCredentials.email,
      userCredentials.password
    )
      .then((userCredential) => {
        const user = userCredential.user;
        router.push("/");

        console.log("user Registered!", user);
      })
      .catch((error) => {
        setError(error.message);
      });
  }

  function handleSignIn(e: React.FormEvent<HTMLButtonElement>) {
    e.preventDefault();
    setError("");

    signInWithEmailAndPassword(
      auth,
      userCredentials.email,
      userCredentials.password
    )
      .then((userCredential) => {
        const user = userCredential.user;
        router.push("/");

        console.log("User Signed In!", user);
      })
      .catch((error) => {
        setError(error.message);
      });
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <form className="bg-gray-800 p-5 md:p-10 rounded-lg shadow-xl w-11/12 md:w-1/2 lg:w-1/3 transition-all duration-200 ease-out">
        <div className="text-white text-center mb-2">
          <h1 className="font-bold text-3xl">Welcome to the E-labs!</h1>
          <p className="text-">Your sure plug for laboratory insights</p>
        </div>
        <div className="flex justify-center gap-3 my-5">
          <button
            type="button"
            onClick={() => setLoginType("login")}
            className={`rounded text-white text-center p-2 ${
              loginType === "signup"
                ? "bg-gray-700"
                : "bg-indigo-600 hover:bg-indigo-500"
            }`}
          >
            Login
          </button>
          <button
            type="button"
            onClick={() => setLoginType("signup")}
            className={`rounded text-white text-center p-2 ${
              loginType === "login"
                ? "bg-gray-700"
                : "bg-indigo-600 hover:bg-indigo-500"
            }`}
          >
            Signup
          </button>
        </div>
        <input
          type="email"
          name="email"
          placeholder="example@gmail.com"
          autoComplete="on"
          onChange={(e) => {
            handleCredentials(e);
          }}
          className="w-full p-3 mb-4 bg-gray-700 rounded outline-none text-white placeholder-gray-500"
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          autoComplete="on"
          onChange={(e) => {
            handleCredentials(e);
          }}
          className="w-full p-3 mb-4 bg-gray-700 rounded outline-none text-white placeholder-gray-500"
        />

        {/*conditionally rendering the signup and login buttons */}
        {loginType == "login" ? (
          <button
            onClick={(e) => {
              handleSignIn(e);
            }}
            className="w-full p-3 bg-indigo-600 rounded text-white font-semibold hover:bg-indigo-500"
          >
            Login
          </button>
        ) : (
          <button
            onClick={(e) => {
              handleSignUp(e);
              console.log("Email being used:", userCredentials.email);
            }}
            className="w-full p-3 bg-indigo-600 rounded text-white font-semibold hover:bg-indigo-500"
          >
            Sign up
          </button>
        )}

        {/*display error */}
        {error && <div className="mt-3 text-center text-red-600">{error}</div>}

        {loginType === "login" && (
          <div className="font-semibold mt-3 text-center transition-all duration-100 ease-in-out">
            <p
              onClick={() => {
                console.log("clicked forgot password");
                setForgotPassword(!forgotPassword);
              }}
              className="text-white font-semibold underline cursor-pointer italic"
            >
              Forgot Password
            </p>
            {forgotPassword && <ForgotPassword />}
          </div>
        )}
      </form>
    </div>
  );
}
