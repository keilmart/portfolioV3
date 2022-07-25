import { db } from "../firebase/firebase";
import { collection, getDocs } from "firebase/firestore";

export async function getProjectData() {
  let allProjectData = [];

  try {
    const querySnapshot = await getDocs(collection(db, "firestoreProjects"));

    querySnapshot.forEach((doc) => {
      allProjectData.push({
        company: !!doc.company ? doc.company : "",
        description: doc.description,
        github: !!doc.github ? doc.github : "",
        image: !!doc.image ? doc.image : doc.imageZoom,
        imageZoom: !!doc.imageZoom ? doc.imageZoom : "",
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
    return (allProjectData = []); // No response.
  }
  return {
    allProjectData,
  };
}
