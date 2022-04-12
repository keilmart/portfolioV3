import Image from "next/image";
import Link from "next/link";

const PersonalProjectList = ({ projects }) => {
  return (
    <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 md:gap-10">
      {projects.map((project) => (
        <li className="pb-6 border-b-2" key={project.id}>
          <Link
            href={{
              pathname: `/projects/${project.slug}`,
              query: { project: JSON.stringify(project) },
            }}
          >
            <a className="relative inline-block w-full h-48 pt-8 pl-8 mb-4 overflow-hidden transition duration-300 ease-in-out bg-gray-100 rounded-lg hover:shadow-lg hover:scale-105">
              <div className="absolute w-full overflow-hidden rounded-tl-3xl top-10">
                <Image
                  src={project.image}
                  alt={project.name}
                  width={768}
                  height={384}
                  objectFit="cover"
                  objectPosition="top left"
                />
              </div>
            </a>
          </Link>
          <h3 className={`font-semibold text-xl text-primary mb-1`}>
            {project.name}
          </h3>
          <span className={"block text-md text-tertiary mb-1"}>
            {project.stack}
          </span>
          <Link
            href={{
              pathname: `/projects/${project.slug}`,
              query: { project: JSON.stringify(project) },
            }}
          >
            <a className="mt-2 btn-light">View Project</a>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default PersonalProjectList;
