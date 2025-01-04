import React, { useEffect, useState } from "react";
import { BsCashCoin, BsCurrencyDollar } from "react-icons/bs";
import { SiCashapp } from "react-icons/si";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, CategoryScale } from "chart.js";
import "./Dashboard.css";

ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale);

const Dashboard = () => {
  const [transactions, setTransactions] = useState([]);
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalExpense, setTotalExpense] = useState(0);
  const [balance, setBalance] = useState(0);

  // Charger les transactions depuis le localStorage
  useEffect(() => {
    const savedTransactions = localStorage.getItem("transactions");
    const parsedTransactions = savedTransactions ? JSON.parse(savedTransactions) : [];
    setTransactions(parsedTransactions);

    // Calculer les totaux
    const income = parsedTransactions
      .filter((t) => t.transactionType === "Income")
      .reduce((acc, t) => acc + parseFloat(t.amount), 0);

    const expense = parsedTransactions
      .filter((t) => t.transactionType === "Expense")
      .reduce((acc, t) => acc + parseFloat(t.amount), 0);

    setTotalIncome(income);
    setTotalExpense(expense);
    setBalance(income - expense);
  }, []);

  // Données pour les cartes
  const dataCards = [
    {
      label: "Total Balance",
      amount: `${balance.toLocaleString()} Dz`,
      icon: <BsCurrencyDollar size={26} />,
    },
    {
      label: "Total Income",
      amount: `${totalIncome.toLocaleString()} Dz`,
      icon: <BsCashCoin size={26} />,
    },
    {
      label: "Total Expense",
      amount: `${totalExpense.toLocaleString()} Dz`,
      icon: <SiCashapp size={26} />,
    },
  ];

  // Données pour le graphique
  const data = {
    labels: ["Income", "Expense", "Balance"],
    datasets: [
      {
        data: [totalIncome, totalExpense, balance],
        backgroundColor: ["#0088FE", "#FF8042", "#00C49F"],
        hoverBackgroundColor: ["#0088FE", "#FF8042", "#00C49F"],
      },
    ],
  };

  return (
    <div className="dashboard-wrapper">
      {/* Section des cartes */}
      <div className="dashboard-container">
        {dataCards.map((item, index) => (
          <div key={index + item.label} className="dashboard-card">
            <div className="dashboard-card-content">
              <div
                className={`dashboard-card-icon ${
                  index === 0
                    ? "bg-blue"
                    : index === 1
                    ? "bg-emerald"
                    : "bg-rose"
                }`}
              >
                {item.icon}
              </div>
              <div className="dashboard-card-text">
                <span className="dashboard-card-text-label">{item.label}</span>
                <p className="dashboard-card-text-amount">{item.amount}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Section du graphique et des dernières transactions */}
      <div className="dashboard-chart-container">
        {/* Section des dernières transactions */}
        <div className="dashboard-transactions">
          <h3 className="dashboard-transactions-title">Latest Transactions</h3>
          <table className="dashboard-transactions-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Amount</th>
                <th>Date</th>
                <th>Category</th>
              </tr>
            </thead>
            <tbody>
              {transactions.slice(0, 5).map((transaction, index) => (
                <tr key={index}>
                  <td>{transaction.transactionName}</td>
                  <td>{transaction.amount} Dz</td>
                  <td>{transaction.date}</td>
                  <td>{transaction.category}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Section du graphique circulaire */}
        <div className="dashboard-chart">
          <h3 className="dashboard-chart-title">Summary</h3>
          <div style={{ width: "100%", height: 400 }}>
            <Pie data={data} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
