import Link from "next/link";

import Layout from "../components/Layout/Layout";
import ProjectLayout from "../components/Layout/ProjectLayout";

const HomepagePersonalListItem = () => {
  return (
    <>
      <Layout>
        {/* <ProjectLayout> */}
        <main className="mt-12">
          <div className="mb-8">
            <Link href="/#work">
              <a className="border-b border-gray-700 text-secondary hover:bg-gray-100">
                &larr; Back to Projects
              </a>
            </Link>
          </div>
          <h1 className="mb-6 text-3xl font-bold tracking-tight md:mb-8 md:text-6xl leading-headers">
            Project Title
          </h1>
          <div className="flex items-center space-x-8">
            {/* {project.company && ( */}
            <div>
              <h2 className="font-semibold text-md">Company</h2>
              <span className="text-md text-tertiary">Project Company</span>
            </div>
            {/* )} */}
            <div>
              <h2 className="font-semibold text-md">Timeline</h2>
              <span className="text-md text-tertiary">
                The Project Timeline
              </span>
            </div>
          </div>
          <hr className="my-8 border-t-2 border-b-0 border-dotted border-primary" />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam modi
          nihil, error harum laudantium eum ratione qui, veniam quam sint
          praesentium molestias vero enim voluptatum nisi velit eaque
          exercitationem id!
        </main>
        {/* </ProjectLayout> */}
      </Layout>
    </>
  );
};

export default HomepagePersonalListItem;
