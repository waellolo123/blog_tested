"use server";

import prisma from "@/lib/prismaDb";
import { revalidatePath } from "next/cache";

export async function createPost(formData){
  const title = formData.get("title")
  const desc = formData.get("desc") 
  const category = formData.get("category")
  const userEmail = formData.get("email")
  const image = formData.get("image")

  await prisma.blog.create({
    data: {
      img: image,
      title: title,
      desc: desc,
      category: category,
      userEmail: userEmail
    }
  })
  revalidatePath("/create");
}

export async function deletePost(formData){
  const id = formData.get('postId');
  await prisma.blog.delete({
    where: {
      id: id
    }
  })
  revalidatePath("/userposts");
}


