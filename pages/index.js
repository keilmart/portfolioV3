import Homepage from "../components/Homepage/Homepage";
import Layout from "../components/Layout/Layout";
import SEO from "../components/SEO/SEO";

import { getProjectData } from "../lib/dataFetch";

const Home = ({ featuredProjects, notableProjects, mobileImages }) => {
  return (
    <>
      <Layout>
        <SEO />
        <Homepage
          featuredProjects={featuredProjects}
          notableProjects={notableProjects}
          mobileImages={mobileImages}
        />
      </Layout>
    </>
  );
};

export async function getStaticProps() {
  let notableProjects = [];
  let featuredProjects = [];
  let mobileImages = [];
  const allProjectData = await getProjectData();
  const mobileImagesData = await getProjectData();
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

    if (mobileImagesData.mobileImagesData.length > 0) {
      mobileImagesData.mobileImagesData.forEach((project) => {
        mobileImages.push(project);
      });
    }
  } catch (e) {
    console.log(e);
    return (props = {
      featuredProjects: [],
      notableProjects: [],
      mobileImages: [],
    });
  }

  return {
    props: {
      featuredProjects,
      notableProjects,
      mobileImages,
      revalidate: 1,
    },
  };
}

export default Home;
