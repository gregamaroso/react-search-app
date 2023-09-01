import React from "react";

function truncateText(text) {
  let textContent = text;
  if (text.length > 100) {
    textContent = text.slice(0, 100) + "...";
  }
  return textContent;
}

// Usage:
truncateText(".truncate", 50); // This will truncate text in elements with class 'truncate' to 50 characters
function ItemList({ items, query }) {
  return (
    <>
      {items.length > 4 && (
        <div className="searchItem__results">
          Showing 4 of {items.length} results
        </div>
      )}
      <div className="item-list">
        {query.length > 3 && items.length === 0 && (
          <div className="searchItem__no-results">No results found</div>
        )}
        {items.slice(0, 4).map((item) => (
          <div key={item.item.refScore} className="searchItem">
            <div className="searchItem__image">
              <img src={item.item.picture} alt={item.item.name} />
            </div>
            <div className="searchItem__name">{item.item.name}</div>
            <div className="searchItem__description">
              {truncateText(item.item.about)}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default ItemList;
