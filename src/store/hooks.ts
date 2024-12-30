import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {TAppDispatch, TState} from '../types/type-store.ts';
import {useEffect} from 'react';

export const useAppDispatch = () => useDispatch<TAppDispatch>();

export const useAppSelector: TypedUseSelectorHook<TState> = useSelector;

export type TEventKey = {
  key: string;
  preventDefault: () => void;
}

export const useCloseModal = (fn: (bool: boolean) => void) => {
  useEffect(() => {
    const handleEscClick = (evt: TEventKey) => {
      if (evt.key === 'Escape') {
        fn(false);
        document.body.classList.remove('scroll-lock');
      }
    };

    const handleOverlayClick = (evt: MouseEvent) => {
      if ((evt.target as HTMLElement).className === 'modal__overlay') {
        fn(false);
        document.body.classList.remove('scroll-lock');
      }
    };
    document.addEventListener('click', handleOverlayClick);
    document.addEventListener('keydown', handleEscClick);
    return () => {
      document.removeEventListener('keydown', handleEscClick);
      document.removeEventListener('click', handleOverlayClick);
    };
  }, [fn]);
};
