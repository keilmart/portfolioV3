import React, { useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";
import { getGoogleSheetData } from "../lib/dataFetch";

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
    <div>
      <h2 className="mt-8 mb-4 text-2xl font-semibold">{sectionTitle}</h2>
      {data
        .filter(filterCondition) // Apply the filter condition passed in props
        .map((row, index) => {
          console.log(row);
          return (
            <div key={index} className="mb-4">
              {row.Category !== "" && (
                <p>
                  <strong>Category:</strong> {row.Category}
                </p>
              )}
              {row["Total Amount"] !== "" && (
                <p
                  className={`${
                    row["Total Amount"] < 0 ? "text-red-400" : "text-green-400"
                  }`}>
                  <strong className="display-text-group">Total Amount:</strong>$
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
                  <strong className="display-text-group">Difference:</strong>$
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
          );
        })}
    </div>
  );
};

const Budget = () => {
  const [sheetData, setSheetData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [firstPart, setFirstPart] = useState([]);
  const [secondPart, setSecondPart] = useState([]);

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

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <Layout>
      <div className="mx-auto my-8 text-xl antialiased leading-relaxed tracking-tight md:my-18 text-tertiary">
        <h1 className="mt-4 mb-8 text-4xl font-bold font-montserrat text-primary dark:text-syncWave">
          Budget
        </h1>
        <BudgetSection
          data={firstPart}
          sectionTitle="First Part"
          filterCondition={(row) => row.Difference !== "" && row["Goal Amount"] !== ""}
        />
        <BudgetSection
          data={secondPart}
          sectionTitle="Second Part"
          filterCondition={(row) => row["Goal Amount"] === "" || row.Difference === ""}
        />
      </div>
    </Layout>
  );
};

export default Budget;
