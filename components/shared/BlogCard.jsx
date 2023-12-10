import Image from "next/image"
import {AiOutlineArrowRight} from "react-icons/ai";
import Tag from "../ui/Tag";
import Overlay from "../ui/Overlay";
import Link from "next/link";



const BlogCard = ({post, id}) => {
  return (
    <article className="relative rounded-lg overflow-hidden md:w-full w-[350px] mx-auto h-[450px] " key={id}>
     <div className="md:w-[1000px] w-[350px] mx-auto h-[450px] relative ">
      <Image src={post?.img} fill alt={`image for${post?.title}`} className="object-cover"/>
      {/* <Overlay /> */}
     </div>
     <div className="absolute w-full h-full top-0 p-5 flex flex-col justify-between">
      <div className="">
        <Tag text={post?.category} />
        <h3 className="text-lg md:text-3xl font-extrabold uppercase text-white bg-black/40 p-4 rounded-lg">{post?.title}</h3>
      </div>
     </div>
     <Link              
          className="absolute bottom-0 right-0 bg-primary p-2 text-white rounded-tl-lg z-6 cursor-pointer flex items-center gap-3"
          href={`/blog/${post.id}`}>
        Read  
        <AiOutlineArrowRight size={24}/>
      </Link>
    </article>
  )
}

export default BlogCard

