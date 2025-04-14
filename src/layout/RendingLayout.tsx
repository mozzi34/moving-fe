import { Outlet } from 'react-router-dom';
import style from './RendingLayout.module.css';

import { useContext } from 'react';

import {
  UserMenuModal,
  NonLoginMenuModal,
  DriverMenuModal,
} from '../components/nav/NavMenuModal';
import { DriverNav, NonLoginNav, UserNav } from '../components/nav/Nav';
import { useMedia } from '../lib/function/useMediaQuery';
import { AuthContext } from '../context/authContext';
import { HelmetProvider } from 'react-helmet-async';
import { useNavModal } from '../lib/function/useNavModal';

export default function RendingLayout() {
  const { pc } = useMedia();

  const {
    userValue: { user, isPending },
  } = useContext(AuthContext);

  const { refs, activeModal, toggleModal } = useNavModal();

  return (
    <>
      <HelmetProvider>
        <div className={style.container}>
          <div className={style.wrapper}>
            {!isPending && user ? (
              user.userType === 'CUSTOMER' ? (
                <UserNav
                  menuRef={refs.menuRef}
                  profileRef={refs.profileRef}
                  notificationRef={refs.notificationRef}
                  modalController={() => toggleModal('menu')}
                  profileController={() => toggleModal('profile')}
                  notificationController={() => toggleModal('notification')}
                  profileModal={activeModal === 'profile'}
                  notificationModal={activeModal === 'notification'}
                />
              ) : (
                <DriverNav
                  menuRef={refs.menuRef}
                  profileRef={refs.profileRef}
                  notificationRef={refs.notificationRef}
                  modalController={() => toggleModal('menu')}
                  profileController={() => toggleModal('profile')}
                  notificationController={() => toggleModal('notification')}
                  profileModal={activeModal === 'profile'}
                  notificationModal={activeModal === 'notification'}
                />
              )
            ) : (
              <NonLoginNav
                menuRef={refs.menuRef}
                modalController={() => toggleModal('menu')}
              />
            )}
            <Outlet />
          </div>
        </div>

        {!pc && activeModal === 'menu' && user ? (
          user?.userType === 'CUSTOMER' ? (
            <UserMenuModal modalController={() => toggleModal('menu')} />
          ) : (
            <DriverMenuModal modalController={() => toggleModal('menu')} />
          )
        ) : !pc && activeModal === 'menu' && !user ? (
          <NonLoginMenuModal modalController={() => toggleModal('menu')} />
        ) : null}
      </HelmetProvider>
    </>
  );
}
