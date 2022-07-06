import React from "react";
import '../styles/components/productCard.css';
import EditIcon from '../assets/icons/Edit.jsx';
const ProductCard = ({product, id, fontSize, currentEdit, added, handleDeleteToCart, handleQuantity, handleAddToCart , quantity, img = null, title = 'no tittle', price = null, description = 'no description', handleEdit}) => {
  return(
    <div className="cardContainer">
      <button
        >
          <EditIcon  onClick={(ev) => handleEdit(ev, product)} />
        </button>
      <div className="cardContainer__photo">
        <img src={`${img}`} alt="earphone photo"/>
      </div>
      <h2 
        className="cardContainer__title" 
        style={id === currentEdit ? { fontSize: `${fontSize}px` } : { fontSize: `${fontSize}px` } }
        >
          {
            title.length < 50 
            ? ( title  )
            : (<p className="text-error">{title.slice(0,49)}</p>)
          }
       </h2>
      <div className="cardContainer__price">
        <span>${price}</span> 
        <div className="cardContainer__quantity">
          <button
            disabled={quantity < 1 ? true : false}
            onClick={() => handleQuantity(id,'decrement')}
            >-
          </button>
          <span>{quantity}</span>
          <button onClick={() => handleQuantity(id,'increment')}>+</button>
        </div>
      </div>
      <div className="cardContainer__description">
        <p>
          {description}
        </p>
      </div>
      <div className="cardContainer__actionBtns">
        <button
          // disabled={quantity < 1 ? true : false}
          onClick={() => {
            (!added) 
              ?  handleAddToCart(id)
              :  handleDeleteToCart(id)
          }}>
            {
              (!added)
                ? 'Add to cart'
                : 'Delete added item'
            }
        </button>
        <a href="https://drive.google.com/drive/u/0/folders/1Y0HEhGOQX3iYLkSUAHExU-Fj8XtYkbYW" target="_blank">Learn More</a>
      </div>
    </div>
  );
};

export { ProductCard };