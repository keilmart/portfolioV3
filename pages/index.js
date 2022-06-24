import Homepage from "../components/Homepage/Homepage";
import Layout from "../components/Layout/Layout";
import SEO from "../components/SEO/SEO";

// import { db } from "../firebase/firebase";
// import { collection, getDocs } from "firebase/firestore";

import { getProjectData } from "../lib/dataFetch";

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
  let notableProjects = [];
  let featuredProjects = [];
  const allProjectData = await getProjectData();

  // console.log("allProjectData", allProjectData.allProjectData);

  try {
    if (allProjectData.allProjectData.length > 0) {
      allProjectData.allProjectData.forEach((project) => {
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
      revalidate: 1,
    },
  };
}

export default Home;
