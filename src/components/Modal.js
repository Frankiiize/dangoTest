import React from "react";
import CloseIcon from '../assets/icons/CloseIcon.jsx'
import '../styles/components/modal.css'
const Modal = ({handleEdit, title, handleDelete, handleChangeTitle, edit, fontSize, handleTitleSize}) => {
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
          <input 
            className={title.error ? 'input-error' : undefined}
            placeholder={edit.product.title} 
            onChange={(ev) => handleChangeTitle(ev, edit.product)} 
            type="text" name="editProducts" id="editProducts" 
            />
          {
            !!title.error && (
              <span className="text-error">{title.error}</span>
            )
          }
        </label>
        <label htmlFor="changeFontSize">
          <h3>Cambia el Tamaño del titulo</h3>
          <input type="range" value={fontSize}  min="16" max="40" onChange={(ev) => handleTitleSize(ev)} name="changeFontSize" id="changeFontSize" />
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