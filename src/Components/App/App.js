import "./App.css";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import PlayList from "../PlayList/PlayList";

function App() {
  return (
    <div className="App">
      <h1>
        Ja<span classname="highlight">mmm</span>ing
      </h1>
      <SearchBar />
      <div className="App-playlist">
        <SearchResults />
        <PlayList />
      </div>
    </div>
  );
}

export default App;
