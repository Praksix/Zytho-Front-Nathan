import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footers";
import Hero from "./components/Hero";

import BeersList from "./components/BeersList";


function App() {
  return (
    <>
    <Header title="Zythologue"/>
    <Hero/>
    <BeersList/>
    <Footer title="Zythologue"/>
    </>
  );
}

export default App;