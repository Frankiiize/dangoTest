import React, { useEffect, useState } from "react";
import { ProductCard } from "../../components/ProductCard";
import { cardsData as cards } from "./data";
import '../../styles/views/home.css'
import { Modal } from "../../components/Modal";
const Home = () => {
  const [ cardState, setCardState ] = useState(cards);
  const [edit, setEdit ] = useState({
    show: false,
    id: null,
  });
  const [ title, setTitle ] = useState('');
  const [ fontSize, setFontSize ] = useState(25);
  const [ quantity , setQuantity ] = useState(1);
  const [ cartItems, setCartItems ] = useState({cart:[]});
  const handleEdit = (ev,id) => {
    ev.stopPropagation();
    if(!edit.show){
      setEdit({
        show: !edit.show,
        id: id,
      });
    } else {
      setEdit({
        show: false,
        id: null,
      }) 
    }
  }
  const sumTotal = (item) => {
    const reducer = (previusValue, currentValue) => previusValue + currentValue.price * currentValue.quantity;
    const sum = item.reduce(reducer,0);
    return sum;
  }
  
  const handleChangeTitle = (ev, id) => {
    const index = cardState.findIndex((item) => item.id === id);
    setTitle(ev.target.value);
    cardState[index].title = ev.target.value
  }

  const handleTitleSize = (ev) => {
    const index = cardState.findIndex((item) => item.id === edit.id);
    cardState[index].fontSize = ev.target.value;
    setFontSize(ev.target.value)
  }
  const handleQuantity = (id, action) =>{
    const index = cardState.findIndex((item) => item.id === id);
    if(action === 'increment'){
      setQuantity(quantity + 1)
      cardState[index].quantity = cardState[index].quantity  + 1
    } else {
      setQuantity(quantity - 1)
      cardState[index].quantity = cardState[index].quantity  - 1
      if(!!cardState[index].quantity < 1){
        handleDeleteToCart(id);
      }
    }
  }
  const handleDelete = () => {
    const stayItems = cardState.filter((item) => item.id !== edit.id)
    setCardState(stayItems)
  }
  const handleAddToCart = (id) => {
    const index = cardState.findIndex((item) => item.id === id);
    const itemToAdd =  cardState[index];
    if(itemToAdd.quantity === 0){
      itemToAdd.quantity = 1
    }
    cardState[index].added = true;
    setCartItems({...cartItems, cart : cartItems.cart.concat(itemToAdd)})
  }
  const handleDeleteToCart = (id) => {
    const index = cardState.findIndex((item) => item.id === id);
    const stayItems = cartItems.cart.filter((item) => {
      return item.id !== id
    }) 
    cardState[index].added = false;
    setCartItems({cart: stayItems})
  }

  return(
    <>
    <section className="cardSection">
      {
        cardState.map((item) => (
          <ProductCard 
            key={`product-${item.id}`}
            img={item.img}
            id={item.id}
            title={item.title}
            price={item.price}
            description={item.description}
            handleEdit={handleEdit}
            quantity={item.quantity}
            currentEdit={edit.id}
            handleQuantity={handleQuantity}
            fontSize={item.fontSize}
            handleAddToCart={handleAddToCart}
            handleDeleteToCart={handleDeleteToCart}
            added={item.added}
          />
        ))
      }
    </section>
    <section className="totalContainer">
      <h3>Total:</h3>
      <span>{sumTotal(cartItems.cart)}</span>
    </section>
    {
      !!edit.show && (
       <Modal 
        handleEdit={handleEdit}
        handleChangeTitle={handleChangeTitle}
        edit={edit}
        fontSize={fontSize}
        handleTitleSize={handleTitleSize}
        handleDelete={handleDelete}
        />
      )
    }
    </>
  );
};

export default Home;