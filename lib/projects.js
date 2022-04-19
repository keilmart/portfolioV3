import { db } from "../firebase/firebase";

export async function getAllPostIds() {
  // export async function getAllFeedback(siteId) {
  try {
    const snapshot = await db
      .collection("firestoreProjects")
      // .where("siteId", "==", siteId)
      .get();
    const feedback = [];

    snapshot.forEach((doc) => {
      feedback.push({
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
    });

    return feedback.map((fileName) => {
      return {
        params: {
          id: fileName.id,
        },
      };
    });
  } catch (error) {
    return { error };
  }
}

// export function getAllPostIds() {
//   const fileNames = fs.readdirSync(postsDirectory);
//   return fileNames.map((fileName) => {
//     return {
//       params: {
//         id: fileName.replace(/\.md$/, ""),
//       },
//     };
//   });
// }

// export function getPostData(id) {
//   const fullPath = path.join(postsDirectory, `${id}.md`);
//   const fileContents = fs.readFileSync(fullPath, "utf8");

//   // Use gray-matter to parse the post metadata section
//   const matterResult = matter(fileContents);

//   // Combine the data with the id
//   return {
//     id,
//     ...matterResult.data,
//   };
// }
