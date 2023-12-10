"use client";
import {CgMenuGridO, CgClose} from "react-icons/cg";
import {FaSquareXTwitter, FaSquareInstagram, FaSquareSnapchat} from "react-icons/fa6";
import {FaFacebookSquare} from "react-icons/fa";
import useMenuActive from "@/hooks/useMenuActive";
import { navLinks } from "@/constants";
import Route from "../ui/Route";
import Link from "next/link";
 

const Footer = () => {
  return (
    <div className="w-full py-5 bg-tertiary mt-10">
      <div className="w-[95%] mx-auto max-w-[1450px]">
        <div className="py-5 border-b border-gray-300 border-opacity-20 flex justify-center items-center max-md:flex-col max-md:gap-8">
          <div className="flex-1">
           <Link href={"/"}><h1 className="text-3xl font-extrabold text-light"><span className="text-primary text-4xl">T</span>ested</h1></Link>
          </div>

          <div className="flex gap-5 text-white flex-1 justify-center text-2xl">
            <FaFacebookSquare className="text-primary text-3xl"/>
            <FaSquareInstagram className="text-primary text-3xl"/>
            <FaSquareSnapchat className="text-primary text-3xl"/>
            <FaSquareXTwitter className="text-primary text-3xl"/>
          </div>
          
          <ul className="flex items-center justify-end gap-4 flex-1 text-white max-md:flex-col max-md:gap-5">
              {navLinks.map((link, index) => {
              const isActive = useMenuActive(link.route)
            return (
            <li key={index}><Route route={link.route} label={link.label} isActive={isActive}/></li>
            )
            })}
          </ul>

        </div>
        <div className="w-full text-center mt-3 text-sm text-white">
          <span>white shark 2023 &copy; All rights Reserved Tested.waellatrache.com </span>
        </div>
      </div>
    </div>
  )
}

export default Footer;

