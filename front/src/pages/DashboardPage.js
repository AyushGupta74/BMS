import React, { useState, useEffect } from "react";
import axios from "axios";
import ExpenseList from "../components/expenses/ExpenseList";

const DashboardPage = () => {
  const [expenses, setExpenses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchExpenses = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/expenses");
        setExpenses(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching expenses:", error);
        setError("Error fetching expenses. Please try again.");
        setLoading(false);
      }
    };

    fetchExpenses();
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <div style={{ color: "red" }}>{error}</div>
      ) : (
        <ExpenseList expenses={expenses} />
      )}
    </div>
  );
};

export default DashboardPage;
