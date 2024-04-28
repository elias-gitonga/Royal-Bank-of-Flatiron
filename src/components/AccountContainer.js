import React, { useState, useEffect } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer() {
  const [transactions, setTransactions] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortKey, setSortKey] = useState(null);  
  const [sortDirection, setSortDirection] = useState("ascending");  

  useEffect(() => {
    // Fetch transactions from the backend
    fetch("http://localhost:8001/transactions")
      .then(response => response.json())
      .then(data => setTransactions(data));
  }, []);

  const handleAddTransaction = (newTransaction) => {
   
    fetch("http://localhost:8001/transactions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newTransaction)
    })
    .then(response => response.json())
    .then(data => setTransactions([...transactions, data]));
  };

  const handleSearchChange = (event) => {
   
    setSearchTerm(event.target.value);
  };

  const handleSort = (key) => {
   
    const direction = sortKey === key && sortDirection === "ascending" ? "descending" : "ascending";
    setSortKey(key);
    setSortDirection(direction);
    setTransactions(transactions => [...transactions].sort((a, b) => {
      if (a[key] < b[key]) return direction === "ascending" ? -1 : 1;
      if (a[key] > b[key]) return direction === "ascending" ? 1 : -1;
      return 0;
    }));
  };

  const handleDelete = (id) => {
    // Delete a transaction via the backend
    fetch(`http://localhost:8001/transactions/${id}`, {
      method: 'DELETE'
    })
    .then(response => {
      if (response.ok) {
        setTransactions(transactions => transactions.filter(transaction => transaction.id !== id));
      }
    });
  };

 
  const filteredTransactions = transactions.filter(transaction =>
    transaction.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    transaction.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Search searchTerm={searchTerm} onSearchChange={handleSearchChange} />
      <AddTransactionForm onAddTransaction={handleAddTransaction} />
      <button className="ui blue icon button" onClick={() => handleSort('category')}>Sort by Category</button>

      <button className="ui blue icon button" onClick={() => handleSort('description')}>Sort by Description</button>
      <TransactionsList transactions={filteredTransactions} onDelete={handleDelete} />
    </div>
  );
}

export default AccountContainer;
