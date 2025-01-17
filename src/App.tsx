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
import Dashboard from "./pages/Dashboard";
import CtrlBeers from "./pages/CtrlBeers";
import AddBeer from "./pages/AddBeer";
import ModifBeer from "./pages/ModifBeer";






function App() {
  return (
  <>

    <Header title="Zythologue"/>
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/bieres" element={<Bieres />} />
        <Route path="/search" element={<Search />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/ctrlbeers" element={<CtrlBeers />} />
        <Route path="/addbeer" element={<AddBeer />} />
        <Route path="/modifbeer/:id" element={<ModifBeer />} />
        <Route path="/breweries" element={<Breweries />} />
        <Route path="/BiereDetail/:id" element={<BiereDetail />} />
        <Route path="/BreweryDetail/:id" element={<BreweryDetail />} />
      </Routes>
    <Footer title="Zythologue"/>
    </>
  );
}



export default App;