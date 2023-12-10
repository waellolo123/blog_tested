import Overlay from "@/components/ui/Overlay"
import Image from "next/image"
import Link from "next/link";



const About = () => {

  return (
    <div className="w-[95%] mx-auto max-w-[1450px]">
      <div className="relative h-[500px] w-full">
        <Image fill src="/assets/111.jpg" alt="about image" className="object-cover" />
      {/* <Overlay /> */}
      <h1 className="flex absolute w-full h-full justify-center items-center text-4xl font-extrabold uppercase text-white">About Us</h1>
      </div>
      <div className="leading-8 text-lg bg-white mt-[-80px] relative w-[90%] m-auto rounded-lg p-5 shadow-xl text-center max-md:mt-0 max-md:w-full max-md:bg-transparent max-md:shadow-none">
        <p className="text-lg text-slate-500">Our product testing agency is dedicated to ensuring that your products meet the highest standards of quality and safety. We offer a wide range of testing services that are tailored to meet your specific needs. Our team of experts is committed to providing you with the most accurate and reliable results possible. Whether you are looking to test a new product or improve an existing one, we are here to help. Please let us know if you have any questions or if there is anything else we can do for you. Thank you for choosing our agency for your product testing needs!</p>
        <div className="w-full flex justify-center items-center ">
         
        </div>
      </div>
    </div>
  )
}

export default About;