"use client";

import { deletePost } from "@/app/actions/blogActions";
import Button from "../ui/Button";
import Input from "../ui/Input";
import { useState } from "react";


const DeletePost = ({post}) => {
  const [showModal, setShowModal] = useState(false);
  const handleDelete = () => {
    setShowModal(true);
  }
  const closeModal = () => {
    setShowModal(false);
  }
 

  return (
    <div className="">
      <Button  aria="delete post" onClick={handleDelete} text="Delete" action/>
      {showModal && (
        <>
         <div className="fixed inset-0 flex items-center justify-center z-50" onClick={() => setShowModal(false)}>
          <div className="w-screen h-screen bg-black/40 absolute" />        
            <div className="bg-white p-6 shadow-lg z-40 rounded-lg" onClick={(e) => e.stopPropagation()}>
              <p>Are you Sure you want to delete this post?</p>
              <div className="flex gap-3 mt-5">
                <form action={deletePost}>
                  <Input type="hidden" name="postId" value={post.id} />
                  <Button aria="delete post" type="submit" text="Yes" />
                </form>
                <Button aria="Cancel" onClick={closeModal} text="No"/>
              </div>
          </div>
         </div>
        </>
      )}
    </div>
  )
}

export default DeletePost

