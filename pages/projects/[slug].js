import Link from "next/link";
import Image from "next/image";

import SEO from "/components/SEO/SEO";
import Layout from "../../components/Layout/Layout";
import PlaceholderBlur from "../../components/PlaceholderBlur/PlaceholderBlur";

import { db } from "../../firebase/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

const ProjectDetails = ({ projectData }) => {
  const project = projectData[0];
  return (
    <Layout>
      <SEO
        title={project.name}
        description={project.description}
        og="og-home.png"
      />
      <main className="mt-9">
        <div className="mb-8">
          <Link
            href={`${project.personal === true ? "/#notable" : "/#featured"}`}
          >
            <a className="border-b border-gray-700 text-tertiary hover:bg-gray-100">
              &larr; Back to Projects
            </a>
          </Link>
        </div>
        <h1 className="mb-6 text-3xl antialiased font-bold tracking-tight font-montserrat md:mb-8 md:text-6xl leading-titles md:leading-titles dark:text-syncWave">
          {project.name}
        </h1>
        <div className="flex items-center space-x-8">
          <div>
            <h2 className="font-semibold text-md dark:text-white">Company</h2>
            <span className="text-md text-tertiary">
              {!!project.company && project.personal === false
                ? project.company
                : "Personal"}
            </span>
          </div>
          <div>
            <h2 className="font-semibold text-md dark:text-white">Stack</h2>
            <span className="text-md text-tertiary">{project.stack}</span>
          </div>
        </div>
        <div className="mt-3"></div>
        <hr className="my-8 border-t-2 border-b-0 border-dotted border-primary dark:border-gray-400" />
        <a
          className="relative inline-block w-full px-4 pt-4 overflow-hidden transition duration-500 ease-in-out bg-gray-100 rounded-lg sm:px-10 sm:pt-10 h-min hover:shadow-lg hover:scale-105 dark:bg-darkModeDetail"
          href={`https://${project.url}`}
          target="_blank"
          rel="noreferrer"
        >
          <div className="w-full overflow-hidden rounded-t-3xl top-10">
            {/* <Image
              src={project.image ? project.image : project.imageZoom}
              alt={project.name}
              width={2886}
              height={1245}
              objectFit="cover"
              objectPosition="top left"
            /> */}
            <PlaceholderBlur
              imageSrc={project.image || project.imageZoom}
              imageAlt={project.name}
              imageWidth={2886}
              imageHeight={1245}
              objectFit="cover"
              objectPosition="top left"
            />
          </div>
        </a>
        <hr className="my-6 border-t-2 border-b-0 border-dotted border-primary dark:border-gray-400" />
        <h2 className="mb-4 text-3xl font-semibold text-primary dark:text-syncWave">
          Summary
        </h2>
        <p className="text-primary dark:text-white">{project.description}</p>
        <p className="text-primary dark:text-white">{project.descriptionTwo}</p>
        <div className="my-8">
          <a
            className="w-full mr-4 sm:w-auto btn-primary primary-grad"
            href={`https://${project.url}`}
            target="_blank"
            rel="noreferrer"
          >
            {!!project.github ? "View Project" : "View Website"}
          </a>
          {!!project.github ? (
            <a
              className="w-full mt-2 btn-primary primary-grad sm:w-auto"
              href={`https://${project.github}`}
              target="_blank"
              rel="noreferrer"
            >
              View Github
            </a>
          ) : (
            <></>
          )}
        </div>
      </main>
    </Layout>
  );
};

export async function getStaticPaths() {
  let projects = [];

  try {
    const querySnapshot = await getDocs(collection(db, "firestoreProjects"));

    querySnapshot.forEach((project) => {
      projects.push({
        id: project.id,
        slug: project.slug,
        ...project.data(),
      });
      console.log(project.id, " => ", project.data());
      console.log("data", projects);
    });
  } catch (e) {
    console.log(e);
    return { projects: [] }; // No projects.
  }

  // Get the paths we want to pre-render based on posts
  try {
    const paths = projects.map((singleSlug) => ({
      params: { slug: singleSlug.slug },
    }));

    console.log("paths", paths);

    return {
      paths,
      fallback: false,
    };
  } catch (e) {
    console.log(e);
    return { paths: {} }; // No paths.
  }
}

export async function getStaticProps(context) {
  const slug = context.params.slug;
  try {
    let projectData = [];

    const firstQuery = query(
      collection(db, "firestoreProjects"),
      where("slug", "==", slug)
    );

    const querySnapshot = await getDocs(firstQuery);
    querySnapshot.forEach((project) => {
      projectData.push({
        company: !!project.company ? project.company : "",
        description: project.description,
        github: !!project.github ? project.github : "",
        image: project.image,
        imageZoom: !!project.imageZoom ? project.imageZoom : "",
        name: project.name,
        personal: !!project.personal ? project.personal : "",
        slug: project.slug,
        stack: project.stack,
        timeline: project.timeline,
        ...project.data(),
      });
      console.log(project.id, " => ", project.data());
    });

    return {
      props: { projectData },
      revalidate: 1,
    };
  } catch (e) {
    console.log(e);
    return { props: {} }; // No props.
  }
}

export default ProjectDetails;
