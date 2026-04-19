import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Instantly snap to the top when the route changes
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};