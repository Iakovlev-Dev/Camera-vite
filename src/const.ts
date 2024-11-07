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
  FILTERS: 'FILTERS'
} as const;

export const APIRoute = {
  Cameras: '/cameras',
  Orders: '/orders',
  Promo: '/promo'
};

export const MIN_COUNT_STARS = 1;
export const MAX_COUNT_STARS = 5;

export const MIN_LETTER_FOR_SEARCH = 3;

export const SortingInner: Record<string, string> = {
  sortPrice: 'по цене',
  sortPopular: 'по популярности',
};

export const SortingOrder: Record<string, string> = {
  up: 'По возрастанию',
  down: 'По убыванию'
};

export const FilterCategory: Record<string, string> = {
  photocamera: 'Фотокамера',
  videocamera: 'Видеокамера'
};

export const FilterLevel: Record<string, string> = {
  zero: 'Нулевой',
  nonProfessional: 'Любительский',
  professional: 'Профессиональный'
};

export const FilterType: Record<string, string> = {
  digital: 'Цифровая',
  film: 'Плёночная',
  snapshot: 'Моментальная',
  collection: 'Коллекционная'
};
