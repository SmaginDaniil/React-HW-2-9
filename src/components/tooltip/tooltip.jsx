import React, { Component } from "react";
import "./tooltip.css";

class Tooltip extends Component {
  render() {
    const { text, children, component: Tag = "span" } = this.props;
    return (
      <Tag className="tooltip">
        <span className="tooltipText">{text}</span>
        {children}
      </Tag>
    );
  }
}

export default Tooltip;