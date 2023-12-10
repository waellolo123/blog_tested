import { useEffect, useState } from "react";
import {CgMenuGridO, CgClose} from "react-icons/cg";
import {FaSquareXTwitter, FaSquareInstagram, FaSquareSnapchat} from "react-icons/fa6";
import {FaFacebookSquare} from "react-icons/fa";
import Button from "../ui/Button";
import { navLinks } from "@/constants";
import Link from "next/link";
import Route from "../ui/Route";
import useMenuActive from "@/hooks/useMenuActive";
import {User} from "@prisma/client";
import {signOut} from "next-auth/react";
import { useRouter } from "next/navigation";


const MobileMenu = ({user}) => {
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);
  const isOpenHandler = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
     <div className="md:hidden cursor-pointer" onClick={isOpenHandler}>
      {isOpen ? <CgClose size={25}/> : <CgMenuGridO size={25}/> }
     </div>
     {isOpen ? (
      <>
      <div 
      onClick={() => setIsOpen(false)} 
      className="fixed w-full h-screen top-0 left-0 bg-black/25 z-50 ">
      <div
      onClick={(e)=> e.stopPropagation()}
      className="absolute h-screen left-0 top-0 w-60 bg-white z-[999] px-5 border-r overflow-y-hidden flex flex-col gap-10">
      <div className="border-b py-5">
       <Link href={"/"}><h1 className="text-3xl font-extrabold text-secondary"><span className="text-primary text-4xl">T</span>ested</h1></Link>
      <div className="flex gap-5 text-secondary flex-1 justify-center text-xl mt-10">
        <FaFacebookSquare className="text-primary text-3xl cursor-pointer"/>
        <FaSquareInstagram className="text-primary text-3xl cursor-pointer"/>
        <FaSquareSnapchat className="text-primary text-3xl cursor-pointer"/>
        <FaSquareXTwitter className="text-primary text-3xl cursor-pointer"/>
      </div>
      <ul className="flex items-center justify-center gap-10 flex-col mt-5 flex-1 py-6">
        {navLinks.map((link, index) => {
          const isActive = useMenuActive(link.route)
        return (
         <li key={index}><Route route={link.route} label={link.label} onClick={() => setIsOpen(false)} isActive={isActive}/></li>
        )
        })}
      </ul>
      {user ? (
        <div className="mt-10 pt-5 border-t border-t-primary">
          <h3 className="text-center mb-4 text-primary font-bold">Hi, {user.name}</h3>
          <ul className="flex flex-col gap-5 items-center">
            <Link href={"/create"} onClick={() => setIsOpen(false)}><li >Create a post</li></Link>
            <Link href={"/userposts"} onClick={() => setIsOpen(false)}><li >My posts</li></Link>
          < Button text="Sign out" onClick={signOut} aria="Log in button" />
          </ul>
        </div>
      ): (
        <div className="flex gap-5 flex-1 flex-col py-5">
       < Button text="Login" onClick={()=> router.push("/access")} aria="Log in button" />
        <Button text="Register" onClick={()=> router.push("/access")} aria="Sign up button"/>
      </div>
      )}
      </div>
      </div>
      </div> 
      </>
     ) : null}
    </>
  )
}

export default MobileMenu

