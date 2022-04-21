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
    // <ul>
    <ul className="pb-10 md:pb-0">
      {/* <ul className="pb-12 space-y-12"> */}
      {projects.map((project) => (
        <li
          className="flex flex-col items-center space-x-0 space-y-4 md:first:border-b-0 first:border-b-2 first:pb-6 last:pt-6 md:flex-row md:space-y-0 md:space-x-8 lg:space-x-12"
          key={project.slug}
        >
          <Link
            slug={project.slug}
            href={{
              pathname: `/projects/${project.slug}`,
              // query: { project: JSON.stringify(project) },
            }}
          >
            <a className="relative flex w-full px-8 pt-8 overflow-hidden transition duration-500 ease-in-out bg-gray-100 rounded-lg md:px-12 md:pt-12 flex-end md:w-1/2 lg:w-2/3 h-72 hover:shadow-lg hover:scale-105">
              <div className="absolute flex overflow-hidden shadow-md rounded-tl-md">
                <Image
                  src={!!project.imageZoom ? project.imageZoom : project.image}
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
            <span className="block text-xs font-semibold tracking-widest uppercase text-tertiary">
              {project.timeline}
            </span>
            <h3 className="my-1 text-xl font-semibold text-primary">
              {project.name}
            </h3>
            <span className="block text-md text-tertiary">{project.stack}</span>
            <Link
              slug={project.slug}
              href={{
                pathname: `/projects/${project.slug}`,
                // query: { project: JSON.stringify(project) },
              }}
            >
              <a className="w-auto mt-3 btn-light">View Project</a>
            </Link>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default HomepageWorkList;
