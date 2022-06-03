import Link from 'next/link'
import React from 'react'

type CarouselItemProps = {
  urlImage: string
}

const CarouselItem = ({urlImage}: CarouselItemProps) => {
  return (
    <div className="relative z-10 w-full h-[500px] text-white ">
      <div 
        className="z-10 absolute bg-center bg-no-repeat bg-cover shadow-md inline-block w-full h-full"
        style={{backgroundImage: `url("${urlImage}")`}}  
      />
      <div className="absolute z-20 rounded-lg bg-center opacity-30 bg-[#1F2022] w-full h-full" />
      <div className="relative z-30 h-full p-10 flex flex-col justify-center">
        <span className="inline-block text-md font-medium mb-1">Categoria</span>
        <h2 className="text-3xl font-bold mb-3">Título da postagem</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae enim officia tempore earum aliquid incidunt quo nisi sapiente, repellat error natus aperiam veniam?</p>
        <div className="mt-2">
          <Link href="/post/slug">
            <a className="inline-block py-2 px-5 rounded-full bg-cyan-400 hover:bg-cyan-500 text-white font-medium">
              Ler mais
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CarouselItem