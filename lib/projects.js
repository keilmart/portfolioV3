import { db } from "../firebase/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

export const getStaticPaths = async () => {
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
    });
  } catch (e) {
    console.log(e);
  }
  // Get the paths we want to pre-render based on posts //
  const paths = projects.map((slug) => ({
    params: { slug: slug.slug },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
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
        company: !!project.company ? project.company : null,
        description: project.description,
        github: !!project.github ? project.github : null,
        image: project.image,
        imageZoom: !!project.imageZoom ? project.imageZoom : null,
        name: project.name,
        personal: project.personal,
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
  }
};
