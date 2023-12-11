import React, { useState, useContext, useEffect } from 'react';
import PopupWithForm from './PopupWithForm';
import CurrentUserContext from '../contexts/CurrentUserContext';

function EditProfilePopup(props) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const currentUser = useContext(CurrentUserContext);

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeDescription(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateUser({
      name,
      about: description,
    });
  }

  useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser, props.isOpen]);

  return (
    <PopupWithForm
      title="Редактировать профиль"
      name="edit-profile"
      isOpen={props.isOpen}
      onClose={props.onClose}
      buttonText="Сохранить"
      onSubmit={handleSubmit}
    >
      <div className="popup__form">
        <input
          id="profileName"
          name="profileName"
          type="text"
          minLength="2"
          maxLength="40"
          required
          className="popup__input  popup__input_type_name"
          placeholder="Введите имя"
          value={name || ''}
          onChange={handleChangeName}
        />
        <span id="profileName-error" className="popup__error"></span>
      </div>
      <div className="popup__form">
        <input
          id="profileAbout"
          name="profileAbout"
          type="text"
          minLength="2"
          maxLength="200"
          required
          className="popup__input  popup__input_type_about"
          placeholder="Введите статус"
          value={description || ''}
          onChange={handleChangeDescription}
        />
        <span id="profileAbout-error" className="popup__error"> </span>
      </div>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
