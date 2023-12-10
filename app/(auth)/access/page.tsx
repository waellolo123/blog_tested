"use client";

import { useEffect, useState } from "react";
import {signIn, useSession} from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {FacebookLoginButton, GithubLoginButton, GoogleLoginButton} from "react-social-login-buttons";


const page = () => {

  const session = useSession();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  useEffect(()=>{
    if(session?.status === "authenticated"){
      console.log('authenticated');
      router.push("/"); 
    }
  },[session?.status, router]);

  const socialAction = (action: string) => {
    setIsLoading(true);
    signIn(action, {redirect: false})
    .then((callback)=>{
      if(callback?.error){
        return;
      }
      if(callback?.ok){
        router.push("/");
      }
    })
    .finally(()=> setIsLoading(false));
  }

  return (
    <div className="my-24 sm:mx-auto sm:max-w-4xl px-5">
     <div className="bg-white shadow sm:rounded-lg flex flex-col gap-5 items-center justify-center  overflow-hidden md:flex-row md:justify-between">
      <div className="mt-6 flex gap-2 flex-col justify-center items-center mx-auto">
        <Link href={"/"} className="mb-5">
         <h1 className="text-3xl font-extrabold text-secondary"><span className="text-primary text-4xl">T</span>ested</h1>
        </Link>
        <span className="text-sm">Log in or Sign up with the links below</span>
        <GoogleLoginButton onClick={() => socialAction("google")}/>
        <FacebookLoginButton />
        <GithubLoginButton />
      </div>
      <Image src="/assets/777.jpg" height={500} width={500} alt="signin image" />
     </div>
    </div>
  )
}

export default page

