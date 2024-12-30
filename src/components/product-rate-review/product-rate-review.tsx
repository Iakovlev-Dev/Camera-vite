import {RateReview} from '../../const.ts';
import React from 'react';
import {TReviewPost} from '../product-add-review-modal/product-add-review-modal.tsx';
import {UseFormRegister} from 'react-hook-form';


type TProductRateReview = {
  onChange: (numb: string) => void;
  register: UseFormRegister<TReviewPost>;
}

export default function ProductRateReview ({onChange, register}: TProductRateReview) {

  return (
    <div className="rate__group">
      {Object.keys(RateReview).reverse().map((item) => (
        <React.Fragment key={item}>
          <input
            className="visually-hidden"
            id={`star-${item}`}
            type="radio"
            key={item}
            {...register('rating', {
              required: true,
            })}
            value={item}
            onChange={() => {
              onChange(item);
            }}
          />
          <label
            className="rate__label"
            htmlFor={`star-${item}`}
            title={RateReview[item]}
          />
        </React.Fragment>
      ))}
    </div>
  );
}
