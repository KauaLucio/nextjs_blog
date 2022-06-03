import Link from 'next/link'
import React from 'react'
import { BiSearchAlt, BiChevronRight } from 'react-icons/bi'

const Sidebar = () => {
  return (
    <div className="w-full rounded-xl shadow-lg bg-white sticky top-4 p-5">
      <div className="mb-10">
        <h3 className="text-xl font-bold text-cyan-500 mb-4 uppercase">Buscar no Blog</h3>
        <form className="flex w-full">
          <input 
            className=" h-10 border w-4/5"
            type="text"
            
          />
          <button type="submit" className="w-1/5 h-10 text-white bg-cyan-500 hover:bg-cyan-600 flex items-center justify-center">
            <BiSearchAlt fontSize={25} />
          </button>
        </form>
      </div>
      <div>
        <h3 className="text-xl font-bold text-cyan-500 mb-4 uppercase">Categorias</h3>
        <ul>
          <li className="flex items-center gap-1 hover:text-cyan-600 font-medium border-b py-3">
            <BiChevronRight fontSize={26}/>
            <Link href="/category/{nameCategory}">
              Pragramação (5)
            </Link>
          </li>
          
          <li className="flex items-center gap-1 hover:text-cyan-600 font-medium border-b py-3">
            <BiChevronRight fontSize={26}/>
            <Link href="/category/{nameCategory}">
              JavaScript (10)
            </Link>
          </li>

          <li className="flex items-center gap-1 hover:text-cyan-600 font-medium border-b py-3">
            <BiChevronRight fontSize={26}/>
            <Link href="/category/{nameCategory}">
              Carreira (4)
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar