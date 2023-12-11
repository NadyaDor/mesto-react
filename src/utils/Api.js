class Api {
  constructor(options) {
    this.baseUrl = options.baseUrl; // базовый адрес
    this.headers = options.headers; // заголовки запроса
  }
  
  _checkResponse(res) { // проверка ответа с сервера
    if (res.ok) { // если ответ успешный (код 200)
      return res.json(); // возвращает преобразованный ответ
    }
    return Promise.reject(new Error(`Ошибка: ${res.status}`)); // отклоняет промис с сообщением об ошибке
  }
  
  getUserInfo() { // получение информации о пользователе
    return fetch(`${this.baseUrl}/users/me`, {
      headers: this.headers
    })
    .then(this._checkResponse);
  }
  
  getInitialCards() { // получение списка карточек
    return fetch(`${this.baseUrl}/cards`, {
      method: 'GET',
      headers: this.headers
    })
    .then(this._checkResponse);
  }
  
  setUserInfo(data) { // обновление информации о пользователе
    return fetch(`${this.baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this.headers,
      body: JSON.stringify(data)
    })
    .then(this._checkResponse);
  }
  
  setUserAvatar(data) { // обновление аватара
    return fetch(`${this.baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: {
        ...this.headers,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        avatar: data.avatar
      })
    })
    .then(this._checkResponse);
  }
  
  addCard(data) { // запрос на добавление новой карточки
    return fetch(`${this.baseUrl}/cards`, {
      method: 'POST',
      headers: {
        ...this.headers,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(this._checkResponse);
  }
  
  deleteMyCard(cardId) { // удаление карточки
    return fetch(`${this.baseUrl}/cards/${cardId}`, {
      method: 'DELETE',
      headers: this.headers
    })
    .then(this._checkResponse);
  }

  changeLikeCardStatus(cardId, isLiked) {
    return fetch(`${this.baseUrl}/cards/likes/${cardId}`, {
      method: isLiked ? "PUT" : "DELETE",
      headers: this.headers
    }).then(this._checkResponse);
  }
}

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-68',
  headers: {
    authorization: '70f24e40-981a-4d62-bb24-0aeaa2de0af4',
    'Content-Type': 'application/json'
  }
})

export default api