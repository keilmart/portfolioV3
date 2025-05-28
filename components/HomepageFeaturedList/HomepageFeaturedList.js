import Link from "next/link";

import PlaceholderBlur from "../PlaceholderBlur/PlaceholderBlur";

const HomepageFeaturedList = ({ projects }) => {
  return (
    <ul>
      {projects.map(
        (project) => (
          console.log("Project", project.name, project.order),
          (
            <li
              className="flex flex-col items-center space-x-0 space-y-4 antialiased border-dotted md:first:border-b-0 first:border-b-2 first:pb-6 last:pt-6 md:flex-row md:space-y-0 md:space-x-8 lg:space-x-12 dark:border-gray-400"
              key={project.slug}>
              <Link
                slug={project.slug}
                href={{
                  pathname: `/projects/${project.slug}`,
                }}>
                <a
                  className="relative flex w-full h-48 pt-8 pl-8 overflow-hidden transition duration-500 ease-in-out bg-gray-100 rounded-lg dark:bg-darkModeDetail md:pl-12 md:pt-12 flex-end md:w-1/2 lg:w-2/3 sm:h-56 lg:h-72 hover:shadow-lg hover:scale-105"
                  aria-label="Project Card">
                  <div className="absolute flex overflow-hidden shadow-md top-10 rounded-tl-3xl">
                    <PlaceholderBlur
                      imageSrc={project.imageZoom}
                      imageWidth={721}
                      imageHeight={471}
                      imageAlt={project.name}
                      // objectFit="fill"
                      // objectPosition="top left"
                    />
                  </div>
                </a>
              </Link>
              <div className="w-full md:w-1/2 lg:w-1/3">
                <span className="hidden text-xs font-semibold tracking-widest uppercase md:block text-tertiary">
                  {project.timeline}
                </span>
                <h3 className="my-1 text-xl font-semibold text-primary dark:text-slate-200">
                  {project.name}
                </h3>
                <span className="block text-md text-tertiary">{project.stack}</span>
                <Link
                  slug={project.slug}
                  href={{
                    pathname: `/projects/${project.slug}`,
                  }}>
                  <a className="w-auto mt-3 btn-primary primary-grad">View Details</a>
                </Link>
              </div>
            </li>
          )
        )
      )}
    </ul>
  );
};

export default HomepageFeaturedList;
