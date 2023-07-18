import Image from "next/image";

const ProjectBox = ({
  imgSrc,
  deps,
  demoLink,
  githubLink,
  overlay,
  hoverColor,
  overlayColor,
  description,
}) => {
  return (
    <div className="group rounded-2xl md:w-full mx-auto relative h-[300px] w-[90%] md:h-[350px] shadow-xl border-4 border-gray-900">
        <div>
          <Image
            src={imgSrc}
            fill
            alt="ProjectImage"
            objectFit="cover"
            className="rounded-2xl"
          />
        </div>
        <div
          className={`absolute text-black inset-0 ${overlayColor} group-hover:hidden flex gap-4 flex-col items-center justify-center text-4xl  font-bold rounded-2xl`}
        >
          <div className="w-full text-center text-white bg-neutral-900/70 py-2">
            <div className="">{overlay}</div>
            <p className="text-sm text-center px-[12px]">{description}</p>
          </div>
        </div>
        <div
          className={`absolute gap-y-8 flex-col inset-0 hidden ${hoverColor} rounded-2xl transition-all  items-center justify-center py-4  group-hover:flex z-10`}
        >
          {deps && deps.length > 0 && (
            <div className="p-2 text-md flex gap-4 flex-wrap items-center justify-center text-center">
              {deps.map((dep) => (
                <p
                  className="hover:border-black hover:bg-black hover:text-white border p-2 rounded-md text-sm md:text-md text-center"
                  key={0}
                >
                  {dep}
                </p>
              ))}
            </div>
          )}

          <div className="flex gap-4">
            <a
              className="cursor-pointer hover:bg-gray-950 font-bold p-4 rounded bg-gray-800"
              href={githubLink} target="_blank"
            >
              View Code
            </a>
            <a
              className="cursor-pointer font-bold hover:bg-gray-950 text-[16px] p-4 rounded bg-gray-800"
              href={demoLink} target="_blank"
            >
              Visit Website
            </a>
          </div>
        </div>
    </div>
  );
};

export default ProjectBox;
