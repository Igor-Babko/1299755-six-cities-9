export enum AppRoute {
  Main = '/main',
  Root = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer',
  Room = '/offer/:id'
}
export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const URL_PIN_DEFAULT = 'img/pin.svg';
export const URL_PIN_CURRENT = 'img/pin-active.svg';

export const PIN_WIDTH = 42;
export const PIN_HEIGHT = 68;
