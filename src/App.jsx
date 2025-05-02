import { lazy, Suspense } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import CityList from "./components/CityList";
import CountryList from "./components/CountryList";
import City from "./components/City";
import Form from "./components/Form";
import { CitiesProver } from "./contexts/CitiesContext";
import { AuthProvider } from "./contexts/FakeAuthContext";
import ProtectRoutes from "./pages/ProtectRoutes";
import SpinnerFullPage from "./components/SpinnerFullPage";

const Homepage = lazy(() => import("./pages/Homepage"));
const Product = lazy(() => import("./pages/Product"));
const Pricing = lazy(() => import("./pages/Pricing"));
const Login = lazy(() => import("./pages/Login"));
const AppLayout = lazy(() => import("./pages/AppLayout"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));

export default function App() {
  return (
    <AuthProvider>
      <CitiesProver>
        <BrowserRouter>
          <Suspense fallback={<SpinnerFullPage />}>
            <Routes>
              <Route path="/WorldWise" element={<Homepage />} />
              <Route path="/WorldWise/product" element={<Product />} />
              <Route path="/WorldWise/pricing" element={<Pricing />} />
              <Route path="/WorldWise/login" element={<Login />} />
              <Route
                path="/WorldWise/app"
                element={
                  <ProtectRoutes>
                    <AppLayout />
                  </ProtectRoutes>
                }
              >
                <Route
                  index
                  element={<Navigate replace to="/WorldWise/cities" />}
                />
                <Route path="/WorldWise/cities" element={<CityList />} />
                <Route path="/WorldWise/cities/:id" element={<City />} />
                <Route path="/WorldWise/countries" element={<CountryList />} />
                <Route path="/WorldWise/form" element={<Form />} />
              </Route>
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </CitiesProver>
    </AuthProvider>
  );
}
