import Link from "next/link";

import Layout from "../components/Layout/Layout";
import SEO from "../components/SEO/SEO";

const NotFound = () => {
  return (
    <Layout>
      <SEO />
      <div className="flex items-center justify-center h-404">
        <div>
          <h1 className="mb-6 font-serif text-4xl text-center md:text-left md:mb-10 md:text-8xl dark:text-syncWave">
            404: Oops!
          </h1>
          <div className="md:ml-3">
            <p className="mb-2 text-lg text-secondary">
              I can&apos;t seem to find the page you&apos;re looking for.
            </p>
            <Link href="/">
              <a className="dark:text-slate-200">Go Home</a>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
