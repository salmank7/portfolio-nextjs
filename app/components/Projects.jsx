import Container from "./Container"
import Heading from "./Heading"
import ProjectBox from "./ProjectBox"




const projectsListing = [
  {
    id: 1,
    imgSrc: "/project1.png",
    overlay: "Airbnb Clone",
    desc: "A full Airbnb Clone with User's Authentication and product listing functionality",
    overlayClr: 'bg-gray-600/40',
    hoverClr: "bg-[#d3344f]",
    deps: ["NEXTJS", "REACTJS", "MONGODB","NEXT-AUTH", "PRISMA", "TAILWINDCSS"],
    demoLink: 'https://rent-a-dream.vercel.app/',
    githubLink:'https://github.com/salmank7/nextjs-13-airbnb-clone',
    depsText: 'text-white'
  },
  {
    id: 2,
    imgSrc: "/project2.webp",
    overlay: "CZone frontend",
    desc: "a fully responsive frontend of ecommerece app",
    overlayClr: 'bg-gray-600/40',
    hoverClr: "bg-[#0C4A79]",
    deps: [ "REACTJS", "TAILWINDCSS", "REACT-ROUTER", "REACT-ROUTER-DOM"],
    demoLink: 'https://vocal-alfajores-4f2b46.netlify.app',
    githubLink:'https://github.com/salmank7/czone-tailwind',
    depsText: 'text-white'
  },
  {
    id: 3,
    imgSrc: "/project3.png",
    overlay: "Cryptoart",
    desc: "a fully responsive frontend static landing page of NFTs",
    overlayClr: 'bg-gray-300/40',
    hoverClr: "bg-[#aa1e7c]",
    deps: [ "HTML", "TAILWINDCSS", "REACT-SLICK", "JAVASCRIPT", "WEBPACK"],
    demoLink: 'https://crypt-art.netlify.app/',
    githubLink:"https://github.com/salmank7/crypto-nft",
    depsText: 'text-white'
  },
]



const Projects = () => {
  return (
    <div id="projects" className="border-t bg-[#414f58] text-[#c5c5c5] py-5 min-h-screen">
        <Container >
            <Heading title="Projects" number="2."/>
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 min-h-screen">
                {projectsListing.map((project)=>(
                  <ProjectBox key={project.id} imgSrc={project.imgSrc} overlay={project.overlay} depsText={project.depsText} description={project.desc} overlayColor={project.overlayClr} hoverColor={project.hoverClr} deps={project.deps} githubLink={project.githubLink} demoLink={project.demoLink}  />
                ))}
            </div>
        </Container>
    </div>
  )
}

export default Projects