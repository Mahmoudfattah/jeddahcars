"use client";

import {
  useCallback,
  useEffect,
  useRef,
  type RefObject,
} from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const FRAME_COUNT = 55;

const getFrameSrc = (index: number) =>
  `/car-frames/${String(index + 1).padStart(4, "0")}.png`;

type ExplodedCarAnimationProps = {
  scrollContainerRef: RefObject<HTMLElement | null>;
};

export default function ExplodedCarAnimation({
  scrollContainerRef,
}: ExplodedCarAnimationProps) {
  // ============================================================
  // REFS
  // ============================================================

  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const imagesRef = useRef<(HTMLImageElement | null)[]>(
    Array(FRAME_COUNT).fill(null),
  );

  const targetFrameRef = useRef(0);
  const renderedFrameRef = useRef(-1);

  const renderRafRef = useRef<number | null>(null);
  const resizeRafRef = useRef<number | null>(null);

  const destroyedRef = useRef(false);

  // ============================================================
  // DRAW FRAME
  // ============================================================

  const drawFrame = useCallback((index: number) => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const image = imagesRef.current[index];

    if (!image || !image.complete || image.naturalWidth === 0) {
      return;
    }

    const ctx = canvas.getContext("2d");

    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();

    const cssWidth = Math.max(1, rect.width);
    const cssHeight = Math.max(1, rect.height);

    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const pixelWidth = Math.round(cssWidth * dpr);
    const pixelHeight = Math.round(cssHeight * dpr);

    // ----------------------------------------------------------
    // Retina canvas
    // ----------------------------------------------------------

    if (
      canvas.width !== pixelWidth ||
      canvas.height !== pixelHeight
    ) {
      canvas.width = pixelWidth;
      canvas.height = pixelHeight;
    }

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    ctx.clearRect(0, 0, cssWidth, cssHeight);

    // ----------------------------------------------------------
    // Preserve image aspect ratio
    // ----------------------------------------------------------

    const sourceWidth = image.naturalWidth;
    const sourceHeight = image.naturalHeight;

    const sourceAspect = sourceWidth / sourceHeight;
    const canvasAspect = cssWidth / cssHeight;

    let drawWidth = cssWidth;
    let drawHeight = cssHeight;

    if (sourceAspect > canvasAspect) {
      drawHeight = cssWidth / sourceAspect;
    } else {
      drawWidth = cssHeight * sourceAspect;
    }

    const x = (cssWidth - drawWidth) / 2;
    const y = (cssHeight - drawHeight) / 2;

    // ----------------------------------------------------------
    // Draw transparent frame
    // ----------------------------------------------------------

    ctx.drawImage(
      image,
      x,
      y,
      drawWidth,
      drawHeight,
    );

    renderedFrameRef.current = index;
  }, []);

  // ============================================================
  // REQUEST RENDER
  // ============================================================

  const requestRender = useCallback(
    (index: number) => {
      if (destroyedRef.current) return;

      const safeIndex = Math.max(
        0,
        Math.min(index, FRAME_COUNT - 1),
      );

      targetFrameRef.current = safeIndex;

      if (renderRafRef.current !== null) {
        cancelAnimationFrame(renderRafRef.current);
      }

      renderRafRef.current = requestAnimationFrame(() => {
        if (destroyedRef.current) return;

        const target = targetFrameRef.current;

        // ------------------------------------------------------
        // Target frame is already loaded
        // ------------------------------------------------------

        if (imagesRef.current[target]) {
          drawFrame(target);
        } else {
          // ----------------------------------------------------
          // Find nearest previously loaded frame
          // ----------------------------------------------------

          let fallback = target;

          while (
            fallback > 0 &&
            !imagesRef.current[fallback]
          ) {
            fallback -= 1;
          }

          if (imagesRef.current[fallback]) {
            drawFrame(fallback);
          }
        }

        renderRafRef.current = null;
      });
    },
    [drawFrame],
  );

  // ============================================================
  // LOAD INDIVIDUAL FRAME
  // ============================================================

  const loadFrame = useCallback(
    (index: number, priority = false) => {
      if (destroyedRef.current) return;

      if (index < 0 || index >= FRAME_COUNT) return;

      if (imagesRef.current[index]) return;

      const image = new Image();

      image.decoding = "async";

      // --------------------------------------------------------
      // Browser fetch priority
      // --------------------------------------------------------

      if ("fetchPriority" in image) {
        image.fetchPriority = priority
          ? "high"
          : "low";
      }

      // --------------------------------------------------------
      // Frame loaded
      // --------------------------------------------------------

      image.onload = () => {
        if (destroyedRef.current) return;

        imagesRef.current[index] = image;

        // ------------------------------------------------------
        // First frame should appear immediately
        // ------------------------------------------------------

        if (index === 0) {
          requestRender(0);
        }

        // ------------------------------------------------------
        // If user is currently looking at this frame,
        // render it immediately.
        // ------------------------------------------------------

        if (targetFrameRef.current === index) {
          requestRender(index);
        }
      };

      // --------------------------------------------------------
      // Loading error
      // --------------------------------------------------------

      image.onerror = () => {
        if (destroyedRef.current) return;

        console.warn(
          `[ExplodedCarAnimation] Could not load frame ${
            index + 1
          }: ${getFrameSrc(index)}`,
        );
      };

      // --------------------------------------------------------
      // Start loading
      // --------------------------------------------------------

      image.src = getFrameSrc(index);
    },
    [requestRender],
  );

  // ============================================================
  // FIRST FRAME + PROGRESSIVE PRELOAD
  // ============================================================

  useEffect(() => {
    destroyedRef.current = false;

    // ----------------------------------------------------------
    // Load first frame immediately
    // ----------------------------------------------------------

    loadFrame(0, true);

    let nextIndex = 1;
    let timeoutId: number | null = null;

    // ----------------------------------------------------------
    // Progressive loading
    // ----------------------------------------------------------

    const preloadBatch = () => {
      if (destroyedRef.current) return;

      const batchSize = 5;

      const end = Math.min(
        nextIndex + batchSize,
        FRAME_COUNT,
      );

      for (
        let i = nextIndex;
        i < end;
        i += 1
      ) {
        loadFrame(i);
      }

      nextIndex = end;

      if (nextIndex < FRAME_COUNT) {
        timeoutId = window.setTimeout(
          preloadBatch,
          80,
        );
      }
    };

    // ----------------------------------------------------------
    // Let first frame paint before loading everything else
    // ----------------------------------------------------------

    timeoutId = window.setTimeout(
      preloadBatch,
      120,
    );

    return () => {
      destroyedRef.current = true;

      if (timeoutId !== null) {
        window.clearTimeout(timeoutId);
      }

      if (renderRafRef.current !== null) {
        cancelAnimationFrame(
          renderRafRef.current,
        );

        renderRafRef.current = null;
      }

      if (resizeRafRef.current !== null) {
        cancelAnimationFrame(
          resizeRafRef.current,
        );

        resizeRafRef.current = null;
      }

      imagesRef.current = Array(
        FRAME_COUNT,
      ).fill(null);
    };
  }, [loadFrame]);

  // ============================================================
  // RESIZE
  // ============================================================

  useEffect(() => {
    const handleResize = () => {
      if (resizeRafRef.current !== null) {
        cancelAnimationFrame(
          resizeRafRef.current,
        );
      }

      resizeRafRef.current =
        requestAnimationFrame(() => {
          if (destroyedRef.current) return;

          const targetFrame =
            targetFrameRef.current;

          if (imagesRef.current[targetFrame]) {
            drawFrame(targetFrame);
          } else if (
            renderedFrameRef.current >= 0 &&
            imagesRef.current[
              renderedFrameRef.current
            ]
          ) {
            drawFrame(
              renderedFrameRef.current,
            );
          }

          resizeRafRef.current = null;
        });
    };

    window.addEventListener(
      "resize",
      handleResize,
      {
        passive: true,
      },
    );

    return () => {
      window.removeEventListener(
        "resize",
        handleResize,
      );

      if (resizeRafRef.current !== null) {
        cancelAnimationFrame(
          resizeRafRef.current,
        );

        resizeRafRef.current = null;
      }
    };
  }, [drawFrame]);

  // ============================================================
  // SCROLLTRIGGER
  // ============================================================

  useGSAP(
    () => {
      const scrollContainer =
        scrollContainerRef.current;

      if (!scrollContainer) return;

      // --------------------------------------------------------
      // Reduced Motion
      // --------------------------------------------------------

      const reduceMotion =
        window.matchMedia(
          "(prefers-reduced-motion: reduce)",
        ).matches;

      if (reduceMotion) {
        requestRender(0);
        return;
      }

      // --------------------------------------------------------
      // GSAP playhead
      // --------------------------------------------------------

      const playhead = {
        frame: 0,
      };

      // --------------------------------------------------------
      // Scroll-controlled frame animation
      // --------------------------------------------------------

      const tween = gsap.to(playhead, {
        frame: FRAME_COUNT - 1,

        ease: "none",

        snap: {
          frame: 1,
        },

        scrollTrigger: {
          trigger: scrollContainer,

          start: "top top",

          end: "bottom bottom",

          scrub: 0.15,

          invalidateOnRefresh: true,

          onUpdate: () => {
            const frame = Math.round(
              playhead.frame,
            );

            if (
              frame ===
                targetFrameRef.current &&
              frame ===
                renderedFrameRef.current
            ) {
              return;
            }

            requestRender(frame);
          },
        },
      });

      // --------------------------------------------------------
      // Refresh after initial layout
      // --------------------------------------------------------

      const refreshTimer =
        window.setTimeout(() => {
          if (!destroyedRef.current) {
            ScrollTrigger.refresh();
          }
        }, 300);

      // --------------------------------------------------------
      // Cleanup
      // --------------------------------------------------------

      return () => {
        window.clearTimeout(
          refreshTimer,
        );

        tween.scrollTrigger?.kill();
        tween.kill();
      };
    },
    {
      scope: scrollContainerRef,
      dependencies: [requestRender],
      revertOnUpdate: true,
    },
  );

  // ============================================================
  // CANVAS
  // ============================================================

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="
        pointer-events-none
        block
        h-full
        w-full
        select-none
      "
    />
  );
}