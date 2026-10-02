import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function init() {
  // =========================
  // ELEMENTS
  // =========================

  const scene = document.querySelector(".scene");
  const stage = document.querySelector(".stage");
  const world = document.querySelector(".world");

  const line = document.querySelector(".line path");

  const dot1 = document.querySelector(".dot1");
  const dot2 = document.querySelector(".dot2");
  const dot3 = document.querySelector(".dot3");
  const dot4 = document.querySelector(".dot4");

  const text1 = document.querySelector(".text1");
  const text2 = document.querySelector(".text2");
  const text3 = document.querySelector(".text3");
  const text4 = document.querySelector(".text4");
  const text5 = document.querySelector(".text5");
  const text6 = document.querySelector(".text6");

  const scrollIndicator = document.querySelector(".scroll-indicator");

  // =========================
  // RESPONSIVE
  // =========================

  function resizeStage() {
    const scaleX = window.innerWidth / 1920;
    const scaleY = window.innerHeight / 1080;

    const scale = Math.min(scaleX, scaleY);

    gsap.set(stage, {
      xPercent: -50,
      yPercent: -50,
      scale: scale,
    });

    ScrollTrigger.refresh();
  }

  resizeStage();

  window.addEventListener("resize", resizeStage);

  // =========================
  // COURBE
  // =========================

  const lineLength = line.getTotalLength();

  gsap.set(line, {
    strokeDasharray: lineLength,
    strokeDashoffset: lineLength,
  });

  // =========================
  // ELEMENTS CACHES
  // =========================

  gsap.set([dot1, dot2, dot3, dot4], {
    scale: 0,
  });

  gsap.set([".shape-one", ".shape-two", ".shape-three", ".shape-four"], {
    scale: 0,
  });

  gsap.set([text1, text2, text3, text4, text5, text6], {
    opacity: 0,
  });

  // =========================
  // TIMELINE PRINCIPALE
  // =========================

  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: scene,

      start: "top top",

      end: "+=9000",

      pin: true,

      scrub: true,

      // markers: true,
    },
  });

  // =========================
  // INDICATEUR DE SCROLL
  // =========================

  timeline.to(
    scrollIndicator,
    {
      opacity: 0,
      duration: 1,
    },
    0,
  );

  // ==================================================
  // 1. PREMIER TEXTE
  // ==================================================

  timeline.to(text1, {
    opacity: 1,
    duration: 1,
  });

  // ==================================================
  // 2. PREMIER POINT
  // ==================================================

  timeline.to(dot1, {
    scale: 1,
    duration: 3,
  });

  // ==================================================
  // 3. PREMIER POINT GRANDIT
  // ==================================================

  timeline.to(dot1, {
    scale: 3,
    duration: 2,
  });

  // ==================================================
  // 4. CAMERA + COURBE
  // ==================================================

  timeline.to(world, {
    x: -500,
    y: 270,

    rotationY: -30,
    rotationX: 3,

    scale: 2.2,

    duration: 5,

    ease: "none",
  });

  timeline.to(
    line,
    {
      strokeDashoffset: lineLength * 0.15,

      duration: 5,

      ease: "none",
    },
    "<",
  );

  // ==================================================
  // 5. PREMIER NOUVEAU POINT
  // + FORME
  // + TEXTE
  // ==================================================

  timeline.to(dot2, {
    scale: 1,
    duration: 1,
  });

  timeline.to(
    ".shape-one",
    {
      scale: 1,
      duration: 1,
    },
    "<",
  );

  timeline.fromTo(
    text2,

    {
      opacity: 0,
      y: 20,
    },

    {
      opacity: 1,
      y: 0,

      duration: 1,
    },

    "<",
  );

  // ==================================================
  // 6. COURBE CONTINUE
  // ==================================================

  timeline.to(line, {
    strokeDashoffset: lineLength * 0.35,

    duration: 4,

    ease: "none",
  });

  // ==================================================
  // 7. DEUXIEME POINT
  // + FORME
  // + TEXTE
  // ==================================================

  timeline.to(dot3, {
    scale: 1,
    duration: 1,
  });

  timeline.to(
    ".shape-two",
    {
      scale: 1,
      duration: 1,
    },
    "<",
  );

  timeline.fromTo(
    text3,

    {
      opacity: 0,
      y: 20,
    },

    {
      opacity: 1,
      y: -140,
      x: -20,

      duration: 1,
    },

    "<",
  );

  // ==================================================
  // 8. SHAPE 3 APPARAIT
  // ==================================================

  timeline.to(".shape-three", {
    scale: 1,
    duration: 1,
  });

  // ==================================================
  // 9. CAMERA
  // ==================================================

  timeline.to(world, {
    scale: 1.3,

    x: -1500,
    y: 100,

    rotationY: 0,
    rotationX: 0,

    duration: 4,

    ease: "none",
  });

  // ==================================================
  // 10. TROISIEME POINT
  // + TEXTE
  // ==================================================

  timeline.to(dot4, {
    scale: 1,
    duration: 1,
  });

  timeline.fromTo(
    text4,

    {
      opacity: 0,
      y: 20,
    },

    {
      opacity: 1,
      y: 0,
      x: 0,

      duration: 1,
    },

    "<",
  );

  // ==================================================
  // 11. QUATRIEME FORME
  // + TEXTE  // + SHAPE 3 DEVIENT ROUGE
  // ==================================================

  timeline.to(".shape-four", {
    scale: 1,
    duration: 1,
  });

  timeline.fromTo(
    text5,

    {
      opacity: 0,
      y: 20,
    },

    {
      opacity: 1,
      y: 0,

      duration: 1,
    },

    "<",
  );

  timeline.to(
    ".shape-three",
    {
      borderColor: "#dd1f15",
      borderWidth: 10,

      duration: 10,

      ease: "none",
    },
    "<",
  );
  // ==================================================
  // 12. RETOUR CAMERA
  // ==================================================

  timeline.to(world, {
    scale: 1,

    x: -1500,
    y: 75,

    duration: 3,

    ease: "none",
  });

  // ==================================================
  // 13. ZOOM FINAL
  // ==================================================

  timeline.to(world, {
    scale: 15,

    x: -4500,
    y: 1500,

    duration: 8,

    ease: "none",
  });

  // ==================================================
  // 14. COMPOSITION FINALE
  // ==================================================

  timeline.to(".final-image1", {
    opacity: 1,
    duration: 2,
  });

  timeline.to(".final-image2", {
    opacity: 1,
    duration: 2,
  });

  timeline.to(".final-image3", {
    opacity: 1,
    duration: 2,
  });

  timeline.to(".final-image4", {
    opacity: 1,
    duration: 2,
  });

  // ==================================================
  // 15. ENTRE DANS LA COMPOSITION
  // ==================================================

  timeline.to(".final-images", {
    scale: 2,

    duration: 5,

    ease: "none",
  });

  // ==================================================
  // CARD END
  // ==================================================

  const cardEnd = document.querySelector(".card-end");
  const cardEndContent = document.querySelector(".card-end-content");

  // ==================================================
  // ECHELLE 1920 x 1080
  // ==================================================

  function resizeCardEnd() {
    const scaleX = window.innerWidth / 1920;
    const scaleY = window.innerHeight / 1080;

    const scale = Math.max(scaleX, scaleY);

    gsap.set(cardEndContent, {
      xPercent: -50,
      yPercent: -50,

      scale: scale,

      transformOrigin: "center center",
    });

    ScrollTrigger.refresh();
  }

  resizeCardEnd();

  window.addEventListener("resize", resizeCardEnd);

  // ==================================================
  // ANIMATION CARD END
  // ==================================================

  const cardEndTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: cardEnd,

      start: "top top",

      end: "+=2500",

      pin: true,

      scrub: true,

      // markers: true,
    },
  });

  // ==================================================
  // EAU
  // ==================================================

  [
    ".water",
    ".sun",
    ".blue-mountain",
    ".right-mountain",
    ".left-mountain",
    ".left-tree",
    ".right-tree",
  ].forEach((selector) => {
    cardEndTimeline.fromTo(
      selector,
      { opacity: 0, scale: 0.98, transformOrigin: "center center" },
      { opacity: 1, scale: 1, duration: 1 },
    );
  });
  // ==================================================
  // PONT
  // ==================================================

  cardEndTimeline.fromTo(
    ".bridge",

    {
      opacity: 0,
      y: -100,
      scale: 0.98,
      transformOrigin: "center center",
    },

    {
      opacity: 1,
      y: 100,
      scale: 1,
      duration: 2,
    },
  );

  // ==================================================
  // OISEAU
  // ==================================================

  cardEndTimeline.fromTo(
    ".bird",

    {
      x: 1120,
      y: -340,
      rotation: -20,
    },

    {
      x: -520,
      y: 220,
      rotation: -10,

      duration: 5,

      ease: "none",
    },

    0,
  );

  // =========================
  // BOUTON IMPRIMER
  // APPARAÎT À LA FIN
  // =========================

  const printButton = document.querySelector(".print-button");

  cardEndTimeline.to(printButton, {
    opacity: 1,
    pointerEvents: "auto",
    duration: 1,
  });
}

window.addEventListener("load", init);
