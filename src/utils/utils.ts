import dayjs from 'dayjs';
import updateLocale from 'dayjs/plugin/updateLocale';
import {TReview} from '../types/type-reviews.ts';

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
