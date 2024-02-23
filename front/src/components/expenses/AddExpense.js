import React, { useState } from "react";
import axios from "axios";

const AddExpense = () => {
  const [formData, setFormData] = useState({
    amount: "",
    category: "",
    description: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/api/expenses",
        formData
      );
      console.log("Expense added successfully!", response.data);
      // Optionally, reset form fields
    } catch (error) {
      console.error("Error adding expense:", error);
      setError("Error adding expense. Please try again.");
    }
  };

  return (
    <div>
      <h2>Add Expense</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Amount:</label>
          <input
            type="number"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Category:</label>
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </div>
        {error && <div style={{ color: "red" }}>{error}</div>}
        <button type="submit">Add Expense</button>
      </form>
    </div>
  );
};

export default AddExpense;
