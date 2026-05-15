import { useEffect, useState } from "react";

export const useMediaQuery = (query) => {
    const getInitialValue = () => {
        if (typeof window === "undefined" || !window.matchMedia) {
            return false;
        }

        return window.matchMedia(query).matches;
    };

    const [matches, setMatches] = useState(getInitialValue);

    useEffect(() => {
        if (typeof window === "undefined" || !window.matchMedia) {
            return undefined;
        }

        const mediaQueryList = window.matchMedia(query);
        const handleChange = (event) => {
            setMatches(event.matches);
        };

        setMatches(mediaQueryList.matches);

        if (mediaQueryList.addEventListener) {
            mediaQueryList.addEventListener("change", handleChange);
            return () => mediaQueryList.removeEventListener("change", handleChange);
        }

        mediaQueryList.addListener(handleChange);
        return () => mediaQueryList.removeListener(handleChange);
    }, [query]);

    return matches;
};

export const useIsMobile = () => useMediaQuery("(max-width: 768px)");

export const usePrefersReducedMotion = () =>
    useMediaQuery("(prefers-reduced-motion: reduce)");
