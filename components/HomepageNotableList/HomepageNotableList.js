import Link from "next/link";

import PlaceholderBlur from "../PlaceholderBlur/PlaceholderBlur";

const NotableProjectList = ({ projects }) => {
  return (
    <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 md:gap-10">
      {projects.map((project) => (
        <li
          className="pb-6 antialiased border-b-2 border-dotted dark:border-gray-400"
          key={project.slug}
        >
          <Link
            slug={project.slug}
            href={{
              pathname: `/projects/${project.slug}`,
            }}
          >
            <a className="relative inline-block w-full h-48 pt-8 pl-8 mb-4 overflow-hidden transition duration-500 ease-in-out bg-gray-100 rounded-lg dark:bg-darkModeDetail hover:shadow-lg hover:scale-105">
              <div className="absolute w-full overflow-hidden rounded-tl-3xl top-10">
                <PlaceholderBlur
                  imageSrc={
                    project.imageZoom ? project.imageZoom : project.image
                  }
                  imageWidth={768}
                  imageHeight={384}
                  imageAlt={project.name}
                  objectFit="cover"
                  objectPosition="top left"
                />
              </div>
            </a>
          </Link>
          <h3 className="mb-1 text-xl font-semibold text-primary dark:text-white">
            {project.name}
          </h3>
          <span className="block mb-1 text-md text-tertiary">
            {project.stack}
          </span>
          <Link
            slug={project.slug}
            href={{
              pathname: `/projects/${project.slug}`,
            }}
          >
            <a className="w-auto mt-2 btn-primary primary-grad">View Project</a>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NotableProjectList;
