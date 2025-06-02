import React from "react";
import "./menu.css";
import Button from "../button/button.jsx";

const Menu = () => {
  return (
    <div className="main_to_choose_container">
      <Button type="btn__secondary">Desert</Button>
      <Button type="btn__secondary">Dinner</Button>
      <Button type="btn__secondary">Breakfast</Button>
    </div>
  );
};

export default Menu;
