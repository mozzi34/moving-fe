import { useEffect, useRef, useState } from 'react';

type ModalType = 'menu' | 'profile' | 'notification' | null;

export const useNavModal = () => {
  const menuRef = useRef<HTMLDivElement | null>(null);
  const profileRef = useRef<HTMLDivElement | null>(null);
  const notificationRef = useRef<HTMLDivElement | null>(null);
  const [activeModal, setActiveModal] = useState<ModalType>(null);

  const toggleModal = (modalType: ModalType) => {
    setActiveModal((prev) => (prev === modalType ? null : modalType));
  };

  const handleOutsideClick = (e: MouseEvent) => {
    if (
      (activeModal === 'menu' &&
        menuRef.current &&
        !menuRef.current.contains(e.target as Node)) ||
      (activeModal === 'profile' &&
        profileRef.current &&
        !profileRef.current.contains(e.target as Node)) ||
      (activeModal === 'notification' &&
        notificationRef.current &&
        !notificationRef.current.contains(e.target as Node))
    ) {
      setActiveModal(null);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);
    return () => document.removeEventListener('click', handleOutsideClick);
  }, [activeModal]);

  return {
    refs: { menuRef, profileRef, notificationRef },
    activeModal,
    toggleModal,
  };
};
