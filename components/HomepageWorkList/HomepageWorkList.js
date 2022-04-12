import Image from "next/image";
import Link from "next/link";

const HomepageWorkList = ({ projects }) => {
  // const {
  //   slug,
  //   image,
  //   name,
  //   timestamp,
  //   description,
  //   link,
  //   URL,
  //   company,
  //   stack,
  // } = project || {};

  return (
    <ul className="pb-12 space-y-12">
      {projects.map((project) => (
        <li
          className="flex flex-col items-center space-x-0 space-y-4 md:flex-row md:space-y-0 md:space-x-8 lg:space-x-12"
          key={project.id}
        >
          <Link
            href={{
              pathname: `/projects/${project.slug}`,
              query: { project: JSON.stringify(project) },
            }}
          >
            <a className="relative flex w-full px-8 pt-8 overflow-hidden transition duration-500 ease-in-out bg-gray-100 rounded-lg md:px-12 md:pt-12 flex-end md:w-1/2 lg:w-2/3 h-72 hover:shadow-lg hover:scale-105">
              <div className="absolute flex overflow-hidden shadow-md rounded-tl-md">
                <Image
                  src={project.image}
                  alt={project.name}
                  width={668}
                  height={330}
                  objectFit="fill"
                  objectPosition="top left"
                />
              </div>
            </a>
          </Link>
          <div className="w-full md:w-1/2 lg:w-1/3">
            <span className="block mb-1 text-xs font-semibold tracking-widest uppercase text-tertiary">
              {project.timestamp}
            </span>
            <h3 className="mb-1 text-xl font-semibold text-primary">
              {project.name}
            </h3>
            <span className="block mb-1 text-md text-tertiary">
              {project.stack}
            </span>
            <Link
              href={{
                pathname: `/projects/${project.slug}`,
                query: { project: JSON.stringify(project) },
              }}
            >
              <a className="w-full mt-2 btn-light md:w-auto">View Project</a>
            </Link>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default HomepageWorkList;
