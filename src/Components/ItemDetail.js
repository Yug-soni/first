import React, { useState, useEffect } from "react";

function ItemDetail({ match }) {
  const [item, setItem] = useState({});
  useEffect(() => {
    fetchItem();
    // console.log(item);
  }, []);

  const fetchItem = async () => {
    const fetchItem = await fetch(
      `https://fortnite-api.theapinetwork.com/item/get?id=${match.params.id}`
    );
    const item = await fetchItem.json();
    // console.log(match.params.id);
    // console.log(item.data.item.name);
    // console.log(item);
    setItem(item);
  };

  if (item.data) {
    return (
      <div className="App">
        {<h1> {item.data.item.name}</h1>}
        <img src={item.data.item.images.icon} alt="" />
      </div>
    );
  } else {
    return <div>Loading data.</div>;
  }
}

export default ItemDetail;
