import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import ArchivePage from "./pages/ArchivePage";

function App() {
  return (
    <>
      <Toaster position="top-right" />
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/archive" element={<ArchivePage />} />
      </Routes>
    </>
  );
}

export default App;
