import React from "react";
import { formatCurrency } from "../components/formatCurrency";

function Transaction({ transaction, onDelete }) {
  return (
    <tr>
      <td>{transaction.date}</td>
      <td>{transaction.description}</td>
      <td>{transaction.category}</td>
      <td>{formatCurrency(transaction.amount)}</td>
      <td>
        <button className="delete-btn" onClick={() => onDelete(transaction.id)}>
          <i className="fas fa-trash-alt"></i> Delete
        </button>
      </td>
    </tr>
  );
}

export default Transaction;
