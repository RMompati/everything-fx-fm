import {BrowserRouter, Route, Routes} from "react-router-dom"
import {HomePage} from "./pages/HomePage";

export const AppRoutes = () => {
  return (
      <BrowserRouter>
        <>
          <h3 className="text-center">Everything Forex - FMaster</h3>
        </>
        <Routes>
          <Route path="/" element={ <HomePage /> } />
        </Routes>
      </BrowserRouter>
  );
}