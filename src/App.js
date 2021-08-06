import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Searchbar from "./components/Searchbar/Searchbar";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Searchbar />
      </BrowserRouter>
    </div>
  );
}

export default App;
