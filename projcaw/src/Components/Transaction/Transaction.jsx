import React, { useState, useEffect } from 'react';
import './Transaction.css';
import { jsPDF } from 'jspdf';

const Transaction = () => {
  const [transactions, setTransactions] = useState(() => {
    const savedTransactions = localStorage.getItem('transactions');
    return savedTransactions ? JSON.parse(savedTransactions) : [];
  });

  const [transactionType, setTransactionType] = useState('');
  const [transactionName, setTransactionName] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [category, setCategory] = useState('');
  const [filterCategory, setFilterCategory] = useState('');
  const [editingTransaction, setEditingTransaction] = useState(null);

  useEffect(() => {
    localStorage.setItem('transactions', JSON.stringify(transactions));
  }, [transactions]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTransaction = {
      id: Date.now(),
      transactionName,
      amount,
      date,
      category,
      transactionType,
    };

    setTransactions([...transactions, newTransaction]);
    clearForm();
  };

  const saveEdit = (e) => {
    e.preventDefault();
    setTransactions((prevTransactions) =>
      prevTransactions.map((transaction) =>
        transaction.id === editingTransaction.id
          ? { ...editingTransaction, transactionName, amount, date, category, transactionType }
          : transaction
      )
    );

    setEditingTransaction(null);
    clearForm();
  };

  const clearForm = () => {
    setTransactionName('');
    setAmount('');
    setDate('');
    setCategory('');
    setTransactionType('');
  };

  const startEditing = (transaction) => {
    setEditingTransaction(transaction);
    setTransactionName(transaction.transactionName);
    setAmount(transaction.amount);
    setDate(transaction.date);
    setCategory(transaction.category);
    setTransactionType(transaction.transactionType);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const deleteTransaction = (id) => {
    const updatedTransactions = transactions.filter((transaction) => transaction.id !== id);
    setTransactions(updatedTransactions);
  };

  const filteredTransactions = filterCategory
    ? transactions.filter((transaction) => transaction.category === filterCategory)
    : transactions;

  // Function to export transactions as a PDF
  const exportToPDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text('Transaction Report', 20, 20);

    let y = 30; // Y position for the first row

    // Table header
    doc.setFontSize(12);
    doc.text('Transaction Name', 20, y);
    doc.text('Amount (DZD)', 80, y);
    doc.text('Date', 140, y);
    doc.text('Category', 180, y);

    y += 10; // Move to the next row

    // Table data
    filteredTransactions.forEach((transaction) => {
      doc.text(transaction.transactionName, 20, y);
      doc.text(transaction.amount.toString(), 80, y);
      doc.text(transaction.date, 140, y);
      doc.text(transaction.category, 180, y);
      y += 10;
    });

    // Save the PDF
    doc.save('transactions.pdf');
  };

  return (
    <div className="transaction-container">
      <div className="transaction-form">
        <h2>Add New Transaction</h2>
        
        <form onSubmit={editingTransaction ? saveEdit : handleSubmit}>
          <div>
            <label htmlFor="transactionName">Transaction Name</label>
            <input
              type="text"
              id="transactionName"
              value={transactionName}
              onChange={(e) => setTransactionName(e.target.value)}
              required
            />
          </div>

          <div>
            <label htmlFor="amount">Amount</label>
            <input
              type="number"
              id="amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
            />
          </div>

          <div>
            <label htmlFor="date">Date</label>
            <input
              type="date"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>

          <div>
            <label htmlFor="category">Category</label>
            <select
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            >
              <option value="">Select a Category</option>
              <option value="Groceries">Groceries</option>
              <option value="Transportation">Transportation</option>
              <option value="Entertainment">Entertainment</option>
              <option value="Bills">Bills</option>
              <option value="Health">Health</option>
              <option value="Food">Food</option>
              <option value="Others">Others</option>
            </select>
          </div>

          <div className="transaction-type-buttons">
            <button
              type="button"
              onClick={() => setTransactionType('Income')}
              className={transactionType === 'Income' ? 'active' : ''}
            >
              Income
            </button>
            <button
              type="button"
              onClick={() => setTransactionType('Expense')}
              className={transactionType === 'Expense' ? 'active' : ''}
            >
              Expense
            </button>
          </div>

          <button type="submit">
            {editingTransaction ? 'Save Changes' : 'Submit'}
          </button>
          {editingTransaction && (
            <button
              type="button"
              className="cancel-button"
              onClick={() => {
                setEditingTransaction(null);
                clearForm();
              }}
            >
              Cancel Edit
            </button>
          )}
        </form>
      </div>

      <div className="separator"></div>

      <div className="transaction-list">
        <h2>Transaction List</h2>
        {/* Button to export transactions as a PDF */}
        <button onClick={exportToPDF} className="export-pdf-button">
          Export PDF
        </button>
        <div>
          <label>Filter by Category</label>
          <select
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
          >
            <option value="">All</option>
            <option value="Groceries">Groceries</option>
            <option value="Transportation">Transportation</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Bills">Bills</option>
            <option value="Health">Health</option>
            <option value="Food">Food</option>
            <option value="Others">Others</option>
          </select>
        </div>

        {filteredTransactions.length > 0 ? (
          <table className="transaction-table">
            <thead>
              <tr>
                <th>Transaction Name</th>
                <th>Amount (DZD)</th>
                <th>Date</th>
                <th>Category</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredTransactions.map((transaction) => (
                <tr key={transaction.id}>
                  <td>{transaction.transactionName}</td>
                  <td>{transaction.amount}</td>
                  <td>{transaction.date}</td>
                  <td>{transaction.category}</td>
                  <td>
                    <button onClick={() => startEditing(transaction)}>Edit</button>
                    <button onClick={() => deleteTransaction(transaction.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No transactions available</p>
        )}

        
      </div>
    </div>
  );
};

export default Transaction;
