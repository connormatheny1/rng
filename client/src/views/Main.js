import React, { Component } from "react";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import { Route, HashRouter } from "react-router-dom";
import Nav from "../components/Nav.js";
import Netflix from "./Netflix";
import HBO from "./HBO";
import MiamiDining from "./MiamiDining";
import OxfordBars from "./OxfordBars.js";
import ColorPalette from "./ColorPalette";
import Spotify from "./Spotify";
import AppleMusic from "./AppleMusic";
import Amazon from './Amazon';
import Hulu from './Hulu';
import HboTv from "./HboTv.js";
import Home from "./Home";
import Footer from "../components/Footer";
import Search from "./Search";

let style = {fontFamily: "'regulator-nova', sans-serif", display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'space-between', width:'100%', height:'100%'};

class Main extends Component {
  render() {
    return (
        <HashRouter>
            <div style = {style}>
                <Nav></Nav>
                <div className="content">
                    <Route exact path="/" component={Home}/>
                    <Route path="/netflix" component={Netflix}/>
                    <Route path="/hbo_shows" component={HboTv}/>
                    <Route path="/hbo" component={HBO}/>
                    <Route path="/amazon-prime" component={Amazon}/>
                    <Route path="/hulu" component={Hulu}/>
                    <Route path="/miami-dining" component={MiamiDining}/>
                    <Route path="/oxford-bars" component={OxfordBars}/>
                    <Route path="/color-palette" component={ColorPalette}/>
                    <Route path="/spotify" component={Spotify}/>
                    <Route path="/apple-music" component={AppleMusic}/>
                    <Route path="/search" component={Search}/>
                </div>
                <Footer></Footer>
            </div>
        </HashRouter>
    );
  }
}
export default Main;