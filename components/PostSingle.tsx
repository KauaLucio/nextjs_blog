import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AiFillCalendar, AiFillTags } from 'react-icons/ai'
import { BsPersonFill } from 'react-icons/bs'

const PostSingle = () => {
  return (
    <div className="w-full rounded-xl shadow-lg bg-white p-5 mb-5">
      <div className="w-full">
       <Image 
        src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
        alt="Capa Post"
        width={800}
        height={500}
        objectFit="cover"
        objectPosition="center"
        style={{borderRadius: '12px' }}
      />
      </div>
      <div className="p-2">
        <div className="flex items-center gap-5 font-medium text-slate-500">
          <p className="flex items-center gap-2">
            <AiFillCalendar />
            02/06/2022
          </p>

          <p className="flex items-center gap-2">
            <AiFillTags />
            Programação
          </p>

          <p className="flex items-center gap-2">
            <BsPersonFill />
            Lorrany Rio Branco
          </p>
        </div>
        <h2 className="inline-block my-4 hover:text-cyan-500 text-neutral-800 font-bold text-4xl">
          <Link href="/post/slug">
            Titulo da postagem
          </Link>
        </h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur eaque eveniet ipsa laborum maiores, culpa, omnis enim deserunt accusamus porro vero reprehenderit maxime voluptate quis, esse facere velit voluptatum explicabo.</p>
          
      </div>
    </div>
  )
}

export default PostSingle