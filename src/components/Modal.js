import React from "react";
import CloseIcon from '../assets/icons/CloseIcon.jsx'
import '../styles/components/modal.css'
const Modal = ({handleEdit, handleDelete, handleChangeTitle, edit, fontSize, handleTitleSize}) => {
  return(
    <div className="modalContainer">
      <div className="modalContainer__btnContainer">
        <button type="button" onClick={handleEdit}>
          <CloseIcon />
        </button>
      </div>
      <div className="modalContainer__editFields">
        <label htmlFor="editProducts">
          <h3>Edita el titulo</h3>
          <input onChange={(ev) => handleChangeTitle(ev,edit.id)} type="text" name="editProducts" id="editProducts" />
        </label>
        <label htmlFor="changeFontSize">
          <h3>Cambia el Tamaño del titulo</h3>
          <input type="range" value={fontSize}  min="16" max="60" onChange={(ev) => handleTitleSize(ev)} name="changeFontSize" id="changeFontSize" />
        </label>
      </div>
      <button onClick={(ev) => {
        handleDelete()
        handleEdit(ev)
      }}>Delete Item</button>
    </div>
  );
};

export { Modal }; 