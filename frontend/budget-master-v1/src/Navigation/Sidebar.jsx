import React from 'react';
import { Link , Route , Routes} from 'react-router-dom';
import './Sidebar.css'
import Dashboard from '../Dashboard/Dashboard';

const Sidebar = () => {
  return (
    <nav className="sidebar">
      <ul>
        <li>
          <Link to="/dashboard">Dashboard</Link>
          <Routes>
            <Route path="/dashboard" element={<Dashboard/>} />
          </Routes>
        </li>
        <li>
          <Link to="/budget-management">Budget Management</Link>
        </li>
        <li>
          <Link to="/expense-management">Expense Management</Link>
        </li>
        <li>
          <Link to="/budget-report">Budget Report</Link>
        </li>
        <li>
          <Link to="/expense-report">Expense Report</Link>
        </li>
        <li>
          <Link to="/category-lists">Category Lists</Link>
        </li>
        <li>
          <Link to="/settings">Settings</Link>
        </li>
      </ul>
      
    </nav>
  );
};

export default Sidebar;
 