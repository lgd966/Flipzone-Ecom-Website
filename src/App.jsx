import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Catagory from "./components/Catagory/Catagory";
import Singleproduct from "./components/SingleProduct/SingleProduct";
import AppContext from "./utils/AppContext";
import NewsTeller from './components/NewsTeller/NewsTeller'
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <AppContext>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="catagory/:id" element={<Catagory/>} />
            <Route path="product/:id" element={<Singleproduct/>} />
          </Routes>
          <NewsTeller />
          <Footer />
        </AppContext>
      </BrowserRouter>
    </>
  );
}

export default App;
