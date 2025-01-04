import React, { useEffect, useState } from "react";
import { Pie, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import "./Reports.css"; 

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  ArcElement,
  BarElement,
  CategoryScale,
  LinearScale
);

const Reports = () => {
  const [categoryData, setCategoryData] = useState({});
  const [monthlyData, setMonthlyData] = useState({});

  useEffect(() => {
    // Load transactions from localStorage
    const savedTransactions = localStorage.getItem("transactions");
    const parsedTransactions = savedTransactions
      ? JSON.parse(savedTransactions)
      : [];

    // Process data for category-wise expense distribution
    const categoryExpenses = parsedTransactions.reduce((acc, transaction) => {
      if (transaction.transactionType === "Expense") {
        acc[transaction.category] = (acc[transaction.category] || 0) + parseFloat(transaction.amount);
      }
      return acc;
    }, {});

    // Set category data for the pie chart
    setCategoryData({
      labels: Object.keys(categoryExpenses),
      datasets: [
        {
          data: Object.values(categoryExpenses),
          backgroundColor: [
            "#FF8042", "#00C49F", "#0088FE", "#FFBB28", "#FF6384", "#36A2EB", "#F99FF5"
          ],
        },
      ],
    });

    // Process data for monthly income vs expenses bar chart
    const monthlyIncomeExpenses = parsedTransactions.reduce((acc, transaction) => {
      const month = new Date(transaction.date).toLocaleString("default", { month: "long", year: "numeric" });
      if (!acc[month]) {
        acc[month] = { income: 0, expense: 0 };
      }
      if (transaction.transactionType === "Income") {
        acc[month].income += parseFloat(transaction.amount);
      } else if (transaction.transactionType === "Expense") {
        acc[month].expense += parseFloat(transaction.amount);
      }
      return acc;
    }, {});

    const months = Object.keys(monthlyIncomeExpenses);
    const incomeData = months.map((month) => monthlyIncomeExpenses[month].income);
    const expenseData = months.map((month) => monthlyIncomeExpenses[month].expense);

    setMonthlyData({
      labels: months,
      datasets: [
        {
          label: "Income",
          data: incomeData,
          backgroundColor: "#0088FE",
        },
        {
          label: "Expense",
          data: expenseData,
          backgroundColor: "#FF8042",
        },
      ],
    });
  }, []);

  return (
    <div className="reports-container">
      {/* Pie Chart: Category-wise expense distribution */}
      <div className="chart-container">
        <h3>Category-wise Expense Distribution</h3>
        {/* Render Pie chart only if categoryData is available */}
        {categoryData?.labels && categoryData?.datasets ? (
          <div className="pie-chart">
            <Pie data={categoryData} />
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>

      {/* Bar Chart: Monthly Income vs Expenses */}
      <div className="chart-container">
        <h3>Monthly Income vs Expenses</h3>
        {/* Render Bar chart only if monthlyData is available */}
        {monthlyData?.labels && monthlyData?.datasets ? (
          <div className="bar-chart">
            <Bar data={monthlyData} />
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default Reports;
