import React, { Component } from "react";
import GetColorPalette from "../api/GetColorPalette";
// import App from '../api/App';
 
class ColorPalette extends Component {
  render() {
    return (
      <div>
          <GetColorPalette></GetColorPalette>
      </div>
    );
  }
}
 
export default ColorPalette;