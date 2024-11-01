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
  REVIEWS: 'REVIEWS',
  PROMO: 'PROMO',
  SORTING: 'SORTING',
} as const;

export const APIRoute = {
  Cameras: '/cameras',
  Orders: '/orders',
  Promo: '/promo'
};

export const MIN_COUNT_STARS = 1;
export const MAX_COUNT_STARS = 5;

export const SortingInner: Record<string, string> = {
  sortPrice: 'по цене',
  sortPopular: 'по популярности',
};

export const SortingOrder: Record<string, string> = {
  up: 'По возрастанию',
  down: 'По убыванию'
};
