import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

useEffect(() => {
  // wait for DOM paint so height is known
  requestAnimationFrame(() => {
    window.scrollTo(0, 0);
  });
}, [pathname]);
  return null;
}
