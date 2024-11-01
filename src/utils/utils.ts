import dayjs from 'dayjs';
import updateLocale from 'dayjs/plugin/updateLocale';
import {TReview} from '../types/type-reviews.ts';

import {TCameraArray} from '../types/type-cards.ts';
import {SortingInner, SortingOrder} from '../const.ts';

export const dateFormatToReview = (date: string) => dayjs(date).format('DD MMMM');

dayjs.extend(updateLocale);
dayjs.updateLocale('en', {
  months: [
    'Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'
  ]
});

export const sortingReview = (a: TReview, b: TReview) => {
  const day1 = dayjs(a.createAt);
  const day2 = dayjs(b.createAt);
  return day2.diff(day1);
};

export const sortingCameras = (sortInner: string, sortOrder: string, cameras: TCameraArray) => {
  switch (sortInner) {
    case SortingInner.sortPrice:
      switch (sortOrder) {
        case SortingOrder.up:
          return cameras.sort((cameraA, cameraB) => cameraA.price - cameraB.price);
        case SortingOrder.down:
          return cameras.sort((cameraA, cameraB) => cameraB.price - cameraA.price);
      }
      break;
    case SortingInner.sortPopular:
      switch (sortOrder) {
        case SortingOrder.up:
          return cameras.sort((cameraA, cameraB) => cameraA.rating - cameraB.rating);
        case SortingOrder.down:
          return cameras.sort((cameraA, cameraB) => cameraB.rating - cameraA.rating);
      }
      break;
    default:
      return cameras;
  }
};
