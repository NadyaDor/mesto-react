import React, { useContext } from "react";
import CurrentUserContext from "../contexts/CurrentUserContext";

function Card(props) {
  const currentUser = useContext(CurrentUserContext);
  const isOwn = props.card.owner._id === currentUser._id;
  const isLiked = props.card.likes.some(i => i._id === currentUser._id);
  const cardLikeButtonClassName = (`card__hurt ${isLiked && 'card__hurt_active'}`);

  function handleClick() {
    props.onCardClick(props.card);
  }

  function handleLikeClick() {
    props.onCardLike(props.card)
  }
  
  function handleDeleteClick() {
    props.onCardDelete(props.card)
  }

  return (
    <div className="card">
      <div
        className="card__mask"
        style={{ backgroundImage: `url(${props.card.link})` }}
        onClick={handleClick}
      />
      {isOwn && <button className="card__basket" onClick={handleDeleteClick} type="button" />}
      <div className="card__about">
        <h2 className="card__place">{props.card.name}</h2>
        <div className="card__hurts">
          <button className={cardLikeButtonClassName} onClick={handleLikeClick} type="button" />
          <p className="card__hurt-count">{props.card.likes.length}</p>
        </div>
      </div>
    </div>
  );
}

export default Card