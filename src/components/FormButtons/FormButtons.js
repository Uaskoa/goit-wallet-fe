import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { authOperations } from '../../redux/auth';
import { walletActions } from '../../redux/actions';

import s from './FormButtons.module.css';

const FormButtons = ({
  firtsButtonText,
  secondButtonText,
  firstLinkButton,
  secondLinkButton,
  canselAction,
}) => {
  const dispatch = useDispatch();

  function closeModal() {
    dispatch(walletActions.ModalLogoutAction());
  }

  return (
    <>
      {!firstLinkButton && !secondLinkButton && (
        <div className={s.buttonsContainer}>
          <button
            type="submit"
            className={[s.buttons, s.buttonAddTransaction].join(' ')}
          >
            {firtsButtonText}
          </button>
          <button
            type="button"
            className={[s.buttons, s.buttonCancel].join(' ')}
            onClick={canselAction}
          >
            {secondButtonText}
          </button>
        </div>
      )}
      {firstLinkButton && (
        <div className={s.buttonsContainer}>
          <NavLink to={firstLinkButton}>
            <button
              type="button"
              className={[s.buttons, s.buttonAddTransaction].join(' ')}
              onClick={() => {
                dispatch(authOperations.logout());
                closeModal();
              }}
            >
              {firtsButtonText}
            </button>
          </NavLink>
          <button
            type="button"
            className={[s.buttons, s.buttonCancel].join(' ')}
            onClick={canselAction}
          >
            {secondButtonText}
          </button>
        </div>
      )}
      {secondLinkButton && (
        <div className={s.buttonsContainer}>
          <button
            type="submit"
            className={[s.buttons, s.buttonAddTransaction].join(' ')}
          >
            {firtsButtonText}
          </button>
          <NavLink to={secondLinkButton}>
            <button
              type="button"
              className={[s.buttons, s.buttonCancel].join(' ')}
            >
              {secondButtonText}
            </button>
          </NavLink>
        </div>
      )}
    </>
  );
};

export default FormButtons;
