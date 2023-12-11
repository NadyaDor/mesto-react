import React, { useRef, useEffect } from 'react';
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup(props) {
  const avatarRef = useRef();

  function handleSubmit(e) {
    e.preventDefault()
    props.onUpdateAvatar({ avatar: avatarRef.current.value })
  }

  useEffect(() => {
    avatarRef.current.value = ''
  }, [props.isOpen])

  return (
    <PopupWithForm
      title="Обновить аватар"
      name="edit-avatar"
      isOpen={props.isOpen}
      onClose={props.onClose}
      buttonText="Сохранить"
      onSubmit={handleSubmit}>
      <div className="popup__form">
        <input
          id="profileAvatar"
          name="profileAvatar"
          type="url"
          required
          className="popup__input  popup__input_type_avatar"
          placeholder="Ссылка на картинку"
          ref={avatarRef}
        />
        <span
          id="profileAvatar-error"
          className="popup__error">
        </span>
      </div>
    </PopupWithForm>
  )
}

export default EditAvatarPopup