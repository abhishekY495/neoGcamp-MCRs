import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import { NavBar } from "./components/NavBar";
import { HomePage } from "./pages/HomePage";
import { SingleEventPage } from "./pages/SingleEventPage";

function App() {
  return (
    <>
      <Toaster position="bottom-right" />
      <div className="mb-20">
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/event/:id" element={<SingleEventPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
