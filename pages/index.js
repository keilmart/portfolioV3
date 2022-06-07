import Homepage from "../components/Homepage/Homepage";
import Layout from "../components/Layout/Layout";
import SEO from "../components/SEO/SEO";

import { db } from "../firebase/firebase";
import { collection, getDocs } from "firebase/firestore";

const Home = ({ featuredProjects, notableProjects }) => {
  return (
    <Layout>
      <SEO />
      <Homepage
        featuredProjects={featuredProjects}
        notableProjects={notableProjects}
      />
    </Layout>
  );
};

export async function getStaticProps() {
  let fireResponse = [];
  let notableProjects = [];
  let featuredProjects = [];

  try {
    const querySnapshot = await getDocs(collection(db, "firestoreProjects"));

    querySnapshot.forEach((doc) => {
      fireResponse.push({
        company: !!doc.company ? doc.company : null,
        description: doc.description,
        github: !!doc.github ? doc.github : null,
        image: !!doc.image ? doc.image : doc.imageZoom,
        imageZoom: !!doc.imageZoom ? doc.imageZoom : null,
        name: doc.name,
        personal: doc.personal,
        slug: doc.slug,
        stack: doc.stack,
        timeline: doc.timeline,
        ...doc.data(),
      });
      // console.log(doc.id, " => ", doc.data());
    });
  } catch (e) {
    console.log(e);
    return (fireResponse = []); // No response.
  }

  try {
    if (fireResponse.length > 0) {
      fireResponse.forEach((project) => {
        if (project.personal === false) {
          featuredProjects.push(project);
        } else if (project.personal === true) {
          notableProjects.push(project);
        } else {
          console.log("Project not found", project);
        }
      });
    }
  } catch (e) {
    console.log(e);
    return (props = {
      featuredProjects: [], // No Featured projects.
      notableProjects: [], // No Notable projects.
    });
  }

  return {
    props: {
      featuredProjects,
      notableProjects,
    },
  };
}

export default Home;
