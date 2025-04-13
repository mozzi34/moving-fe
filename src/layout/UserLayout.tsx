import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import style from './UserLayout.module.css';
import '../style/globals.css';
import { useEffect, useContext } from 'react';

import { UserMenuModal } from '../components/nav/NavMenuModal';
import { UserNav } from '../components/nav/Nav';
import { useMedia } from '../lib/function/useMediaQuery';
import { AuthContext } from '../context/authContext';
import { HelmetProvider } from 'react-helmet-async';
import { useNavModal } from '../lib/function/useNavModal';

export default function UserLayout() {
  const { pc } = useMedia();
  const nav = useNavigate();
  const { pathname } = useLocation();
  const {
    userValue: { user, isPending },
  } = useContext(AuthContext);

  useEffect(() => {
    if (!isPending && user) {
      if (user.userType === 'MOVER') {
        window.location.href = '/';
      } // 회원 유형에 따른 접근 제한
    }
  }, [user, isPending]);

  useEffect(() => {
    if (
      !isPending &&
      user?.Customer &&
      user?.Customer?.region === 'NULL' &&
      user?.Customer?.serviceType.length <= 0
    ) {
      nav('/user/register');
    }
  }, [pathname]);

  const { refs, activeModal, toggleModal } = useNavModal();

  return (
    <>
      <HelmetProvider>
        <div className={style.container}>
          <div className={style.wrapper}>
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
            <Outlet />
          </div>
        </div>
        {!pc && activeModal === 'menu' && (
          <UserMenuModal modalController={() => toggleModal('menu')} />
        )}
      </HelmetProvider>
    </>
  );
}
