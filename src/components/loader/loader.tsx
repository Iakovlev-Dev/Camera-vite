import {CircleLoader} from 'react-spinners';

export default function Loader () {
  return (
    <div className="modal is-active modal--narrow">
      <div className="modal__wrapper">
        <div className="modal__overlay"/>
        <CircleLoader />
      </div>
    </div>
  );
}
