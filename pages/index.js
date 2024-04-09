import Homepage from "../components/Homepage/Homepage";
import Layout from "../components/Layout/Layout";
import SEO from "../components/SEO/SEO";

import { getProjectData } from "../lib/dataFetch";

const Home = ({ featuredProjects, notableProjects, comingProjects }) => {
  return (
    <Layout>
      <SEO />
      <Homepage
        featuredProjects={featuredProjects}
        notableProjects={notableProjects}
        comingProjects={comingProjects}
      />
    </Layout>
  );
};

export async function getStaticProps() {
  let notableProjects = [];
  let featuredProjects = [];
  let comingProjects = [];
  const allProjectData = await getProjectData();
  // console.log("allProjectData", allProjectData.allProjectData);
  try {
    if (allProjectData.allProjectData.length > 0) {
      allProjectData.allProjectData.forEach((project) => {
        if (project?.comingSoon === true) {
          comingProjects.push(project);
        } else if (project?.personal === false) {
          featuredProjects.push(project);
        } else if (project?.personal === true) {
          notableProjects.push(project);
        } else {
          console.log("Project not found", project);
        }
      });
    }
  } catch (e) {
    console.log(e);
    return (props = {
      comingProjects: [],
      featuredProjects: [], // No Featured projects.
      notableProjects: [], // No Notable projects.
    });
  }

  return {
    props: {
      comingProjects,
      featuredProjects,
      notableProjects,
      revalidate: 1,
    },
  };
}

export default Home;
