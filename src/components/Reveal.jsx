import { useEffect, useRef, useState } from "react";
import "./Reveal.css";

/**
 * Reveal
 *
 * Fait apparaître un élément lorsqu'il entre dans l'écran.
 *
 * Props :
 * - direction : "bottom" | "left" | "right" | "fade"
 * - delay : délai de l'animation en secondes
 * - as : élément HTML à créer ("div", "form", "section", etc.)
 * - className : classes CSS supplémentaires
 * - ...props : autres propriétés HTML comme onSubmit, id, onClick...
 */
export default function Reveal({
  children,
  direction = "bottom",
  delay = 0,
  as: Element = "div",
  className = "",
  ...props
}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;

    if (!node) return;

    // Respecte le réglage d'accessibilité de l'utilisateur
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);

          // L'animation ne se joue qu'une seule fois
          observer.unobserve(node);
        }
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -10% 0px",
      }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  const classes = [
    "reveal",
    `reveal-${direction}`,
    isVisible ? "reveal-visible" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Element
      ref={ref}
      className={classes}
      style={{ transitionDelay: `${delay}s` }}
      {...props}
    >
      {children}
    </Element>
  );
}