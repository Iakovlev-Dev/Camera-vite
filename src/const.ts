export enum AppRoute {
  Main = '/',
  Cameras = '/cameras/:id' //добавить id
}

export const NavLinkMenu = {
  Catalog: 'Каталог',
  Guarantee: 'Гарантии',
  Delivery: 'Доставка',
  About: 'О компании'
};

export const NameSpace = {
  DATA_CARDS: 'DATA_CARDS',
  REVIEWS: 'REVIEWS'
} as const;

export const APIRoute = {
  Cameras: '/cameras',
  Orders: '/orders'
};

export const MIN_COUNT_STARS = 1;
export const MAX_COUNT_STARS = 5;
