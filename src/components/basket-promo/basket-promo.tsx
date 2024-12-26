import {useForm} from 'react-hook-form';
import React, {useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from '../../store/hooks.ts';
import {postCoupon} from '../../store/api-actions.ts';
import {selectIsErrorCoupon, selectIsSuccessCoupon} from '../../store/coupon-process/selectors.ts';
import classNames from 'classnames';
import {setCouponBasket} from '../../store/coupon-process/coupon-process.ts';

export type TCouponPost = {
  coupon: string;
}
export default function BasketPromo () {
  const dispatch = useAppDispatch();

  const isSuccessCoupon = useAppSelector(selectIsSuccessCoupon);
  const isErrorCoupon = useAppSelector(selectIsErrorCoupon);


  const {handleSubmit} = useForm();
  const [couponPost, setCoupon] = useState('');

  const handleSubmitCoupon = () => {
    const couponBody: TCouponPost = {
      coupon: couponPost.trim()
    };
    dispatch(postCoupon(couponBody));
  };

  useEffect(() => {
    if (isSuccessCoupon) {
      dispatch(setCouponBasket(couponPost));
    }
  }, [couponPost, dispatch, isSuccessCoupon]);

  const handleChangeInput = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setCoupon(evt.currentTarget.value);
  };

  const customInputClassName = classNames(
    'custom-input',
    {
      'is-valid': isSuccessCoupon,
      'is-invalid': isErrorCoupon
    });

  return (
    <div className="basket__promo">
      <p className="title title--h4">
        Если у вас есть промокод на скидку, примените его в этом поле
      </p>
      <div className="basket-form">
        {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
        <form action="#" method='post' onSubmit={handleSubmit(handleSubmitCoupon)}>
          <div className={customInputClassName}>
            <label>
              <span className="custom-input__label">Промокод</span>
              <input type="text" name="promo" placeholder="Введите промокод" value={couponPost} onChange={(evt) => handleChangeInput(evt)}/>
            </label>
            <p className="custom-input__error">Промокод неверный</p>
            <p className=" custom-input__success">Промокод принят!</p>
          </div>
          <button className="btn" type="submit">
            Применить
          </button>
        </form>
      </div>
    </div>
  );
}
