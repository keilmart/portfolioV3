import Image from "next/image";
import Link from "next/link";

const PersonalProjectList = ({ personalProjects }) => {
  return (
    <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 md:gap-10">
      {personalProjects.map((personalProject) => (
        <li className="pb-6 border-b-2">
          <Link
            href={"/projects/" + personalProject.slug}
            key={personalProject.slug}
          >
            <a className="relative inline-block w-full h-48 pt-8 pl-8 mb-4 overflow-hidden transition duration-300 ease-in-out bg-gray-100 rounded-lg hover:shadow-lg hover:scale-105">
              <div className="absolute w-full overflow-hidden rounded-tl-3xl top-10">
                <img
                  src={personalProject.image}
                  alt={personalProject.name}
                  width={768}
                  height={384}
                  objectFit="cover"
                  objectPosition="top left"
                />
              </div>
            </a>
          </Link>
          <h3 className={`font-semibold text-xl text-primary mb-1`}>
            {personalProject.name}
          </h3>
          <span className={"block text-md text-tertiary mb-1"}>
            {personalProject.stack}
          </span>
          <Link href={"/projects/" + personalProject.slug}>
            <a className="mt-2 btn-light">View Project</a>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default PersonalProjectList;
