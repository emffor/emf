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

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/login" element={<SignIn />} />
      <Route path="/carros" element={<ListCars />} />
      <Route path="/carros/cadastrar-carro" element={<CreateCar />} />
      <Route path="/carros/editar-carro" element={<EditCar />} />
      <Route path="/carros/editar-carro/:id" element={<EditCar />} />
      <Route path="/carros/filtrar-marcas-carros" element={<FilterBrand />} />
      <Route
        path="/carros/filtrar-cambio-carros"
        element={<FilterTransmission />}
      />
      <Route path="/marcas" element={<ListBrands />} />
      <Route path="/marcas/cadastrar-marca" element={<CreateBrand />} />
      <Route path="/marcas/editar-marca" element={<EditBrand />} />
      <Route path="/marcas/editar-marca/:id" element={<EditBrand />} />
      <Route path="/cambios" element={<ListTransmissions />} />
      <Route
        path="/cambios/cadastrar-cambio"
        element={<CreateTransmission />}
      />
      <Route path="/cambios/editar-cambio" element={<EditTransmission />} />
      <Route path="/cambios/editar-cambio/:id" element={<EditTransmission />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
