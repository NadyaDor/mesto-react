import React, { useContext } from 'react';
import Card from './Card';
import CurrentUserContext from '../contexts/CurrentUserContext';

function Main(props) {
  const currentUser = useContext(CurrentUserContext)

  return (
    <main>
      <section className="profile">
        <button className="profile__edit-avatar"
         onClick={props.onEditAvatar}>
          <img className="profile__avatar" src={currentUser.avatar} alt="Аватар"/>
        </button>
          <div className="profile__info">
          <h1 className="profile__name">{currentUser.name}</h1>
          <button className="profile__edit-button"
           onClick={props.onEditProfile} type="button"></button>
          <p className="profile__about">{currentUser.about}</p>
        </div>
        <button className="profile__add-button"
         onClick={props.onAddPlace} type="button"></button>
      </section>

      <section className="elements">
        {props.cards.map((item) => (
          <Card
            key={item._id}
            card={item}
            onCardClick={props.onCardClick}
            onCardLike={props.onCardLike}
            onCardDelete={props.onCardDelete}
          />
        ))}
      </section>
    </main>
  )
}

export default Main