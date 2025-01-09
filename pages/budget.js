import React, { useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";

import { getGoogleSheetData } from "../lib/dataFetch";

const About = () => {
  const [sheetData, setSheetData] = useState([]);
  const [projectData, setProjectData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const sheetData = await getGoogleSheetData();

        setSheetData(sheetData);
      } catch (error) {
        console.error("Error loading data:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <Layout>
      <div className="mx-auto my-8 text-xl antialiased leading-relaxed tracking-tight md:my-18 text-tertiary">
        <div>
          <h1 className="mt-4 mb-8 text-4xl antialiased font-bold font-montserrat text-primary dark:text-syncWave">
            Budget
          </h1>
          <div>
            <h1>Google Sheets Data</h1>
            <pre>{JSON.stringify(sheetData, null, 2)}</pre>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
