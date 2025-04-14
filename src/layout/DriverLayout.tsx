import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import style from './DriverLayout.module.css';
import { DriverNav } from '../components/nav/Nav';
import { DriverMenuModal } from '../components/nav/NavMenuModal';
import { useEffect, useContext } from 'react';
import { useMedia } from '../lib/function/useMediaQuery';
import { HelmetProvider } from 'react-helmet-async';
import { AuthContext } from '../context/authContext';
import { useNavModal } from '../lib/function/useNavModal';

export default function DriverLayout() {
  const nav = useNavigate();
  const { pathname } = useLocation();
  const {
    userValue: { user, isPending },
  } = useContext(AuthContext);
  useEffect(() => {
    if (!isPending && user) {
      if (user.userType === 'CUSTOMER') {
        window.location.href = '/';
      }
    }
  }, [user, isPending]);

  useEffect(() => {
    if (
      !isPending &&
      user?.Mover &&
      user?.Mover?.serviceRegion.length <= 0 &&
      user?.Mover?.serviceType.length <= 0
    ) {
      nav('/driver/register');
    }
  }, [pathname]);

  const { pc } = useMedia();
  const { refs, activeModal, toggleModal } = useNavModal();

  return (
    <>
      <HelmetProvider>
        <div className={style.container}>
          <div className={style.wrapper}>
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
            <Outlet />
          </div>
        </div>
        {!pc && activeModal === 'menu' && (
          <DriverMenuModal modalController={() => toggleModal('menu')} />
        )}
      </HelmetProvider>
    </>
  );
}
