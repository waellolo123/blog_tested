"use client";
import { useState } from "react";
import BlogCard from "./BlogCard";
import Button from "../ui/Button";
import clsx from "clsx";


const Posts = ({posts}) => {
  const latestPost = posts.filter((blog)=>blog.latestPost === true);
  const [visibleBlogs, setVisibleBlogs] = useState(5);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const filterPostByCategory = () => {
    if(selectedCategory === "all"){
      return posts.slice(0, visibleBlogs)
    } else {
      return posts.filter((post)=>post.category === selectedCategory).slice(0, visibleBlogs)
    }
  }

  const categories = [
    "Gadgets",
    "Furniture",
    "Tech",
    "Accessories",
    "Newest"
  ]

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setVisibleBlogs(5);
  }

  const showMoreBlogs = () => {
    setVisibleBlogs((prev) => prev + 5)
  }

  return (
    <section className="col-span-2" aria-labelledby="latest-post">
      <div className="w-full text-center">
        <h2 className="text-center text-2xl font-extrabold uppercase text-tertiary inline-block px-2 mb-10" id="latest-post">Latest Posts</h2>
      </div>
      <div className="flex justify-center space-x-4 flex-wrap">
        {categories.map((category)=>(
          <button 
          key={category} 
          onClick={()=>handleCategoryChange(category)} 
          className={clsx(selectedCategory === category ? "bg-tertiary/60 text-white" : "bg-tertiary text-white", "px-4 py-2 rounded-lg hover:bg-tertiary/90 transition m-2 md:m-5")}>{category === "all" ? "All" : category}</button>
        ))}
      </div>
      <div className="flex flex-col gap-10 h-full">
        {filterPostByCategory().slice(0, visibleBlogs).map((post, id)=>(
          <BlogCard id={id} post={post}/>
        ))}
        {visibleBlogs < posts.length && (
          <div className="flex justify-center">
           <Button onClick={showMoreBlogs} text="Show More" aria="Show more blog posts"/> 
          </div>
        )}
      </div>
    </section>
  )
}

export default Posts;