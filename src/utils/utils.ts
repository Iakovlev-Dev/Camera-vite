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

export const isCameraInBasket = (arr: number[], item: number) => arr.includes(item);

export function removeElement (arr: number[], el: number) {
  const newArr = [...arr];
  const index = newArr.indexOf(el);
  if(index !== -1) {
    newArr.splice(index, 1);
  }
  return newArr;
}

export const getDiscount = (idCameras: number[], sum: number): number => {
  const cameraCount = idCameras.length;
  let discount = 0;

  if (cameraCount > 10) {
    discount = 15;
  } else if (cameraCount >= 6) {
    discount = 10;
  } else if (cameraCount >= 3) {
    discount = 5;
  } else if (cameraCount === 2) {
    discount = 3;
  }

  if (sum >= 30000) {
    discount -= 3;
  } else if (sum >= 20000) {
    discount -= 2;
  } else if (sum >= 10000) {
    discount -= 1;
  }

  return Math.max(discount, 0);
};
