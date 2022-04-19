import { db } from "../firebase/firebase";
import { collection, getDocs, query, orderBy } from "firebase/firestore";

import Homepage from "../components/Homepage/Homepage";
import Layout from "../components/Layout/Layout";

const Home = ({ personalProjects, workProjects }) => {
  return (
    <Layout>
      <Homepage
        workProjects={workProjects}
        personalProjects={personalProjects}
      />
    </Layout>
  );
};

export const getStaticProps = async () => {
  let fireResponse = [];
  let personalProjects = [];
  let workProjects = [];

  try {
    const querySnapshot = await getDocs(collection(db, "firestoreProjects"));
    // const querySnapshot = query(personalRef, orderBy("rank", "desc"));

    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
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
          personalProjects.push(project);
        }
        if (project.personal === false) {
          workProjects.push(project);
        } else {
          console.log("Project not found");
        }
      });
    }

    // workProjects = fireResponse.reduce(
    //   (newWorkArray, project) => (
    //     project.personal === false && newWorkArray.push(project), newWorkArray
    //   ),
    //   []
    // );

    // personalProjects = fireResponse.reduce(
    //   (newWorkArray, project) => (
    //     project.personal === true && newPersonalArray.push(project),
    //     newWorkArray
    //   ),
    //   []
    // );
  } catch (error) {
    console.log(error);
  }

  return {
    props: {
      personalProjects,
      workProjects,
    },
  };
};

export default Home;
