import {describe} from 'vitest';
import Banner from './banner.tsx';
import {withHistory, withStore} from '../../utils/mock-component.tsx';
import {render, screen} from '@testing-library/react';
import {makeFakePromo, makeFakeStore} from '../../utils/mocks.ts';
import {NameSpace} from '../../const.ts';

describe('Component: Banner', () => {
  it('should return correctly', () => {
    const bannerTestId = 'banner';
    const fakePromo = [makeFakePromo()];
    const fakeStore = makeFakeStore({
      [NameSpace.PROMO]: {
        promo: fakePromo,
      }
    });
    const {withStoreComponent} = withStore(<Banner />, fakeStore);
    const preparedComponent = withHistory(withStoreComponent);

    render(preparedComponent);

    expect(screen.getByTestId(bannerTestId)).toBeInTheDocument();
  });
});
