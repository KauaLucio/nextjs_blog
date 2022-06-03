import type { NextPage } from 'next'
import CarouselPosts from '../components/CarouselPosts'
import PostSingle from '../components/PostSingle'
import Sidebar from '../components/Sidebar'

const Home: NextPage = () => {
  return ( 
    <>
      <CarouselPosts />
      <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-3 md:p-7 gap-10">
        <section className="sm:col-span-1 md:col-span-2 p-3">
          <PostSingle />
          <PostSingle />
          <PostSingle />
          <PostSingle />
        </section>
        <aside className="col-span-1 p-3 relative">
          <Sidebar />
        </aside>
      </div>
    </>
   )
}

export default Home
