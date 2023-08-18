import { Navigate, Route, Routes } from "react-router-dom";
import { ListBrands } from "../pages/private/Brands";
import { CreateBrand } from "../pages/private/Brands/CreateBrand";
import { EditBrand } from "../pages/private/Brands/EditBrand";
import { ListCars } from "../pages/private/Cars";
import { CreateCar } from "../pages/private/Cars/CreateCar";
import { EditCar } from "../pages/private/Cars/EditCar";
import { FilterBrand } from "../pages/private/Cars/FilterBrand";
import { FilterTransmission } from "../pages/private/Cars/FilterTransmission";
import { Dashboard } from "../pages/private/Dashboard";
import { ListTransmissions } from "../pages/private/Transmission";
import { CreateTransmission } from "../pages/private/Transmission/CreateTransmission";
import { EditTransmission } from "../pages/private/Transmission/EditTransmission";
import { SignIn } from "../pages/public/SignIn";
import PrivateRoute from "./PrivateRoute";

export function AppRoutes() {
  return (
    <Routes>
      {/* PUBLIC */}
      <Route path="/login" element={<SignIn />} />

      {/* PRIVATE */}
      <Route
        path="/"
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      />

      <Route
        path="/carros"
        element={
          <PrivateRoute>
            <ListCars />
          </PrivateRoute>
        }
      />

      <Route
        path="/carros/cadastrar-carro"
        element={
          <PrivateRoute>
            <CreateCar />
          </PrivateRoute>
        }
      />

      <Route
        path="/carros/editar-carro"
        element={
          <PrivateRoute>
            <EditCar />
          </PrivateRoute>
        }
      />

      <Route
        path="/carros/editar-carro/:id"
        element={
          <PrivateRoute>
            <EditCar />
          </PrivateRoute>
        }
      />

      <Route
        path="/carros/filtrar-marcas-carros"
        element={
          <PrivateRoute>
            <FilterBrand />
          </PrivateRoute>
        }
      />

      <Route
        path="/carros/filtrar-cambio-carros"
        element={
          <PrivateRoute>
            <FilterTransmission />
          </PrivateRoute>
        }
      />

      <Route
        path="/marcas"
        element={
          <PrivateRoute>
            <ListBrands />
          </PrivateRoute>
        }
      />

      <Route
        path="/marcas/cadastrar-marca"
        element={
          <PrivateRoute>
            <CreateBrand />
          </PrivateRoute>
        }
      />

      <Route
        path="/marcas/editar-marca"
        element={
          <PrivateRoute>
            <EditBrand />
          </PrivateRoute>
        }
      />

      <Route
        path="/marcas/editar-marca/:id"
        element={
          <PrivateRoute>
            <EditBrand />
          </PrivateRoute>
        }
      />

      <Route
        path="/cambios"
        element={
          <PrivateRoute>
            <ListTransmissions />
          </PrivateRoute>
        }
      />

      <Route
        path="/cambios/cadastrar-cambio"
        element={
          <PrivateRoute>
            <CreateTransmission />
          </PrivateRoute>
        }
      />

      <Route
        path="/cambios/editar-cambio"
        element={
          <PrivateRoute>
            <EditTransmission />
          </PrivateRoute>
        }
      />

      <Route
        path="/cambios/editar-cambio/:id"
        element={
          <PrivateRoute>
            <EditTransmission />
          </PrivateRoute>
        }
      />

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
