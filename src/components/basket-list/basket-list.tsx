import BasketItemCamera from '../basket-item-camera/basket-item-camera.tsx';
import {useAppSelector} from '../../store/hooks.ts';
import {selectCamerasIdBasket} from '../../store/basket-process/selectors.ts';


export default function BasketList () {
  const basketIdCameras = useAppSelector(selectCamerasIdBasket)
  const uniqueId = new Set(basketIdCameras)

  return (
    <ul className="basket__list">
      {Array.from(uniqueId).map((item) => (
        <BasketItemCamera key={item} idCamera={item}/>
      ))}

    </ul>
  )
}
