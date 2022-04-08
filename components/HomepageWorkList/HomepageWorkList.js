import Image from "next/image";
import Link from "next/link";

const HomepageWorkList = ({ workProjects }) => {
  return (
    <ul className="pb-12 space-y-12">
      <li className="flex flex-col items-center space-x-0 space-y-4 md:flex-row md:space-y-0 md:space-x-8 lg:space-x-12">
        <Link href="/">
          <a className="flex w-full px-8 pt-8 overflow-hidden transition duration-500 ease-in-out bg-gray-100 rounded-lg md:px-12 md:pt-12 flex-end md:w-1/2 lg:w-2/3 h-72 hover:shadow-lg hover:scale-105">
            <div className="flex overflow-hidden shadow-md rounded-t-md">
              <Image
                src="/pictures/project.png"
                alt="MOCKUP10"
                width={768}
                height={384}
                objectFit="cover"
                objectPosition="top left"
              />
            </div>
          </a>
        </Link>
        <div className="w-full md:w-1/2 lg:w-1/3">
          <span className="block mb-1 text-xs font-semibold tracking-widest uppercase text-tertiary">
            Company Name
          </span>
          <h3 className="mb-1 text-xl font-semibold text-primary">
            Project Title
          </h3>
          <span className="block mb-1 text-md text-tertiary">
            Project Subtitle
          </span>
          <Link href="/">
            <a className="w-full mt-2 btn-light md:w-auto">View Project</a>
          </Link>
        </div>
      </li>
      {workProjects.map((workProject) => (
        <div key={workProject.id}>
          <img
            src={workProject.image}
            alt={workProject.name}
            width={420}
            height={300}
            objectFit="cover"
            objectPosition="top left"
          />
          <div className="flex flex-col">
            <div>{workProject.name}</div>
            <div>{workProject.timestamp}</div>
            <div>{workProject.description}</div>
            <div>{workProject.stack}</div>
            <a href={workProject.url}>Link here</a>
            <div>{workProject.company}</div>
          </div>
        </div>
      ))}
    </ul>
  );
};

export default HomepageWorkList;
