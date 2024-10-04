import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {TState} from '../types/type-store.ts';

export const useAppDispatch = () => useDispatch();

export const useAppSelector: TypedUseSelectorHook<TState> = useSelector;
