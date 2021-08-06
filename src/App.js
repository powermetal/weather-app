import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Searchbar from "./components/SearchBar/SearchBar";
import SearchResults from "./components/SearchResults/SearchResults";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Searchbar />
        <Route path="/weather" exact component={SearchResults} />
      </BrowserRouter>
    </div>
  );
}

export default App;
