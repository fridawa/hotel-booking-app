// Function that scrolls to the top when routing instead of staying
// down on page, used  when user presses "Book now" on hotel.js
// wanted this functinality but didnt know how so code is entirely from:
// www.kindacode.com/article/react-router-dom-scroll-to-top-on-route-change/

import { useEffect } from "react";
import { useLocation } from "react-router";

const ScrollToTop = (props) => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return <>{props.children}</>;
};

export default ScrollToTop;
