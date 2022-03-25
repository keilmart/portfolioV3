import Link from "next/link";

import Layout from "../components/Layout/Layout";

const NotFound = () => {
  return (
    <Layout>
      <div className="flex justify-center items-center h-[80vh]">
        <div>
          <h1 className="mb-6 font-serif text-4xl text-center md:text-left md:mb-10 md:text-8xl">
            404: Oops!
          </h1>
          <div className="md:ml-3">
            <p className="mb-2 text-lg text-secondary">
              I can&apos;t seem to find the page you&apos;re looking for.
            </p>
            <Link href="/">Go Home</Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
