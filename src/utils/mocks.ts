import {TCameraCard} from '../types/type-cards.ts';
import * as faker from 'faker';
import {TState} from '../types/type-store.ts';
import {NameSpace} from '../const.ts';
import {TPromo} from '../types/type-promo.ts';
import {TReview} from '../types/type-reviews.ts';
import {ThunkDispatch} from '@reduxjs/toolkit';
import {createApi} from '../services/api.ts';
import {Action} from 'redux';

export type TAppThunkDispatch = ThunkDispatch<TState, ReturnType<typeof createApi>, Action>

export const makeFakeStore = (initialState: Partial<TState>) => ({
  [NameSpace.DATA_CARDS]: {
    cameras: [],
    camera: null,
    similarCameras: [],
    currentPage: 1
  },
  [NameSpace.REVIEWS]: {
    reviews: [],
    isLoadingReviews: false,
  },
  [NameSpace.PROMO]: {
    promo: []
  },
  [NameSpace.SORTING]: {
    sortOrder: '',
    sortInner: ''
  },
  [NameSpace.FILTERS]: {
    filterCategory: '',
    filterType: [],
    filterLevel: [],
    filterPriceUp: '',
    filterPriceDown: '',
    filteredCameras: []
  },
  [NameSpace.BASKET]: {
    camerasIdBasket: [],
    isDeleteCamera: false,
    deleteIdCamera: null,
    orderAmount: 0,
    isOrderPostSuccess: false,
    isLoading: false,
    isErrorBasket: false,
  },
  [NameSpace.COUPON]: {
    discount: '',
    coupon: null,
    isLoadingCoupon: false,
    isSuccessCoupon: false,
    isErrorCoupon: false,
  },
  ...initialState ?? {},
});

export const makeFakeCamera = (): TCameraCard => ({
  id: faker.datatype.number(),
  name: faker.name.findName(),
  vendorCode: faker.lorem.word(),
  type: faker.lorem.word(),
  category: faker.lorem.word(),
  description: faker.lorem.word(),
  level: faker.lorem.word(),
  price: Number(faker.commerce.price()),
  rating: faker.datatype.number({max: 5}),
  reviewCount: faker.datatype.number(),
  previewImg: faker.lorem.word(),
  previewImg2x: faker.lorem.word(),
  previewImgWebp: faker.lorem.word(),
  previewImgWebp2x: faker.lorem.word(),
});

export const makeFakePromo = (): TPromo => ({
  id: faker.datatype.number(),
  name: faker.lorem.word(),
  previewImg: faker.lorem.word(),
  previewImg2x: faker.lorem.word(),
  previewImgWebp: faker.lorem.word(),
  previewImgWebp2x: faker.lorem.word(),
});

export const makeFakeReview = (): TReview => ({
  id: faker.lorem.word(),
  createAt:  faker.lorem.word(),
  cameraId: faker.datatype.number(),
  userName: faker.name.firstName(),
  advantage: faker.lorem.sentence(),
  disadvantage: faker.lorem.sentence(),
  review: faker.lorem.paragraph(),
  rating: faker.datatype.number({max: 5}),
});

export const extractActionsType = (actions: Action<string>[]) => actions.map((action) => action.type);

export const makeFakeOrderRequest = () => ({
  camerasIds: [faker.datatype.number()],
  coupon: faker.lorem.word(),
  tel: faker.lorem.word(),
});
