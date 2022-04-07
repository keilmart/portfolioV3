import { useState, useEffect } from "react";
import { collection, query, onSnapshot, orderBy } from "@firebase/firestore";
import { db } from "../firebase/firebase";

import Homepage from "../components/Homepage/Homepage";
import Layout from "../components/Layout/Layout";

const Home = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const collectionRef = collection(db, "workProjects");

    const q = query(collectionRef, orderBy("timestamp", "desc"));

    const setWorkState = onSnapshot(q, (querySnapshot) => {
      setProjects(
        querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
          timestamp: doc.data().timestamp?.toDate().toDateString(),
        }))
      );
    });
    return setWorkState;
  }, []);

  return (
    <>
      <Layout>
        <Homepage projects={projects} />
      </Layout>
    </>
  );
};

export default Home;
