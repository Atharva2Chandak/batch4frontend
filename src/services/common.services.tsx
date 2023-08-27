import Cookies from "js-cookie";
import { ISignInRes } from "../types/siginInRes.d";

export function storeUserCookie(user: ISignInRes) {
  localStorage.setItem('user', JSON.stringify(user))
  Cookies.set('bearer-token', user.accessToken, {expires: 1});
  const userSetEvent = new CustomEvent('user-set', {detail: 'the user cookie has just been set'});
  document.dispatchEvent(userSetEvent);
}

export function parseUserCookie() : ISignInRes {
  return JSON.parse(localStorage.getItem('user') || '{}') || {
    id: 0,
    username: '',
    roles: [],
    accesToken: '',
    tokenType: ''
  };
}

export function deleteUserCookie() : void {
  localStorage.removeItem('user');
}