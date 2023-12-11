import React, { useState, useEffect } from 'react';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup(props) {
  const [name, setName] = useState('');
  const [link, setLink] = useState('');

  function handleName(e) { setName(e.target.value) }
  function handleLink(e) { setLink(e.target.value) }
  
  function handleSubmit(e) {
    e.preventDefault()
    props.onAddPlace({ name: name, link: link })
  }

  useEffect(() => {
    setName('')
    setLink('')
  }, [props.isOpen])

  return (
    <PopupWithForm
      title="Новое место"
      name="add-place"
      isOpen={props.isOpen}
      onClose={props.onClose}
      buttonText="Сохранить"
      onSubmit={handleSubmit}>
        <div className="popup__form">
          <input
            id="name"
            required
            name="name"
            type="text"
            minLength="2"
            maxLength="30"
            className="popup__input  popup__input_type_place"
            placeholder="Название"
            value={name}
            onChange={handleName}
          />
          <span id="name-error" className="popup__error"></span>
        </div>
        <div className="popup__form">
          <input
            id="link"
            required name="link"
            type="url"
            className="popup__input  popup__input_type_link"
            placeholder="Ссылка на картинку"
            value={link}
            onChange={handleLink}
          />
          <span id="link-error" className="popup__error"></span>
        </div>
    </PopupWithForm>
  )
}

export default AddPlacePopup