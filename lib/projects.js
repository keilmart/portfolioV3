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

    // const paths = feedback.map((fileName) => ({
    //   params: {
    //     slug: fileName.slug,
    //   },
    // }));
    // return { paths, fallback: false };

    return feedback.map((fileName) => {
      return {
        params: {
          slug: fileName.slug,
        },
      };
    });
  } catch (error) {
    return { error };
  }
}

export async function getAllPostData(context) {
  const id = context.params.id;

  try {
    const snapshot = await db
      .collection("firestoreProjects")
      .where("id", "==", id)
      .get();
    const post = {};

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

    return {
      props: { post: post },
      revalidate: 1,
    };
  } catch (error) {
    return { error };
  }
}
