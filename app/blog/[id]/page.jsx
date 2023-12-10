import Tag from "@/components/ui/Tag";
import Image from "next/image";
import {FaSquareXTwitter, FaSquareInstagram} from "react-icons/fa6";
import {FaFacebookSquare} from "react-icons/fa";
import { formatDate } from "@/utils/formatDate";

const getData = async (id) => {
  const res = await fetch(`http://localhost:3000/api/post/${id}`,
  {
    cache: "no-store"
  });
  if(!res.ok){
    throw new Error("Could not fetch the data");
  }
  return res.json()
}

const BlogDetails = async ({params}) => {
  const {id} = params;
  const post = await getData(id);

  return (
    <div className="w-[95%] mx-auto max-w-[1450px]">
      <div key={post.id} className="w-full h-[400px] relative mb-5">
        <Image src={post.img} fill alt="image for blog" className="object-cover"/>
      </div>
      <Tag text={post.category} />
      <h2 className="text-xl md:text-4xl font-extrabold uppercase text-tertiary my-3">{post.title}</h2>
      <div className="flex md:gap-20 gap-5 relative mt-10 md:flex-row flex-col">
        <aside className="md:sticky md:top-2/4 md:first-letter:h-screen">
         <span className="uppercase text-2xl font-extrabold text-tertiary">
          Share: 
         </span>
         <div className="flex text-3xl gap-2 text-gray-400 mt-2">
            <FaFacebookSquare className="text-gray-400 text-2xl"/>
            <FaSquareInstagram className="text-gray-400 text-2xl"/>
            <FaSquareXTwitter className="text-gray-400 text-2xl"/>
         </div>
        </aside>
        <article>
          <p className="text-xl">{post.desc}</p>
          <div className="mt-5 flex gap-5 items-center">
            <Image src={post.user.image} width={500} height={500} alt={`image of ${post.title}`} className="rounded-full w-20 h-20 object-cover" />
            <div className="flex gap-1 flex-col">
              <span>{post.user.name}</span>
              <span>{formatDate(post.createdAt)}</span>
            </div>
          </div>
        </article>
      </div>
    </div>
  )
}

export default BlogDetails

