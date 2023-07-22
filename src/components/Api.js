export default class Api {
    constructor(params) {
      this._params = params;
      this._queryParams = {};
      this._queryParams.headers = this._params.headers
    }
    getInitialCards() {
      return fetch(`${this._params.baseRoute}/cards`, this._queryParams)
        .then(res => {
          if (res.ok) {
            return res.json();
          }
          return Promise.reject(`Ошибка: ${res.status}`);
        });
    }
    getUserInfo() {
      return fetch(`${this._params.baseRoute}/users/me`, this._queryParams)
        .then(res => {
          if (res.ok) {
            return res.json();
          }
          return Promise.reject(`Ошибка: ${res.status}`);
        });
    }
    patchUserInfo(name, about) {
      const queryParams = {
        method: 'PATCH',
        headers: this._queryParams.headers,
        body: JSON.stringify({
          name: name,
          about:about
        })
      }
      return fetch(`${this._params.baseRoute}/users/me`, queryParams);
    }
  }