'use client';

import Container from "./Container";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {CiMenuFries} from 'react-icons/ci'


const Header = () => {
    const router = useRouter();
    const [toggle, setToggle] = useState(false)

    const handleClick = () =>{
            setToggle(!toggle)
    }



  return (
    <div className="py-2 shadow-sm relative">
        <Container >
            <div className="flex items-center justify-between relative ">
                <div className="flex-1 font-bold text-2xl md:text-3xl cursor-pointer" onClick={()=> router.push('/')}>
                    SALMAN K.
                </div>
                <div className={`${toggle? 'top-10' : "-top-40"} shadow-lg md:shadow-none transition-all duration-300 absolute md:static w-full
                md:w-auto text-center gap-2 md:gap-x-4 py-4  flex flex-col md:flex-row items-center text-lg font-semibold  bg-white`}>
                    <a href="#projects" className="hover:underline cursor-pointer" onClick={()=> setToggle(false)}>
                        Projects
                    </a>
                    <div onClick={()=> {
                        router.push("/contact")
                        setToggle(false)
                    }} className="hover:underline cursor-pointer border-[#354048] text-[#354048] py-2 px-6 border rounded-full hover:text-white hover:bg-[#354048]  ">
                        Contact
                    </div>
                </div>
                <div className="md:hidden flex-1 flex justify-end  cursor-pointer" onClick={handleClick}>
                    <CiMenuFries size={28}/>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Header