import "./App.scss";
import { BrowserRouter, Route } from "react-router-dom";
import Searchbar from "./components/SearchBar/SearchBar";
import SearchResults from "./components/SearchResults/SearchResults";

function App() {
  return (
    <div className="app">
      <div className="container">
        <BrowserRouter>
          <Searchbar />
          <Route path="/weather" exact component={SearchResults} />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
