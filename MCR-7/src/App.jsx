import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import CountriesPage from "./pages/CountriesPage";
import DestinationsPage from "./pages/DestinationsPage";
import DestinationDetailsPage from "./pages/DestinationDetailsPage";

function App() {
  return (
    <div className="mb-20">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:continent_name" element={<CountriesPage />} />
        <Route
          path="/:continent_name/:country_name/"
          element={<DestinationsPage />}
        />
        <Route
          path="/:continent_name/:country_name/:destination_name"
          element={<DestinationDetailsPage />}
        />
      </Routes>
    </div>
  );
}

export default App;
