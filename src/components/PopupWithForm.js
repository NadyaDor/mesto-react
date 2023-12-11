function PopupWithForm({title, name, children, isOpen, onClose, buttonText, onSubmit}) {
  return(
    <div className={`popup popup_type_${name} ${isOpen ? "popup_is-opened" : ''}`}>
      <div className="popup__container">
        <button className="popup__close" type="button" onClick={onClose}></button>
        <h2 className="popup__title">{title}</h2>
        <form className="popup__form" name={name} onSubmit={onSubmit}>
          {children}
          <button className="popup__button-edit" type="submit">{buttonText}</button>
        </form>
      </div>
    </div>
  )
}

export default PopupWithForm