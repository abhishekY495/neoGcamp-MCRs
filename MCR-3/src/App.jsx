import SearchBar from "./components/SearchBar";
import Table from "./components/Table";

function App() {
  return (
    <div className="flex flex-col gap-2 mt-1 w-[1020px] m-auto max-[1040px]:w-full max-[1040px]:px-2">
      <h1 className="text-3xl font-bold">Snacks Table</h1>
      <div className="flex flex-col gap-2">
        <SearchBar />
        <Table />
      </div>
    </div>
  );
}

export default App;
