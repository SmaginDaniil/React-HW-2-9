import React, { Component } from "react";
import Menu from "../menu/menu.jsx";
import ProductCard from "../productCard/productCard.jsx";
import "./main.css";
import Tooltip from "../tooltip/tooltip.jsx";
import Button from "../button/button.jsx";

const VISIBLE_ITEMS_STEP = 6;

class Main extends Component {
  state = {
    menuItems: [],
    visibleCount: VISIBLE_ITEMS_STEP,
  };

  componentDidMount() {
    this.loadMenuItems();
  }

  loadMenuItems = async () => {
    try {
      const res = await fetch("https://65de35f3dccfcd562f5691bb.mockapi.io/api/v1/meals");
      const data = await res.json();
      this.setState({ menuItems: data });
    } catch (err) {
      console.error("Error fetching data:", err);
    }
  };

  handleSeeMore = () => {
    this.setState(({ visibleCount }) => ({
      visibleCount: visibleCount + VISIBLE_ITEMS_STEP,
    }));
  };

  render() {
    const { menuItems, visibleCount } = this.state;
    const visibleItems = menuItems.slice(0, visibleCount);
    const hasMore = visibleCount < menuItems.length;

    return (
      <main className="main">
        <div className="main__title">Browse our menu</div>
        <div className="main__subtitle common_font">
          Use our menu to place an order online, or{" "}
          <Tooltip text="Call us: +37067683921">
            <span className="highlight">phone</span>
          </Tooltip>{" "}
          our store <br /> to place a pickup order. Fast and fresh food.
        </div>

        <Menu />

        <div className="main_menu">
          {visibleItems.map((item) => (
            <ProductCard
              key={item.id}
              productId={item.id}
              index={item.id}
              title={item.meal}
              price={item.price}
              description={item.instructions}
              image={item.img}
              onAdd={this.props.onAddToCart}
            />
          ))}
        </div>

        {hasMore && (
          <Button variant="btn__primary" onClick={this.handleSeeMore}>
            See more
          </Button>
        )}
      </main>
    );
  }
}

export default Main;