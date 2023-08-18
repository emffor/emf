import { Navigate, Route, Routes } from "react-router-dom";

import { Dashboard } from "../pages/private/Dashboard";
import { SignIn } from "../pages/public/SignIn";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<SignIn />} />
      <Route path="/" element={<Dashboard />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
