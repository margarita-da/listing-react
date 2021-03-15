import React from "react"
import PropTypes from "prop-types"
import etsy from "../data/etsy.json"

console.log(etsy)

// etsy.map((item) => console.log(item.MainImage.url_570xN))

function Listing() {
  return (
    <div className="item-list">
      {etsy.map((item) => (
        <div className="item">
          <div className="item-image">
            <a href={item.url}>
              <img src={item.MainImage && item.MainImage.url_570xN} alt="img" />
            </a>
          </div>
          <div className="item-details">
            <p className="item-title">
              {item.title &&
                (item.title.length > 50
                  ? item.title.slice(0, 50) + "..."
                  : item.title)}
            </p>
            <p className="item-price">
              {item.currency_code} {Number(item.price).toFixed(2)}
            </p>
            <p
              className={`item-quantity ${
                item.quantity <= 10
                  ? "level-low"
                  : item.quantity <= 20
                  ? "level-medium"
                  : "level-high"
              }`}
            >
              {item.quantity} left
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}

Listing.propTypes = {}

export default Listing
