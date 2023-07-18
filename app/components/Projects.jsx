import Container from "./Container"
import Heading from "./Heading"
import ProjectBox from "./ProjectBox"




const projectsListing = [
  {
    id: 1,
    imgSrc: "/project1.png",
    overlay: "Airbnb Clone",
    desc: "A full Airbnb Clone with User's Authentication and product listing functionality",
    overlayClr: 'bg-black/70',
    hoverClr: "bg-[#1F3D6A]",
    deps: ["NEXTJS", "REACTJS", "MONGODB","NEXT-AUTH", "PRISMA", "TAILWINDCSS"],
    demoLink: 'https://rent-a-dream.vercel.app/',
    githubLink:'https://github.com/salmank7/nextjs-13-airbnb-clone'
  }
]



const Projects = () => {
  return (
    <div id="projects" className="border-t bg-[#414f58] text-[#c5c5c5] py-5 min-h-screen">
        <Container >
            <Heading title="Projects" number="2."/>
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 min-h-screen">
                {projectsListing.map((project)=>(
                  <ProjectBox key={project.id} imgSrc={project.imgSrc} overlay={project.overlay} description={project.desc} overlayColor={project.overlayClr} hoverColor={project.hoverClr} deps={project.deps} githubLink={project.githubLink} demoLink={project.demoLink}  />
                ))}
            </div>
        </Container>
    </div>
  )
}

export default Projects