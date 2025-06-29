import Homepage from "../components/Homepage/Homepage";
import Layout from "../components/Layout/Layout";
import SEO from "../components/SEO/SEO";

import { getProjectData } from "../lib/dataFetch";

const Home = ({ featuredProjects, notableProjects }) => {
  return (
    <>
      <Layout>
        <SEO />
        <Homepage featuredProjects={featuredProjects} notableProjects={notableProjects} />
      </Layout>
    </>
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
        if (project?.featured === true) {
          featuredProjects.push(project);
        } else if (project?.featured === false) {
          notableProjects.push(project);
        } else {
          console.log("Project not found", project);
        }
      });
      featuredProjects.sort((a, b) => (a.order ?? 999) - (b.order ?? 999));
      notableProjects.sort((a, b) => (a.order ?? 999) - (b.order ?? 999));
    }
  } catch (e) {
    console.log(e);
    return (props = {
      featuredProjects: [],
      notableProjects: [],
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
