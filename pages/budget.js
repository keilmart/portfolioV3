import React, { useEffect, useState } from "react";
import Link from "next/link";

import { useAuth0 } from "@auth0/auth0-react";
import { getGoogleSheetData } from "../lib/dataFetch";

import Layout from "../components/Layout/Layout";
import Profile from "../components/Auth/Profile";

// Shared component for rendering rows
const BudgetSection = ({ data, sectionTitle, filterCondition }) => {
  const formatValue = (value) => {
    if (typeof value === "number") {
      // Format the number to two decimal places
      const formattedValue = value.toFixed(2);
      // Return the formatted value and a class for coloring
      return {
        value: formattedValue,
        class: value < 0 ? "text-red-400" : "text-green-400",
      };
    }
    // Return non-number values without formatting or coloring
    return { value, class: "" };
  };

  return (
    <div className="w-full px-2 md:px-12">
      <h2 className="mt-8 mb-4 text-xl font-semibold md:text-3xl">{sectionTitle}</h2>
      {data
        .filter(filterCondition) // Apply the filter condition passed in props
        .filter((row) => row.Category.trim() !== "") // Exclude rows where "Category" is empty
        .map((row, index) => (
          <div key={index} className="pb-4 mb-4 border-b border-r border-gray-200">
            <p className="text-2xl font-semibold">{row.Category}</p>
            {row["Total Amount"] !== "" && (
              <p
                className={`${
                  row["Total Amount"] < 0 ? "text-red-400" : "text-green-400"
                }`}>
                <strong className="display-text-group">Total Amount: </strong> $
                {formatValue(row["Total Amount"]).value}
              </p>
            )}
            {row["Goal Amount"] !== "" && (
              <p
                className={`${
                  row["Goal Amount"] < 0 ? "text-red-400" : "text-green-400"
                }`}>
                <strong className="display-text-group">Goal Amount:</strong> $
                {formatValue(row["Goal Amount"]).value}
              </p>
            )}
            {row["Difference"] !== "" && (
              <p
                className={`${
                  row["Difference"] < 0 ? "text-red-400" : "text-green-400"
                }`}>
                <strong className="display-text-group">Difference:</strong> $
                {formatValue(row["Difference"]).value}
              </p>
            )}
            {Object.entries(row)
              .filter(
                ([key, value]) =>
                  key !== "" &&
                  value !== "" &&
                  key !== "Category" &&
                  key !== "Total Amount" &&
                  key !== "Goal Amount" &&
                  key !== "Difference"
              )
              .map(([key, value], idx) => {
                const { value: formattedValue, class: textColorClass } =
                  formatValue(value);
                return (
                  <p key={idx} className={textColorClass}>
                    <strong>{key}:</strong> {formattedValue}
                  </p>
                );
              })}
          </div>
        ))}
    </div>
  );
};

const Budget = () => {
  const { isAuthenticated } = useAuth0();
  const [sheetData, setSheetData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [firstPart, setFirstPart] = useState([]);
  const [secondPart, setSecondPart] = useState([]);
  const [showProfile, setShowProfile] = useState(false); // State for showing profile
  const [fadeOut, setFadeOut] = useState(false); // State for fading out

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getGoogleSheetData();
        setSheetData(data);

        // Split the data based on the presence of empty "Difference" or "Goal Amount"
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
      setShowProfile(true); // Show profile when authenticated
      setTimeout(() => {
        setFadeOut(true); // Start fade-out effect
        setTimeout(() => {
          setShowProfile(false); // Hide profile after fading out
        }, 1000); // Wait 1 second for fade-out transition
      }, 100000);
    }
  }, [isAuthenticated]);

  if (!isAuthenticated) {
    return (
      <div className="flex items-center justify-center h-[83vh]">
        <div>
          <h1 className="mb-6 font-serif text-4xl text-center md:text-left md:mb-10 md:text-8xl dark:text-syncWave">
            Oops!
          </h1>
          <div>
            <p className="mb-3 text-lg text-secondary">
              You must be logged in to view this page.
            </p>
            <Link href="/">
              <a className="dark:text-slate-200">Go Home</a>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center h-[83vh]">
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <Layout>
      <div className="mx-auto my-8 text-xl antialiased leading-relaxed tracking-tight md:my-18 text-tertiary">
        <h1 className="mt-4 mb-8 text-4xl font-bold font-montserrat text-primary dark:text-syncWave">
          Budget / Mobile first *
        </h1>
        <div className="flex flex-col md:flex-row">
          <BudgetSection
            data={firstPart}
            sectionTitle="Categories"
            filterCondition={(row) =>
              row.Difference !== "" &&
              row["Goal Amount"] !== "" &&
              row.Category.trim() !== ""
            }
          />
          <BudgetSection
            data={secondPart}
            sectionTitle="Summary"
            filterCondition={(row) =>
              (row["Goal Amount"] === "" || row.Difference === "") &&
              row.Category.trim() !== ""
            }
          />
        </div>
      </div>
      {showProfile && ( // Conditionally render Profile with fade-out effect
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
