import Homepage from "../components/Homepage/Homepage";
import Layout from "../components/Layout/Layout";
import SEO from "../components/SEO/SEO";

import { db } from "../firebase/firebase";
import { collection, getDocs } from "firebase/firestore";

const Home = ({ notableProjects, featuredProjects }) => {
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

export const getStaticProps = async () => {
  let fireResponse = [];
  let notableProjects = [];
  let featuredProjects = [];

  try {
    const querySnapshot = await getDocs(collection(db, "firestoreProjects"));
    // const querySnapshot = query(personalRef, orderBy("rank", "desc"));

    querySnapshot.forEach((doc) => {
      fireResponse.push({
        company: !!doc.company ? doc.company : null,
        description: doc.description,
        github: !!doc.github ? doc.github : null,
        image: doc.image,
        imageZoom: !!doc.imageZoom ? doc.imageZoom : null,
        name: doc.name,
        personal: doc.personal,
        slug: doc.slug,
        stack: doc.stack,
        timeline: doc.timeline,
        ...doc.data(),
      });

      console.log(doc.id, " => ", doc.data());
    });

    if (fireResponse.length > 0) {
      fireResponse.forEach((project) => {
        if (project.personal === true) {
          notableProjects.push(project);
        }
        if (project.personal === false) {
          featuredProjects.push(project);
        } else {
          console.log("Project not found");
        }
      });
    }
  } catch (error) {
    console.log(error);
    props = {};
  }

  return {
    props: {
      notableProjects,
      featuredProjects,
    },
  };
};

export default Home;
