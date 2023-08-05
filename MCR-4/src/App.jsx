import { Link, Route, Routes } from "react-router-dom";

import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import SinglePostPage from "./pages/SinglePostPage";
import SortBySideBar from "./components/SortBySideBar";
import UserProfile from "./components/UserProfile";

function App() {
  return (
    <>
      <header className="text-center text-2xl font-bold shadow-md py-4">
        <Link to="/">MyForum</Link>
      </header>
      {/*  */}
      <div className="flex justify-center gap-6 p-5">
        <aside className="flex flex-col space-y-60">
          <NavBar />
          <UserProfile />
        </aside>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/explore" element={<HomePage />} />
          <Route path="/bookmarks" element={<HomePage />} />
          <Route path="/profile" element={<HomePage />} />
          <Route path="/post/:id" element={<SinglePostPage />} />
        </Routes>
        <SortBySideBar />
      </div>
    </>
  );
}

export default App;
