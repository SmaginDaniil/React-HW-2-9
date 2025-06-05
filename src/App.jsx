import React, { Component } from "react";
import Header from "./components/header/header.jsx";
import Main from "./components/main/main.jsx";
import Footer from "./components/footer/footer.jsx";
import "./App.css";

class App extends Component {
  state = {
    cartItems: {},
    totalQuantity: 0,
  };

  handleAddToCart = (product) => {
    this.setState((prevState) => {
      const cartItems = { ...prevState.cartItems };
      const id = product.productId || product.id;
      const quantity = Number(product.quantity);

      if (cartItems[id]) {
        cartItems[id] = {
          ...cartItems[id],
          quantity: cartItems[id].quantity + quantity,
        };
      } else {
        cartItems[id] = {
          ...product,
          quantity,
        };
      }

      return {
        cartItems,
        totalQuantity: prevState.totalQuantity + quantity,
      };
    });
  };

  render() {
    const { totalQuantity } = this.state;

    return (
      <>
        <Header totalQuantity={totalQuantity} />
        <Main onAddToCart={this.handleAddToCart} />
        <Footer />
      </>
    );
  }
}

export default App;