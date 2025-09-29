import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
    const { pathname } = useLocation(); // useing for scroll on top whan refresh & next page open

    useEffect(() => {
        if (pathname === "/" || pathname === "countrydetail") {

            window.scrollTo(0,0);  // it's scroll our page into top when we were on bottom or mid
        }

    }, [pathname]);

    return null; // this component noting render 
}