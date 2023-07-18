'use client';

import Container from "./Container";


const Hero = () => {
  return (
    <div className="mt-10 flex items-center text-center justify-center">
        <Container>
            <div className="flex flex-col gap-4 ">
              <h1 className="font-bold text-[2.5rem] text-[#354048] sm:text-[4rem] md:text-[7rem] whitespace-nowrap">SALMAN KHAN</h1>
                <div className="font-bold text-2xl md:text-4xl whitespace-nowrap">
                   Full Stack Developer
                </div>
                <div className="text-xl md:text-2xl">
                    I design and code beautifully simple things, and I love what I do.
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Hero