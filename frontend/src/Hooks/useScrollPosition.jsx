import { useState, useEffect } from "react";

export default function useScrollPosition() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() =>{
        const handleScroll = () => setIsScrolled(window.scrollY > 0);

        handleScroll();

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return isScrolled;
}