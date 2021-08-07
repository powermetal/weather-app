import "./App.scss";
import { HashRouter, Route } from "react-router-dom";
import Searchbar from "./components/SearchBar/SearchBar";
import SearchResults from "./components/SearchResults/SearchResults";

function App() {
  return (
    <div className="app">
      <div className="container">
        <HashRouter>
          <Searchbar />
          <Route path="/weather" exact component={SearchResults} />
        </HashRouter>
      </div>
    </div>
  );
}

export default App;
