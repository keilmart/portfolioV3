import Link from "next/link";
import { withRouter } from "next/router";

import Layout from "../../components/Layout/Layout";

async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = response.json();

  const paths = data.map((project) => {
    return {
      params: { id: project.id.toString() },
    };
  });
  return {
    paths: paths,
    fallback: false,
  };
};

const ProjectDetails = ({ router: { query } }) => {
  const project = JSON.parse(query.project);

  return (
    <>
      <Layout>
        {console.log(project)}
        <main className="mt-12">
          <div className="mb-8">
            <Link href="/#workProjects">
              <a className="border-b border-gray-700 text-secondary hover:bg-gray-100">
                &larr; Back to Projects
              </a>
            </Link>
          </div>
          <h1 className="mb-6 text-3xl font-bold tracking-tight md:mb-8 md:text-6xl leading-headers">
            {project.company}
          </h1>
          <div className="flex items-center space-x-8">
            <div>
              <h2 className="font-semibold text-md">Company</h2>
              <span className="text-md text-tertiary">{project.company}</span>
            </div>
            <div>
              <h2 className="font-semibold text-md">Timeline</h2>
              <span className="text-md text-tertiary">{project.timestamp}</span>
            </div>
          </div>
          <hr className="my-8 border-t-2 border-b-0 border-dotted border-primary" />
          <a
            className="relative inline-block w-full px-10 pt-10 overflow-hidden transition duration-300 ease-in-out bg-gray-100 rounded-lg h-min hover:shadow-lg hover:scale-105"
            href={`https://${project.url}`}
            target={"_blank"}
            rel={"noreferrer"}
          >
            <div className="w-full overflow-hidden rounded-t-3xl top-10">
              <img
                src={project.image}
                alt={project.name}
                // width={768}
                // height={384}
                objectFit="cover"
                objectPosition="top left"
              />
            </div>
          </a>
          <hr className="my-8 border-t-2 border-b-0 border-dotted border-primary" />
          {project.description}
        </main>
      </Layout>
    </>
  );
};

export default withRouter(ProjectDetails);
