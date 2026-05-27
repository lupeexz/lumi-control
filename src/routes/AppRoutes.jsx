import { Navigate, Route, Routes } from 'react-router-dom';
import Dashboard from '../pages/Dashboard/Dashboard.jsx';
import Suggestions from '../pages/Suggestions/Suggestions.jsx';
import Companies from '../pages/Companies/Companies.jsx';
import MainLayout from '../layouts/MainLayout.jsx';

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/sugestoes" element={<Suggestions />} />
        <Route path="/empresas" element={<Companies />} />
      </Route>
    </Routes>
  );
}
