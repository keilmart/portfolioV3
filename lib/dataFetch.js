import { db } from "../firebase/firebase";
import { collection, getDocs } from "firebase/firestore";

export async function getProjectData() {
  let allProjectData = [];
  let mobileImagesData = [];

  try {
    const projectsCollection = collection(db, "firestoreProjects");
    const querySnapshotProjects = await getDocs(projectsCollection);
    querySnapshotProjects.forEach((doc) => {
      allProjectData.push({
        company: doc.data().company || "",
        description: doc.data().description,
        github: doc.data().github || "",
        image: doc.data().image || doc.data().imageZoom,
        imageZoom: doc.data().imageZoom || "",
        name: doc.data().name,
        featured: doc.data().featured,
        slug: doc.data().slug,
        stack: doc.data().stack,
        timeline: doc.data().timeline,
        ...doc.data(),
      });
    });

    const mobileImagesCollection = collection(db, "mobileImages");
    const querySnapshotMobileImages = await getDocs(mobileImagesCollection);
    querySnapshotMobileImages.forEach((doc) => {
      mobileImagesData.push({
        id: doc.id,
        image: doc.data().image || "",
      });
    });
  } catch (e) {
    console.log(e);
    return {
      allProjectData: [],
      mobileImagesData: [],
    };
  }
  return {
    allProjectData,
    mobileImagesData,
  };
}
