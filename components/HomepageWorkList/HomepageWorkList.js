import Image from "next/image";
import Link from "next/link";

const HomepageWorkList = ({ workProjects }) => {
  return (
    <ul className="pb-12 space-y-12">
      {workProjects.map((workProject) => (
        <li
          className="flex flex-col items-center space-x-0 space-y-4 md:flex-row md:space-y-0 md:space-x-8 lg:space-x-12"
          key={workProject.id}
        >
          <Link href="/">
            <a className="flex w-full px-8 pt-8 overflow-hidden transition duration-500 ease-in-out bg-gray-100 rounded-lg md:px-12 md:pt-12 flex-end md:w-1/2 lg:w-2/3 h-72 hover:shadow-lg hover:scale-105">
              <div className="flex overflow-hidden shadow-md rounded-t-md">
                <img
                  src={workProject.image}
                  alt={workProject.company}
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
              {workProject.timestamp}
            </span>
            <h3 className="mb-1 text-xl font-semibold text-primary">
              {workProject.company}
            </h3>
            <span className="block mb-1 text-md text-tertiary">
              {workProject.stack}
            </span>
            <Link href={workProject.url}>
              <a className="w-full mt-2 btn-light md:w-auto">View Project</a>
            </Link>
          </div>
        </li>
      ))}
      {/* {workProjects.map((workProject) => (
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
      ))} */}
    </ul>
  );
};

export default HomepageWorkList;

// import Image from "next/image";
// import Link from "next/link";

// const HomepageWorkList = ({ workProjects }) => {
//   // add slug to firebase and then below in the workProject deconstruction
//   const { image, name, timestamp, description, link, url, company, stack } =
//     workProjects || {};
//   //   const { slug, image, name, timestamp, description, link, URL, company, stack  } =
//   // workProject || {};

//   return (
//     <ul className="pb-12 space-y-12">
//       {workProjects.map((workProject) => (
//         <li
//           className="flex flex-col items-center space-x-0 space-y-4 md:flex-row md:space-y-0 md:space-x-8 lg:space-x-12"
//           key={workProject.id}
//         >
//           <Link href="/">
//             {/* Add the slug into the link below to navigate to new page */}
//             {/* <Link href={'/workProjects/' + slug}> */}
//             <a className="flex w-full px-8 pt-8 overflow-hidden transition duration-500 ease-in-out bg-gray-100 rounded-lg md:px-12 md:pt-12 flex-end md:w-1/2 lg:w-2/3 h-72 hover:shadow-lg hover:scale-105">
//               <div className="flex overflow-hidden shadow-md rounded-t-md">
//                 <img
//                   src={image}
//                   alt={company}
//                   width={768}
//                   height={384}
//                   objectFit="cover"
//                   objectPosition="top left"
//                 />
//               </div>
//             </a>
//           </Link>
//           <div className="w-full md:w-1/2 lg:w-1/3">
//             <span className="block mb-1 text-xs font-semibold tracking-widest uppercase text-tertiary">
//               {timestamp}
//             </span>
//             <h3 className="mb-1 text-xl font-semibold text-primary">
//               {company}
//             </h3>
//             <span className="block mb-1 text-md text-tertiary">{stack}</span>
//             <Link href={url}>
//               <a className="w-full mt-2 btn-light md:w-auto">View Project</a>
//             </Link>
//           </div>
//         </li>
//       ))}
//     </ul>
//   );
// };

// export default HomepageWorkList;
