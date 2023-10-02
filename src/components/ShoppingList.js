import { useState } from "react";
import Filter from "./Filter";
import Item from "./Item";

const ShoppingList = ({ items }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const handleCategoryChange = (e) => setSelectedCategory(e.target.value);
  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;
    return item.category === selectedCategory;
  });

  return (
    <div className="ShoppingList">
      <Filter onCategoryChange={handleCategoryChange} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
};

export default ShoppingList;
