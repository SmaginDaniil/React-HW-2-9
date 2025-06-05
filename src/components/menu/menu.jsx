import React, { Component } from "react";
import "./menu.css";
import Button from "../button/button.jsx";

class Menu extends Component {
  render() {
    return (
      <div className="main_to_choose_container">
        <Button variant="btn__secondary">Breakfast</Button>
        <Button variant="btn__secondary">Dinner</Button>
        <Button variant="btn__secondary">Dessert</Button>
      </div>
    );
  }
}

export default Menu;