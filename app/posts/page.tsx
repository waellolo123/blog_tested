import Posts from "@/components/shared/Posts"
import TopPost from "@/components/shared/TopPost"
import prisma from '@/lib/prismaDb';


const page = async () => {

  const posts = await prisma.blog.findMany({
    include: {
      user: true
    },
    orderBy: {
      createdAt: "desc"
    }
  })


  return (
    <div className="grid lg:grid-cols-3 lg:gap-10 grid-cols-1 w-[95%] mx-auto max-w-[1450px] overflow-y-hidden h-fit mt-10 max-lg:space-y-7">
      <Posts posts={posts}/>
      <TopPost posts={posts}/>
    </div>
  )
}

export default page