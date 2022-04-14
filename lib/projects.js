import { db } from "../firebase/firebase";

export const getStaticPaths = async () => {
  let posts = [];
  const ref = db.firestore().collection("workProjects");
  try {
    let allPosts = await ref.get();
    for (const doc of allPosts.docs) {
      let data = doc.data();
      posts.push({
        timestamp: data.timestamp,
        name: data.name,
      });
    }
  } catch (e) {
    console.log(e);
  }
  // Get the paths we want to pre-render based on posts
  const paths = posts.map((post) => ({
    params: { id: post.name },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;

  console.log("id is");
  console.log(id);

  let post = [];

  try {
    const ref = firebase
      .firestore()
      .collection("workProjects")
      .where("ytid", "==", id);

    const qsnapshot = await ref.get();
    qsnapshot.forEach((doc) => {
      const data = doc.data();
      console.log("the title is...");
      console.log(data.title);
      post.title = data.title;
      post.ytid = data.ytid;
    });
    return {
      props: { post: post },
      revalidate: 1,
    };
  } catch (e) {
    console.log(e);
  }
};

const Details = ({ post }) => {
  console.log("posting...");
  console.log(post.title);
  return (
    <div>
      <div className="mx-auto">
        <h2>Post Details Page</h2>
        <h3 className="text-black">{post.title}</h3>
        <h4>Details here</h4>
      </div>
    </div>
  );
};

// export const getStaticProps = async () => {
//   let workProjects = [];
//   try {
//     const workRef = collection(db, "workProjects");
//     const queryWork = query(workRef, orderBy("timestamp", "desc"));

//     onSnapshot(queryWork, (workSnapshot) => {
//       workSnapshot.docs.forEach((doc) => {
//         workProjects.push({
//           id: doc.id,
//           // timestamp: doc.data().timestamp?.toDate().toDateString(),
//           ...doc.data(),
//         });
//       });
//       console.log("workSnapshot.docs", workSnapshot.docs);
//       // console.log("workref", workRef);
//     });
//   } catch (e) {
//     console.log(e);
//   }
//   return {
//     props: {
//       workProjects,
//       // personalProjects: personalProjects,
//     },
//   };
// };

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

export default Details;
