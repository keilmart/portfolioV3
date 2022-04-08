import { db } from "../firebase/firebase";
import { useState, useEffect } from "react";
import { collection, query, onSnapshot, orderBy } from "@firebase/firestore";

import Homepage from "../components/Homepage/Homepage";
import Layout from "../components/Layout/Layout";

const Home = () => {
  const [workProjects, setWorkProjects] = useState([]);
  const [personalProjects, setPersonalProjects] = useState([]);

  useEffect(() => {
    const workRef = collection(db, "workProjects");
    const queryWork = query(workRef, orderBy("timestamp", "desc"));

    onSnapshot(queryWork, (workSnapshot) => {
      setWorkProjects(
        workSnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
          timestamp: doc.data().timestamp?.toDate().toDateString(),
        }))
      );
    });

    const personalRef = collection(db, "personalProjects");
    const queryPersonal = query(personalRef, orderBy("timestamp", "desc"));

    onSnapshot(queryPersonal, (querySnapshot) => {
      setPersonalProjects(
        querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
          timestamp: doc.data().timestamp?.toDate().toDateString(),
        }))
      );
    });

    return;
  }, []);

  return (
    <>
      <div>{console.log(workProjects, personalProjects)}</div>
      <Layout>
        <Homepage
          workProjects={workProjects}
          personalProjects={personalProjects}
        />
      </Layout>
    </>
  );
};

export default Home;
