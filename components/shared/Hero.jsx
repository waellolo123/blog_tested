
import Tag from "../ui/Tag"
import Overlay from "../ui/Overlay"
import Link from "next/link"
import {Image} from "next/image"
import { formatDate } from "@/utils/formatDate"

const Hero = ({posts}) => {
  const featuredPost = posts.filter((post) => post.featured === true);
  const topFeatured = featuredPost.slice(0, 1);
  const bottomFeatured = featuredPost.slice(1, 4);

  return (
    <section className="relative">
     <div className="w-[95%] mx-auto max-w-[1450px] z-1">
      {topFeatured.map((post, id) => (
        <article key={id} className="flex flex-col gap-5 mb-5 text-center relative">
         <Tag text={post.category} />
         <h2 className="text-3xl font-extrabold uppercase text-tertiary">{post.title}</h2>
         <div className="flex items-center gap-3 font-light text-tertiary justify-center">
          <div className="w-10 h-10 rounded-full bg-black">
          <img src={post.user.image} alt={`image for${post.title}`} className="object-cover rounded-full w-full h-full"/>
          </div>
          <span>{post.user.name}</span>
          <span className="italic">{formatDate(post.createdAt)}</span>
         </div>
         <Link href={`/blog/${post.id}`}>
         <div className="relative w-full md:w-[80%] mx-auto max-h-[400px] overflow-hidden shadow-xl">
          <img src={post.img} alt={`image for${post.title}`} className="object-cover rounded-lg w-full h-full"/>
         </div>
         </Link>
         {/* <Overlay  /> */}
        </article>
      ))}
      <div className="grid grid-cols-3 gap-8 max-lg:grid-cols-1">
        {bottomFeatured.map((post, id) => (
          <article className="flex flex-col gap-3 items-center text-center relative" key={id}>
          <Link
          className="w-full"
          href={`/blog/${post.id}`}>
          <div className="relative overflow-hidden h-72 shadow-xl w-full">
           <img src={post.img} alt={`image for${post.title}`} className="object-cover rounded-lg w-full h-full"/> 
            {/* <Overlay  /> */}
          </div>
          <Tag text={post.category} />
          <h3 className="text-sm font-extrabold uppercase text-tertiary px-5">{post.title}</h3>
          <span className="">By: {post.user.name}</span>
          <span className="font-light italic"> {formatDate(post.createdAt)}</span>
          </Link>
          </article>
        ))}
      </div>
     </div>
    </section>
  )
}

export default Hero

