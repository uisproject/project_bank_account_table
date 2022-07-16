import React from "react";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import DetailAccounts from "./pages/DetailAccounts";

const AppRoutes = () =>
  useRoutes([
    { path: "/", element: <LandingPage /> },
    { path: "/detail-account/:id", element: <DetailAccounts /> },
  ]);

const App = () => {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
};

export default App;
