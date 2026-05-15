import {useSpring, useSprings, useTrail} from "react-spring";
import { useInView } from "react-intersection-observer";
import {useEffect, useRef, useState} from "react";
import {easeCubicIn} from "d3-ease";
import { usePrefersReducedMotion } from "./hooks";

export const useProjectCardAnimation = () => {
    const prefersReducedMotion = usePrefersReducedMotion();
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

    const animationProps = useSpring({
        opacity: inView ? 1 : 0,
        transform: inView || prefersReducedMotion ? 'translateY(0)' : 'translateY(20px)',
        config: { duration: 500 },
        immediate: prefersReducedMotion,
    });

    return { ref, animationProps };
};

export const useAboutAnimations = (skillsLength) => {
    const prefersReducedMotion = usePrefersReducedMotion();
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.4,
    });

    const headerSpring = useSpring({
        opacity: inView ? 1 : 0,
        transform: inView || prefersReducedMotion ? "translateY(0)" : "translateY(-20px)",
        config: { duration: 500 },
        immediate: prefersReducedMotion,
    });

    const descSpring = useSpring({
        opacity: inView ? 1 : 0,
        transform: inView || prefersReducedMotion ? "translateY(0)" : "translateY(-20px)",
        config: { duration: 500, delay: 200 },
        immediate: prefersReducedMotion,
    });

    const skillsTrail = useTrail(skillsLength, {
        opacity: inView ? 1 : 0,
        transform: inView || prefersReducedMotion ? "translateY(0)" : "translateY(20px)",
        from: { opacity: 0, transform: "translateY(20px)" },
        config: { mass: 5, tension: 2000, friction: 100 },
        delay: 10,
        immediate: prefersReducedMotion,
    });

    return { ref, headerSpring, descSpring, skillsTrail };
};


export const useIntroAnimations = (skillsLength) => {
    const prefersReducedMotion = usePrefersReducedMotion();
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const profilePicSpring = useSpring({
        opacity: inView ? 1 : 0,
        transform: inView || prefersReducedMotion ? 'translateX(0)' : 'translateX(20px)',
        config: { duration: 500 },
        immediate: prefersReducedMotion,
    });

    const trail = useTrail(3, {
        config: { mass: 5, tension: 2000, friction: 600 },
        opacity: inView ? 1 : 0,
        x: inView || prefersReducedMotion ? 0 : 20,
        from: { opacity: 0, x: 20 },
        delay: 200,
        immediate: prefersReducedMotion,
    });

    const contactTrail = useTrail(3, {
        config: { mass: 5, tension: 2000, friction: 200 },
        opacity: inView ? 1 : 0,
        x: inView || prefersReducedMotion ? 0 : 20,
        from: { opacity: 0, x: 20 },
        immediate: prefersReducedMotion,
    });

    return { ref, contactTrail, trail, profilePicSpring };
};


export const useContactAnimations = () => {
    const prefersReducedMotion = usePrefersReducedMotion();
    const [infoRef, infoInView] = useInView({ triggerOnce: true, threshold: 0.1 });
    const [formRef, formInView] = useInView({ triggerOnce: true, threshold: 0.1 });

    const infoAnimation = useSpring({
        opacity: infoInView ? 1 : 0,
        transform: infoInView || prefersReducedMotion ? 'translateY(0)' : 'translateY(20px)',
        config: { duration: 500 },
        immediate: prefersReducedMotion,
    });

    const formAnimation = useSpring({
        opacity: formInView ? 1 : 0,
        transform: formInView || prefersReducedMotion ? 'translateY(0)' : 'translateY(20px)',
        config: { duration: 500 },
        immediate: prefersReducedMotion,
    });

    return { infoRef, infoAnimation, formRef, formAnimation };
};

export const useExperienceAnimations = () => {
    const prefersReducedMotion = usePrefersReducedMotion();
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

    const animationProps = useSpring({
        opacity: inView ? 1 : 0,
        transform: inView || prefersReducedMotion ? 'translateY(0)' : 'translateY(20px)',
        config: { duration: 500 },
        immediate: prefersReducedMotion,
    });

    const headerAnimationProps = useSpring({
        opacity: inView ? 1 : 0,
        transform: inView || prefersReducedMotion ? 'translateX(0)' : 'translateX(-20px)',
        config: { duration: 500 },
        immediate: prefersReducedMotion,
    });

    return { ref, animationProps, headerAnimationProps };
};

export const useProjectsAnimations = (projectsLength) => {
    const prefersReducedMotion = usePrefersReducedMotion();
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const headerAnimationProps = useSpring({
        opacity: inView ? 1 : 0,
        transform: inView || prefersReducedMotion ? 'translateY(0)' : 'translateY(20px)',
        config: { duration: 600 },
        immediate: prefersReducedMotion,
    });

    const listProjectAnimationProps = useTrail(projectsLength, {
        opacity: inView ? 1 : 0,
        transform: inView || prefersReducedMotion ? 'translateY(0)' : 'translateY(20px)',
        config: { duration: 600, delay: 200 },
        immediate: prefersReducedMotion,
    });

    return { ref, headerAnimationProps, listProjectAnimationProps };
};

export const useProjectSectionAnimation = () => {
    const prefersReducedMotion = usePrefersReducedMotion();
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.4 });

    const containerAnimationProps = useSpring({
        opacity: inView ? 1 : 0,
        transform: inView || prefersReducedMotion ? 'translateY(0)' : 'translateY(20px)',
        config: { duration: 500 },
        immediate: prefersReducedMotion,
    });

    const descriptionAnimationProps = useSpring({
        opacity: inView ? 1 : 0,
        transform: inView || prefersReducedMotion ? 'translateY(0)' : 'translateY(-20px)',
        config: { duration: 500 },
        immediate: prefersReducedMotion,
    });

    const imagesAnimationProps = useSpring({
        opacity: inView ? 1 : 0,
        transform: inView || prefersReducedMotion ? 'translateY(0)' : 'translateY(20px)',
        config: { duration: 500, delay: 500 },
        immediate: prefersReducedMotion,
    });

    return { ref, containerAnimationProps, descriptionAnimationProps, imagesAnimationProps };
};

export const useTitleAnimation = () => {
    const prefersReducedMotion = usePrefersReducedMotion();
    return useSpring({
        from: { opacity: 0, transform: 'translateY(-50px)' },
        to: { opacity: 1, transform: 'translateY(0)' },
        config: { duration: 600 },
        immediate: prefersReducedMotion,
    });
};

export const useSection1Animation = () => {
    const prefersReducedMotion = usePrefersReducedMotion();
    return useSpring({
        from: { opacity: 0, transform: 'translateY(50px)' },
        to: { opacity: 1, transform: 'translateY(0)' },
        delay: 700, // Delay to allow the title-wrapper to finish its animation
        config: { duration: 600 },
        immediate: prefersReducedMotion,
    });
};

export const useExperienceCardAnimations = (index, projectsLength) => {
    const prefersReducedMotion = usePrefersReducedMotion();
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
    const [selectIndex, setSelectIndex] = useState(0);
    const [selectIndexContent, setSelectIndexContent] = useState(0);
    const [isSlidingOut, setIsSlidingOut] = useState(false);
    const slideTimeoutRef = useRef(null);

    useEffect(() => () => clearTimeout(slideTimeoutRef.current), []);

    const animationProps = useSpring({
        opacity: inView ? 1 : 0,
        transform: inView || prefersReducedMotion ? 'translateY(0)' : 'translateY(100px)',
        config: { duration: 600, delay: index * 200 + 800 },
        immediate: prefersReducedMotion,
    });

    const baseScale = 1;
    const baseOpacity = 0.2;

    const [springs] = useSprings(3, index => ({
        from: { scale: baseScale, opacity: 1 },
        to: async next => {
            if (prefersReducedMotion) {
                await next({ scale: baseScale, opacity: 1, config: { duration: 0 } });
                return;
            }

            while (true) {
                await next({ scale: 1.5, opacity: baseOpacity, config: { duration: 2400, easing: easeCubicIn } });
                await next({ scale: baseScale, opacity: 1, config: { duration: 0 } });
            }
        },
        delay: index * 400
    }));

    const handlePaginationClick = (index) => {
        if (index !== selectIndex) {
            clearTimeout(slideTimeoutRef.current);
            setIsSlidingOut(true);
            setSelectIndex(index);
            slideTimeoutRef.current = setTimeout(() => {
                setSelectIndexContent(index);
                setIsSlidingOut(false);
            }, 300);
        }
    };

    const slideAnimation = useSpring({
        opacity: isSlidingOut ? 0 : 1,
        transform: isSlidingOut ?
            selectIndex % 2 === 0 ? 'translateX(20px)': 'translateX(-20px)'  :
            selectIndex % 2 === 0 ? 'translateX(0)' : 'translateX(0)',
        config: { duration: 300 },
        immediate: prefersReducedMotion,
    });

    return {
        ref,
        animationProps,
        springs,
        handlePaginationClick,
        slideAnimation,
        selectIndex,
        selectIndexContent,
        isSlidingOut
    };
};
