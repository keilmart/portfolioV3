import { db } from "../firebase/firebase";
import { collection, getDocs } from "firebase/firestore";

// export async function getProjectSlugs() {
//   const querySnapshot = await getDocs(collection(db, "firestoreProjects"));

//   return querySnapshot.map((slug) => {
//     return {
//       params: { slug: slug },
//     };
//   });
// }

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
    return {
      allProjectData,
    };
  } catch (e) {
    console.log(e);
    return (allProjectData = []); // No response.
  }
}

// export async function getProjectSlugs(context) {
//   let projectSlugs = [];
//   const slug = context.params.slug;
//   try {
//     const firstQuery = query(
//       collection(db, "firestoreProjects"),
//       where("slug", "==", slug)
//     );

//     const querySnapshot = await getDocs(firstQuery);
//     querySnapshot.forEach((project) => {
//       projectSlugs.push({
//         company: !!project.company ? project.company : "",
//         description: project.description,
//         github: !!project.github ? project.github : "",
//         image: project.image,
//         imageZoom: !!project.imageZoom ? project.imageZoom : "",
//         name: project.name,
//         personal: !!project.personal ? project.personal : "",
//         slug: project.slug,
//         stack: project.stack,
//         timeline: project.timeline,
//         ...project.data(),
//       });
//       // console.log(project.id, " => ", project.data());
//     });

//     return {
//       projectSlugs,
//     };
//   } catch (e) {
//     console.log(e);
//     return { projectSlugs: {} }; // No props.
//   }
// }

// This was in the index page originally. //

// export async function getStaticProps() {
//   let allPostsData = [];
//   let notableProjects = [];
//   let featuredProjects = [];

//   try {
//     const querySnapshot = await getDocs(collection(db, "firestoreProjects"));

//     querySnapshot.forEach((doc) => {
//       allPostsData.push({
//         company: !!doc.company ? doc.company : "",
//         description: doc.description,
//         github: !!doc.github ? doc.github : "",
//         image: !!doc.image ? doc.image : doc.imageZoom,
//         imageZoom: !!doc.imageZoom ? doc.imageZoom : "",
//         name: doc.name,
//         personal: doc.personal,
//         slug: doc.slug,
//         stack: doc.stack,
//         timeline: doc.timeline,
//         ...doc.data(),
//       });
//       // console.log(doc.id, " => ", doc.data());
//     });
//   } catch (e) {
//     console.log(e);
//     return (allPostsData = []); // No response.
//   }

//   try {
//     if (allPostsData.length > 0) {
//       allPostsData.forEach((project) => {
//         if (project.personal === false) {
//           featuredProjects.push(project);
//         } else if (project.personal === true) {
//           notableProjects.push(project);
//         } else {
//           console.log("Project not found", project);
//         }
//       });
//     }
//   } catch (e) {
//     console.log(e);
//     return (props = {
//       featuredProjects: [], // No Featured projects.
//       notableProjects: [], // No Notable projects.
//     });
//   }

//   return {
//     props: {
//       featuredProjects,
//       notableProjects,
//     },
//   };
// }
