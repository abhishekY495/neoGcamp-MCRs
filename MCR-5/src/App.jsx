import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import HomePage from "./pages/HomePage";
import SingleRecipeDetailsPage from "./pages/SingleRecipeDetailsPage";

function App() {
  return (
    <>
      <Toaster position="top-center" />
      <div className="mb-20">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/recipe/:id" element={<SingleRecipeDetailsPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
