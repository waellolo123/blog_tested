"use client";
import { useState } from "react";
import BlogCard from "./BlogCard";
import Button from "../ui/Button";


const LatestPost = ({posts}) => {
  const latestPost = posts.sort((a,b)=> new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

  const [visibleBlogs, setVisibleBlogs] = useState(5);
  const showMoreBlogs = () => {
    setVisibleBlogs((prev) => prev + 5)
  }

  return (
    <section className="col-span-2" aria-labelledby="latest-post">
      <div className="w-full text-center">
        <h2 className="text-center text-2xl font-extrabold uppercase text-tertiary inline-block px-2 mb-10" id="latest-post">Latest Posts</h2>
      </div>
      <div className=" flex flex-col gap-10 h-full">
        {latestPost.slice(0, visibleBlogs).map((post, id)=>(
          <BlogCard id={id} post={post}/>
        ))}
        {visibleBlogs < latestPost.length && (
          <div className="flex justify-center">
           <Button onClick={showMoreBlogs} text="Show More" aria="Show more blog posts"/> 
          </div>
        )}
      </div>
    </section>
  )
}

export default LatestPost;


