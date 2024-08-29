import React, { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import {auth} from "@/app/firebase/config";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [sentMessage, setSentMessage] = useState(false);

  // handle email change in the input field
  function handleEmailChange(e: React.ChangeEvent<HTMLInputElement>) {
    setEmail(e.target.value);

  }

  // handle submit event
  function handleSubmit(e: React.FormEvent<HTMLButtonElement>) {
    sendPasswordResetEmail(auth, email);
    console.log(email)
  }

  return (
    <>
      <div>
        <div className="flex flex-col gap-2 items-center self-center mt-5 w-full">
          {!sentMessage ? (
            <>
              {" "}
              <input
                type="email"
                name="email"
                onChange={(e) =>{handleEmailChange(e)}}
                placeholder="Input your email to reset your password"
                className="outline-none border p-2 bg-gray-700 rounded w-full text-center border-none text-white font-normal"
              />
              <button
                type="submit"
                onClick={(e) => {
                  handleSubmit(e);
                  setSentMessage(true);
                }}
                className="rounded font-bold p-2 bg-indigo-600 hover:bg-indigo-500 md:w-3/12"
              >
                submit
              </button>
            </>
          ) : (
            <p className="text-white cursor-pointer italic">
              Check Your Mail for the Reset link!{" "}
            </p>
          )}
        </div>
      </div>
    </>
  );
}

export default ForgotPassword;