
import Image from "next/image"
import Link from "next/link"
import Tag from "../ui/Tag"
import Overlay from "../ui/Overlay"
import { formatDate } from "@/utils/formatDate"



const TopPost = ({posts}) => {

   const topPost = posts.filter((post)=> post.topPost === true);
   

  return (
    <section className="my-4" aria-labelledby="top-post">
      <div className="w-full text-center">
        <h2 id="top-post" className="text-center text-2xl font-extrabold uppercase text-tertiary inline-block px-2 mb-6">Top Posts</h2>
      </div>
      <div className="flex f-full flex-col gap-12 items-center">
        {topPost.map((post, index)=>(
             <Link
             className="w-full"
             href={`/blog/${post.id}`} key={post.id}>
             <article key={index}>
              <div className="relative cursor-pointer">
                <Image src={post.img} width={800} height={800} alt={`Image for ${post.title}`} className="rounded-lg"/>
                {/* <Overlay /> */}
              </div>
              <div className="w-full flex justify-center">
                <Tag text={post.category} />
              </div>
              <h3 className="font-extrabold uppercase text-tertiary text-center">{post.title}</h3>
              <div className="flex gap-3 justify-center ">
                <span className="">By: {post.user.name}</span>
                <span className="italic font-light">{formatDate(post.createdAt.toString())}</span>
              </div>
             </article> 
            </Link>
        ))}
      </div>
    </section>
  )
}

export default TopPost

