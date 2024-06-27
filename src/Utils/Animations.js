import {useSpring, useSprings, useTrail} from "react-spring";
import { useInView } from "react-intersection-observer";
import {useState} from "react";
import {easeCubicIn} from "d3-ease";

export const useProjectCardAnimation = () => {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

    const animationProps = useSpring({
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(20px)',
        config: { duration: 500 },
    });

    return { ref, animationProps };
};

export const useAboutAnimations = (skillsLength) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.4,
    });

    const headerSpring = useSpring({
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(-20px)",
        config: { duration: 500 }
    });

    const descSpring = useSpring({
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(-20px)",
        config: { duration: 500, delay: 200 }
    });

    const skillsTrail = useTrail(skillsLength, {
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(20px)",
        from: { opacity: 0, transform: "translateY(20px)" },
        config: { mass: 5, tension: 2000, friction: 100 },
        delay: 10
    });

    return { ref, headerSpring, descSpring, skillsTrail };
};


export const useHomeAnimations = (skillsLength) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const profilePicSpring = useSpring({
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateX(0)' : 'translateX(20px)',
        config: { duration: 500 }
    });

    const trail = useTrail(3, {
        config: { mass: 5, tension: 2000, friction: 600 },
        opacity: inView ? 1 : 0,
        x: inView ? 0 : 20,
        from: { opacity: 0, x: 20 },
        delay: 200,
    });

    const contactTrail = useTrail(3, {
        config: { mass: 5, tension: 2000, friction: 200 },
        opacity: inView ? 1 : 0,
        x: inView ? 0 : 20,
        from: { opacity: 0, x: 20 },
    });

    return { ref, contactTrail, trail, profilePicSpring };
};


export const useContactAnimations = () => {
    const [infoRef, infoInView] = useInView({ triggerOnce: true, threshold: 0.1 });
    const [formRef, formInView] = useInView({ triggerOnce: true, threshold: 0.1 });

    const infoAnimation = useSpring({
        opacity: infoInView ? 1 : 0,
        transform: infoInView ? 'translateY(0)' : 'translateY(20px)',
        config: { duration: 500 },
    });

    const formAnimation = useSpring({
        opacity: formInView ? 1 : 0,
        transform: formInView ? 'translateY(0)' : 'translateY(20px)',
        config: { duration: 500 },
    });

    return { infoRef, infoAnimation, formRef, formAnimation };
};

export const useExperienceAnimations = () => {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

    const animationProps = useSpring({
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(20px)',
        config: { duration: 500 }
    });

    const headerAnimationProps = useSpring({
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateX(0)' : 'translateX(-20px)',
        config: { duration: 500 }
    });

    return { ref, animationProps, headerAnimationProps };
};

export const useProjectsAnimations = (projectsLength) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const headerAnimationProps = useSpring({
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(20px)',
        config: { duration: 600 }
    });

    const listprojectAnimationProps = useTrail(projectsLength, {
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(20px)',
        config: { duration: 600, delay: 200 }
    });

    return { ref, headerAnimationProps, listprojectAnimationProps };
};

export const useExperienceCardAnimations = (index, projectsLength) => {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
    const [selectIndex, setSelectIndex] = useState(0);
    const [selectIndexContent, setSelectIndexContent] = useState(0);
    const [isSlidingOut, setIsSlidingOut] = useState(false);

    const animationProps = useSpring({
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(100px)',
        config: { duration: 600, delay: index * 200 + 800 }
    });

    const baseScale = 1;
    const baseOpacity = 0.2;

    const [springs] = useSprings(3, index => ({
        from: { scale: baseScale, opacity: 1 },
        to: async next => {
            while (1) {
                await next({ scale: 1.5, opacity: baseOpacity, config: { duration: 2400, easing: easeCubicIn } });
                await next({ scale: baseScale, opacity: 1, config: { duration: 0 } });
            }
        },
        delay: index * 400
    }));

    const handlePaginationClick = (index) => {
        if (index !== selectIndex) {
            setIsSlidingOut(true);
            setSelectIndex(index);
            setTimeout(() => {
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
        config: { duration: 300 }
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
