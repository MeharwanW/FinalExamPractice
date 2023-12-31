import Header from "./Header";
import { Routes } from "react-router-dom";
import Footer from "./Footer";
import imgs from "./../assets/images/hero-img.png"
import "./HeroSection.css"

export default function HeroSection() {
    return (
        <div className="herosection  d-flex justify-content-between">
            <div className="img-des container">
                <h1 className="head1 h1" style={{ font: "bold" }}>Brainstorm</h1>
                <h1 className="head1">your book easily.</h1>
                <p className="head1">World-class companies use
                    Writealy AI writing platform
                    to unlock brainstorming for publishing
                    a book</p>
                <div className="head1">
                    <button className="btn-lg btn head1 button">Request a demo</button>
                    <button className="btn-lg btn head1 button">Try a Free</button>
                </div>

            </div>
            <div className="hero-img container">
                <img src={imgs} alt="" />
            </div>
        </div>
    );
}
