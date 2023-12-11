function ImagePopup(props) {
  return (
    <div className={`popup popup_type_${props.name}  ${props.isOpen ? "popup_is-opened" : ''}`}>
      <div className="popup-container">
        <button className="popup__close" type="button" onClick={props.onClose}></button>
        {props.card && (
          <>
            <img className="popup-mesto__mask" src={props.card.link} alt={props.card.name} onClick={props.onCardClick} />
            <p className="popup-mesto__name">{props.card.name}</p>
          </>
        )}
      </div>
    </div>
  );
}

export default ImagePopup