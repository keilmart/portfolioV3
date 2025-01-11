import React, { useEffect, useState } from "react";
import Link from "next/link";

import { useAuth0 } from "@auth0/auth0-react";
import { getGoogleSheetData } from "../lib/dataFetch";

import Layout from "../components/Layout/Layout";
import Profile from "../components/Auth/Profile";
import BudgetSection from "../components/BudgetPage/BudgetSection";

const Budget = () => {
  const { isAuthenticated } = useAuth0();
  const [sheetData, setSheetData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [firstPart, setFirstPart] = useState([]);
  const [secondPart, setSecondPart] = useState([]);
  const [showProfile, setShowProfile] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getGoogleSheetData();
        setSheetData(data);

        const firstArray = [];
        const secondArray = [];
        let splitIndex = false;

        data.forEach((row) => {
          if (splitIndex || (row.Difference === "" && row["Goal Amount"] === "")) {
            splitIndex = true;
            secondArray.push(row);
          } else {
            firstArray.push(row);
          }
        });

        setFirstPart(firstArray);
        setSecondPart(secondArray);
      } catch (error) {
        console.error("Error loading data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      setShowProfile(true);
      setTimeout(() => {
        setFadeOut(true);
        setTimeout(() => {
          setShowProfile(false);
        }, 1000);
      }, 5000);
    }
  }, [isAuthenticated]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-[83vh]">
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <Layout wide={true}>
      <div className="flex">
        <div className=" bg-syncWave max-w-[384px] w-96 min-w-[384px]">
          <p>Categories</p>
          <p>Yearly target on track?</p>
          <p>Trip fund</p>
        </div>
        <div className="p-8 mx-auto text-xl antialiased leading-relaxed tracking-tight border-t md:my-18 text-tertiary border-primary dark:border-b-0">
          {/* <h1 className="mt-4 mb-8 text-4xl font-bold font-montserrat text-primary dark:text-syncWave">
          Budget / Mobile first *
        </h1> */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-10">
            <BudgetSection
              data={firstPart}
              showPieChart={true}
              showBarGraph={false}
              legend={true}
              sectionTitle="Categories"
              filterCondition={(row) =>
                row.Difference !== "" &&
                row["Goal Amount"] !== "" &&
                row.Category.trim() !== ""
              }
            />
            <BudgetSection
              data={secondPart}
              showPieChart={false}
              showBarGraph={true}
              legend={false}
              sectionTitle="Summary"
              filterCondition={(row) =>
                (row["Goal Amount"] === "" || row.Difference === "") &&
                row.Category.trim() !== ""
              }
            />
          </div>
        </div>
      </div>
      {showProfile && (
        <div
          className={`absolute top-0 left-0 flex items-center justify-center w-full h-screen backdrop-blur-md transition-opacity duration-1000 ${
            fadeOut ? "opacity-0" : "opacity-100"
          }`}>
          <Profile />
        </div>
      )}
    </Layout>
  );
};

export default Budget;
