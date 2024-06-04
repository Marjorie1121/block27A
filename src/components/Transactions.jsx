import React from 'react';

function Transactions() {
  const transactions = [
    // Add your transactions data here
  ];

  return (
    <div className="transactions">
      <h2>Recent Transactions</h2>
      <ul>
        {transactions.map((transaction, index) => (
          <li key={index}>{transaction}</li>
        ))}
      </ul>
    </div>
  );
}

export default Transactions;