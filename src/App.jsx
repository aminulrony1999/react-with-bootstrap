import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import Pricelist from "./components/Pricelist/Pricelist";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <h1 className="text-7xl text-purple-600">Md Aminul Islam Rony</h1>
      <Pricelist></Pricelist>
    </div>
  );
}

export default App;
