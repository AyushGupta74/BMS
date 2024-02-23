import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./pages/Homepage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import DashboardPage from "./pages/DashboardPage";

const App = () => {
  return (
    <Router>
      <div>
        {/* Navigation */}
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/login">Login</a>
            </li>
            <li>
              <a href="/register">Register</a>
            </li>
            {/* Add more navigation links */}
          </ul>
        </nav>

        {/* Routes */}
        <Switch>
          {/* Homepage Route */}
          <Route exact path="/" component={HomePage} />

          {/* Login Route */}
          <Route path="/login" component={LoginPage} />

          {/* Register Route */}
          <Route path="/register" component={RegisterPage} />

          {/* Dashboard Route */}
          <Route path="/dashboard" component={DashboardPage} />
          {/* Add more routes for other pages */}
        </Switch>
      </div>
    </Router>
  );
};

export default App;
