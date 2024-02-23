import React from "react";

const ExpenseItem = ({ expense }) => {
  return (
    <div style={expenseStyle}>
      <p>
        <strong>Amount:</strong> ${expense.amount}
      </p>
      <p>
        <strong>Category:</strong> {expense.category}
      </p>
      <p>
        <strong>Description:</strong> {expense.description}
      </p>
    </div>
  );
};

const expenseStyle = {
  backgroundColor: "#f4f4f4",
  padding: "10px",
  marginBottom: "15px",
};

export default ExpenseItem;
