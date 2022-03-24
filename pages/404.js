import Link from "next/link";

import Layout from "../components/Layout/Layout";

const NotFound = () => {
  return (
    <Layout>
      <div className="flex justify-center items-center h-[80vh]">
        <div>
          <h1 className="text-center md:text-left mb-6 md:mb-10 font-serif text-4xl md:text-8xl">
            404: Oops!
          </h1>
          <div className="md:ml-3">
            <p className="mb-2 text-lg text-secondary">
              I can't seem to find the page you're looking for.
            </p>
            <Link href="/">Go Home</Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
