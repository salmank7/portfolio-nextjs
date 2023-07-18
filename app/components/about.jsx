"use client";

import "devicon";
import Container from "./Container";
import Heading from "./Heading"

const skills = [
  { name: "react", icon: "devicon-react-original" },
  { name: "nextjs", icon: "devicon-nextjs-line" },
  { name: "javascript", icon: "devicon-javascript-plain" },
  { name: "typescript", icon: "devicon-typescript-original" },
  { name: "sass", icon: "devicon-sass-original" },
  { name: "tailwind", icon: "devicon-tailwindcss-plain" },
  { name: "git", icon: "devicon-git-plain" },
  { name: "webpack", icon: "devicon-webpack-plain" },
  { name: "jest", icon: "devicon-jest-plain" },
  { name: "redux", icon: "devicon-redux-plain" },
  { name: "npm", icon: "devicon-npm-original-wordmark" },
  { name: "mongodb", icon: "devicon-mongodb-plain" },
  { name: "Bootstrap", icon: "devicon-bootstrap-plain" },
];

const skillsWithIds = skills.map((skill, index) => ({
  id: index + 1,
  name: skill.name,
  icon: skill.icon,
}));

const About = () => {
  return (
    <div className="bg-[#414f58] text-[#c5c5c5] py-5 pb-16 mt-10">
      <Container>
        <Heading number="01." title="About"/>
        <div className="flex flex-col gap-6 mb-10 text-md font-[500] md:w-[90%] text-center md:text-left">
          <p>Hi there! I&apos;m <b>Salman Khan</b>, a web Developer.</p>
          <p>Growing up, I always had an affinity for everything tech related. Jailbreaking my first iPod, installing custom ROMs on my android phones (and nearly bricking them) or modding my gaming consoles were some of the things that developed my problem solving skills.</p>
          <p>Today I&apos;m enthralled by web development. Creating new experiences, implementing eye pleasing designs and making them come to life with animation is what I do best.</p>
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
          {skillsWithIds.map((skill)=>(
            <div key={skill.id} className="relative flex items-center justify-center flex-col h-[6.5rem] w-[6.5rem] md:w-[8rem] md:h-[8rem] border-2 border-dotted shadow-md hover:scale-[1.025]">
              <div className="flex flex-col mb-2 gap-2 md:gap-4">
                <i className={`${skill.icon} colored text-[2.5rem] md:text-[3.5rem] mx-auto`}/>
                <p className="text-sm uppercase text-center">{skill.name}</p>
              </div>
              <div className="absolute bottom-1 right-2">
              {skill.id}
              </div>
           </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default About;
