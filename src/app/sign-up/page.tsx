"use client"
import {useState} from "react";
import {useCreateUserWithEmailAndPassword} from "react-firebase-hooks/auth";
import{ auth }from "@/app/firebase/config";

export default function SignUp() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth);

    const handleSignUp = async () => {
        try {
            console.log("clicked")
            const res = await createUserWithEmailAndPassword(email, password)
            console.log({res})
            setEmail('')
            setPassword('')
        } catch (error) {
            console.error(error)
        }
    };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <form className="bg-gray-800 p-10 rounded-lg shadow-xl w-2/3 md:w-1/2 lg:w-1/3">
            <div className='text-white text-center mb-2'>
                <h1 className='font-bold text-3xl'>Welcome to the E-labs!</h1>
                <p className='text-'>Your sure plug for laboratory insights</p>
            </div>
            <h2 className="text-white text-center text-2xl mb-5">Sign Up</h2>
            <input 
                type="email"
                placeholder="example@gmail.com"
                value={email}
                autoComplete="on"
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 mb-4 bg-gray-700 rounded outline-none text-white placeholder-gray-500"
            />
            <input 
                type="password"
                placeholder="password"
                value={password}
                autoComplete="on"
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 mb-4 bg-gray-700 rounded outline-none text-white placeholder-gray-500"
            />
            <button
                onClick={handleSignUp}
                className="w-full p-3 bg-indigo-600 rounded text-white hover:bg-indigo-500"
            >
                Sign up
            </button>
        </form>

    </div>
  )
}
