export const revalidate = 0;
import Hero from "@/components/shared/Hero"
import LatestPost from "@/components/shared/LatestPost"
import TopPost from "@/components/shared/TopPost"
import prisma from '@/lib/prismaDb';

const Home = async () => {
  const posts = await prisma.blog.findMany({
    include: {
      user: true
    }, 
    orderBy: {
      createdAt: 'desc'
    }
  })

  console.log(posts);
  

  return (
    <>
     <Hero posts={posts}/>
     <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-10 w-[95%] mx-auto max-w-[1450px] overflow-y-hidden h-fit mt-10">
      <LatestPost posts={posts}/>
      <TopPost posts={posts}/>
     </div>
    </>
  )
}

export default Home

