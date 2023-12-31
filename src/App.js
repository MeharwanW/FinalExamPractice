import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import {Route, Routes} from "react-router-dom";
import HeroSection from "./components/HeroSection";
import Companies from './components/Companies';
import Products from './components/Products';
import DeleteProduct from './components/DeleteProduct';

export default function App() {
    return (
        <div>
            <Header/>
                <Routes>
                    <Route path={"/"} element={<HeroSection />}></Route>
                </Routes>
                <Companies/>
                <Products />
               
            <Footer/>
        </div>
    );
}
