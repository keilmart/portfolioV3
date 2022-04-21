import Link from "next/link";
import Image from "next/image";
// import { getAllPostIds, getAllPostData } from "../../lib/projects";
import { db } from "../../firebase/firebase";
import { collection, getDocs, query, orderBy, where } from "firebase/firestore";
import Layout from "../../components/Layout/Layout";

const ProjectDetails = ({ post }) => {
  return (
    <>
      {console.log(post)}
      <Layout>
        <main className="mt-6 sm:mt-12">
          <div className="mb-8">
            <Link href="/#work">
              <a className="border-b border-gray-700 text-secondary hover:bg-gray-100">
                &larr; Back to Projects
              </a>
            </Link>
          </div>
          <h1 className="mb-6 text-3xl font-bold tracking-tight md:mb-8 md:text-6xl leading-headers">
            {post.name}
          </h1>
          <div className="flex items-center space-x-8">
            <div>
              <h2 className="font-semibold text-md">Company</h2>
              <span className="text-md text-tertiary">
                {!!post.company ? post.company : "Personal"}
              </span>
            </div>
            <div>
              <h2 className="font-semibold text-md">Timeline</h2>
              <span className="text-md text-tertiary">{post.timeline}</span>
            </div>
          </div>
          <hr className="my-8 border-t-2 border-b-0 border-dotted border-primary" />
          <a
            className="relative inline-block w-full px-4 pt-4 overflow-hidden transition duration-300 ease-in-out bg-gray-100 rounded-lg sm:px-10 sm:pt-10 h-min hover:shadow-lg hover:scale-105"
            href={`https://${post.url}`}
            target={"_blank"}
            rel={"noreferrer"}
          >
            {/* <div className="w-full overflow-hidden rounded-t-3xl top-10">
              <Image
                src={post.imageZoom ? post.imageZoom : post.image}
                alt={post.name}
                // width={2886}
                // height={1886}
                // Change these sizes to optimize //
                objectFit="cover"
                objectPosition="top left"
              />
            </div> */}
          </a>
          <hr className="my-8 border-t-2 border-b-0 border-dotted border-primary" />
          <p>{post.description}</p>
          <div className="my-8">
            <a
              className="w-full mt-2 mr-8 btn-light sm:w-auto"
              href={`https://${post.url}`}
              target={"_blank"}
              rel={"noreferrer"}
            >
              {!!post.github ? "View Project" : "View Website"}
            </a>
            {!!post.github ? (
              <a
                className="w-full mt-2 btn-light sm:w-auto"
                href={`https://${post.github}`}
                target={"_blank"}
                rel={"noreferrer"}
              >
                View Github
              </a>
            ) : (
              <></>
            )}
          </div>
        </main>
      </Layout>
    </>
  );
};

export const getStaticPaths = async () => {
  // let posts = [];
  // try {
  const querySnapshot = await getDocs(collection(db, "firestoreProjects"));
  let posts = [];

  querySnapshot.forEach((doc) => {
    posts.push({
      id: doc.id,
      slug: doc.slug,
      ...doc.data(),
    });
    console.log(doc.id, " => ", doc.data());
  });
  // } catch (e) {
  //   console.log(e);
  // }
  // Get the paths we want to pre-render based on posts
  const paths = posts.map((slug) => ({
    params: { slug: slug.slug },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const slug = context.params.slug;
  let post = {};
  try {
    // const firebaseRef = await getDocs(collection(db, "firestoreProjects"));
    // const querySnapshot = query(firebaseRef, where("slug", "==", slug));
    let post = [];

    const firstQuery = query(
      collection(db, "firestoreProjects"),
      where("slug", "==", slug)
    );

    const querySnapshot = await getDocs(firstQuery);
    querySnapshot.forEach((doc) => {
      post.push({
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

    return {
      props: { post: post },
      revalidate: 1,
    };
  } catch (e) {
    console.log(e);
  }
};

// export async function getStaticPaths() {
//   const paths = getAllPostIds();
//   return {
//     paths,
//     fallback: false,
//   };
// }

// export async function getStaticProps({ params }) {
//   const postData = getAllPostData(params.id);
//   return {
//     props: {
//       postData,
//     },
//   };
// }

export default ProjectDetails;
