import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import HomePage from "./pages/HomePage";
import RestaurantDetailsPage from "./pages/RestaurantDetailsPage";

function App() {
  return (
    <>
      <Toaster position="top-center" />
      <div className="mb-20">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/restaurant/:id" element={<RestaurantDetailsPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
