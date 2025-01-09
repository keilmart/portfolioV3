import React, { useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";
import { getGoogleSheetData } from "../lib/dataFetch";

const Budget = () => {
  const [sheetData, setSheetData] = useState([]);
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
            <h2 className="mb-4 text-2xl font-semibold">Google Sheets Data</h2>
            <table className="w-full text-left border border-collapse border-gray-300 table-auto">
              <thead>
                <tr>
                  {sheetData.length > 0 &&
                    Object.keys(sheetData[0]).map((key) => (
                      <th
                        key={key}
                        className="px-4 py-2 bg-gray-100 border border-gray-300">
                        {key}
                      </th>
                    ))}
                </tr>
              </thead>
              <tbody>
                {sheetData.map((row, index) => (
                  <tr key={index}>
                    {Object.values(row).map((value, idx) => (
                      <td key={idx} className="px-4 py-2 border border-gray-300">
                        {value}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Budget;
