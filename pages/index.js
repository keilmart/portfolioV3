import { db } from "../firebase/firebase";
import { collection, getDocs, query, orderBy } from "firebase/firestore";

import Homepage from "../components/Homepage/Homepage";
import Layout from "../components/Layout/Layout";

const Home = ({ personalProjects }) => {
  // const [workProjects, setWorkProjects] = useState([]);
  // const [personalProjects, setPersonalProjects] = useState([]);

  // useEffect(() => {
  //   const workRef = collection(db, "workProjects");
  //   const queryWork = query(workRef, orderBy("timestamp", "desc"));

  //   onSnapshot(queryWork, (workSnapshot) => {
  //     setWorkProjects(
  //       workSnapshot.docs.map((doc) => ({
  //         ...doc.data(),
  //         id: doc.id,
  //         timestamp: doc.data().timestamp?.toDate().toDateString(),
  //       }))
  //     );
  //   });

  //   const personalRef = collection(db, "personalProjects");
  //   const queryPersonal = query(personalRef, orderBy("timestamp", "desc"));

  //   onSnapshot(queryPersonal, (querySnapshot) => {
  //     setPersonalProjects(
  //       querySnapshot.docs.map((doc) => ({
  //         ...doc.data(),
  //         id: doc.id,
  //         timestamp: doc.data().timestamp?.toDate().toDateString(),
  //       }))
  //     );
  //   });

  //   return;
  // }, []);

  return (
    <Layout>
      <Homepage
        // workProjects={workProjects}
        personalProjects={personalProjects}
      />
    </Layout>
  );
};

export const getStaticProps = async () => {
  let personalProjects = [];
  try {
    const querySnapshot = await getDocs(collection(db, "personalProjects"));
    // const querySnapshot = query(workRef, orderBy("timestamp", "desc"));

    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      personalProjects.push({
        company: !!doc.company ? doc.company : null,
        description: doc.description,
        github: !!doc.github ? doc.github : null,
        image: doc.image,
        imageZoom: !!doc.imageZoom ? doc.imageZoom : null,
        name: doc.name,
        slug: doc.slug,
        stack: doc.stack,
        // timestamp: doc.timestamp.toDate().toDateString(),
        ...doc.data(),
      });

      console.log(doc.id, " => ", doc.data());
    });
  } catch (e) {
    console.log(e);
  }

  return {
    props: {
      personalProjects,
    },
  };
};

export default Home;
