import { Routes, Route } from "react-router-dom";
import Body from "./components/Body";
import MovieDetails from "./components/MovieDetails";
import SearchPage from "./components/SearchPage";
import Selector from "./components/Selector";



function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Body/>}/>
        <Route path="/detailspage/:id" element={<MovieDetails/>}/>
        <Route path="/searchpage/:query" element={<SearchPage/>}/>
      </Routes>
    </>
  );
}

export default App;
