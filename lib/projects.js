import { db } from "../firebase/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

export const getStaticPathBoy = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "firestoreProjects"));

    querySnapshot.forEach((project) => {
      projectSlug.push({
        id: project.id,
        slug: project.slug,
        ...project.data(),
      });
      console.log(project.id, " => ", project.data());
    });

    // Get the paths we want to pre-render based on projects //
    return projectSlug.map((slug) => {
      return {
        params: { slug: slug.slug },
      };
    });
  } catch (e) {
    console.log(e);
  }
  console.log(params);
  return { paths };
};

export const getStaticPropBoy = async (context) => {
  const slug = context.params.slug;
  try {
    let projectData = [];

    const propsQuery = query(
      collection(db, "firestoreProjects"),
      where("slug", "==", slug)
    );

    const querySnapshot = await getDocs(propsQuery);
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
      slug,
      ...projectData,
      // revalidate: 1,
    };
  } catch (e) {
    console.log(e);
  }
};
