import Image from "next/image";
import Link from "next/link";

const HomepageFeaturedList = ({ projects }) => {
  return (
    <ul>
      {projects.map((project) => (
        <li
          className="flex flex-col items-center space-x-0 space-y-4 antialiased border-dotted md:first:border-b-0 first:border-b-2 first:pb-6 last:pt-6 md:flex-row md:space-y-0 md:space-x-8 lg:space-x-12 dark:border-gray-400"
          key={project.slug}
        >
          <Link
            slug={project.slug}
            href={{
              pathname: `/projects/${project.slug}`,
            }}
          >
            <a className="relative flex w-full h-48 pt-8 pl-8 overflow-hidden transition duration-500 ease-in-out bg-gray-100 rounded-lg dark:bg-darkModeDetail md:pl-12 md:pt-12 flex-end md:w-1/2 lg:w-2/3 sm:h-56 lg:h-72 hover:shadow-lg hover:scale-105">
              <div className="absolute flex overflow-hidden shadow-md top-10 rounded-tl-3xl">
                <Image
                  src={project.imageZoom ? project.imageZoom : project.image}
                  alt={project.name}
                  width={721}
                  height={471}
                  objectFit="fill"
                  objectPosition="top left"
                />
              </div>
            </a>
          </Link>
          <div className="w-full md:w-1/2 lg:w-1/3">
            <span className="hidden text-xs font-semibold tracking-widest uppercase md:block text-tertiary">
              {project.timeline}
            </span>
            <h3 className="my-1 text-xl font-semibold text-primary dark:text-white">
              {project.name}
            </h3>
            <span className="block text-md text-tertiary">{project.stack}</span>
            <Link
              slug={project.slug}
              href={{
                pathname: `/projects/${project.slug}`,
              }}
            >
              <a className="w-auto mt-3 btn-primary primary-grad">
                View Project
              </a>
            </Link>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default HomepageFeaturedList;
