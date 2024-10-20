import {createMemoryHistory, MemoryHistory} from 'history';
import HistoryRouter from '../components/history-router/history-router.tsx';
import {HelmetProvider} from 'react-helmet-async';
import {JSX} from 'react';
import {configureMockStore, MockStore} from '@jedmao/redux-mock-store';
import MockAdapter from 'axios-mock-adapter';
import {TState} from '../types/type-store.ts';
import {createApi} from '../services/api.ts';
import thunk from 'redux-thunk';
import {Action} from 'redux';
import {TAppThunkDispatch} from './mocks.ts';
import {Provider} from 'react-redux';

export function withHistory (component: JSX.Element, history?: MemoryHistory) {
  const memoryHistory = history ?? createMemoryHistory();

  return (
    <HistoryRouter history={memoryHistory}>
      <HelmetProvider>
        {component}
      </HelmetProvider>
    </HistoryRouter>
  );
}

type ComponentWithMockStore = {
  withStoreComponent: JSX.Element;
  mockStore: MockStore;
  mockAxiosAdapter: MockAdapter;
}

export function withStore (
  component: JSX.Element,
  initialState: Partial<TState> = {}
): ComponentWithMockStore {
  const axios = createApi();
  const mockAxiosAdapter = new MockAdapter(axios);
  const middleware = [thunk.withExtraArgument(axios)];
  const mockStoreCreator = configureMockStore<TState, Action<string>, TAppThunkDispatch>(middleware);
  const mockStore = mockStoreCreator(initialState);

  return ({
    withStoreComponent: <Provider store={mockStore}>{component}</Provider>,
    mockStore,
    mockAxiosAdapter
  });
}
