"use client";
import Link from "next/link";
import Button from "../ui/Button";
import Route from "../ui/Route";
import { navLinks } from "@/constants";
import { useEffect, useState } from "react";
import clsx from "clsx";
import MobileMenu from "./MobileMenu";
import useMenuActive from "@/hooks/useMenuActive";
import {FaFacebook, FaInstagram, FaSnapchat, FaXTwitter} from "react-icons/fa6";
import { User } from "@prisma/client";
import { useRouter } from "next/navigation";
import { signOut } from "next-auth/react";
import Image from "next/image";
import { userTypes } from "@/types/userTypes";


const Navbar = ({user}) => {
  const [isScrolling, setIsScrolling] = useState(false);
  const [openUserMenu, setOpenUserMenu] = useState(false);
  const router = useRouter();


  useEffect(()=>{
    const handleScroll = () => {
      if (window.scrollY > 0){
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  },[])
  
  return (
    <nav className={clsx("py-4 w-full transition", isScrolling ? "fixed top-0 bg-white shadow-lg z-10" : "relative")}>
     <div className={clsx("w-[95%] mx-auto max-w-[1450px] flex items-center justify-between border-b border-gray-100", isScrolling && "border-none pb-0", !isScrolling && "pb-5")}>
      <div className="flex-1 flex items-center gap-4">
        <Link href={"/"}><h1 className="text-3xl font-extrabold text-secondary"><span className="text-primary text-4xl">T</span>ested</h1></Link>
        <div className="flex items-center justify-center gap-1">
            <FaFacebook className="text-tertiary text-sm"/>
            <FaInstagram className="text-tertiary text-sm"/>
            <FaSnapchat className="text-tertiary text-sm"/>
            <FaXTwitter className="text-tertiary text-sm"/>
        </div>
      </div>
      <ul className="flex items-center justify-center gap-8 flex-2 max-md:hidden">
        {navLinks.map((link, index) => {
          const isActive = useMenuActive(link.route)
          return (
           <li key={index}>
           <Route route={link.route} label={link.label} onClick={()=>{}} isActive={isActive}/> 
          </li>);
        })}
      </ul>
      <div className="flex-1 flex items-center justify-end">
      {!user && 
       <div className="flex gap-5 flex-1 justify-end max-md:hidden">
       <Button text="Login" onClick={()=> router.push("/access")} aria="Log in button" />
       <Button  text="Signup" onClick={()=> router.push("/access")} aria="Sign up button"/>
     </div>
     }
     {user && (
       <div className="flex gap-2 items-center justify-end max-md:hidden">
        <h2 className="text-tertiary">Hi, <span className="text-primary">{user.name}</span></h2>
        <Image 
        onClick={() => setOpenUserMenu(!openUserMenu)}
        src={user.image} 
        width={50} height={50} 
        className="rounded-full border-2 border-primary cursor-pointer" 
        alt={`image of ${user.name}`} />
      </div>
     )}
     {openUserMenu && (
       <ul className="z-10 absolute right-12 top-[70px] w-48 bg-white shadow-md rounded-md p-4">
        <Link href={"/create"} onClick={() => setOpenUserMenu(false)}><li className="cursor-pointer text-slate-500 py-2 hover:text-primary transition">Create a New Post</li></Link>
        <Link href={"/userposts"} onClick={() => setOpenUserMenu(false)}><li className="cursor-pointer text-slate-500 py-2 hover:text-primary transition">My Posts</li></Link>
        <li className="cursor-pointer text-slate-500 py-2 hover:text-primary transition" onClick={() => signOut()}>Sign Out</li>
       </ul>
     )}
     </div>
      
      <div className="">
        <MobileMenu user={user}/>
      </div>
     </div>
    </nav>
  )
}

export default Navbar



