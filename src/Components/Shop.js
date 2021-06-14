import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Shop() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const data = await fetch(
      "https://fortnite-api.theapinetwork.com/upcoming/get"
    );

    const items = await data.json();
    // console.log(items);
    setItems(items.data);
  };
  return (
    <div className="App">
      {Object.entries(items).map(([key, value]) => [
        <Link to={`/shop/${value.itemId}`} key={key}>
          <h1 key={key}>{value.item.name}</h1>,
        </Link>,
      ])}
    </div>
  );
}

export default Shop;
