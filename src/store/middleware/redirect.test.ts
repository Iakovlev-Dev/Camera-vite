import {beforeAll, beforeEach, describe, expect} from 'vitest';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {redirect} from './redirect.ts';
import {TState} from '../../types/type-store.ts';
import {AnyAction} from '@reduxjs/toolkit';
import {browserHistory} from '../../browser-history.ts';
import {redirectToRote} from '../action.ts';
import {AppRoute} from '../../const.ts';
import {store} from '../index.ts';

vi.mock('../browser-history', () => ({
  default: {
    location: {pathname: ''},
    push (path: string) {
      this.location.pathname = path;
    }
  }
}));

describe('Redirect middleware', () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars

  beforeAll(() => {
    const middleware = [redirect];
    const mockStoreCreator = configureMockStore<TState, AnyAction>(middleware);
    mockStoreCreator();
  });

  beforeEach(() => {
    browserHistory.push('');
  });

  it('should redirect to "/" with redirectToRoute action', () => {
    const redirectAction = redirectToRote(AppRoute.Main);
    store.dispatch(redirectAction);

    expect(browserHistory.location.pathname).toBe(AppRoute.Main);
  });

  it('should not redirect to "/card" with empty action', () => {
    const emptyAction = {type: '', payload: AppRoute.Card};
    store.dispatch(emptyAction);
    expect(browserHistory.location.pathname).not.toBe(AppRoute.Card);
  });
});
