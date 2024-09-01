"use client";
import { useRouter } from "next/navigation";
import { useState, useEffect, ReactNode } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/app/firebase/config";
import Loader from "../loader/page";

interface AuthGuardProps {
  children:ReactNode;
}

function AuthGuard({ children }: AuthGuardProps) {
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthenticated(true);
      } else {
        router.push("/sign-up");
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [router]);

  if (loading) {
    return <Loader/>
  }

  if (!authenticated) {
    return null;
  }

  return <>{children}</>;
}

export default AuthGuard;
