import React from "react";

const Item = ({ items }) => {
  return (
    <div className="item-container">
      <div className="item-image">
        <img src={items.urlToImage} />
      </div>
      <h4 className="item-title">{items.author}</h4>
      <div className="item-desc">{items.description}</div>
    </div>
  );
};

export default Item;
