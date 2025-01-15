import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footers";
import { Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import Bieres from "./pages/Bieres";
import Breweries from "./pages/Breweries";
import BiereDetail from"./pages/BiereDetail";
import BreweryDetail from"./pages/BreweryDetail";
import Search from "./pages/Search";






function App() {
  return (
  <>

    <Header title="Zythologue"/>
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/bieres" element={<Bieres />} />
        <Route path="/search" element={<Search />} />
        <Route path="/breweries" element={<Breweries />} />
        <Route path="/BiereDetail/:id" element={<BiereDetail />} />
        <Route path="/BreweryDetail/:id" element={<BreweryDetail />} />
      </Routes>
    <Footer title="Zythologue"/>
    </>
  );
}



export default App;