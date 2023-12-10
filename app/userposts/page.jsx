import prisma from '@/lib/prismaDb';
import getCurrentUser from '../actions/getCurrentUser';
import BlogCard from '@/components/shared/BlogCard';
import DeletePost from '@/components/shared/DeletePost';


const page = async () => {
  const user = await getCurrentUser();
  const posts = await prisma.blog.findMany({
    where: {
      userEmail: user?.email
    },
    orderBy: {
      createdAt: "desc"
    }
  })

  return (
    <div className='w-full flex justify-center items-center'>
      {!user ? (
        <h1 className='text-3xl font-extrabold text-slate-500'>Sign In to view your posts</h1>
      ) : (
        <div className="max-w-[90%] mx-auto">
        <div className="w-full text-center mb-10">
          <h1 className="text-3xl font-extrabold text-tertiary">Hello, {user?.name}</h1>
          <span className="text-lg">You have published {posts.length} articles</span>
        </div>
        <div className="grid md:grid-cols-2 sm:grid-cols-1 justify-center items-center gap-10">
          {posts.map((post)=>(
            <div className="relative" key={post.id}>
              <BlogCard post={post} />
              <DeletePost post={post} />
            </div>
          ))}
        </div>
      </div>
      )}
    </div>
  )
}

export default page

