"use client"

import useCurrentUser from "@/hooks/useCurrentUser";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const { data: session } = useSession();
  const router = useRouter()
  const { data: user } = useCurrentUser()

  useEffect(() => {
    if(session){
      router.push('/')
    }
    else{
      router.push("/auth")
    }
  }, [session, router])

  return (
    <>
      <h1 className="text-4xl text-white">Hello netflix!</h1>
      <p className="text-white">Logged in as: {user?.name}</p>
      <button onClick={() => signOut()} className="h-10 w-full bg-white">Logout</button>
    </>
  );
}
