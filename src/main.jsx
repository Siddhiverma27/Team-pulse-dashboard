import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import store from "./redux/store";
import "./index.css";
import App from "./App";
import LeadDashboard from "./pages/LeadDashboard";
import MemberDashboard from "./pages/MemberDashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <LeadDashboard /> },
      { path: "lead", element: <LeadDashboard /> },
      { path: "member", element: <MemberDashboard /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
