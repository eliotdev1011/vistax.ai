import { a as Ke } from "./chunk-QBPJQFLW.mjs";
import {
  a as Me,
  b as sr,
  c as cr,
  e as dr,
  f as pr,
  g as hr,
  h as Ie,
  i as gr,
  j as xr,
} from "./chunk-CJ5R7BYY.mjs";
import "./chunk-EGTCPMJY.mjs";
import {
  C as q,
  E as he,
  F as Ue,
  I as p,
  L as E,
  N as ar,
  O as W,
  P as tr,
  Q as re,
  R as C,
  S as ie,
  T as J,
  U as ir,
  V as or,
  W as R,
  Y as w,
  b as t,
  ca as oe,
  d as j,
  da as nr,
  e as $e,
  ea as Le,
  fa as ae,
  g as ve,
  ga as lr,
  h as ee,
  i as pe,
  ia as ue,
  j as Q,
  ja as mr,
  k as er,
  ka as F,
  l as I,
  la as f,
  m as O,
  ma as H,
  n as Fe,
  na as U,
  o as te,
  oa as fr,
  p as A,
  q as We,
  t as i,
  u as Z,
  v as rr,
  w as e,
  x as n,
} from "./chunk-LMDT3BJ4.mjs";
import { b as D } from "./chunk-OIST4OYN.mjs";
var ur;
(function (r) {
  (r.Fill = "fill"),
    (r.Contain = "contain"),
    (r.Cover = "cover"),
    (r.None = "none"),
    (r.ScaleDown = "scale-down");
})(ur || (ur = {}));
var yr;
(function (r) {
  (r.Video = "Upload"), (r.Url = "URL");
})(yr || (yr = {}));
function Pr(r) {
  let {
    width: a,
    height: l,
    topLeft: m,
    topRight: c,
    bottomRight: d,
    bottomLeft: h,
    id: x,
    children: y,
    ...o
  } = r;
  return o;
}
function ne(r) {
  let a = Pr(r);
  return e(jr, { ...a });
}
function Vr(r) {
  let a = ar(),
    l = O(!1),
    m = ve((h) => {
      if (!r.current) return;
      let x = (h === 1 ? 0.999 : h) * r.current.duration,
        y = Math.abs(r.current.currentTime - x) < 0.1;
      r.current.duration > 0 && !y && (r.current.currentTime = x);
    }, []),
    c = ve(() => {
      !(
        r.current.currentTime > 0 &&
        r.current.onplaying &&
        !r.current.paused &&
        !r.current.ended &&
        r.current.readyState > r.current.HAVE_CURRENT_DATA
      ) &&
        r.current &&
        !l.current &&
        a &&
        ((l.current = !0),
        r.current
          .play()
          .catch((x) => {})
          .finally(() => (l.current = !1)));
    }, []),
    d = ve(() => {
      !r.current || l.current || r.current.pause();
    }, []);
  return { play: c, pause: d, setProgress: m };
}
function Nr({
  playingProp: r,
  muted: a,
  loop: l,
  playsinline: m,
  controls: c,
}) {
  let [d] = Fe(() => r),
    [h, x] = Fe(!1);
  r !== d && !h && x(!0);
  let y = d && a && l && m && !c && !h,
    o;
  return (
    y ? (o = "on-viewport") : d ? (o = "on-mount") : (o = "no-autoplay"), o
  );
}
var wr = !1,
  jr = $e(function (a) {
    let {
        srcType: l,
        srcFile: m,
        srcUrl: c,
        playing: d,
        muted: h,
        playsinline: x,
        controls: y,
        progress: o,
        objectFit: L,
        backgroundColor: u,
        onSeeked: g,
        onPause: b,
        onPlay: v,
        onEnd: s,
        onClick: Y,
        onMouseEnter: k,
        onMouseLeave: z,
        onMouseDown: S,
        onMouseUp: V,
        poster: T,
        posterEnabled: M,
        startTime: G,
        volume: K,
        loop: B,
      } = a,
      P = O(),
      we = dr(),
      se = O(null),
      Te = O(null),
      be = hr(),
      je = Ie(a),
      xe = be
        ? "no-autoplay"
        : Nr({
            playingProp: d,
            muted: h,
            loop: B,
            playsinline: x,
            controls: y,
          }),
      ce = be ? !0 : rr(P),
      $ = G === 100 ? 99.9 : G,
      { play: de, pause: Ge, setProgress: De } = Vr(P);
    pe(() => {
      be || (d ? de() : Ge());
    }, [d]),
      pe(() => {
        be || (xe === "on-viewport" && (ce ? de() : Ge()));
      }, [xe, ce]),
      pe(() => {
        if (!wr) {
          wr = !0;
          return;
        }
        let N = We(o) ? o.get() : (o ?? 0) * 0.01;
        De((N ?? 0) || ($ ?? 0) / 100);
      }, [$, m, c, o]),
      pe(() => {
        if (We(o)) return o.on("change", (N) => De(N));
      }, [o]),
      sr(() => {
        se.current !== null && P.current && ((!Te && B) || !se.current) && de();
      }),
      cr(() => {
        P.current &&
          ((Te.current = P.current.ended),
          (se.current = P.current.paused),
          Ge());
      });
    let Er = I(() => {
      let N = "";
      if (l === "URL") return c + N;
      if (l === "Upload") return m + N;
    }, [l, m, c, $]);
    return (
      pe(() => {
        we && P.current && xe === "on-mount" && setTimeout(() => de(), 50);
      }, []),
      pe(() => {
        P.current && !h && (P.current.volume = (K ?? 0) / 100);
      }, [K]),
      e("video", {
        onClick: Y,
        onMouseEnter: k,
        onMouseLeave: z,
        onMouseDown: S,
        onMouseUp: V,
        src: Er,
        loop: B,
        ref: P,
        onSeeked: (N) => g?.(N),
        onPause: (N) => b?.(N),
        onPlay: (N) => v?.(N),
        onEnded: (N) => s?.(N),
        autoPlay: xe === "on-mount",
        poster: M ? T : void 0,
        onLoadedData: () => {
          P.current &&
            (P.current.currentTime < 0.3 && De(($ ?? 0) * 0.01),
            xe === "on-mount" && de());
        },
        controls: y,
        muted: be ? !0 : h,
        playsInline: x,
        style: {
          cursor: Y ? "pointer" : "auto",
          width: "100%",
          height: "100%",
          borderRadius: je,
          display: "block",
          objectFit: L,
          backgroundColor: u,
          objectPosition: "50% 50%",
        },
      })
    );
  });
ne.displayName = "Video";
ne.defaultProps = {
  srcType: "URL",
  srcUrl:
    "https://assets.mixkit.co/videos/preview/mixkit-shining-sun-in-the-sky-surrounded-by-moving-clouds-31793-small.mp4",
  srcFile: "",
  posterEnabled: !1,
  controls: !1,
  playing: !0,
  loop: !0,
  muted: !0,
  playsinline: !0,
  restartOnEnter: !1,
  objectFit: "cover",
  backgroundColor: "rgba(0,0,0,0)",
  radius: 0,
  volume: 25,
  startTime: 0,
};
var Gr = /[A-Z]{2,}|[A-Z][a-z]+|[a-z]+|[A-Z]|\d+/gu;
function Dr(r) {
  return r.charAt(0).toUpperCase() + r.slice(1);
}
function Wr(r) {
  return (r.match(Gr) || []).map(Dr).join(" ");
}
var br = ["cover", "fill", "contain", "scale-down", "none"];
E(ne, {
  srcType: {
    type: p.Enum,
    displaySegmentedControl: !0,
    title: "Source",
    options: ["URL", "Upload"],
  },
  srcUrl: {
    type: p.String,
    title: "URL",
    placeholder: "../example.mp4",
    hidden(r) {
      return r.srcType === "Upload";
    },
    description:
      "Hosted video file URL. For YouTube, use the YouTube component.",
  },
  srcFile: {
    type: p.File,
    title: "File",
    allowedFileTypes: ["mp4", "webm"],
    hidden(r) {
      return r.srcType === "URL";
    },
  },
  playing: {
    type: p.Boolean,
    title: "Playing",
    enabledTitle: "Yes",
    disabledTitle: "No",
  },
  posterEnabled: {
    type: p.Boolean,
    title: "Poster",
    enabledTitle: "Yes",
    disabledTitle: "No",
  },
  poster: { type: p.Image, title: " ", hidden: ({ posterEnabled: r }) => !r },
  backgroundColor: { type: p.Color, title: "Background" },
  ...gr,
  startTime: {
    title: "Start Time",
    type: p.Number,
    min: 0,
    max: 100,
    step: 0.1,
    unit: "%",
  },
  loop: {
    type: p.Boolean,
    title: "Loop",
    enabledTitle: "Yes",
    disabledTitle: "No",
  },
  objectFit: {
    type: p.Enum,
    title: "Fit",
    options: br,
    optionTitles: br.map(Wr),
  },
  controls: {
    type: p.Boolean,
    title: "Controls",
    enabledTitle: "Show",
    disabledTitle: "Hide",
  },
  muted: {
    type: p.Boolean,
    title: "Muted",
    enabledTitle: "Yes",
    disabledTitle: "No",
  },
  volume: {
    type: p.Number,
    max: 100,
    min: 0,
    unit: "%",
    hidden: ({ muted: r }) => r,
  },
  onEnd: { type: p.EventHandler },
  onSeeked: { type: p.EventHandler },
  onPause: { type: p.EventHandler },
  onPlay: { type: p.EventHandler },
  ...Me,
});
var Ur = ["LgGeFnZGx", "vAk4dFDEQ", "Amllqtfr9", "kBowbAcQD"],
  Kr = "framer-xzuaJ",
  Br = {
    Amllqtfr9: "framer-v-155msw9",
    kBowbAcQD: "framer-v-1ijhhe1",
    LgGeFnZGx: "framer-v-jeguuq",
    vAk4dFDEQ: "framer-v-7fowz0",
  };
function Ae(r, ...a) {
  let l = {};
  return a?.forEach((m) => m && Object.assign(l, r[m])), l;
}
var Qr = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: "spring" },
  Zr = (r, a) => `perspective(1200px) ${a}`,
  qr = ({ value: r, children: a }) => {
    let l = ee(A),
      m = r ?? l.transition,
      c = I(() => ({ ...l, transition: m }), [JSON.stringify(m)]);
    return e(A.Provider, { value: c, children: a });
  },
  Jr = i(t),
  Hr = {
    "Variant 1": "LgGeFnZGx",
    "Variant 2": "vAk4dFDEQ",
    "Variant 3": "Amllqtfr9",
    "Variant 4": "kBowbAcQD",
  },
  Xr = ({ height: r, id: a, text2: l, title: m, width: c, ...d }) => {
    var h, x, y, o;
    return {
      ...d,
      m7ZSjyZav:
        (h = m ?? d.m7ZSjyZav) !== null && h !== void 0 ? h : "Text to 3D",
      variant:
        (y = (x = Hr[d.variant]) !== null && x !== void 0 ? x : d.variant) !==
          null && y !== void 0
          ? y
          : "LgGeFnZGx",
      YotR7rXrE:
        (o = l ?? d.YotR7rXrE) !== null && o !== void 0
          ? o
          : "Get inspired by how our community members are leveraging the power of Meshy to make 3D content.",
    };
  },
  _r = (r, a) => a.join("-") + r.layoutDependency,
  $r = j(function (r, a) {
    let { activeLocale: l, setLocale: m } = q(),
      {
        style: c,
        className: d,
        layoutId: h,
        variant: x,
        m7ZSjyZav: y,
        YotR7rXrE: o,
        ...L
      } = Xr(r),
      {
        baseVariant: u,
        classNames: g,
        gestureVariant: b,
        setGestureState: v,
        setVariant: s,
        variants: Y,
      } = ae({
        cycleOrder: Ur,
        defaultVariant: "LgGeFnZGx",
        variant: x,
        variantClassNames: Br,
      }),
      k = _r(r, Y),
      { activeVariantCallback: z, delay: S } = oe(u),
      V = z(async (...se) => {
        s("vAk4dFDEQ");
      }),
      T = z(async (...se) => {
        s("LgGeFnZGx");
      }),
      M = z(async (...se) => {
        s("kBowbAcQD");
      }),
      G = z(async (...se) => {
        s("Amllqtfr9");
      }),
      K = O(null),
      B = Q(),
      P = [],
      we = re();
    return e(Z, {
      id: h ?? B,
      children: e(Jr, {
        animate: Y,
        initial: !1,
        children: e(qr, {
          value: Qr,
          children: n(i.div, {
            ...L,
            className: W(Kr, ...P, "framer-jeguuq", d, g),
            "data-framer-name": "Variant 1",
            "data-highlight": !0,
            layoutDependency: k,
            layoutId: "LgGeFnZGx",
            onHoverEnd: () => v({ isHovered: !1 }),
            onHoverStart: () => v({ isHovered: !0 }),
            onMouseEnter: V,
            onTap: () => v({ isPressed: !1 }),
            onTapCancel: () => v({ isPressed: !1 }),
            onTapStart: () => v({ isPressed: !0 }),
            ref: a ?? K,
            style: { ...c },
            ...Ae(
              {
                Amllqtfr9: { "data-framer-name": "Variant 3", onMouseEnter: M },
                kBowbAcQD: {
                  "data-framer-name": "Variant 4",
                  onMouseEnter: void 0,
                  onMouseLeave: G,
                },
                vAk4dFDEQ: { "data-framer-name": "Variant 2", onMouseLeave: T },
              },
              u,
              b
            ),
            children: [
              n(i.div, {
                className: "framer-188cgd4",
                layoutDependency: k,
                layoutId: "FXLmxGPpy",
                children: [
                  e(i.div, {
                    className: "framer-6z08ao",
                    layoutDependency: k,
                    layoutId: "WR0Knvx9L",
                    children: e(F, {
                      background: {
                        alt: "",
                        fit: "fill",
                        intrinsicHeight: 234.5,
                        intrinsicWidth: 279,
                        pixelHeight: 469,
                        pixelWidth: 558,
                        sizes: "29.878px",
                        src: "https://framerusercontent.com/images/EXB7t1T6DLoab0EKo4WMZK9eQ.svg?scale-down-to=512",
                        srcSet:
                          "https://framerusercontent.com/images/EXB7t1T6DLoab0EKo4WMZK9eQ.svg?scale-down-to=512 512w,https://framerusercontent.com/images/EXB7t1T6DLoab0EKo4WMZK9eQ.svg 558w",
                      },
                      className: "framer-306jdf",
                      "data-framer-name": "graphic",
                      layoutDependency: k,
                      layoutId: "pYf0_5Q23",
                      style: {
                        filter: "grayscale(1)",
                        rotate: 0,
                        WebkitFilter: "grayscale(1)",
                      },
                      transformTemplate: Zr,
                      variants: {
                        kBowbAcQD: {
                          filter: "grayscale(0)",
                          rotate: 360,
                          WebkitFilter: "grayscale(0)",
                        },
                        vAk4dFDEQ: {
                          filter: "grayscale(0)",
                          rotate: 360,
                          WebkitFilter: "grayscale(0)",
                        },
                      },
                      ...Ae(
                        {
                          kBowbAcQD: {
                            background: {
                              alt: "",
                              fit: "fill",
                              intrinsicHeight: 234.5,
                              intrinsicWidth: 279,
                              pixelHeight: 469,
                              pixelWidth: 558,
                              sizes: "31px",
                              src: "https://framerusercontent.com/images/EXB7t1T6DLoab0EKo4WMZK9eQ.svg?scale-down-to=512",
                              srcSet:
                                "https://framerusercontent.com/images/EXB7t1T6DLoab0EKo4WMZK9eQ.svg?scale-down-to=512 512w,https://framerusercontent.com/images/EXB7t1T6DLoab0EKo4WMZK9eQ.svg 558w",
                            },
                          },
                        },
                        u,
                        b
                      ),
                    }),
                  }),
                  e(f, {
                    __fromCanvasComponent: !0,
                    children: e(t, {
                      children: e(i.p, {
                        style: {
                          "--font-selector": "R0Y7U29yYS01MDA=",
                          "--framer-font-family":
                            '"Sora", "Sora Placeholder", sans-serif',
                          "--framer-font-size": "34px",
                          "--framer-font-weight": "500",
                          "--framer-text-color":
                            "var(--extracted-r6o4lv, rgb(255, 255, 255))",
                        },
                        children: e(i.span, {
                          "data-text-fill": "true",
                          style: {
                            backgroundImage:
                              "linear-gradient(90deg, rgba(255, 255, 255, 0.7) 0%, rgba(255, 255, 255, 0.4) 100%)",
                          },
                          children: "Text to 3D",
                        }),
                      }),
                    }),
                    className: "framer-ggijkl",
                    fonts: ["GF;Sora-500"],
                    layoutDependency: k,
                    layoutId: "WBr0kYeks",
                    style: {
                      "--extracted-r6o4lv": "rgb(255, 255, 255)",
                      "--framer-link-text-color": "rgb(0, 153, 255)",
                      "--framer-link-text-decoration": "underline",
                    },
                    text: y,
                    verticalAlignment: "top",
                    withExternalLayout: !0,
                    ...Ae(
                      {
                        Amllqtfr9: {
                          children: e(t, {
                            children: e(i.p, {
                              style: {
                                "--font-selector": "R0Y7U29yYS01MDA=",
                                "--framer-font-family":
                                  '"Sora", "Sora Placeholder", sans-serif',
                                "--framer-font-size": "21px",
                                "--framer-font-weight": "500",
                                "--framer-text-color":
                                  "var(--extracted-r6o4lv, rgb(255, 255, 255))",
                              },
                              children: e(i.span, {
                                "data-text-fill": "true",
                                style: {
                                  backgroundImage:
                                    "linear-gradient(90deg, rgba(255, 255, 255, 0.7) 0%, rgba(255, 255, 255, 0.4) 100%)",
                                },
                                children: "Text to 3D",
                              }),
                            }),
                          }),
                        },
                        kBowbAcQD: {
                          children: e(t, {
                            children: e(i.p, {
                              style: {
                                "--font-selector": "R0Y7U29yYS01MDA=",
                                "--framer-font-family":
                                  '"Sora", "Sora Placeholder", sans-serif',
                                "--framer-font-size": "21px",
                                "--framer-font-weight": "500",
                                "--framer-text-color":
                                  "var(--extracted-r6o4lv, rgb(255, 255, 255))",
                              },
                              children: e(i.span, {
                                "data-text-fill": "true",
                                style: {
                                  backgroundImage:
                                    "linear-gradient(90deg, rgba(255, 255, 255, 0.7) 0%, rgba(255, 255, 255, 0.4) 100%)",
                                },
                                children: "Text to 3D",
                              }),
                            }),
                          }),
                        },
                      },
                      u,
                      b
                    ),
                  }),
                ],
              }),
              e(f, {
                __fromCanvasComponent: !0,
                children: e(t, {
                  children: e(i.p, {
                    style: {
                      "--font-selector": "R0Y7Um9ib3RvLTMwMA==",
                      "--framer-font-family":
                        '"Roboto", "Roboto Placeholder", sans-serif',
                      "--framer-font-size": "21px",
                      "--framer-font-weight": "300",
                      "--framer-text-color":
                        "var(--extracted-r6o4lv, rgba(255, 255, 255, 0.7))",
                    },
                    children:
                      "Get inspired by how our community members are leveraging the power of Meshy to make 3D content.",
                  }),
                }),
                className: "framer-jhhtvx",
                fonts: ["GF;Roboto-300"],
                layoutDependency: k,
                layoutId: "RD22FlfgL",
                style: {
                  "--extracted-r6o4lv": "rgba(255, 255, 255, 0.7)",
                  "--framer-link-text-color": "rgb(0, 153, 255)",
                  "--framer-link-text-decoration": "underline",
                },
                text: o,
                verticalAlignment: "top",
                withExternalLayout: !0,
                ...Ae(
                  {
                    Amllqtfr9: {
                      children: e(t, {
                        children: e(i.p, {
                          style: {
                            "--font-selector": "R0Y7Um9ib3RvLTMwMA==",
                            "--framer-font-family":
                              '"Roboto", "Roboto Placeholder", sans-serif',
                            "--framer-font-size": "21px",
                            "--framer-font-weight": "300",
                            "--framer-text-alignment": "center",
                            "--framer-text-color":
                              "var(--extracted-r6o4lv, rgba(255, 255, 255, 0.7))",
                          },
                          children:
                            "Get inspired by how our community members are leveraging the power of Meshy to make 3D content.",
                        }),
                      }),
                    },
                    kBowbAcQD: {
                      children: e(t, {
                        children: e(i.p, {
                          style: {
                            "--font-selector": "R0Y7Um9ib3RvLTMwMA==",
                            "--framer-font-family":
                              '"Roboto", "Roboto Placeholder", sans-serif',
                            "--framer-font-size": "21px",
                            "--framer-font-weight": "300",
                            "--framer-text-alignment": "center",
                            "--framer-text-color":
                              "var(--extracted-r6o4lv, rgba(255, 255, 255, 0.7))",
                          },
                          children:
                            "Get inspired by how our community members are leveraging the power of Meshy to make 3D content.",
                        }),
                      }),
                    },
                  },
                  u,
                  b
                ),
              }),
            ],
          }),
        }),
      }),
    });
  }),
  ea = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-xzuaJ.framer-ux9nj7, .framer-xzuaJ .framer-ux9nj7 { display: block; }",
    ".framer-xzuaJ.framer-jeguuq { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 480px; }",
    ".framer-xzuaJ .framer-188cgd4 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: min-content; }",
    ".framer-xzuaJ .framer-6z08ao { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 41px; justify-content: center; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 48px; }",
    ".framer-xzuaJ .framer-306jdf { aspect-ratio: 1.1951219512195121 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 25px); overflow: visible; position: relative; width: 30px; z-index: 2; }",
    ".framer-xzuaJ .framer-ggijkl { flex: none; height: auto; position: relative; white-space: pre; width: auto; }",
    ".framer-xzuaJ .framer-jhhtvx { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-xzuaJ.framer-jeguuq, .framer-xzuaJ .framer-188cgd4, .framer-xzuaJ .framer-6z08ao { gap: 0px; } .framer-xzuaJ.framer-jeguuq > *, .framer-xzuaJ .framer-6z08ao > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-xzuaJ.framer-jeguuq > :first-child, .framer-xzuaJ .framer-6z08ao > :first-child { margin-top: 0px; } .framer-xzuaJ.framer-jeguuq > :last-child, .framer-xzuaJ .framer-6z08ao > :last-child { margin-bottom: 0px; } .framer-xzuaJ .framer-188cgd4 > * { margin: 0px; margin-left: calc(20px / 2); margin-right: calc(20px / 2); } .framer-xzuaJ .framer-188cgd4 > :first-child { margin-left: 0px; } .framer-xzuaJ .framer-188cgd4 > :last-child { margin-right: 0px; } }",
    ".framer-xzuaJ.framer-v-7fowz0 .framer-306jdf { flex: 1 0 0px; height: 1px; width: var(--framer-aspect-ratio-supported, 49px); }",
    ".framer-xzuaJ.framer-v-155msw9.framer-jeguuq, .framer-xzuaJ.framer-v-1ijhhe1.framer-jeguuq { width: 370px; }",
    ".framer-xzuaJ.framer-v-155msw9 .framer-188cgd4, .framer-xzuaJ.framer-v-1ijhhe1 .framer-188cgd4 { gap: 0px; width: 100%; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-xzuaJ.framer-v-155msw9 .framer-188cgd4 { gap: 0px; } .framer-xzuaJ.framer-v-155msw9 .framer-188cgd4 > * { margin: 0px; margin-left: calc(0px / 2); margin-right: calc(0px / 2); } .framer-xzuaJ.framer-v-155msw9 .framer-188cgd4 > :first-child { margin-left: 0px; } .framer-xzuaJ.framer-v-155msw9 .framer-188cgd4 > :last-child { margin-right: 0px; } }",
    ".framer-xzuaJ.framer-v-1ijhhe1 .framer-306jdf { height: var(--framer-aspect-ratio-supported, 26px); width: 31px; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-xzuaJ.framer-v-1ijhhe1 .framer-188cgd4 { gap: 0px; } .framer-xzuaJ.framer-v-1ijhhe1 .framer-188cgd4 > * { margin: 0px; margin-left: calc(0px / 2); margin-right: calc(0px / 2); } .framer-xzuaJ.framer-v-1ijhhe1 .framer-188cgd4 > :first-child { margin-left: 0px; } .framer-xzuaJ.framer-v-1ijhhe1 .framer-188cgd4 > :last-child { margin-right: 0px; } }",
  ],
  Oe = J($r, ea, "framer-xzuaJ"),
  le = Oe;
Oe.displayName = "TO";
Oe.defaultProps = { height: 101.5, width: 480 };
E(Oe, {
  variant: {
    options: ["LgGeFnZGx", "vAk4dFDEQ", "Amllqtfr9", "kBowbAcQD"],
    optionTitles: ["Variant 1", "Variant 2", "Variant 3", "Variant 4"],
    title: "Variant",
    type: p.Enum,
  },
  m7ZSjyZav: {
    defaultValue: "Text to 3D",
    displayTextArea: !1,
    title: "Title",
    type: p.String,
  },
  YotR7rXrE: {
    defaultValue:
      "Get inspired by how our community members are leveraging the power of Meshy to make 3D content.",
    displayTextArea: !1,
    title: "Text 2",
    type: p.String,
  },
});
H(
  Oe,
  [
    {
      explicitInter: !0,
      fonts: [
        {
          family: "Sora",
          source: "google",
          style: "normal",
          url: "https://fonts.gstatic.com/s/sora/v12/xMQOuFFYT72X5wkB_18qmnndmSdgnn-PIwNhBti0.woff2",
          weight: "500",
        },
        {
          family: "Roboto",
          source: "google",
          style: "normal",
          url: "https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmSU5vBh05IsDqlA.woff2",
          weight: "300",
        },
      ],
    },
  ],
  { supportsExplicitInterCodegen: !0 }
);
var ra = U(le),
  aa = U(ne),
  ta = ["aXHAIdr7o", "z0StExMaq", "IhTeJmgPv"],
  ia = "framer-TKznL",
  oa = {
    aXHAIdr7o: "framer-v-12xsymd",
    IhTeJmgPv: "framer-v-1bm33zg",
    z0StExMaq: "framer-v-1q9f7rd",
  };
function ye(r, ...a) {
  let l = {};
  return a?.forEach((m) => m && Object.assign(l, r[m])), l;
}
var na = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: "spring" },
  la = (r, a) => `perspective(1200px) ${a}`,
  ma = ({ value: r, children: a }) => {
    let l = ee(A),
      m = r ?? l.transition,
      c = I(() => ({ ...l, transition: m }), [JSON.stringify(m)]);
    return e(A.Provider, { value: c, children: a });
  },
  fa = i(t),
  sa = {
    "Variant 1": "aXHAIdr7o",
    "Variant 2": "z0StExMaq",
    "Variant 3": "IhTeJmgPv",
  },
  ca = ({ height: r, id: a, width: l, ...m }) => {
    var c, d;
    return {
      ...m,
      variant:
        (d = (c = sa[m.variant]) !== null && c !== void 0 ? c : m.variant) !==
          null && d !== void 0
          ? d
          : "aXHAIdr7o",
    };
  },
  da = (r, a) => a.join("-") + r.layoutDependency,
  pa = j(function (r, a) {
    let { activeLocale: l, setLocale: m } = q(),
      { style: c, className: d, layoutId: h, variant: x, ...y } = ca(r),
      {
        baseVariant: o,
        classNames: L,
        gestureVariant: u,
        setGestureState: g,
        setVariant: b,
        variants: v,
      } = ae({
        cycleOrder: ta,
        defaultVariant: "aXHAIdr7o",
        variant: x,
        variantClassNames: oa,
      }),
      s = da(r, v),
      Y = O(null),
      k = Q(),
      z = [],
      S = re();
    return e(Z, {
      id: h ?? k,
      children: e(fa, {
        animate: v,
        initial: !1,
        children: e(ma, {
          value: na,
          children: n(i.div, {
            ...y,
            className: W(ia, ...z, "framer-12xsymd", d, L),
            "data-framer-name": "Variant 1",
            layoutDependency: s,
            layoutId: "aXHAIdr7o",
            onHoverEnd: () => g({ isHovered: !1 }),
            onHoverStart: () => g({ isHovered: !0 }),
            onTap: () => g({ isPressed: !1 }),
            onTapCancel: () => g({ isPressed: !1 }),
            onTapStart: () => g({ isPressed: !0 }),
            ref: a ?? Y,
            style: { ...c },
            ...ye(
              {
                IhTeJmgPv: { "data-framer-name": "Variant 3" },
                z0StExMaq: { "data-framer-name": "Variant 2" },
              },
              o,
              u
            ),
            children: [
              n(i.div, {
                className: "framer-pv29b5",
                layoutDependency: s,
                layoutId: "hlU7EP9Yi",
                style: {
                  borderBottomLeftRadius: 50,
                  borderBottomRightRadius: 50,
                  borderTopLeftRadius: 50,
                  borderTopRightRadius: 50,
                },
                variants: {
                  IhTeJmgPv: {
                    borderBottomLeftRadius: 0,
                    borderBottomRightRadius: 0,
                    borderTopLeftRadius: 0,
                    borderTopRightRadius: 0,
                  },
                  z0StExMaq: {
                    borderBottomLeftRadius: 0,
                    borderBottomRightRadius: 0,
                    borderTopLeftRadius: 0,
                    borderTopRightRadius: 0,
                  },
                },
                children: [
                  e(i.div, {
                    className: "framer-8zj6cf",
                    layoutDependency: s,
                    layoutId: "Ng6RW4AXs",
                    style: {
                      borderBottomLeftRadius: 15,
                      borderBottomRightRadius: 15,
                      borderTopLeftRadius: 15,
                      borderTopRightRadius: 15,
                    },
                    children: e(C, {
                      ...ye(
                        {
                          IhTeJmgPv: {
                            width: `calc(${S?.width || "100vw"} - 80px)`,
                          },
                        },
                        o,
                        u
                      ),
                      children: e(i.div, {
                        className: "framer-1yof69e-container",
                        layoutDependency: s,
                        layoutId: "u8e6VpgV1-container",
                        children: e(le, {
                          height: "100%",
                          id: "u8e6VpgV1",
                          layoutId: "u8e6VpgV1",
                          m7ZSjyZav: "Text to 3D",
                          style: { width: "100%" },
                          variant: "LgGeFnZGx",
                          width: "100%",
                          YotR7rXrE:
                            "Use classic text-prompts to create and edit the 3D assets you need.",
                          ...ye({ IhTeJmgPv: { variant: "kBowbAcQD" } }, o, u),
                        }),
                      }),
                    }),
                  }),
                  e(i.div, {
                    className: "framer-b5v5s4",
                    layoutDependency: s,
                    layoutId: "JEv_namfs",
                    style: {
                      borderBottomLeftRadius: 15,
                      borderBottomRightRadius: 15,
                      borderTopLeftRadius: 15,
                      borderTopRightRadius: 15,
                    },
                    children: e(C, {
                      ...ye(
                        {
                          IhTeJmgPv: {
                            width: `calc(${S?.width || "100vw"} - 80px)`,
                          },
                        },
                        o,
                        u
                      ),
                      children: e(i.div, {
                        className: "framer-4f4d0e-container",
                        layoutDependency: s,
                        layoutId: "Z3P1dLqCK-container",
                        children: e(le, {
                          height: "100%",
                          id: "Z3P1dLqCK",
                          layoutId: "Z3P1dLqCK",
                          m7ZSjyZav: "Image to 3D",
                          style: { width: "100%" },
                          variant: "LgGeFnZGx",
                          width: "100%",
                          YotR7rXrE:
                            "Upload an image and watch it turn into 3D content.",
                          ...ye({ IhTeJmgPv: { variant: "kBowbAcQD" } }, o, u),
                        }),
                      }),
                    }),
                  }),
                  e(i.div, {
                    className: "framer-1wxfj9t",
                    layoutDependency: s,
                    layoutId: "TGiwgfRYF",
                    style: {
                      borderBottomLeftRadius: 15,
                      borderBottomRightRadius: 15,
                      borderTopLeftRadius: 15,
                      borderTopRightRadius: 15,
                    },
                    children: e(C, {
                      ...ye(
                        {
                          IhTeJmgPv: {
                            width: `max(${S?.width || "100vw"} - 80px, 0px)`,
                          },
                        },
                        o,
                        u
                      ),
                      children: e(i.div, {
                        className: "framer-b085rr-container",
                        layoutDependency: s,
                        layoutId: "a70AQanas-container",
                        children: e(le, {
                          height: "100%",
                          id: "a70AQanas",
                          layoutId: "a70AQanas",
                          m7ZSjyZav: "AI Texturing",
                          style: { width: "100%" },
                          variant: "LgGeFnZGx",
                          width: "100%",
                          YotR7rXrE:
                            "Apply texture and edit visual details with artificial intelligence.",
                          ...ye({ IhTeJmgPv: { variant: "kBowbAcQD" } }, o, u),
                        }),
                      }),
                    }),
                  }),
                ],
              }),
              e(i.div, {
                className: "framer-1t1zp69",
                "data-border": !0,
                layoutDependency: s,
                layoutId: "vbtSJhyGm",
                style: {
                  "--border-bottom-width": "1px",
                  "--border-color": "rgba(255, 255, 255, 0.2)",
                  "--border-left-width": "1px",
                  "--border-right-width": "1px",
                  "--border-style": "solid",
                  "--border-top-width": "1px",
                  borderBottomLeftRadius: 50,
                  borderBottomRightRadius: 50,
                  borderTopLeftRadius: 50,
                  borderTopRightRadius: 50,
                },
                children: n(i.div, {
                  className: "framer-16l88mq",
                  layoutDependency: s,
                  layoutId: "QB6cTsIDF",
                  style: {
                    background:
                      "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 100%)",
                  },
                  children: [
                    e(C, {
                      children: e(i.div, {
                        className: "framer-2ibwb6-container",
                        layoutDependency: s,
                        layoutId: "V3uUYVmJL-container",
                        children: e(ne, {
                          backgroundColor: "rgba(0, 0, 0, 0)",
                          borderRadius: 0,
                          bottomLeftRadius: 0,
                          bottomRightRadius: 0,
                          controls: !1,
                          height: "100%",
                          id: "V3uUYVmJL",
                          isMixedBorderRadius: !1,
                          layoutId: "V3uUYVmJL",
                          loop: !0,
                          muted: !0,
                          objectFit: "cover",
                          playing: !0,
                          posterEnabled: !1,
                          srcFile:
                            "https://framerusercontent.com/assets/B7nSFWUvJy6QAL7eov6yYpbOjE.mp4",
                          srcType: "Upload",
                          srcUrl:
                            "https://assets.mixkit.co/videos/preview/mixkit-shining-sun-in-the-sky-surrounded-by-moving-clouds-31793-small.mp4",
                          startTime: 0,
                          style: { height: "100%", width: "100%" },
                          topLeftRadius: 0,
                          topRightRadius: 0,
                          volume: 25,
                          width: "100%",
                        }),
                      }),
                    }),
                    n(i.div, {
                      className: "framer-ytlgry",
                      "data-border": !0,
                      layoutDependency: s,
                      layoutId: "gIy_nCpy3",
                      style: {
                        "--border-bottom-width": "1px",
                        "--border-color": "rgba(255, 255, 255, 0.2)",
                        "--border-left-width": "1px",
                        "--border-right-width": "1px",
                        "--border-style": "solid",
                        "--border-top-width": "1px",
                        backgroundColor: "rgba(255, 255, 255, 0.2)",
                        borderBottomLeftRadius: 22,
                        borderBottomRightRadius: 22,
                        borderTopLeftRadius: 22,
                        borderTopRightRadius: 22,
                        boxShadow:
                          "inset 50px 50px 50px 0px rgba(0, 0, 0, 0.5)",
                      },
                      children: [
                        e(f, {
                          __fromCanvasComponent: !0,
                          children: e(t, {
                            children: e(i.p, {
                              style: {
                                "--framer-font-size": "13px",
                                "--framer-text-color":
                                  "var(--extracted-r6o4lv, rgb(255, 255, 255))",
                              },
                              children:
                                "Intricate samurai mask, small horns, honoring the dead, high detail",
                            }),
                          }),
                          className: "framer-taa7k3",
                          fonts: ["Inter"],
                          layoutDependency: s,
                          layoutId: "BlVSm6zkQ",
                          style: {
                            "--extracted-r6o4lv": "rgb(255, 255, 255)",
                            "--framer-link-text-color": "rgb(0, 153, 255)",
                            "--framer-link-text-decoration": "underline",
                          },
                          verticalAlignment: "top",
                          withExternalLayout: !0,
                          ...ye(
                            {
                              IhTeJmgPv: {
                                children: e(t, {
                                  children: e(i.p, {
                                    style: {
                                      "--framer-font-size": "13px",
                                      "--framer-text-alignment": "center",
                                      "--framer-text-color":
                                        "var(--extracted-r6o4lv, rgb(255, 255, 255))",
                                    },
                                    children:
                                      "Intricate samurai mask, small horns, honoring the dead, high detail",
                                  }),
                                }),
                              },
                            },
                            o,
                            u
                          ),
                        }),
                        n(i.div, {
                          className: "framer-t976wh",
                          layoutDependency: s,
                          layoutId: "uDfKvT698",
                          style: {
                            backgroundColor: "rgba(255, 255, 255, 0.9)",
                            borderBottomLeftRadius: 20,
                            borderBottomRightRadius: 20,
                            borderTopLeftRadius: 20,
                            borderTopRightRadius: 20,
                          },
                          children: [
                            e(F, {
                              background: {
                                alt: "",
                                fit: "fill",
                                intrinsicHeight: 234.5,
                                intrinsicWidth: 279,
                                pixelHeight: 469,
                                pixelWidth: 558,
                                sizes: "20px",
                                src: "https://framerusercontent.com/images/EXB7t1T6DLoab0EKo4WMZK9eQ.svg?scale-down-to=512",
                                srcSet:
                                  "https://framerusercontent.com/images/EXB7t1T6DLoab0EKo4WMZK9eQ.svg?scale-down-to=512 512w,https://framerusercontent.com/images/EXB7t1T6DLoab0EKo4WMZK9eQ.svg 558w",
                              },
                              className: "framer-1lg5cku",
                              "data-framer-name": "graphic",
                              layoutDependency: s,
                              layoutId: "OmSiTr5lx",
                              style: {
                                filter: "grayscale(0)",
                                rotate: 360,
                                WebkitFilter: "grayscale(0)",
                              },
                              transformTemplate: la,
                            }),
                            e(f, {
                              __fromCanvasComponent: !0,
                              children: e(t, {
                                children: e(i.p, {
                                  style: {
                                    "--font-selector":
                                      "R0Y7UG9wcGlucy1yZWd1bGFy",
                                    "--framer-font-family":
                                      '"Poppins", "Poppins Placeholder", sans-serif',
                                    "--framer-font-size": "13px",
                                  },
                                  children: "Generate",
                                }),
                              }),
                              className: "framer-1k6zski",
                              fonts: ["GF;Poppins-regular"],
                              layoutDependency: s,
                              layoutId: "uXNd1RgD6",
                              style: {
                                "--framer-link-text-color": "rgb(0, 153, 255)",
                                "--framer-link-text-decoration": "underline",
                              },
                              verticalAlignment: "top",
                              withExternalLayout: !0,
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          }),
        }),
      }),
    });
  }),
  ha = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-TKznL.framer-1k3qkoc, .framer-TKznL .framer-1k3qkoc { display: block; }",
    ".framer-TKznL.framer-12xsymd { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: 1120px; }",
    ".framer-TKznL .framer-pv29b5 { align-content: flex-start; align-items: flex-start; align-self: stretch; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: auto; justify-content: center; overflow: hidden; padding: 100px 50px 100px 50px; position: relative; width: auto; will-change: var(--framer-will-change-override, transform); z-index: 5; }",
    ".framer-TKznL .framer-8zj6cf { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 20px 20px 20px 20px; position: relative; width: min-content; }",
    ".framer-TKznL .framer-1yof69e-container, .framer-TKznL .framer-4f4d0e-container, .framer-TKznL .framer-b085rr-container { flex: none; height: auto; position: relative; width: 393px; }",
    ".framer-TKznL .framer-b5v5s4 { align-content: flex-start; align-items: flex-start; align-self: stretch; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 20px 20px 20px 20px; position: relative; width: auto; }",
    ".framer-TKznL .framer-1wxfj9t { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 20px 20px 20px 20px; position: relative; width: min-content; }",
    ".framer-TKznL .framer-1t1zp69 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: auto; justify-content: center; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: auto; }",
    ".framer-TKznL .framer-16l88mq { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: 442px; justify-content: center; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 442px; z-index: 3; }",
    ".framer-TKznL .framer-2ibwb6-container { flex: none; height: 521px; position: relative; width: 674px; }",
    ".framer-TKznL .framer-ytlgry { align-content: flex-start; align-items: flex-start; bottom: 0px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 111px; justify-content: center; overflow: visible; padding: 10px 10px 10px 10px; position: absolute; right: 0px; width: 265px; z-index: 1; }",
    ".framer-TKznL .framer-taa7k3 { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }",
    ".framer-TKznL .framer-t976wh { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 40px; justify-content: center; overflow: hidden; padding: 10px 20px 10px 20px; position: relative; width: auto; will-change: var(--framer-will-change-override, transform); }",
    ".framer-TKznL .framer-1lg5cku { aspect-ratio: 1.1951219512195121 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 17px); overflow: visible; position: relative; width: 20px; z-index: 2; }",
    ".framer-TKznL .framer-1k6zski { flex: none; height: auto; position: relative; white-space: pre; width: auto; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-TKznL.framer-12xsymd, .framer-TKznL .framer-pv29b5, .framer-TKznL .framer-8zj6cf, .framer-TKznL .framer-b5v5s4, .framer-TKznL .framer-1wxfj9t, .framer-TKznL .framer-1t1zp69, .framer-TKznL .framer-16l88mq, .framer-TKznL .framer-ytlgry, .framer-TKznL .framer-t976wh { gap: 0px; } .framer-TKznL.framer-12xsymd > * { margin: 0px; margin-left: calc(0px / 2); margin-right: calc(0px / 2); } .framer-TKznL.framer-12xsymd > :first-child, .framer-TKznL .framer-1wxfj9t > :first-child, .framer-TKznL .framer-t976wh > :first-child { margin-left: 0px; } .framer-TKznL.framer-12xsymd > :last-child, .framer-TKznL .framer-1wxfj9t > :last-child, .framer-TKznL .framer-t976wh > :last-child { margin-right: 0px; } .framer-TKznL .framer-pv29b5 > * { margin: 0px; margin-bottom: calc(20px / 2); margin-top: calc(20px / 2); } .framer-TKznL .framer-pv29b5 > :first-child, .framer-TKznL .framer-8zj6cf > :first-child, .framer-TKznL .framer-b5v5s4 > :first-child, .framer-TKznL .framer-1t1zp69 > :first-child, .framer-TKznL .framer-16l88mq > :first-child, .framer-TKznL .framer-ytlgry > :first-child { margin-top: 0px; } .framer-TKznL .framer-pv29b5 > :last-child, .framer-TKznL .framer-8zj6cf > :last-child, .framer-TKznL .framer-b5v5s4 > :last-child, .framer-TKznL .framer-1t1zp69 > :last-child, .framer-TKznL .framer-16l88mq > :last-child, .framer-TKznL .framer-ytlgry > :last-child { margin-bottom: 0px; } .framer-TKznL .framer-8zj6cf > *, .framer-TKznL .framer-b5v5s4 > *, .framer-TKznL .framer-1t1zp69 > *, .framer-TKznL .framer-ytlgry > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-TKznL .framer-1wxfj9t > *, .framer-TKznL .framer-t976wh > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-TKznL .framer-16l88mq > * { margin: 0px; margin-bottom: calc(40px / 2); margin-top: calc(40px / 2); } }",
    ".framer-TKznL.framer-v-1q9f7rd.framer-12xsymd { width: 810px; }",
    ".framer-TKznL.framer-v-1q9f7rd .framer-pv29b5 { padding: 0px 0px 0px 0px; }",
    ".framer-TKznL.framer-v-1q9f7rd .framer-16l88mq { height: 316px; width: 326px; }",
    ".framer-TKznL.framer-v-1q9f7rd .framer-2ibwb6-container { aspect-ratio: 1.0399274047186933 / 1; height: var(--framer-aspect-ratio-supported, 440px); width: 440px; }",
    ".framer-TKznL.framer-v-1bm33zg.framer-12xsymd { flex-direction: column; width: 270px; }",
    ".framer-TKznL.framer-v-1bm33zg .framer-pv29b5 { align-content: center; align-items: center; align-self: unset; gap: 40px; order: 1; padding: 20px 20px 20px 20px; width: 100%; }",
    ".framer-TKznL.framer-v-1bm33zg .framer-8zj6cf, .framer-TKznL.framer-v-1bm33zg .framer-1yof69e-container, .framer-TKznL.framer-v-1bm33zg .framer-4f4d0e-container, .framer-TKznL.framer-v-1bm33zg .framer-1wxfj9t { width: 100%; }",
    ".framer-TKznL.framer-v-1bm33zg .framer-b5v5s4 { align-self: unset; width: 100%; }",
    ".framer-TKznL.framer-v-1bm33zg .framer-b085rr-container { flex: 1 0 0px; width: 1px; }",
    ".framer-TKznL.framer-v-1bm33zg .framer-1t1zp69 { order: 0; }",
    ".framer-TKznL.framer-v-1bm33zg .framer-16l88mq { height: 394px; order: 0; width: 326px; }",
    ".framer-TKznL.framer-v-1bm33zg .framer-2ibwb6-container { aspect-ratio: 1.0399274047186933 / 1; height: var(--framer-aspect-ratio-supported, 348px); order: 0; width: 348px; }",
    ".framer-TKznL.framer-v-1bm33zg .framer-ytlgry { align-content: center; align-items: center; left: calc(50.00000000000002% - 265px / 2); order: 1; right: unset; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-TKznL.framer-v-1bm33zg.framer-12xsymd, .framer-TKznL.framer-v-1bm33zg .framer-pv29b5 { gap: 0px; } .framer-TKznL.framer-v-1bm33zg.framer-12xsymd > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-TKznL.framer-v-1bm33zg.framer-12xsymd > :first-child, .framer-TKznL.framer-v-1bm33zg .framer-pv29b5 > :first-child { margin-top: 0px; } .framer-TKznL.framer-v-1bm33zg.framer-12xsymd > :last-child, .framer-TKznL.framer-v-1bm33zg .framer-pv29b5 > :last-child { margin-bottom: 0px; } .framer-TKznL.framer-v-1bm33zg .framer-pv29b5 > * { margin: 0px; margin-bottom: calc(40px / 2); margin-top: calc(40px / 2); } }",
    '.framer-TKznL[data-border="true"]::after, .framer-TKznL [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
  ],
  Ye = J(pa, ha, "framer-TKznL"),
  Be = Ye;
Ye.displayName = "AI";
Ye.defaultProps = { height: 664, width: 1120 };
E(Ye, {
  variant: {
    options: ["aXHAIdr7o", "z0StExMaq", "IhTeJmgPv"],
    optionTitles: ["Variant 1", "Variant 2", "Variant 3"],
    title: "Variant",
    type: p.Enum,
  },
});
H(
  Ye,
  [
    {
      explicitInter: !0,
      fonts: [
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
          url: "https://app.framerstatic.com/Inter-Regular.cyrillic-ext-CFTLRB35.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
          url: "https://app.framerstatic.com/Inter-Regular.cyrillic-KKLZBALH.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+1F00-1FFF",
          url: "https://app.framerstatic.com/Inter-Regular.greek-ext-ULEBLIFV.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0370-03FF",
          url: "https://app.framerstatic.com/Inter-Regular.greek-IRHSNFQB.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
          url: "https://app.framerstatic.com/Inter-Regular.latin-ext-VZDUGU3Q.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
          url: "https://app.framerstatic.com/Inter-Regular.latin-JLQMKCHE.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
          url: "https://app.framerstatic.com/Inter-Regular.vietnamese-QK7VSWXK.woff2",
          weight: "400",
        },
        {
          family: "Poppins",
          source: "google",
          style: "normal",
          url: "https://fonts.gstatic.com/s/poppins/v20/pxiEyp8kv8JHgFVrFJXUc1NECPY.woff2",
          weight: "400",
        },
      ],
    },
    ...ra,
    ...aa,
  ],
  { supportsExplicitInterCodegen: !0 }
);
var ga = ["Z_kdo4eGv", "JWlP_4pDe", "dDTVcFhOT"],
  xa = "framer-PZc7T",
  ua = {
    dDTVcFhOT: "framer-v-lg3jm6",
    JWlP_4pDe: "framer-v-1hd9vmr",
    Z_kdo4eGv: "framer-v-ymrwgu",
  };
function ya(r, ...a) {
  let l = {};
  return a?.forEach((m) => m && Object.assign(l, r[m])), l;
}
var wa = {
    default: { delay: 0, duration: 1, ease: [0.44, 0, 0.56, 1], type: "tween" },
  },
  ba = (r, a) => `perspective(1200px) ${a}`,
  va = ({ value: r, children: a }) => {
    let l = ee(A),
      m = r ?? l.transition,
      c = I(() => ({ ...l, transition: m }), [JSON.stringify(m)]);
    return e(A.Provider, { value: c, children: a });
  },
  Fa = i(t),
  Oa = {
    "Variant 1": "Z_kdo4eGv",
    "Variant 2": "JWlP_4pDe",
    "Variant 3": "dDTVcFhOT",
  },
  Ya = ({ height: r, id: a, width: l, ...m }) => {
    var c, d;
    return {
      ...m,
      variant:
        (d = (c = Oa[m.variant]) !== null && c !== void 0 ? c : m.variant) !==
          null && d !== void 0
          ? d
          : "Z_kdo4eGv",
    };
  },
  ka = (r, a) => a.join("-") + r.layoutDependency,
  Ra = j(function (r, a) {
    let { activeLocale: l, setLocale: m } = q(),
      { style: c, className: d, layoutId: h, variant: x, ...y } = Ya(r),
      {
        baseVariant: o,
        classNames: L,
        gestureVariant: u,
        setGestureState: g,
        setVariant: b,
        transition: v,
        variants: s,
      } = ae({
        cycleOrder: ga,
        defaultVariant: "Z_kdo4eGv",
        transitions: wa,
        variant: x,
        variantClassNames: ua,
      }),
      Y = ka(r, s),
      { activeVariantCallback: k, delay: z } = oe(o),
      S = k(async (...B) => {
        await z(() => b("JWlP_4pDe"), 500);
      }),
      V = k(async (...B) => {
        await z(() => b("dDTVcFhOT"), 2e3);
      });
    Le(o, { dDTVcFhOT: void 0, default: S, JWlP_4pDe: V });
    let T = O(null),
      M = Q(),
      G = [],
      K = re();
    return e(Z, {
      id: h ?? M,
      children: e(Fa, {
        animate: s,
        initial: !1,
        children: e(va, {
          value: v,
          children: e(i.div, {
            ...y,
            className: W(xa, ...G, "framer-ymrwgu", d, L),
            "data-framer-name": "Variant 1",
            "data-highlight": !0,
            layoutDependency: Y,
            layoutId: "Z_kdo4eGv",
            onHoverEnd: () => g({ isHovered: !1 }),
            onHoverStart: () => g({ isHovered: !0 }),
            onTap: () => g({ isPressed: !1 }),
            onTapCancel: () => g({ isPressed: !1 }),
            onTapStart: () => g({ isPressed: !0 }),
            ref: a ?? T,
            style: { backgroundColor: "rgb(0, 0, 0)", opacity: 1, ...c },
            variants: { dDTVcFhOT: { opacity: 0 } },
            ...ya(
              {
                dDTVcFhOT: {
                  "data-framer-name": "Variant 3",
                  "data-highlight": void 0,
                },
                JWlP_4pDe: { "data-framer-name": "Variant 2" },
              },
              o,
              u
            ),
            children: e(i.div, {
              className: "framer-tqmn4a",
              layoutDependency: Y,
              layoutId: "XnAtKxKSM",
              style: {
                background:
                  "radial-gradient(50% 50% at 50% 50%, rgba(0, 0, 0, 0.11) 0%, rgba(255, 255, 255, 0.04) 100%)",
              },
              children: e(F, {
                background: {
                  alt: "",
                  fit: "fill",
                  intrinsicHeight: 234.5,
                  intrinsicWidth: 279,
                  pixelHeight: 469,
                  pixelWidth: 558,
                  src: "https://framerusercontent.com/images/EXB7t1T6DLoab0EKo4WMZK9eQ.svg",
                },
                className: "framer-tz5ysd",
                "data-framer-name": "graphic",
                layoutDependency: Y,
                layoutId: "KGlIn69Sh",
                style: { opacity: 0, rotate: -45 },
                transformTemplate: ba,
                variants: {
                  dDTVcFhOT: { opacity: 1, rotate: 45 },
                  JWlP_4pDe: { opacity: 1, rotate: 0 },
                },
              }),
            }),
          }),
        }),
      }),
    });
  }),
  Sa = [
    '.framer-PZc7T[data-border="true"]::after, .framer-PZc7T [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-PZc7T.framer-1wa80hl, .framer-PZc7T .framer-1wa80hl { display: block; }",
    ".framer-PZc7T.framer-ymrwgu { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 800px; justify-content: center; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: 1200px; }",
    ".framer-PZc7T .framer-tqmn4a { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 1px; justify-content: center; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 100%; }",
    ".framer-PZc7T .framer-tz5ysd { aspect-ratio: 1.1897654584221748 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 50px); overflow: visible; position: relative; width: 59px; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-PZc7T.framer-ymrwgu, .framer-PZc7T .framer-tqmn4a { gap: 0px; } .framer-PZc7T.framer-ymrwgu > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-PZc7T.framer-ymrwgu > :first-child { margin-top: 0px; } .framer-PZc7T.framer-ymrwgu > :last-child { margin-bottom: 0px; } .framer-PZc7T .framer-tqmn4a > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-PZc7T .framer-tqmn4a > :first-child { margin-left: 0px; } .framer-PZc7T .framer-tqmn4a > :last-child { margin-right: 0px; } }",
  ],
  ke = J(Ra, Sa, "framer-PZc7T"),
  Qe = ke;
ke.displayName = "Loader";
ke.defaultProps = { height: 800, width: 1200 };
E(ke, {
  variant: {
    options: ["Z_kdo4eGv", "JWlP_4pDe", "dDTVcFhOT"],
    optionTitles: ["Variant 1", "Variant 2", "Variant 3"],
    title: "Variant",
    type: p.Enum,
  },
});
H(ke, []);
var za = {
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};
var Ca = {
    ...za,
    borderRadius: 6,
    background: "rgba(149, 149, 149, 0.1)",
    border: "1px dashed rgba(149, 149, 149, 0.15)",
    color: "#a5a5a5",
    flexDirection: "column",
  },
  vr = j((r, a) => e("div", { style: Ca, ref: a }));
var Ta = (r) => r,
  Ze,
  Fr = (r) => (
    Ze ||
      (Ze = Ta(
        r.createElement("path", { d: "M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" }),
        "Home"
      )),
    Ze
  );
var Or = {
    onClick: { type: p.EventHandler },
    onMouseDown: { type: p.EventHandler },
    onMouseUp: { type: p.EventHandler },
    onMouseEnter: { type: p.EventHandler },
    onMouseLeave: { type: p.EventHandler },
  },
  Yr = (r, a) => r.find((l) => l.toLowerCase().includes(a));
function kr(r, a, l = "", m, c) {
  if (a) return m;
  if (l == null || l?.length === 0) return null;
  let d = l.toLowerCase().replace(/-|\s/g, "");
  var h;
  return (h = c[d]) !== null && h !== void 0 ? h : Yr(r, d);
}
function Rr(r, a, l = "", m, c) {
  let d = I(() => {
    if (l == null || l?.length === 0) return null;
    let x = l.toLowerCase().replace(/-|\s/g, "");
    var y;
    return (y = c[x]) !== null && y !== void 0 ? y : Yr(r, x);
  }, [m, l]);
  return a ? m : d;
}
var La = "https://framer.com/m/material-icons/",
  Ee = {
    AcUnit: 15,
    AccessAlarm: 15,
    AccessAlarms: 15,
    AccessTime: 15,
    AccessTimeFilled: 0,
    Accessibility: 7,
    AccessibilityNew: 0,
    Accessible: 15,
    AccessibleForward: 0,
    AccountBalance: 2,
    AccountBalanceWallet: 0,
    AccountBox: 15,
    AccountCircle: 7,
    AccountTree: 15,
    AdUnits: 15,
    Adb: 15,
    Add: 15,
    AddAPhoto: 15,
    AddAlarm: 15,
    AddAlert: 15,
    AddBox: 15,
    AddBusiness: 15,
    AddCircle: 15,
    AddCircleOutline: 0,
    AddComment: 15,
    AddIcCall: 15,
    AddLink: 15,
    AddLocation: 15,
    AddLocationAlt: 2,
    AddModerator: 15,
    AddPhotoAlternate: 0,
    AddReaction: 15,
    AddRoad: 15,
    AddShoppingCart: 2,
    AddTask: 15,
    AddToDrive: 15,
    AddToHomeScreen: 2,
    AddToPhotos: 15,
    AddToQueue: 15,
    Addchart: 15,
    Adjust: 15,
    AdminPanelSettings: 0,
    Agriculture: 15,
    Air: 15,
    AirlineSeatFlat: 2,
    AirplaneTicket: 2,
    AirplanemodeActive: 0,
    AirplanemodeInactive: 0,
    Airplay: 15,
    AirportShuttle: 2,
    Alarm: 15,
    AlarmAdd: 15,
    AlarmOff: 15,
    AlarmOn: 15,
    Album: 15,
    AlignHorizontalLeft: 0,
    AlignHorizontalRight: 0,
    AlignVerticalBottom: 0,
    AlignVerticalCenter: 0,
    AlignVerticalTop: 0,
    AllInbox: 15,
    AllInclusive: 15,
    AllOut: 15,
    AltRoute: 15,
    AlternateEmail: 2,
    Analytics: 15,
    Anchor: 15,
    Android: 15,
    Animation: 15,
    Announcement: 15,
    Aod: 15,
    Apartment: 15,
    Api: 15,
    AppBlocking: 15,
    AppRegistration: 2,
    AppSettingsAlt: 2,
    Apple: 0,
    Approval: 15,
    Apps: 15,
    Architecture: 15,
    Archive: 15,
    ArrowBack: 15,
    ArrowBackIos: 15,
    ArrowBackIosNew: 2,
    ArrowCircleDown: 2,
    ArrowCircleUp: 7,
    ArrowDownward: 7,
    ArrowDropDown: 7,
    ArrowDropDownCircle: 0,
    ArrowDropUp: 15,
    ArrowForward: 15,
    ArrowForwardIos: 2,
    ArrowLeft: 15,
    ArrowRight: 15,
    ArrowRightAlt: 7,
    ArrowUpward: 15,
    ArtTrack: 15,
    Article: 15,
    AspectRatio: 15,
    Assessment: 15,
    Assignment: 15,
    AssignmentInd: 7,
    AssignmentLate: 2,
    AssignmentReturn: 0,
    AssignmentReturned: 0,
    AssignmentTurnedIn: 0,
    Assistant: 15,
    AssistantDirection: 0,
    AssistantPhoto: 2,
    Atm: 15,
    AttachEmail: 15,
    AttachFile: 15,
    AttachMoney: 15,
    Attachment: 15,
    Attractions: 15,
    Attribution: 15,
    Audiotrack: 15,
    AutoAwesome: 15,
    AutoAwesomeMosaic: 0,
    AutoAwesomeMotion: 0,
    AutoDelete: 15,
    AutoFixHigh: 15,
    AutoFixNormal: 7,
    AutoFixOff: 15,
    AutoGraph: 15,
    AutoStories: 15,
    AutofpsSelect: 7,
    Autorenew: 15,
    AvTimer: 15,
    BabyChangingStation: 0,
    Backpack: 15,
    Backspace: 15,
    Backup: 15,
    BackupTable: 15,
    Badge: 15,
    BakeryDining: 15,
    Balcony: 15,
    Ballot: 15,
    BarChart: 15,
    BatchPrediction: 2,
    Bathroom: 15,
    Bathtub: 15,
    Battery20: 15,
    Battery30: 15,
    Battery50: 15,
    Battery60: 15,
    Battery80: 15,
    Battery90: 15,
    BatteryAlert: 15,
    BatteryCharging20: 0,
    BatteryCharging30: 0,
    BatteryCharging50: 0,
    BatteryCharging60: 0,
    BatteryCharging80: 0,
    BatteryCharging90: 0,
    BatteryChargingFull: 0,
    BatteryFull: 15,
    BatterySaver: 15,
    BatteryStd: 15,
    BatteryUnknown: 2,
    BeachAccess: 15,
    Bed: 15,
    BedroomBaby: 15,
    BedroomChild: 15,
    BedroomParent: 7,
    Bedtime: 15,
    Beenhere: 15,
    Bento: 15,
    BikeScooter: 15,
    Biotech: 15,
    Blender: 15,
    Block: 15,
    Bloodtype: 15,
    Bluetooth: 15,
    BluetoothAudio: 2,
    BluetoothConnected: 0,
    BluetoothDisabled: 0,
    BluetoothDrive: 2,
    BluetoothSearching: 0,
    BlurCircular: 15,
    BlurLinear: 15,
    BlurOff: 15,
    BlurOn: 15,
    Bolt: 15,
    Book: 15,
    BookOnline: 15,
    Bookmark: 15,
    BookmarkAdd: 15,
    BookmarkAdded: 7,
    BookmarkBorder: 2,
    BookmarkRemove: 2,
    Bookmarks: 15,
    BorderAll: 15,
    BorderBottom: 15,
    BorderClear: 15,
    BorderColor: 15,
    BorderHorizontal: 0,
    BorderInner: 15,
    BorderLeft: 15,
    BorderOuter: 15,
    BorderRight: 15,
    BorderStyle: 15,
    BorderTop: 15,
    BorderVertical: 2,
    BrandingWatermark: 0,
    BreakfastDining: 2,
    Brightness1: 15,
    Brightness2: 15,
    Brightness3: 15,
    Brightness4: 15,
    Brightness5: 15,
    Brightness6: 15,
    Brightness7: 15,
    BrightnessAuto: 2,
    BrightnessHigh: 2,
    BrightnessLow: 7,
    BrightnessMedium: 0,
    BrokenImage: 15,
    BrowserNotSupported: 0,
    BrunchDining: 15,
    Brush: 15,
    BubbleChart: 15,
    BugReport: 15,
    Build: 15,
    BuildCircle: 15,
    Bungalow: 15,
    BurstMode: 15,
    BusAlert: 15,
    Business: 15,
    BusinessCenter: 2,
    Cabin: 15,
    Cable: 15,
    Cached: 15,
    Cake: 15,
    Calculate: 15,
    CalendarToday: 7,
    CalendarViewDay: 2,
    CalendarViewMonth: 0,
    CalendarViewWeek: 0,
    Call: 15,
    CallEnd: 15,
    CallMade: 15,
    CallMerge: 15,
    CallMissed: 15,
    CallMissedOutgoing: 0,
    CallReceived: 15,
    CallSplit: 15,
    CallToAction: 15,
    Camera: 15,
    CameraAlt: 15,
    CameraEnhance: 7,
    CameraFront: 15,
    CameraIndoor: 15,
    CameraOutdoor: 7,
    CameraRear: 15,
    CameraRoll: 15,
    Cameraswitch: 15,
    Campaign: 15,
    Cancel: 15,
    CancelPresentation: 0,
    CancelScheduleSend: 0,
    CarRental: 15,
    CarRepair: 15,
    CardGiftcard: 15,
    CardMembership: 2,
    CardTravel: 15,
    Carpenter: 15,
    Cases: 15,
    Casino: 15,
    Cast: 15,
    CastConnected: 7,
    CastForEducation: 0,
    CatchingPokemon: 2,
    Category: 15,
    Celebration: 15,
    CellWifi: 15,
    CenterFocusStrong: 0,
    CenterFocusWeak: 2,
    Chair: 15,
    ChairAlt: 15,
    Chalet: 15,
    ChangeCircle: 15,
    ChangeHistory: 7,
    ChargingStation: 2,
    Chat: 15,
    ChatBubble: 15,
    ChatBubbleOutline: 0,
    Check: 15,
    CheckBox: 15,
    CheckBoxOutlineBlank: 0,
    CheckCircle: 15,
    CheckCircleOutline: 0,
    Checkroom: 15,
    ChevronLeft: 15,
    ChevronRight: 15,
    ChildCare: 15,
    ChildFriendly: 7,
    ChromeReaderMode: 0,
    Circle: 15,
    CircleNotifications: 0,
    Class: 15,
    CleanHands: 15,
    CleaningServices: 0,
    Clear: 15,
    ClearAll: 15,
    Close: 15,
    CloseFullscreen: 2,
    ClosedCaption: 7,
    ClosedCaptionOff: 0,
    Cloud: 15,
    CloudCircle: 15,
    CloudDone: 15,
    CloudDownload: 7,
    CloudOff: 15,
    CloudQueue: 15,
    CloudUpload: 15,
    Code: 15,
    CodeOff: 15,
    Coffee: 15,
    CoffeeMaker: 15,
    Collections: 15,
    CollectionsBookmark: 0,
    ColorLens: 15,
    Colorize: 15,
    Comment: 15,
    CommentBank: 15,
    Commute: 15,
    Compare: 15,
    CompareArrows: 7,
    CompassCalibration: 0,
    Compress: 15,
    Computer: 15,
    ConfirmationNumber: 0,
    ConnectedTv: 15,
    Construction: 15,
    ContactMail: 15,
    ContactPage: 15,
    ContactPhone: 15,
    ContactSupport: 2,
    Contactless: 15,
    Contacts: 15,
    ContentCopy: 15,
    ContentCut: 15,
    ContentPaste: 15,
    ContentPasteOff: 2,
    ControlCamera: 7,
    ControlPoint: 15,
    CopyAll: 15,
    Copyright: 15,
    Coronavirus: 15,
    CorporateFare: 7,
    Cottage: 15,
    Countertops: 15,
    Create: 15,
    CreateNewFolder: 2,
    CreditCard: 15,
    CreditCardOff: 7,
    CreditScore: 15,
    Crib: 15,
    Crop: 15,
    Crop169: 15,
    Crop32: 15,
    Crop54: 15,
    Crop75: 15,
    CropDin: 15,
    CropFree: 15,
    CropLandscape: 7,
    CropOriginal: 15,
    CropPortrait: 15,
    CropRotate: 15,
    CropSquare: 15,
    Dangerous: 15,
    DarkMode: 15,
    Dashboard: 15,
    DashboardCustomize: 0,
    DataSaverOff: 15,
    DataSaverOn: 15,
    DataUsage: 15,
    DateRange: 15,
    Deck: 15,
    Dehaze: 15,
    Delete: 15,
    DeleteForever: 7,
    DeleteOutline: 7,
    DeleteSweep: 15,
    DeliveryDining: 2,
    DepartureBoard: 2,
    Description: 15,
    DesignServices: 2,
    DesktopMac: 15,
    DesktopWindows: 2,
    Details: 15,
    DeveloperBoard: 2,
    DeveloperBoardOff: 0,
    DeveloperMode: 7,
    DeviceHub: 15,
    DeviceThermostat: 0,
    DeviceUnknown: 7,
    Devices: 15,
    DevicesOther: 15,
    DialerSip: 15,
    Dialpad: 15,
    Dining: 15,
    DinnerDining: 15,
    Directions: 15,
    DirectionsBike: 2,
    DirectionsBoat: 2,
    DirectionsBoatFilled: 0,
    DirectionsBus: 7,
    DirectionsBusFilled: 0,
    DirectionsCar: 7,
    DirectionsCarFilled: 0,
    DirectionsOff: 7,
    DirectionsRailway: 0,
    DirectionsRun: 7,
    DirectionsSubway: 0,
    DirectionsTransit: 0,
    DirectionsWalk: 2,
    DirtyLens: 15,
    DisabledByDefault: 0,
    DiscFull: 15,
    Dns: 15,
    DoDisturb: 15,
    DoDisturbAlt: 15,
    DoDisturbOff: 15,
    DoDisturbOn: 15,
    DoNotDisturb: 15,
    DoNotDisturbAlt: 2,
    DoNotDisturbOff: 2,
    DoNotDisturbOn: 2,
    DoNotStep: 15,
    DoNotTouch: 15,
    Dock: 15,
    DocumentScanner: 2,
    Domain: 15,
    DomainDisabled: 2,
    DomainVerification: 0,
    Done: 15,
    DoneAll: 15,
    DoneOutline: 15,
    DonutLarge: 15,
    DonutSmall: 15,
    DoorBack: 15,
    DoorFront: 15,
    DoorSliding: 15,
    Doorbell: 15,
    DoubleArrow: 15,
    DownhillSkiing: 2,
    Download: 15,
    DownloadDone: 15,
    DownloadForOffline: 0,
    Downloading: 15,
    Drafts: 15,
    DragHandle: 15,
    DragIndicator: 7,
    DriveEta: 15,
    DriveFileMove: 7,
    DriveFolderUpload: 0,
    Dry: 15,
    DryCleaning: 15,
    Duo: 15,
    Dvr: 15,
    DynamicFeed: 15,
    DynamicForm: 15,
    EMobiledata: 15,
    Earbuds: 15,
    EarbudsBattery: 2,
    East: 15,
    Eco: 15,
    EdgesensorHigh: 2,
    EdgesensorLow: 7,
    Edit: 15,
    EditAttributes: 2,
    EditLocation: 15,
    EditLocationAlt: 2,
    EditNotifications: 0,
    EditOff: 15,
    EditRoad: 15,
    EightK: 15,
    EightKPlus: 15,
    EightMp: 15,
    EightteenMp: 15,
    Eject: 15,
    Elderly: 15,
    ElectricBike: 15,
    ElectricCar: 15,
    ElectricMoped: 7,
    ElectricRickshaw: 0,
    ElectricScooter: 2,
    ElectricalServices: 0,
    Elevator: 15,
    ElevenMp: 15,
    Email: 15,
    EmojiEmotions: 7,
    EmojiEvents: 15,
    EmojiFlags: 15,
    EmojiFoodBeverage: 0,
    EmojiNature: 15,
    EmojiObjects: 15,
    EmojiPeople: 15,
    EmojiSymbols: 15,
    EmojiTransportation: 0,
    Engineering: 15,
    EnhancedEncryption: 0,
    Equalizer: 15,
    Error: 15,
    ErrorOutline: 15,
    Escalator: 15,
    EscalatorWarning: 0,
    Euro: 15,
    EuroSymbol: 15,
    EvStation: 15,
    Event: 15,
    EventAvailable: 2,
    EventBusy: 15,
    EventNote: 15,
    EventSeat: 15,
    ExitToApp: 15,
    Expand: 15,
    ExpandLess: 15,
    ExpandMore: 15,
    Explicit: 15,
    Explore: 15,
    ExploreOff: 15,
    Exposure: 15,
    Extension: 15,
    ExtensionOff: 15,
    Face: 15,
    FaceRetouchingOff: 0,
    Facebook: 15,
    FactCheck: 15,
    FamilyRestroom: 2,
    FastForward: 15,
    FastRewind: 15,
    Fastfood: 15,
    Favorite: 15,
    FavoriteBorder: 2,
    FeaturedPlayList: 0,
    FeaturedVideo: 7,
    Feed: 15,
    Feedback: 15,
    Female: 15,
    Fence: 15,
    Festival: 15,
    FiberDvr: 15,
    FiberManualRecord: 0,
    FiberNew: 15,
    FiberPin: 15,
    FiberSmartRecord: 0,
    FileCopy: 15,
    FileDownload: 15,
    FileDownloadDone: 0,
    FileDownloadOff: 2,
    FilePresent: 15,
    FileUpload: 15,
    Filter: 15,
    Filter1: 15,
    Filter2: 15,
    Filter3: 15,
    Filter4: 15,
    Filter5: 15,
    Filter6: 15,
    Filter7: 15,
    Filter8: 15,
    Filter9: 15,
    Filter9Plus: 15,
    FilterAlt: 15,
    FilterBAndW: 15,
    FilterCenterFocus: 0,
    FilterDrama: 15,
    FilterFrames: 15,
    FilterHdr: 15,
    FilterList: 15,
    FilterNone: 15,
    FilterTiltShift: 2,
    FilterVintage: 7,
    FindInPage: 15,
    FindReplace: 15,
    Fingerprint: 15,
    FireExtinguisher: 0,
    Fireplace: 15,
    FirstPage: 15,
    FitScreen: 15,
    FitnessCenter: 7,
    FiveG: 15,
    FiveK: 15,
    FiveKPlus: 15,
    FiveMp: 15,
    FivteenMp: 15,
    Flag: 15,
    Flaky: 15,
    Flare: 15,
    FlashAuto: 15,
    FlashOff: 15,
    FlashOn: 15,
    FlashlightOff: 7,
    FlashlightOn: 15,
    Flatware: 15,
    Flight: 15,
    FlightLand: 15,
    FlightTakeoff: 7,
    Flip: 15,
    FlipCameraAndroid: 0,
    FlipCameraIos: 7,
    FlipToBack: 15,
    FlipToFront: 15,
    Flourescent: 15,
    FlutterDash: 15,
    FmdBad: 15,
    FmdGood: 15,
    Folder: 15,
    FolderOpen: 15,
    FolderShared: 15,
    FolderSpecial: 7,
    FollowTheSigns: 2,
    FontDownload: 15,
    FontDownloadOff: 2,
    FoodBank: 15,
    FormatAlignCenter: 0,
    FormatAlignJustify: 0,
    FormatAlignLeft: 2,
    FormatAlignRight: 0,
    FormatBold: 15,
    FormatClear: 15,
    FormatColorFill: 2,
    FormatColorReset: 0,
    FormatColorText: 2,
    FormatIndentDecrease: 0,
    FormatIndentIncrease: 0,
    FormatItalic: 15,
    FormatLineSpacing: 0,
    FormatListBulleted: 0,
    FormatListNumbered: 0,
    FormatPaint: 15,
    FormatQuote: 15,
    FormatShapes: 15,
    FormatSize: 15,
    FormatStrikethrough: 0,
    FormatUnderlined: 0,
    Forum: 15,
    Forward: 15,
    Forward10: 15,
    Forward30: 15,
    Forward5: 15,
    ForwardToInbox: 2,
    Foundation: 15,
    FourGMobiledata: 2,
    FourGPlusMobiledata: 0,
    FourK: 15,
    FourKPlus: 15,
    FourMp: 15,
    FourteenMp: 15,
    FreeBreakfast: 7,
    Fullscreen: 15,
    FullscreenExit: 2,
    Functions: 15,
    GMobiledata: 15,
    GTranslate: 15,
    Gamepad: 15,
    Games: 15,
    Garage: 15,
    Gavel: 15,
    Gesture: 15,
    GetApp: 15,
    Gif: 15,
    GitHub: 0,
    Gite: 15,
    GolfCourse: 15,
    Google: 0,
    GppBad: 15,
    GppGood: 15,
    GppMaybe: 15,
    GpsFixed: 15,
    GpsNotFixed: 15,
    GpsOff: 15,
    Grade: 15,
    Gradient: 15,
    Grading: 15,
    Grain: 15,
    GraphicEq: 15,
    Grass: 15,
    Grid3x3: 15,
    Grid4x4: 15,
    GridGoldenratio: 2,
    GridOff: 15,
    GridOn: 15,
    GridView: 15,
    Group: 15,
    GroupAdd: 15,
    GroupWork: 15,
    Groups: 15,
    HMobiledata: 15,
    HPlusMobiledata: 2,
    Hail: 15,
    Handyman: 15,
    Hardware: 15,
    Hd: 15,
    HdrAuto: 15,
    HdrAutoSelect: 7,
    HdrEnhancedSelect: 0,
    HdrOff: 15,
    HdrOffSelect: 15,
    HdrOn: 15,
    HdrOnSelect: 15,
    HdrPlus: 15,
    HdrStrong: 15,
    HdrWeak: 15,
    Headphones: 15,
    HeadphonesBattery: 0,
    Headset: 15,
    HeadsetMic: 15,
    HeadsetOff: 15,
    Healing: 15,
    HealthAndSafety: 2,
    Hearing: 15,
    HearingDisabled: 2,
    Height: 15,
    Help: 15,
    HelpCenter: 15,
    HelpOutline: 15,
    Hevc: 15,
    HideImage: 15,
    HideSource: 15,
    HighQuality: 15,
    Highlight: 15,
    HighlightAlt: 15,
    HighlightOff: 15,
    Hiking: 15,
    History: 15,
    HistoryEdu: 15,
    HistoryToggleOff: 0,
    HolidayVillage: 2,
    Home: 15,
    HomeMax: 15,
    HomeMini: 15,
    HomeRepairService: 0,
    HomeWork: 15,
    HorizontalRule: 2,
    HorizontalSplit: 2,
    HotTub: 15,
    Hotel: 15,
    HourglassBottom: 2,
    HourglassDisabled: 0,
    HourglassEmpty: 2,
    HourglassFull: 7,
    HourglassTop: 15,
    House: 15,
    HouseSiding: 15,
    Houseboat: 15,
    HowToReg: 15,
    HowToVote: 15,
    Http: 15,
    Https: 15,
    Hvac: 15,
    IceSkating: 15,
    Icecream: 15,
    Image: 15,
    ImageAspectRatio: 0,
    ImageNotSupported: 0,
    ImageSearch: 15,
    ImagesearchRoller: 0,
    ImportContacts: 2,
    ImportExport: 15,
    ImportantDevices: 0,
    Inbox: 15,
    Info: 15,
    Input: 15,
    InsertChart: 15,
    InsertComment: 7,
    InsertDriveFile: 2,
    InsertEmoticon: 2,
    InsertInvitation: 0,
    InsertLink: 15,
    InsertPhoto: 15,
    Insights: 15,
    Instagram: 0,
    Inventory: 15,
    Inventory2: 15,
    InvertColors: 15,
    InvertColorsOff: 2,
    IosShare: 15,
    Iron: 15,
    Iso: 15,
    Kayaking: 15,
    Keyboard: 15,
    KeyboardAlt: 15,
    KeyboardArrowDown: 0,
    KeyboardArrowLeft: 0,
    KeyboardArrowRight: 0,
    KeyboardArrowUp: 2,
    KeyboardBackspace: 0,
    KeyboardCapslock: 0,
    KeyboardHide: 15,
    KeyboardReturn: 2,
    KeyboardTab: 15,
    KeyboardVoice: 7,
    KingBed: 15,
    Kitchen: 15,
    Kitesurfing: 15,
    Label: 15,
    LabelImportant: 2,
    LabelOff: 15,
    Landscape: 15,
    Language: 15,
    Laptop: 15,
    LaptopChromebook: 0,
    LaptopMac: 15,
    LaptopWindows: 7,
    LastPage: 15,
    Launch: 15,
    Layers: 15,
    LayersClear: 15,
    Leaderboard: 15,
    LeakAdd: 15,
    LeakRemove: 15,
    LegendToggle: 15,
    Lens: 15,
    LensBlur: 15,
    LibraryAdd: 15,
    LibraryAddCheck: 2,
    LibraryBooks: 15,
    LibraryMusic: 15,
    Light: 15,
    LightMode: 15,
    Lightbulb: 15,
    LineStyle: 15,
    LineWeight: 15,
    LinearScale: 15,
    Link: 15,
    LinkOff: 15,
    LinkedCamera: 15,
    LinkedIn: 0,
    Liquor: 15,
    List: 15,
    ListAlt: 15,
    LiveHelp: 15,
    LiveTv: 15,
    Living: 15,
    LocalActivity: 7,
    LocalAirport: 15,
    LocalAtm: 15,
    LocalBar: 15,
    LocalCafe: 15,
    LocalCarWash: 15,
    LocalDining: 15,
    LocalDrink: 15,
    LocalFireDepartment: 0,
    LocalFlorist: 15,
    LocalGasStation: 2,
    LocalGroceryStore: 0,
    LocalHospital: 7,
    LocalHotel: 15,
    LocalLaundryService: 0,
    LocalLibrary: 15,
    LocalMall: 15,
    LocalMovies: 15,
    LocalOffer: 15,
    LocalParking: 15,
    LocalPharmacy: 7,
    LocalPhone: 15,
    LocalPizza: 15,
    LocalPlay: 15,
    LocalPolice: 15,
    LocalPostOffice: 2,
    LocalPrintshop: 2,
    LocalSee: 15,
    LocalShipping: 7,
    LocalTaxi: 15,
    LocationCity: 15,
    LocationDisabled: 0,
    LocationOff: 15,
    LocationOn: 15,
    LocationSearching: 0,
    Lock: 15,
    LockClock: 15,
    LockOpen: 15,
    Login: 15,
    Logout: 15,
    Looks: 15,
    Looks3: 15,
    Looks4: 15,
    Looks5: 15,
    Looks6: 15,
    LooksOne: 15,
    LooksTwo: 15,
    Loop: 15,
    Loupe: 15,
    LowPriority: 15,
    Loyalty: 15,
    LteMobiledata: 7,
    LtePlusMobiledata: 0,
    Luggage: 15,
    LunchDining: 15,
    Mail: 15,
    MailOutline: 15,
    Male: 15,
    ManageAccounts: 2,
    ManageSearch: 15,
    Map: 15,
    MapsHomeWork: 15,
    MapsUgc: 15,
    Margin: 15,
    MarkAsUnread: 15,
    MarkChatRead: 15,
    MarkChatUnread: 2,
    MarkEmailRead: 7,
    MarkEmailUnread: 2,
    Markunread: 15,
    MarkunreadMailbox: 0,
    Masks: 15,
    Maximize: 15,
    MediaBluetoothOff: 0,
    MediaBluetoothOn: 0,
    Mediation: 15,
    MedicalServices: 2,
    Medication: 15,
    MeetingRoom: 15,
    Memory: 15,
    Menu: 15,
    MenuBook: 15,
    MenuOpen: 15,
    MergeType: 15,
    Message: 15,
    Mic: 15,
    MicExternalOff: 2,
    MicExternalOn: 7,
    MicNone: 15,
    MicOff: 15,
    Microwave: 15,
    MilitaryTech: 15,
    Minimize: 15,
    MissedVideoCall: 2,
    Mms: 15,
    MobileFriendly: 2,
    MobileOff: 15,
    MobileScreenShare: 0,
    MobiledataOff: 7,
    Mode: 15,
    ModeComment: 15,
    ModeEdit: 15,
    ModeEditOutline: 2,
    ModeNight: 15,
    ModeStandby: 15,
    ModelTraining: 7,
    MonetizationOn: 2,
    Money: 15,
    MoneyOff: 15,
    MoneyOffCsred: 7,
    Monitor: 15,
    MonitorWeight: 7,
    MonochromePhotos: 0,
    Mood: 15,
    MoodBad: 15,
    Moped: 15,
    More: 15,
    MoreHoriz: 15,
    MoreTime: 15,
    MoreVert: 15,
    MotionPhotosAuto: 0,
    MotionPhotosOff: 2,
    Mouse: 15,
    MoveToInbox: 15,
    Movie: 15,
    MovieCreation: 7,
    MovieFilter: 15,
    Moving: 15,
    Mp: 15,
    MultilineChart: 2,
    MultipleStop: 15,
    Museum: 15,
    MusicNote: 15,
    MusicOff: 15,
    MusicVideo: 15,
    MyLocation: 15,
    Nat: 15,
    Nature: 15,
    NaturePeople: 15,
    NavigateBefore: 2,
    NavigateNext: 15,
    Navigation: 15,
    NearMe: 15,
    NearMeDisabled: 2,
    NearbyError: 15,
    NearbyOff: 15,
    NetworkCell: 15,
    NetworkCheck: 15,
    NetworkLocked: 7,
    NetworkWifi: 15,
    NewReleases: 15,
    NextPlan: 15,
    NextWeek: 15,
    Nfc: 15,
    NightShelter: 15,
    Nightlife: 15,
    Nightlight: 15,
    NightlightRound: 2,
    NightsStay: 15,
    NineK: 15,
    NineKPlus: 15,
    NineMp: 15,
    NineteenMp: 15,
    NoAccounts: 15,
    NoBackpack: 15,
    NoCell: 15,
    NoDrinks: 15,
    NoEncryption: 15,
    NoFlash: 15,
    NoFood: 15,
    NoLuggage: 15,
    NoMeals: 15,
    NoMeetingRoom: 7,
    NoPhotography: 7,
    NoSim: 15,
    NoStroller: 15,
    NoTransfer: 15,
    NordicWalking: 7,
    North: 15,
    NorthEast: 15,
    NorthWest: 15,
    NotAccessible: 7,
    NotInterested: 7,
    NotListedLocation: 0,
    NotStarted: 15,
    Note: 15,
    NoteAdd: 15,
    NoteAlt: 15,
    Notes: 15,
    NotificationAdd: 2,
    Notifications: 7,
    NotificationsActive: 0,
    NotificationsNone: 0,
    NotificationsOff: 0,
    NotificationsPaused: 0,
    OfflineBolt: 15,
    OfflinePin: 15,
    OfflineShare: 15,
    OndemandVideo: 7,
    OneK: 15,
    OneKPlus: 15,
    OneKk: 15,
    OnlinePrediction: 0,
    Opacity: 15,
    OpenInBrowser: 7,
    OpenInFull: 15,
    OpenInNew: 15,
    OpenInNewOff: 15,
    OpenWith: 15,
    OtherHouses: 15,
    Outbound: 15,
    Outbox: 15,
    OutdoorGrill: 15,
    Outlet: 15,
    Padding: 15,
    Pages: 15,
    Pageview: 15,
    Paid: 15,
    Palette: 15,
    PanTool: 15,
    Panorama: 15,
    PanoramaFishEye: 2,
    PanoramaHorizontal: 0,
    PanoramaPhotosphere: 0,
    PanoramaVertical: 0,
    PanoramaWideAngle: 0,
    Paragliding: 15,
    Park: 15,
    PartyMode: 15,
    Password: 15,
    Pattern: 15,
    Pause: 15,
    PauseCircle: 15,
    PauseCircleFilled: 0,
    PauseCircleOutline: 0,
    PausePresentation: 0,
    Payment: 15,
    Payments: 15,
    PedalBike: 15,
    Pending: 15,
    PendingActions: 2,
    People: 15,
    PeopleAlt: 15,
    PeopleOutline: 7,
    PermCameraMic: 7,
    PermContactCalendar: 0,
    PermDataSetting: 2,
    PermIdentity: 15,
    PermMedia: 15,
    PermPhoneMsg: 15,
    PermScanWifi: 15,
    Person: 15,
    PersonAdd: 15,
    PersonAddAlt: 15,
    PersonAddAlt1: 7,
    PersonAddDisabled: 0,
    PersonOff: 15,
    PersonOutline: 7,
    PersonPin: 15,
    PersonPinCircle: 2,
    PersonRemove: 15,
    PersonRemoveAlt1: 0,
    PersonSearch: 15,
    PersonalVideo: 7,
    PestControl: 15,
    PestControlRodent: 0,
    Pets: 15,
    Phone: 15,
    PhoneAndroid: 15,
    PhoneCallback: 7,
    PhoneDisabled: 7,
    PhoneEnabled: 15,
    PhoneForwarded: 2,
    PhoneInTalk: 15,
    PhoneIphone: 15,
    PhoneLocked: 15,
    PhoneMissed: 15,
    PhonePaused: 15,
    Phonelink: 15,
    PhonelinkErase: 2,
    PhonelinkLock: 7,
    PhonelinkOff: 15,
    PhonelinkRing: 7,
    PhonelinkSetup: 2,
    Photo: 15,
    PhotoAlbum: 15,
    PhotoCamera: 15,
    PhotoCameraBack: 2,
    PhotoCameraFront: 0,
    PhotoFilter: 15,
    PhotoLibrary: 15,
    PhotoSizeSelectLarge: 0,
    PhotoSizeSelectSmall: 0,
    Piano: 15,
    PianoOff: 15,
    PictureAsPdf: 15,
    PictureInPicture: 0,
    PictureInPictureAlt: 0,
    PieChart: 15,
    PieChartOutline: 2,
    Pin: 15,
    PinDrop: 15,
    Pinterest: 0,
    PivotTableChart: 2,
    Place: 15,
    Plagiarism: 15,
    PlayArrow: 15,
    PlayCircle: 15,
    PlayCircleFilled: 0,
    PlayCircleOutline: 0,
    PlayDisabled: 15,
    PlayForWork: 15,
    PlayLesson: 15,
    PlaylistAdd: 15,
    PlaylistAddCheck: 0,
    PlaylistPlay: 15,
    Plumbing: 15,
    PlusOne: 15,
    Podcasts: 15,
    PointOfSale: 15,
    Policy: 15,
    Poll: 15,
    Pool: 15,
    PortableWifiOff: 2,
    Portrait: 15,
    PostAdd: 15,
    Power: 15,
    PowerInput: 15,
    PowerOff: 15,
    PowerSettingsNew: 0,
    PregnantWoman: 7,
    PresentToAll: 15,
    Preview: 15,
    PriceChange: 15,
    PriceCheck: 15,
    Print: 15,
    PrintDisabled: 7,
    PriorityHigh: 15,
    PrivacyTip: 15,
    Psychology: 15,
    Public: 15,
    PublicOff: 15,
    Publish: 15,
    PublishedWithChanges: 0,
    PushPin: 15,
    QrCode: 15,
    QrCode2: 15,
    QrCodeScanner: 7,
    QueryBuilder: 15,
    QueryStats: 15,
    QuestionAnswer: 2,
    Queue: 15,
    QueueMusic: 15,
    QueuePlayNext: 7,
    Quickreply: 15,
    Quiz: 15,
    RMobiledata: 15,
    Radar: 15,
    Radio: 15,
    RadioButtonChecked: 0,
    RadioButtonUnchecked: 0,
    RailwayAlert: 15,
    RamenDining: 15,
    RateReview: 15,
    RawOff: 15,
    RawOn: 15,
    ReadMore: 15,
    Receipt: 15,
    ReceiptLong: 15,
    RecentActors: 15,
    Recommend: 15,
    RecordVoiceOver: 2,
    Reddit: 0,
    Redeem: 15,
    Redo: 15,
    ReduceCapacity: 2,
    Refresh: 15,
    RememberMe: 15,
    Remove: 15,
    RemoveCircle: 15,
    RemoveCircleOutline: 0,
    RemoveDone: 15,
    RemoveFromQueue: 2,
    RemoveModerator: 2,
    RemoveRedEye: 15,
    RemoveShoppingCart: 0,
    Reorder: 15,
    Repeat: 15,
    RepeatOn: 15,
    RepeatOne: 15,
    RepeatOneOn: 15,
    Replay: 15,
    Replay10: 15,
    Replay30: 15,
    Replay5: 15,
    ReplayCircleFilled: 0,
    Reply: 15,
    ReplyAll: 15,
    Report: 15,
    ReportGmailerrorred: 0,
    ReportOff: 15,
    ReportProblem: 7,
    RequestPage: 15,
    RequestQuote: 15,
    ResetTv: 15,
    RestartAlt: 15,
    Restaurant: 15,
    RestaurantMenu: 2,
    Restore: 15,
    RestoreFromTrash: 0,
    RestorePage: 15,
    Reviews: 15,
    RiceBowl: 15,
    RingVolume: 15,
    Roofing: 15,
    Room: 15,
    RoomPreferences: 2,
    RoomService: 15,
    Rotate90DegreesCcw: 0,
    RotateLeft: 15,
    RotateRight: 15,
    Router: 15,
    Rowing: 15,
    RssFeed: 15,
    Rsvp: 15,
    Rtt: 15,
    Rule: 15,
    RuleFolder: 15,
    RunCircle: 15,
    RunningWithErrors: 0,
    RvHookup: 15,
    SafetyDivider: 7,
    Sailing: 15,
    Sanitizer: 15,
    Satellite: 15,
    Save: 15,
    SaveAlt: 15,
    SavedSearch: 15,
    Savings: 15,
    Scanner: 15,
    ScatterPlot: 15,
    Schedule: 15,
    ScheduleSend: 15,
    Schema: 15,
    School: 15,
    Science: 15,
    Score: 15,
    ScreenLockLandscape: 0,
    ScreenLockPortrait: 0,
    ScreenLockRotation: 0,
    ScreenRotation: 2,
    ScreenSearchDesktop: 0,
    ScreenShare: 15,
    Screenshot: 15,
    Sd: 15,
    SdCard: 15,
    SdCardAlert: 15,
    SdStorage: 15,
    Search: 15,
    SearchOff: 15,
    Security: 15,
    SecurityUpdate: 2,
    SecurityUpdateGood: 0,
    Segment: 15,
    SelectAll: 15,
    SelfImprovement: 2,
    Sell: 15,
    Send: 15,
    SendAndArchive: 2,
    SendToMobile: 15,
    SensorDoor: 15,
    SensorWindow: 15,
    Sensors: 15,
    SensorsOff: 15,
    SentimentNeutral: 0,
    SentimentSatisfied: 0,
    SetMeal: 15,
    Settings: 15,
    SettingsApplications: 0,
    SettingsBluetooth: 0,
    SettingsBrightness: 0,
    SettingsCell: 15,
    SettingsEthernet: 0,
    SettingsInputAntenna: 0,
    SettingsInputHdmi: 0,
    SettingsInputSvideo: 0,
    SettingsOverscan: 0,
    SettingsPhone: 7,
    SettingsPower: 7,
    SettingsRemote: 2,
    SettingsSuggest: 2,
    SettingsVoice: 7,
    SevenK: 15,
    SevenKPlus: 15,
    SevenMp: 15,
    SeventeenMp: 15,
    Share: 15,
    ShareLocation: 7,
    Shield: 15,
    Shop: 15,
    Shop2: 15,
    ShopTwo: 15,
    ShoppingBag: 15,
    ShoppingBasket: 2,
    ShoppingCart: 15,
    ShortText: 15,
    Shortcut: 15,
    ShowChart: 15,
    Shower: 15,
    Shuffle: 15,
    ShuffleOn: 15,
    ShutterSpeed: 15,
    Sick: 15,
    SignalCellular0Bar: 0,
    SignalCellular1Bar: 0,
    SignalCellular2Bar: 0,
    SignalCellular3Bar: 0,
    SignalCellular4Bar: 0,
    SignalCellularAlt: 0,
    SignalCellularNoSim: 0,
    SignalCellularNodata: 0,
    SignalCellularNull: 0,
    SignalCellularOff: 0,
    SignalWifi0Bar: 2,
    SignalWifi1Bar: 2,
    SignalWifi1BarLock: 0,
    SignalWifi2Bar: 2,
    SignalWifi2BarLock: 0,
    SignalWifi3Bar: 2,
    SignalWifi3BarLock: 0,
    SignalWifi4Bar: 2,
    SignalWifi4BarLock: 0,
    SignalWifiBad: 7,
    SignalWifiOff: 7,
    SimCard: 15,
    SimCardAlert: 15,
    SimCardDownload: 2,
    SingleBed: 15,
    Sip: 15,
    SixK: 15,
    SixKPlus: 15,
    SixMp: 15,
    SixteenMp: 15,
    SixtyFps: 15,
    SixtyFpsSelect: 2,
    Skateboarding: 7,
    SkipNext: 15,
    SkipPrevious: 15,
    Sledding: 15,
    Slideshow: 15,
    SlowMotionVideo: 2,
    SmartButton: 15,
    SmartDisplay: 15,
    SmartScreen: 15,
    SmartToy: 15,
    Smartphone: 15,
    SmokeFree: 15,
    SmokingRooms: 15,
    Sms: 15,
    SmsFailed: 15,
    SnippetFolder: 7,
    Snooze: 15,
    Snowboarding: 15,
    Snowmobile: 15,
    Snowshoeing: 15,
    Soap: 15,
    SocialDistance: 2,
    Sort: 15,
    SortByAlpha: 15,
    Source: 15,
    South: 15,
    SouthEast: 15,
    SouthWest: 15,
    Spa: 15,
    SpaceBar: 15,
    Speaker: 15,
    SpeakerGroup: 15,
    SpeakerNotes: 15,
    SpeakerNotesOff: 2,
    SpeakerPhone: 15,
    Speed: 15,
    Spellcheck: 15,
    Splitscreen: 15,
    Sports: 15,
    SportsBar: 15,
    SportsBaseball: 2,
    SportsBasketball: 0,
    SportsCricket: 7,
    SportsEsports: 7,
    SportsFootball: 2,
    SportsGolf: 15,
    SportsHandball: 2,
    SportsHockey: 15,
    SportsKabaddi: 7,
    SportsMma: 15,
    SportsMotorsports: 0,
    SportsRugby: 15,
    SportsScore: 15,
    SportsSoccer: 15,
    SportsTennis: 15,
    SportsVolleyball: 0,
    SquareFoot: 15,
    StackedBarChart: 2,
    StackedLineChart: 0,
    Stairs: 15,
    Star: 15,
    StarBorder: 15,
    StarBorderPurple500: 0,
    StarHalf: 15,
    StarOutline: 15,
    StarPurple500: 7,
    StarRate: 15,
    Stars: 15,
    StayCurrentLandscape: 0,
    StayCurrentPortrait: 0,
    StayPrimaryLandscape: 0,
    StayPrimaryPortrait: 0,
    StickyNote2: 15,
    Stop: 15,
    StopCircle: 15,
    StopScreenShare: 2,
    Storage: 15,
    Store: 15,
    StoreMallDirectory: 0,
    Storefront: 15,
    Storm: 15,
    Straighten: 15,
    Stream: 15,
    Streetview: 15,
    StrikethroughS: 2,
    Stroller: 15,
    Style: 15,
    Subject: 15,
    Subscript: 15,
    Subscriptions: 7,
    Subtitles: 15,
    SubtitlesOff: 15,
    Subway: 15,
    Summarize: 15,
    Superscript: 15,
    SupervisedUserCircle: 0,
    SupervisorAccount: 0,
    Support: 15,
    SupportAgent: 15,
    Surfing: 15,
    SurroundSound: 7,
    SwapCalls: 15,
    SwapHoriz: 15,
    SwapHorizontalCircle: 0,
    SwapVert: 15,
    SwapVerticalCircle: 0,
    Swipe: 15,
    SwitchAccount: 7,
    SwitchCamera: 15,
    SwitchLeft: 15,
    SwitchRight: 15,
    SwitchVideo: 15,
    Sync: 15,
    SyncAlt: 15,
    SyncDisabled: 15,
    SyncProblem: 15,
    SystemSecurityUpdate: 0,
    SystemUpdate: 15,
    SystemUpdateAlt: 2,
    Tab: 15,
    TabUnselected: 7,
    TableChart: 15,
    TableRows: 15,
    TableView: 15,
    Tablet: 15,
    TabletAndroid: 7,
    TabletMac: 15,
    Tag: 15,
    TagFaces: 15,
    TakeoutDining: 7,
    TapAndPlay: 15,
    Tapas: 15,
    Task: 15,
    TaskAlt: 15,
    TaxiAlert: 15,
    Telegram: 0,
    TenMp: 15,
    Terrain: 15,
    TextFields: 15,
    TextFormat: 15,
    TextRotateUp: 15,
    TextRotateVertical: 0,
    TextRotationAngleup: 0,
    TextRotationDown: 0,
    TextRotationNone: 0,
    TextSnippet: 15,
    Textsms: 15,
    Texture: 15,
    TheaterComedy: 7,
    Theaters: 15,
    Thermostat: 15,
    ThermostatAuto: 2,
    ThirteenMp: 15,
    ThirtyFps: 15,
    ThirtyFpsSelect: 2,
    ThreeDRotation: 2,
    ThreeGMobiledata: 0,
    ThreeK: 15,
    ThreeKPlus: 15,
    ThreeMp: 15,
    ThreeP: 15,
    ThreeSixty: 15,
    ThumbDown: 15,
    ThumbDownAlt: 15,
    ThumbDownOffAlt: 2,
    ThumbUp: 15,
    ThumbUpAlt: 15,
    ThumbUpOffAlt: 7,
    ThumbsUpDown: 15,
    TimeToLeave: 15,
    Timelapse: 15,
    Timeline: 15,
    Timer: 15,
    Timer10: 15,
    Timer10Select: 7,
    Timer3: 15,
    Timer3Select: 15,
    TimerOff: 15,
    TimesOneMobiledata: 0,
    Title: 15,
    Toc: 15,
    Today: 15,
    ToggleOff: 15,
    ToggleOn: 15,
    Toll: 15,
    Tonality: 15,
    Topic: 15,
    TouchApp: 15,
    Tour: 15,
    Toys: 15,
    TrackChanges: 15,
    Traffic: 15,
    Train: 15,
    Tram: 15,
    Transform: 15,
    Transgender: 15,
    TransitEnterexit: 0,
    Translate: 15,
    TravelExplore: 7,
    TrendingDown: 15,
    TrendingFlat: 15,
    TrendingUp: 15,
    TripOrigin: 15,
    Try: 15,
    Tty: 15,
    Tune: 15,
    Tungsten: 15,
    TurnedIn: 15,
    TurnedInNot: 15,
    Tv: 15,
    TvOff: 15,
    TwelveMp: 15,
    TwentyFourMp: 15,
    TwentyOneMp: 15,
    TwentyThreeMp: 7,
    TwentyTwoMp: 15,
    TwentyZeroMp: 15,
    Twitter: 0,
    TwoK: 15,
    TwoKPlus: 15,
    TwoMp: 15,
    TwoWheeler: 15,
    Umbrella: 15,
    Unarchive: 15,
    Undo: 15,
    UnfoldLess: 15,
    UnfoldMore: 15,
    Unpublished: 15,
    Unsubscribe: 15,
    Upcoming: 15,
    Update: 15,
    UpdateDisabled: 2,
    Upgrade: 15,
    Upload: 15,
    UploadFile: 15,
    Usb: 15,
    UsbOff: 15,
    Verified: 15,
    VerifiedUser: 15,
    VerticalAlignBottom: 0,
    VerticalAlignCenter: 0,
    VerticalAlignTop: 0,
    VerticalSplit: 7,
    Vibration: 15,
    VideoCall: 15,
    VideoCameraBack: 2,
    VideoCameraFront: 0,
    VideoLabel: 15,
    VideoLibrary: 15,
    VideoSettings: 7,
    VideoStable: 15,
    Videocam: 15,
    VideocamOff: 15,
    VideogameAsset: 2,
    VideogameAssetOff: 0,
    ViewAgenda: 15,
    ViewArray: 15,
    ViewCarousel: 15,
    ViewColumn: 15,
    ViewComfy: 15,
    ViewCompact: 15,
    ViewDay: 15,
    ViewHeadline: 15,
    ViewInAr: 15,
    ViewList: 15,
    ViewModule: 15,
    ViewQuilt: 15,
    ViewSidebar: 15,
    ViewStream: 15,
    ViewWeek: 15,
    Vignette: 15,
    Villa: 15,
    Visibility: 15,
    VisibilityOff: 7,
    VoiceChat: 15,
    VoiceOverOff: 15,
    Voicemail: 15,
    VolumeDown: 15,
    VolumeMute: 15,
    VolumeOff: 15,
    VolumeUp: 15,
    VolunteerActivism: 0,
    VpnKey: 15,
    VpnLock: 15,
    Vrpano: 15,
    Wallpaper: 15,
    Warning: 15,
    WarningAmber: 15,
    Wash: 15,
    Watch: 15,
    WatchLater: 15,
    Water: 15,
    WaterDamage: 15,
    WaterfallChart: 2,
    Waves: 15,
    WbAuto: 15,
    WbCloudy: 15,
    WbIncandescent: 2,
    WbIridescent: 15,
    WbShade: 15,
    WbSunny: 15,
    WbTwilight: 15,
    Wc: 15,
    Web: 15,
    WebAsset: 15,
    WebAssetOff: 15,
    Weekend: 15,
    West: 15,
    WhatsApp: 0,
    Whatshot: 15,
    WheelchairPickup: 0,
    WhereToVote: 15,
    Widgets: 15,
    Wifi: 15,
    WifiCalling: 15,
    WifiCalling3: 15,
    WifiLock: 15,
    WifiOff: 15,
    WifiProtectedSetup: 0,
    WifiTethering: 7,
    WifiTetheringOff: 0,
    Window: 15,
    WineBar: 15,
    Work: 15,
    WorkOff: 15,
    WorkOutline: 15,
    Workspaces: 15,
    WrapText: 15,
    WrongLocation: 7,
    Wysiwyg: 15,
    Yard: 15,
    YouTube: 0,
    YoutubeSearchedFor: 0,
    ZoomIn: 15,
    ZoomOut: 15,
    ZoomOutMap: 15,
  },
  Pe = Object.keys(Ee),
  Ma = ["Filled", "TwoTone", "Sharp", "Rounded", "Outlined"],
  qe = {
    15: [...Ma],
    7: ["Filled", "TwoTone", "Sharp", "Rounded"],
    2: ["Filled", "Sharp"],
  },
  Ia = Object.keys(qe).map((r) => `iconStyle${r}`),
  Sr = Pe.reduce((r, a) => ((r[a.toLowerCase()] = a), r), {});
function me(r) {
  let {
      color: a,
      selectByList: l,
      iconSearch: m,
      iconSelection: c,
      onClick: d,
      onMouseDown: h,
      onMouseUp: x,
      onMouseEnter: y,
      onMouseLeave: o,
      mirrored: L,
      style: u,
    } = r,
    g = O(!1),
    b = Rr(Pe, l, m, c, Sr),
    v = Ia.map((T) => r[T]),
    s = I(() => {
      let T = Ee[b];
      if (!T) return;
      let M = r[`iconStyle${T}`];
      if (M !== "Filled") return M;
    }, [...v]),
    [Y, k] = Fe(b === "Home" ? Fr(te) : null);
  async function z() {
    if (typeof Ee[b] != "number") {
      k(null);
      return;
    }
    try {
      let G = await import(`${La}${b}${s || ""}.js@0.0.32`);
      g.current && k(G.default(te));
    } catch {
      g.current && k(null);
    }
  }
  pe(
    () => (
      (g.current = !0),
      z(),
      () => {
        g.current = !1;
      }
    ),
    [b, ...v]
  );
  let V = Ue.current() === Ue.canvas ? e(vr, {}) : null;
  return e(i.div, {
    style: { display: "contents" },
    onClick: d,
    onMouseEnter: y,
    onMouseLeave: o,
    onMouseDown: h,
    onMouseUp: x,
    children: Y
      ? e("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          style: {
            userSelect: "none",
            width: "100%",
            height: "100%",
            display: "inline-block",
            fill: a,
            flexShrink: 0,
            transform: L ? "scale(-1, 1)" : void 0,
            ...u,
          },
          focusable: "false",
          viewBox: "0 0 24 24",
          color: a,
          children: Y,
        })
      : V,
  });
}
me.displayName = "Material";
me.defaultProps = {
  width: 24,
  height: 24,
  iconSelection: "Home",
  iconSearch: "Home",
  color: "#66F",
  selectByList: !0,
  weight: "Filled",
  mirrored: !1,
};
function Aa(r, a) {
  let { selectByList: l, iconSearch: m, iconSelection: c } = r,
    d = parseInt(a),
    h = kr(Pe, l, m, c, Sr),
    x = Ee[h];
  return !x || d === 0 ? !0 : x !== d;
}
E(me, {
  selectByList: {
    type: p.Boolean,
    title: "Select",
    enabledTitle: "List",
    disabledTitle: "Search",
    defaultValue: me.defaultProps.selectByList,
  },
  iconSelection: {
    type: p.Enum,
    options: Pe,
    defaultValue: me.defaultProps.iconSelection,
    title: "Name",
    hidden: ({ selectByList: r }) => !r,
    description:
      "Find every icon name on the [Material site](https://fonts.google.com/icons)",
  },
  iconSearch: {
    type: p.String,
    title: "Name",
    placeholder: "Menu, Wifi, Box\u2026",
    hidden: ({ selectByList: r }) => r,
  },
  mirrored: {
    type: p.Boolean,
    enabledTitle: "Yes",
    disabledTitle: "No",
    defaultValue: me.defaultProps.mirrored,
  },
  color: { type: p.Color, title: "Color", defaultValue: me.defaultProps.color },
  ...Object.keys(qe).reduce(
    (r, a) => (
      (r[`iconStyle${a}`] = {
        type: p.Enum,
        title: "Style",
        defaultValue: "Filled",
        options: qe[a],
        hidden: (l) => Aa(l, a),
      }),
      r
    ),
    {}
  ),
  ...Or,
});
mr.loadFonts([]);
var zr = [{ explicitInter: !0, fonts: [] }],
  Cr = [
    ".framer-7VeUU .framer-styles-preset-b5z3kx:not(.rich-text-wrapper), .framer-7VeUU .framer-styles-preset-b5z3kx.rich-text-wrapper a { --framer-link-current-text-color: #111111; --framer-link-current-text-decoration: underline; --framer-link-hover-text-color: #ffffff; --framer-link-hover-text-decoration: none; --framer-link-text-color: rgba(255, 255, 255, 0.7); --framer-link-text-decoration: none; }",
  ],
  Tr = "framer-7VeUU";
var Pa = U(me),
  Va = ["JHL7wiVhj", "E_Oku47lh", "s3mX7LzQV", "o9vEUxmEQ", "AXEg_uJdb"],
  Na = "framer-VOQ3i",
  ja = {
    AXEg_uJdb: "framer-v-108wwn3",
    E_Oku47lh: "framer-v-1aw6xjb",
    JHL7wiVhj: "framer-v-cjtuux",
    o9vEUxmEQ: "framer-v-5ql4oj",
    s3mX7LzQV: "framer-v-cper99",
  };
function ge(r, ...a) {
  let l = {};
  return a?.forEach((m) => m && Object.assign(l, r[m])), l;
}
var Ga = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: "spring" },
  Da = (r, a) => `perspective(1200px) ${a}`,
  Wa = ({ value: r, children: a }) => {
    let l = ee(A),
      m = r ?? l.transition,
      c = I(() => ({ ...l, transition: m }), [JSON.stringify(m)]);
    return e(A.Provider, { value: c, children: a });
  },
  Ua = i(t),
  Ka = {
    "Variant 1": "JHL7wiVhj",
    "Variant 2": "E_Oku47lh",
    "Variant 3": "s3mX7LzQV",
    "Variant 4": "o9vEUxmEQ",
    "Variant 5": "AXEg_uJdb",
  },
  Ba = ({ height: r, id: a, width: l, ...m }) => {
    var c, d;
    return {
      ...m,
      variant:
        (d = (c = Ka[m.variant]) !== null && c !== void 0 ? c : m.variant) !==
          null && d !== void 0
          ? d
          : "JHL7wiVhj",
    };
  },
  Qa = (r, a) => a.join("-") + r.layoutDependency,
  Za = j(function (r, a) {
    let { activeLocale: l, setLocale: m } = q(),
      { style: c, className: d, layoutId: h, variant: x, ...y } = Ba(r),
      {
        baseVariant: o,
        classNames: L,
        gestureVariant: u,
        setGestureState: g,
        setVariant: b,
        variants: v,
      } = ae({
        cycleOrder: Va,
        defaultVariant: "JHL7wiVhj",
        variant: x,
        variantClassNames: ja,
      }),
      s = Qa(r, v),
      { activeVariantCallback: Y, delay: k } = oe(o),
      z = Y(async (...we) => {
        await k(() => b("s3mX7LzQV"), 1e3);
      }),
      S = Y(async (...we) => {
        b("o9vEUxmEQ");
      }),
      V = Y(async (...we) => {
        b("s3mX7LzQV");
      });
    Le(o, { AXEg_uJdb: z });
    let T = O(null),
      M = () => !!["s3mX7LzQV", "o9vEUxmEQ", "AXEg_uJdb"].includes(o),
      G = () => !["s3mX7LzQV", "o9vEUxmEQ", "AXEg_uJdb"].includes(o),
      K = Q(),
      B = [Tr],
      P = re();
    return e(Z, {
      id: h ?? K,
      children: e(Ua, {
        animate: v,
        initial: !1,
        children: e(Wa, {
          value: Ga,
          children: n(i.div, {
            ...y,
            className: W(Na, ...B, "framer-cjtuux", d, L),
            "data-framer-name": "Variant 1",
            layoutDependency: s,
            layoutId: "JHL7wiVhj",
            onHoverEnd: () => g({ isHovered: !1 }),
            onHoverStart: () => g({ isHovered: !0 }),
            onTap: () => g({ isPressed: !1 }),
            onTapCancel: () => g({ isPressed: !1 }),
            onTapStart: () => g({ isPressed: !0 }),
            ref: a ?? T,
            style: { backgroundColor: "rgba(0, 0, 0, 0)", ...c },
            variants: { o9vEUxmEQ: { backgroundColor: "rgba(0, 0, 0, 0.7)" } },
            ...ge(
              {
                AXEg_uJdb: {
                  "data-framer-name": "Variant 5",
                  "data-highlight": !0,
                },
                E_Oku47lh: { "data-framer-name": "Variant 2" },
                o9vEUxmEQ: { "data-framer-name": "Variant 4" },
                s3mX7LzQV: { "data-framer-name": "Variant 3" },
              },
              o,
              u
            ),
            children: [
              M() &&
                n(i.div, {
                  className: "framer-7c2f2b",
                  layoutDependency: s,
                  layoutId: "D8tvpt4W6",
                  style: {
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    borderBottomLeftRadius: 25,
                    borderBottomRightRadius: 25,
                    borderTopLeftRadius: 25,
                    borderTopRightRadius: 25,
                  },
                  children: [
                    e(f, {
                      __fromCanvasComponent: !0,
                      children: e(t, {
                        children: e(i.p, {
                          style: {
                            "--font-selector": "R0Y7UG9wcGlucy0zMDA=",
                            "--framer-font-family":
                              '"Poppins", "Poppins Placeholder", sans-serif',
                            "--framer-font-size": "13px",
                            "--framer-font-weight": "300",
                            "--framer-text-color":
                              "var(--extracted-r6o4lv, rgba(255, 255, 255, 0.8))",
                          },
                          children: e(R, {
                            href: {
                              hash: ":Rx7accoiM",
                              webPageId: "g3nUh9yVa",
                            },
                            openInNewTab: !1,
                            smoothScroll: !0,
                            children: e(i.a, {
                              className: "framer-styles-preset-b5z3kx",
                              "data-styles-preset": "dgLTe5kFR",
                              children: "Features",
                            }),
                          }),
                        }),
                      }),
                      className: "framer-1vccdid",
                      fonts: ["GF;Poppins-300"],
                      layoutDependency: s,
                      layoutId: "XYs6LuMFb",
                      style: {
                        "--extracted-r6o4lv": "rgba(255, 255, 255, 0.8)",
                        textShadow: "0px 1px 2px rgba(0,0,0,0.25)",
                      },
                      verticalAlignment: "top",
                      withExternalLayout: !0,
                    }),
                    e(i.div, {
                      className: "framer-1bggf1u",
                      layoutDependency: s,
                      layoutId: "MRg7xIIbU",
                      style: {
                        background:
                          "linear-gradient(270deg, rgba(255, 255, 255, 0) 0%, rgba(217, 217, 217, 1) 49.549549549549546%, rgba(255, 255, 255, 0) 100%)",
                      },
                    }),
                    e(f, {
                      __fromCanvasComponent: !0,
                      children: e(t, {
                        children: e(i.p, {
                          style: {
                            "--font-selector": "R0Y7UG9wcGlucy0zMDA=",
                            "--framer-font-family":
                              '"Poppins", "Poppins Placeholder", sans-serif',
                            "--framer-font-size": "13px",
                            "--framer-font-weight": "300",
                            "--framer-text-color":
                              "var(--extracted-r6o4lv, rgba(255, 255, 255, 0.8))",
                          },
                          children: e(R, {
                            href: {
                              hash: ":SRK5yIuMB",
                              webPageId: "g3nUh9yVa",
                            },
                            openInNewTab: !1,
                            smoothScroll: !0,
                            children: e(i.a, {
                              className: "framer-styles-preset-b5z3kx",
                              "data-styles-preset": "dgLTe5kFR",
                              children: "Nexus Gateway",
                            }),
                          }),
                        }),
                      }),
                      className: "framer-lpfosl",
                      fonts: ["GF;Poppins-300"],
                      layoutDependency: s,
                      layoutId: "LAx6Hj3Gk",
                      style: {
                        "--extracted-r6o4lv": "rgba(255, 255, 255, 0.8)",
                        textShadow: "0px 1px 2px rgba(0,0,0,0.25)",
                      },
                      verticalAlignment: "top",
                      withExternalLayout: !0,
                    }),
                    e(i.div, {
                      className: "framer-b6djlz",
                      layoutDependency: s,
                      layoutId: "v9CcNKKpg",
                      style: {
                        background:
                          "linear-gradient(270deg, rgba(255, 255, 255, 0) 0%, rgba(217, 217, 217, 1) 49.549549549549546%, rgba(255, 255, 255, 0) 100%)",
                      },
                    }),
                    e(f, {
                      __fromCanvasComponent: !0,
                      children: e(t, {
                        children: e(i.p, {
                          style: {
                            "--font-selector": "R0Y7UG9wcGlucy0zMDA=",
                            "--framer-font-family":
                              '"Poppins", "Poppins Placeholder", sans-serif',
                            "--framer-font-size": "13px",
                            "--framer-font-weight": "300",
                            "--framer-text-color":
                              "var(--extracted-r6o4lv, rgba(255, 255, 255, 0.8))",
                          },
                          children: e(R, {
                            href: {
                              hash: ":H66sEVzEz",
                              webPageId: "g3nUh9yVa",
                            },
                            openInNewTab: !1,
                            smoothScroll: !0,
                            children: e(i.a, {
                              className: "framer-styles-preset-b5z3kx",
                              "data-styles-preset": "dgLTe5kFR",
                              children: "Cloud Suite",
                            }),
                          }),
                        }),
                      }),
                      className: "framer-1sdujgj",
                      fonts: ["GF;Poppins-300"],
                      layoutDependency: s,
                      layoutId: "KjOel1eno",
                      style: {
                        "--extracted-r6o4lv": "rgba(255, 255, 255, 0.8)",
                        textShadow: "0px 1px 2px rgba(0,0,0,0.25)",
                      },
                      verticalAlignment: "top",
                      withExternalLayout: !0,
                      ...ge(
                        {
                          o9vEUxmEQ: {
                            children: e(t, {
                              children: e(i.p, {
                                style: {
                                  "--font-selector": "R0Y7UG9wcGlucy0zMDA=",
                                  "--framer-font-family":
                                    '"Poppins", "Poppins Placeholder", sans-serif',
                                  "--framer-font-size": "13px",
                                  "--framer-font-weight": "300",
                                  "--framer-text-color":
                                    "var(--extracted-r6o4lv, rgba(255, 255, 255, 0.8))",
                                },
                                children: e(R, {
                                  href: {
                                    hash: ":NWAyV0MdW",
                                    webPageId: "g3nUh9yVa",
                                  },
                                  openInNewTab: !1,
                                  smoothScroll: !0,
                                  children: e(i.a, {
                                    className: "framer-styles-preset-b5z3kx",
                                    "data-styles-preset": "dgLTe5kFR",
                                    children: "Cloud Suite",
                                  }),
                                }),
                              }),
                            }),
                          },
                        },
                        o,
                        u
                      ),
                    }),
                    e(i.div, {
                      className: "framer-nq3806",
                      layoutDependency: s,
                      layoutId: "lfEzImlbQ",
                      style: {
                        background:
                          "linear-gradient(270deg, rgba(255, 255, 255, 0) 0%, rgba(217, 217, 217, 1) 49.549549549549546%, rgba(255, 255, 255, 0) 100%)",
                      },
                    }),
                    e(f, {
                      __fromCanvasComponent: !0,
                      children: e(t, {
                        children: e(i.p, {
                          style: {
                            "--font-selector": "R0Y7UG9wcGlucy0zMDA=",
                            "--framer-font-family":
                              '"Poppins", "Poppins Placeholder", sans-serif',
                            "--framer-font-size": "13px",
                            "--framer-font-weight": "300",
                            "--framer-text-color":
                              "var(--extracted-r6o4lv, rgba(255, 255, 255, 0.8))",
                          },
                          children: e(R, {
                            href: {
                              hash: ":mo5fzag6J",
                              webPageId: "g3nUh9yVa",
                            },
                            openInNewTab: !1,
                            smoothScroll: !1,
                            children: e(i.a, {
                              className: "framer-styles-preset-b5z3kx",
                              "data-styles-preset": "dgLTe5kFR",
                              children: "Tokenomics",
                            }),
                          }),
                        }),
                      }),
                      className: "framer-1961x58",
                      fonts: ["GF;Poppins-300"],
                      layoutDependency: s,
                      layoutId: "vxBVLHTlj",
                      style: {
                        "--extracted-r6o4lv": "rgba(255, 255, 255, 0.8)",
                        textShadow: "0px 1px 2px rgba(0,0,0,0.25)",
                      },
                      verticalAlignment: "top",
                      withExternalLayout: !0,
                      ...ge(
                        {
                          o9vEUxmEQ: {
                            children: e(t, {
                              children: e(i.p, {
                                style: {
                                  "--font-selector": "R0Y7UG9wcGlucy0zMDA=",
                                  "--framer-font-family":
                                    '"Poppins", "Poppins Placeholder", sans-serif',
                                  "--framer-font-size": "13px",
                                  "--framer-font-weight": "300",
                                  "--framer-text-color":
                                    "var(--extracted-r6o4lv, rgba(255, 255, 255, 0.8))",
                                },
                                children: e(R, {
                                  href: {
                                    hash: ":mo5fzag6J",
                                    webPageId: "g3nUh9yVa",
                                  },
                                  openInNewTab: !1,
                                  smoothScroll: !0,
                                  children: e(i.a, {
                                    className: "framer-styles-preset-b5z3kx",
                                    "data-styles-preset": "dgLTe5kFR",
                                    children: "Tokenomics",
                                  }),
                                }),
                              }),
                            }),
                          },
                        },
                        o,
                        u
                      ),
                    }),
                    e(i.div, {
                      className: "framer-1uemx31",
                      layoutDependency: s,
                      layoutId: "k9JslV_EM",
                      style: {
                        background:
                          "linear-gradient(270deg, rgba(255, 255, 255, 0) 0%, rgba(217, 217, 217, 1) 49.549549549549546%, rgba(255, 255, 255, 0) 100%)",
                      },
                    }),
                    e(f, {
                      __fromCanvasComponent: !0,
                      children: e(t, {
                        children: e(i.p, {
                          style: {
                            "--font-selector": "R0Y7UG9wcGlucy0zMDA=",
                            "--framer-font-family":
                              '"Poppins", "Poppins Placeholder", sans-serif',
                            "--framer-font-size": "13px",
                            "--framer-font-weight": "300",
                            "--framer-text-color":
                              "var(--extracted-r6o4lv, rgba(255, 255, 255, 0.8))",
                          },
                          children: e(R, {
                            href: {
                              hash: ":ai38zY96L",
                              webPageId: "g3nUh9yVa",
                            },
                            openInNewTab: !1,
                            smoothScroll: !0,
                            children: e(i.a, {
                              className: "framer-styles-preset-b5z3kx",
                              "data-styles-preset": "dgLTe5kFR",
                              children: "Roadmap",
                            }),
                          }),
                        }),
                      }),
                      className: "framer-lkz2gc",
                      fonts: ["GF;Poppins-300"],
                      layoutDependency: s,
                      layoutId: "rcqvgnE5V",
                      style: {
                        "--extracted-r6o4lv": "rgba(255, 255, 255, 0.8)",
                        textShadow: "0px 1px 2px rgba(0,0,0,0.25)",
                      },
                      verticalAlignment: "top",
                      withExternalLayout: !0,
                    }),
                    e(i.div, {
                      className: "framer-1uemx31",
                      layoutDependency: s,
                      layoutId: "k9JslV_EM",
                      style: {
                        background:
                          "linear-gradient(270deg, rgba(255, 255, 255, 0) 0%, rgba(217, 217, 217, 1) 49.549549549549546%, rgba(255, 255, 255, 0) 100%)",
                      },
                    }),
                    e(f, {
                      __fromCanvasComponent: !0,
                      children: e(t, {
                        children: e(i.p, {
                          style: {
                            "--font-selector": "R0Y7UG9wcGlucy0zMDA=",
                            "--framer-font-family":
                              '"Poppins", "Poppins Placeholder", sans-serif',
                            "--framer-font-size": "13px",
                            "--framer-font-weight": "300",
                            "--framer-text-color":
                              "var(--extracted-r6o4lv, rgba(255, 255, 255, 0.8))",
                          },
                          children: e(R, {
                            href: {
                              hash: ":ai38zY96L",
                              webPageId: "g3nUh9yVa",
                            },
                            openInNewTab: !1,
                            smoothScroll: !0,
                            children: e(i.a, {
                              className: "framer-styles-preset-b5z3kx",
                              "data-styles-preset": "dgLTe5kFR",
                              children: "Roadmap",
                            }),
                          }),
                        }),
                      }),
                      className: "framer-lkz2gc",
                      fonts: ["GF;Poppins-300"],
                      layoutDependency: s,
                      layoutId: "rcqvgnE5V",
                      style: {
                        "--extracted-r6o4lv": "rgba(255, 255, 255, 0.8)",
                        textShadow: "0px 1px 2px rgba(0,0,0,0.25)",
                      },
                      verticalAlignment: "top",
                      withExternalLayout: !0,
                    }),
                  ],
                }),
              n(i.div, {
                className: "framer-165h793",
                layoutDependency: s,
                layoutId: "RfHobv68R",
                children: [
                  n(i.div, {
                    className: "framer-1hqzwvl",
                    layoutDependency: s,
                    layoutId: "giOTPxX8b",
                    children: [
                      e(F, {
                        background: {
                          alt: "",
                          fit: "fill",
                          intrinsicHeight: 234.5,
                          intrinsicWidth: 279,
                          pixelHeight: 469,
                          pixelWidth: 558,
                          sizes: "41.6418px",
                          src: "https://framerusercontent.com/images/EXB7t1T6DLoab0EKo4WMZK9eQ.svg?scale-down-to=512",
                          srcSet:
                            "https://framerusercontent.com/images/EXB7t1T6DLoab0EKo4WMZK9eQ.svg?scale-down-to=512 512w,https://framerusercontent.com/images/EXB7t1T6DLoab0EKo4WMZK9eQ.svg 558w",
                        },
                        className: "framer-529wle",
                        "data-framer-name": "graphic",
                        layoutDependency: s,
                        layoutId: "coCaC5jbu",
                        transformTemplate: Da,
                      }),
                      e(f, {
                        __fromCanvasComponent: !0,
                        children: e(t, {
                          children: e(i.p, {
                            style: {
                              "--font-selector": "R0Y7T3JiaXRyb24tNjAw",
                              "--framer-font-family":
                                '"Orbitron", "Orbitron Placeholder", sans-serif',
                              "--framer-font-size": "21px",
                              "--framer-font-weight": "600",
                              "--framer-text-color":
                                "var(--extracted-r6o4lv, rgb(255, 255, 255))",
                            },
                            children: "VistaX",
                          }),
                        }),
                        className: "framer-1o8bfav",
                        fonts: ["GF;Orbitron-600"],
                        layoutDependency: s,
                        layoutId: "GftERgKCj",
                        style: {
                          "--extracted-r6o4lv": "rgb(255, 255, 255)",
                          "--framer-link-text-color": "rgb(0, 153, 255)",
                          "--framer-link-text-decoration": "underline",
                          textShadow: "1px 1px 2px rgba(0, 0, 0, 0.4)",
                        },
                        verticalAlignment: "top",
                        withExternalLayout: !0,
                      }),
                    ],
                  }),
                  G() &&
                    e(i.div, {
                      className: "framer-qi8qtr",
                      layoutDependency: s,
                      layoutId: "uAEMjgSRu",
                      children: n(i.div, {
                        className: "framer-37vcjb",
                        layoutDependency: s,
                        layoutId: "H2rkwAiyb",
                        style: {
                          backgroundColor: "rgba(255, 255, 255, 0.1)",
                          borderBottomLeftRadius: 25,
                          borderBottomRightRadius: 25,
                          borderTopLeftRadius: 25,
                          borderTopRightRadius: 25,
                        },
                        children: [
                          e(f, {
                            __fromCanvasComponent: !0,
                            children: e(t, {
                              children: e(i.p, {
                                style: {
                                  "--font-selector": "R0Y7UG9wcGlucy0zMDA=",
                                  "--framer-font-family":
                                    '"Poppins", "Poppins Placeholder", sans-serif',
                                  "--framer-font-size": "14px",
                                  "--framer-font-weight": "300",
                                  "--framer-text-color":
                                    "var(--extracted-r6o4lv, rgba(255, 255, 255, 0.8))",
                                },
                                children: e(R, {
                                  href: {
                                    hash: ":Rx7accoiM",
                                    webPageId: "g3nUh9yVa",
                                  },
                                  openInNewTab: !1,
                                  smoothScroll: !0,
                                  children: e(i.a, {
                                    className: "framer-styles-preset-b5z3kx",
                                    "data-styles-preset": "dgLTe5kFR",
                                    children: "Features",
                                  }),
                                }),
                              }),
                            }),
                            className: "framer-1dz9abq",
                            fonts: ["GF;Poppins-300"],
                            layoutDependency: s,
                            layoutId: "hZihNhoPI",
                            style: {
                              "--extracted-r6o4lv": "rgba(255, 255, 255, 0.8)",
                              textShadow: "0px 1px 2px rgba(0,0,0,0.25)",
                            },
                            verticalAlignment: "top",
                            withExternalLayout: !0,
                            ...ge(
                              {
                                E_Oku47lh: {
                                  children: e(t, {
                                    children: e(i.p, {
                                      style: {
                                        "--font-selector":
                                          "R0Y7UG9wcGlucy0zMDA=",
                                        "--framer-font-family":
                                          '"Poppins", "Poppins Placeholder", sans-serif',
                                        "--framer-font-size": "13px",
                                        "--framer-font-weight": "300",
                                        "--framer-text-color":
                                          "var(--extracted-r6o4lv, rgba(255, 255, 255, 0.8))",
                                      },
                                      children: e(R, {
                                        href: {
                                          hash: ":Rx7accoiM",
                                          webPageId: "g3nUh9yVa",
                                        },
                                        openInNewTab: !1,
                                        smoothScroll: !0,
                                        children: e(i.a, {
                                          className:
                                            "framer-styles-preset-b5z3kx",
                                          "data-styles-preset": "dgLTe5kFR",
                                          children: "Features",
                                        }),
                                      }),
                                    }),
                                  }),
                                },
                              },
                              o,
                              u
                            ),
                          }),
                          e(i.div, {
                            className: "framer-qe7hjm",
                            layoutDependency: s,
                            layoutId: "YFkxTbT1v",
                            style: {
                              background:
                                "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(217, 217, 217, 1) 49.549549549549546%, rgba(255, 255, 255, 0) 100%)",
                            },
                          }),
                          e(f, {
                            __fromCanvasComponent: !0,
                            children: e(t, {
                              children: e(i.p, {
                                style: {
                                  "--font-selector": "R0Y7UG9wcGlucy0zMDA=",
                                  "--framer-font-family":
                                    '"Poppins", "Poppins Placeholder", sans-serif',
                                  "--framer-font-size": "14px",
                                  "--framer-font-weight": "300",
                                  "--framer-text-color":
                                    "var(--extracted-r6o4lv, rgba(255, 255, 255, 0.8))",
                                },
                                children: e(R, {
                                  href: {
                                    hash: ":SRK5yIuMB",
                                    webPageId: "g3nUh9yVa",
                                  },
                                  openInNewTab: !1,
                                  smoothScroll: !0,
                                  children: e(i.a, {
                                    className: "framer-styles-preset-b5z3kx",
                                    "data-styles-preset": "dgLTe5kFR",
                                    children: "Nexus Gateway",
                                  }),
                                }),
                              }),
                            }),
                            className: "framer-1kpwv47",
                            fonts: ["GF;Poppins-300"],
                            layoutDependency: s,
                            layoutId: "n6fBGxqIy",
                            style: {
                              "--extracted-r6o4lv": "rgba(255, 255, 255, 0.8)",
                              textShadow: "0px 1px 2px rgba(0,0,0,0.25)",
                            },
                            verticalAlignment: "top",
                            withExternalLayout: !0,
                            ...ge(
                              {
                                E_Oku47lh: {
                                  children: e(t, {
                                    children: e(i.p, {
                                      style: {
                                        "--font-selector":
                                          "R0Y7UG9wcGlucy0zMDA=",
                                        "--framer-font-family":
                                          '"Poppins", "Poppins Placeholder", sans-serif',
                                        "--framer-font-size": "13px",
                                        "--framer-font-weight": "300",
                                        "--framer-text-color":
                                          "var(--extracted-r6o4lv, rgba(255, 255, 255, 0.8))",
                                      },
                                      children: e(R, {
                                        href: {
                                          hash: ":SRK5yIuMB",
                                          webPageId: "g3nUh9yVa",
                                        },
                                        openInNewTab: !1,
                                        smoothScroll: !0,
                                        children: e(i.a, {
                                          className:
                                            "framer-styles-preset-b5z3kx",
                                          "data-styles-preset": "dgLTe5kFR",
                                          children: "Nexus Gateway",
                                        }),
                                      }),
                                    }),
                                  }),
                                },
                              },
                              o,
                              u
                            ),
                          }),
                          e(i.div, {
                            className: "framer-ls9fbi",
                            layoutDependency: s,
                            layoutId: "zxthizv4u",
                            style: {
                              background:
                                "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(217, 217, 217, 1) 49.549549549549546%, rgba(255, 255, 255, 0) 100%)",
                            },
                          }),
                          e(f, {
                            __fromCanvasComponent: !0,
                            children: e(t, {
                              children: e(i.p, {
                                style: {
                                  "--font-selector": "R0Y7UG9wcGlucy0zMDA=",
                                  "--framer-font-family":
                                    '"Poppins", "Poppins Placeholder", sans-serif',
                                  "--framer-font-size": "14px",
                                  "--framer-font-weight": "300",
                                  "--framer-text-color":
                                    "var(--extracted-r6o4lv, rgba(255, 255, 255, 0.8))",
                                },
                                children: e(R, {
                                  href: {
                                    hash: ":NWAyV0MdW",
                                    webPageId: "g3nUh9yVa",
                                  },
                                  openInNewTab: !1,
                                  smoothScroll: !0,
                                  children: e(i.a, {
                                    className: "framer-styles-preset-b5z3kx",
                                    "data-styles-preset": "dgLTe5kFR",
                                    children: "Cloud Suite",
                                  }),
                                }),
                              }),
                            }),
                            className: "framer-1c90xqs",
                            fonts: ["GF;Poppins-300"],
                            layoutDependency: s,
                            layoutId: "I6B3vJlbk",
                            style: {
                              "--extracted-r6o4lv": "rgba(255, 255, 255, 0.8)",
                              textShadow: "0px 1px 2px rgba(0,0,0,0.25)",
                            },
                            verticalAlignment: "top",
                            withExternalLayout: !0,
                            ...ge(
                              {
                                E_Oku47lh: {
                                  children: e(t, {
                                    children: e(i.p, {
                                      style: {
                                        "--font-selector":
                                          "R0Y7UG9wcGlucy0zMDA=",
                                        "--framer-font-family":
                                          '"Poppins", "Poppins Placeholder", sans-serif',
                                        "--framer-font-size": "13px",
                                        "--framer-font-weight": "300",
                                        "--framer-text-color":
                                          "var(--extracted-r6o4lv, rgba(255, 255, 255, 0.8))",
                                      },
                                      children: e(R, {
                                        href: {
                                          hash: ":NWAyV0MdW",
                                          webPageId: "g3nUh9yVa",
                                        },
                                        openInNewTab: !1,
                                        smoothScroll: !0,
                                        children: e(i.a, {
                                          className:
                                            "framer-styles-preset-b5z3kx",
                                          "data-styles-preset": "dgLTe5kFR",
                                          children: "Cloud Suite",
                                        }),
                                      }),
                                    }),
                                  }),
                                },
                              },
                              o,
                              u
                            ),
                          }),
                          e(i.div, {
                            className: "framer-bhkxh3",
                            layoutDependency: s,
                            layoutId: "jDIswhLbB",
                            style: {
                              background:
                                "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(217, 217, 217, 1) 49.549549549549546%, rgba(255, 255, 255, 0) 100%)",
                            },
                          }),
                          e(f, {
                            __fromCanvasComponent: !0,
                            children: e(t, {
                              children: e(i.p, {
                                style: {
                                  "--font-selector": "R0Y7UG9wcGlucy0zMDA=",
                                  "--framer-font-family":
                                    '"Poppins", "Poppins Placeholder", sans-serif',
                                  "--framer-font-size": "14px",
                                  "--framer-font-weight": "300",
                                  "--framer-text-color":
                                    "var(--extracted-r6o4lv, rgba(255, 255, 255, 0.8))",
                                },
                                children: e(R, {
                                  href: {
                                    hash: ":mo5fzag6J",
                                    webPageId: "g3nUh9yVa",
                                  },
                                  openInNewTab: !1,
                                  smoothScroll: !1,
                                  children: e(i.a, {
                                    className: "framer-styles-preset-b5z3kx",
                                    "data-styles-preset": "dgLTe5kFR",
                                    children: "Tokenomics",
                                  }),
                                }),
                              }),
                            }),
                            className: "framer-adrozr",
                            fonts: ["GF;Poppins-300"],
                            layoutDependency: s,
                            layoutId: "LCCBjpl2r",
                            style: {
                              "--extracted-r6o4lv": "rgba(255, 255, 255, 0.8)",
                              textShadow: "0px 1px 2px rgba(0,0,0,0.25)",
                            },
                            verticalAlignment: "top",
                            withExternalLayout: !0,
                            ...ge(
                              {
                                E_Oku47lh: {
                                  children: e(t, {
                                    children: e(i.p, {
                                      style: {
                                        "--font-selector":
                                          "R0Y7UG9wcGlucy0zMDA=",
                                        "--framer-font-family":
                                          '"Poppins", "Poppins Placeholder", sans-serif',
                                        "--framer-font-size": "13px",
                                        "--framer-font-weight": "300",
                                        "--framer-text-color":
                                          "var(--extracted-r6o4lv, rgba(255, 255, 255, 0.8))",
                                      },
                                      children: e(R, {
                                        href: {
                                          hash: ":mo5fzag6J",
                                          webPageId: "g3nUh9yVa",
                                        },
                                        openInNewTab: !1,
                                        smoothScroll: !1,
                                        children: e(i.a, {
                                          className:
                                            "framer-styles-preset-b5z3kx",
                                          "data-styles-preset": "dgLTe5kFR",
                                          children: "Tokenomics",
                                        }),
                                      }),
                                    }),
                                  }),
                                },
                              },
                              o,
                              u
                            ),
                          }),
                          e(i.div, {
                            className: "framer-h6c2mc",
                            layoutDependency: s,
                            layoutId: "Ya2tDiJiZ",
                            style: {
                              background:
                                "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(217, 217, 217, 1) 49.549549549549546%, rgba(255, 255, 255, 0) 100%)",
                            },
                          }),
                          e(f, {
                            __fromCanvasComponent: !0,
                            children: e(t, {
                              children: e(i.p, {
                                style: {
                                  "--font-selector": "R0Y7UG9wcGlucy0zMDA=",
                                  "--framer-font-family":
                                    '"Poppins", "Poppins Placeholder", sans-serif',
                                  "--framer-font-size": "14px",
                                  "--framer-font-weight": "300",
                                  "--framer-text-color":
                                    "var(--extracted-r6o4lv, rgba(255, 255, 255, 0.8))",
                                },
                                children: e(R, {
                                  href: {
                                    hash: ":ai38zY96L",
                                    webPageId: "g3nUh9yVa",
                                  },
                                  openInNewTab: !1,
                                  smoothScroll: !0,
                                  children: e(i.a, {
                                    className: "framer-styles-preset-b5z3kx",
                                    "data-styles-preset": "dgLTe5kFR",
                                    children: "Roadmap",
                                  }),
                                }),
                              }),
                            }),
                            className: "framer-1rwknlj",
                            fonts: ["GF;Poppins-300"],
                            layoutDependency: s,
                            layoutId: "v85U3Zjpj",
                            style: {
                              "--extracted-r6o4lv": "rgba(255, 255, 255, 0.8)",
                              textShadow: "0px 1px 2px rgba(0,0,0,0.25)",
                            },
                            verticalAlignment: "top",
                            withExternalLayout: !0,
                            ...ge(
                              {
                                E_Oku47lh: {
                                  children: e(t, {
                                    children: e(i.p, {
                                      style: {
                                        "--font-selector":
                                          "R0Y7UG9wcGlucy0zMDA=",
                                        "--framer-font-family":
                                          '"Poppins", "Poppins Placeholder", sans-serif',
                                        "--framer-font-size": "13px",
                                        "--framer-font-weight": "300",
                                        "--framer-text-color":
                                          "var(--extracted-r6o4lv, rgba(255, 255, 255, 0.8))",
                                      },
                                      children: e(R, {
                                        href: {
                                          hash: ":ai38zY96L",
                                          webPageId: "g3nUh9yVa",
                                        },
                                        openInNewTab: !1,
                                        smoothScroll: !0,
                                        children: e(i.a, {
                                          className:
                                            "framer-styles-preset-b5z3kx",
                                          "data-styles-preset": "dgLTe5kFR",
                                          children: "Roadmap",
                                        }),
                                      }),
                                    }),
                                  }),
                                },
                              },
                              o,
                              u
                            ),
                          }),
                        ],
                      }),
                    }),
                  n(i.div, {
                    className: "framer-181g4lo",
                    layoutDependency: s,
                    layoutId: "uHZrPW7wi",
                    children: [
                      n(i.div, {
                        className: "framer-1lx7msh",
                        layoutDependency: s,
                        layoutId: "vCTtwO8KP",
                        children: [
                          e(R, {
                            href: "https://t.me/vistax_ai",
                            children: e(i.a, {
                              className: "framer-1hm8kl3 framer-o5epqx",
                              "data-border": !0,
                              layoutDependency: s,
                              layoutId: "kemutyDbA",
                              style: {
                                "--border-bottom-width": "1px",
                                "--border-color": "rgba(255, 255, 255, 0.2)",
                                "--border-left-width": "1px",
                                "--border-right-width": "1px",
                                "--border-style": "solid",
                                "--border-top-width": "1px",
                                borderBottomLeftRadius: 10,
                                borderBottomRightRadius: 10,
                                borderTopLeftRadius: 10,
                                borderTopRightRadius: 10,
                              },
                              children: e(ue, {
                                className: "framer-e5trr4",
                                "data-framer-name": "graphic",
                                fill: "rgb(255, 255, 255)",
                                intrinsicHeight: 24,
                                intrinsicWidth: 24,
                                layoutDependency: s,
                                layoutId: "kJ8HH1gks",
                                svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="m20.665 3.717-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42 10.532-6.645c.498-.303.953-.14.579.192l-8.533 7.701h-.002l.002.001-.314 4.692c.46 0 .663-.211.921-.46l2.211-2.15 4.599 3.397c.848.467 1.457.227 1.668-.785l3.019-14.228c.309-1.239-.473-1.8-1.282-1.434z"/></svg>',
                                withExternalLayout: !0,
                              }),
                            }),
                          }),
                          e(R, {
                            href: "https://x.com/vistax_ai",
                            openInNewTab: !0,
                            children: e(i.a, {
                              className: "framer-thk5h5 framer-o5epqx",
                              "data-border": !0,
                              layoutDependency: s,
                              layoutId: "S7e97HcQ5",
                              style: {
                                "--border-bottom-width": "1px",
                                "--border-color": "rgba(255, 255, 255, 0.2)",
                                "--border-left-width": "1px",
                                "--border-right-width": "1px",
                                "--border-style": "solid",
                                "--border-top-width": "1px",
                                borderBottomLeftRadius: 10,
                                borderBottomRightRadius: 10,
                                borderTopLeftRadius: 10,
                                borderTopRightRadius: 10,
                              },
                              children: e(ue, {
                                className: "framer-rnis3n",
                                "data-framer-name": "graphic",
                                fill: "rgb(255, 255, 255)",
                                intrinsicHeight: 72,
                                intrinsicWidth: 72,
                                layoutDependency: s,
                                layoutId: "YxK05m5Uj",
                                svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 72"><switch><g><path d="M42.5 31.2 66 6h-6L39.8 27.6 24 6H4l24.6 33.6L4 66h6l21.3-22.8L48 66h20L42.5 31.2zM12.9 10h8L59 62h-8L12.9 10z"/></g></switch></svg>',
                                withExternalLayout: !0,
                              }),
                            }),
                          }),
                        ],
                      }),
                      M() &&
                        e(C, {
                          children: e(i.div, {
                            className: "framer-1efnhrc-container",
                            layoutDependency: s,
                            layoutId: "oy47RojXa-container",
                            children: e(me, {
                              color: "rgb(255, 255, 255)",
                              height: "100%",
                              iconSearch: "Home",
                              iconSelection: "Menu",
                              iconStyle15: "Filled",
                              iconStyle2: "Filled",
                              iconStyle7: "Filled",
                              id: "oy47RojXa",
                              layoutId: "oy47RojXa",
                              mirrored: !1,
                              selectByList: !0,
                              style: { height: "100%", width: "100%" },
                              width: "100%",
                              ...ge(
                                {
                                  AXEg_uJdb: { onClick: S },
                                  o9vEUxmEQ: {
                                    iconSelection: "MenuOpen",
                                    onClick: V,
                                  },
                                  s3mX7LzQV: { onClick: S },
                                },
                                o,
                                u
                              ),
                            }),
                          }),
                        }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        }),
      }),
    });
  }),
  qa = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-VOQ3i.framer-o5epqx, .framer-VOQ3i .framer-o5epqx { display: block; }",
    ".framer-VOQ3i.framer-cjtuux { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 140px; justify-content: center; max-width: 1200px; overflow: hidden; padding: 0px 70px 0px 70px; position: relative; width: 1200px; }",
    ".framer-VOQ3i .framer-7c2f2b { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 5px; height: auto; justify-content: center; overflow: hidden; padding: 20px 20px 20px 20px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }",
    ".framer-VOQ3i .framer-1vccdid, .framer-VOQ3i .framer-lpfosl, .framer-VOQ3i .framer-1sdujgj, .framer-VOQ3i .framer-1961x58, .framer-VOQ3i .framer-lkz2gc { flex: none; height: auto; position: relative; white-space: pre; width: auto; }",
    ".framer-VOQ3i .framer-1bggf1u { flex: none; height: 1px; overflow: hidden; position: relative; width: 100%; }",
    ".framer-VOQ3i .framer-b6djlz { flex: none; height: 1px; overflow: hidden; position: relative; width: 100px; }",
    ".framer-VOQ3i .framer-nq3806, .framer-VOQ3i .framer-1uemx31 { flex: none; height: 1px; overflow: hidden; position: relative; width: 200px; }",
    ".framer-VOQ3i .framer-165h793 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: 40px; justify-content: space-between; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 100%; }",
    ".framer-VOQ3i .framer-1hqzwvl { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: 130px; }",
    ".framer-VOQ3i .framer-529wle { aspect-ratio: 1.1897654584221748 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 35px); overflow: visible; position: relative; width: 42px; }",
    ".framer-VOQ3i .framer-1o8bfav, .framer-VOQ3i .framer-1dz9abq, .framer-VOQ3i .framer-1kpwv47, .framer-VOQ3i .framer-1c90xqs, .framer-VOQ3i .framer-adrozr, .framer-VOQ3i .framer-1rwknlj { -webkit-user-select: none; flex: none; height: auto; position: relative; user-select: none; white-space: pre; width: auto; }",
    ".framer-VOQ3i .framer-qi8qtr { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-end; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: min-content; }",
    ".framer-VOQ3i .framer-37vcjb { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 40px; justify-content: center; overflow: hidden; padding: 0px 20px 0px 20px; position: relative; width: auto; will-change: var(--framer-will-change-override, transform); }",
    ".framer-VOQ3i .framer-qe7hjm, .framer-VOQ3i .framer-ls9fbi, .framer-VOQ3i .framer-bhkxh3, .framer-VOQ3i .framer-h6c2mc { flex: none; height: 80%; overflow: hidden; position: relative; width: 1px; }",
    ".framer-VOQ3i .framer-181g4lo { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-end; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: 130px; }",
    ".framer-VOQ3i .framer-1lx7msh { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: min-content; }",
    ".framer-VOQ3i .framer-1hm8kl3 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 40px; justify-content: center; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; text-decoration: none; width: 40px; will-change: var(--framer-will-change-override, transform); }",
    ".framer-VOQ3i .framer-e5trr4, .framer-VOQ3i .framer-rnis3n { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 24px); position: relative; width: 24px; }",
    ".framer-VOQ3i .framer-thk5h5 { align-content: center; align-items: center; aspect-ratio: 1 / 1; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: var(--framer-aspect-ratio-supported, 40px); justify-content: center; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; text-decoration: none; width: 40px; will-change: var(--framer-will-change-override, transform); }",
    ".framer-VOQ3i .framer-1efnhrc-container { flex: none; height: 53px; position: relative; width: 38px; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-VOQ3i.framer-cjtuux, .framer-VOQ3i .framer-7c2f2b, .framer-VOQ3i .framer-1hqzwvl, .framer-VOQ3i .framer-qi8qtr, .framer-VOQ3i .framer-37vcjb, .framer-VOQ3i .framer-181g4lo, .framer-VOQ3i .framer-1lx7msh, .framer-VOQ3i .framer-1hm8kl3, .framer-VOQ3i .framer-thk5h5 { gap: 0px; } .framer-VOQ3i.framer-cjtuux > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-VOQ3i.framer-cjtuux > :first-child, .framer-VOQ3i .framer-7c2f2b > :first-child { margin-top: 0px; } .framer-VOQ3i.framer-cjtuux > :last-child, .framer-VOQ3i .framer-7c2f2b > :last-child { margin-bottom: 0px; } .framer-VOQ3i .framer-7c2f2b > * { margin: 0px; margin-bottom: calc(5px / 2); margin-top: calc(5px / 2); } .framer-VOQ3i .framer-1hqzwvl > *, .framer-VOQ3i .framer-qi8qtr > *, .framer-VOQ3i .framer-37vcjb > *, .framer-VOQ3i .framer-181g4lo > *, .framer-VOQ3i .framer-1hm8kl3 > *, .framer-VOQ3i .framer-thk5h5 > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-VOQ3i .framer-1hqzwvl > :first-child, .framer-VOQ3i .framer-qi8qtr > :first-child, .framer-VOQ3i .framer-37vcjb > :first-child, .framer-VOQ3i .framer-181g4lo > :first-child, .framer-VOQ3i .framer-1lx7msh > :first-child, .framer-VOQ3i .framer-1hm8kl3 > :first-child, .framer-VOQ3i .framer-thk5h5 > :first-child { margin-left: 0px; } .framer-VOQ3i .framer-1hqzwvl > :last-child, .framer-VOQ3i .framer-qi8qtr > :last-child, .framer-VOQ3i .framer-37vcjb > :last-child, .framer-VOQ3i .framer-181g4lo > :last-child, .framer-VOQ3i .framer-1lx7msh > :last-child, .framer-VOQ3i .framer-1hm8kl3 > :last-child, .framer-VOQ3i .framer-thk5h5 > :last-child { margin-right: 0px; } .framer-VOQ3i .framer-1lx7msh > * { margin: 0px; margin-left: calc(20px / 2); margin-right: calc(20px / 2); } }",
    ".framer-VOQ3i.framer-v-1aw6xjb.framer-cjtuux { padding: 0px 20px 0px 20px; width: 810px; }",
    ".framer-VOQ3i.framer-v-1aw6xjb .framer-37vcjb { gap: 5px; }",
    ".framer-VOQ3i.framer-v-1aw6xjb .framer-1hm8kl3, .framer-VOQ3i.framer-v-5ql4oj .framer-1hm8kl3, .framer-VOQ3i.framer-v-108wwn3 .framer-1hm8kl3 { height: min-content; width: min-content; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-VOQ3i.framer-v-1aw6xjb .framer-37vcjb { gap: 0px; } .framer-VOQ3i.framer-v-1aw6xjb .framer-37vcjb > * { margin: 0px; margin-left: calc(5px / 2); margin-right: calc(5px / 2); } .framer-VOQ3i.framer-v-1aw6xjb .framer-37vcjb > :first-child { margin-left: 0px; } .framer-VOQ3i.framer-v-1aw6xjb .framer-37vcjb > :last-child { margin-right: 0px; } }",
    ".framer-VOQ3i.framer-v-cper99.framer-cjtuux, .framer-VOQ3i.framer-v-108wwn3.framer-cjtuux { align-content: flex-start; align-items: flex-start; height: 80px; justify-content: flex-start; padding: 40px 20px 0px 20px; width: 390px; }",
    ".framer-VOQ3i.framer-v-cper99 .framer-7c2f2b, .framer-VOQ3i.framer-v-5ql4oj .framer-7c2f2b, .framer-VOQ3i.framer-v-108wwn3 .framer-7c2f2b { gap: 10px; order: 1; }",
    ".framer-VOQ3i.framer-v-cper99 .framer-165h793, .framer-VOQ3i.framer-v-5ql4oj .framer-165h793, .framer-VOQ3i.framer-v-5ql4oj .framer-1lx7msh, .framer-VOQ3i.framer-v-108wwn3 .framer-165h793, .framer-VOQ3i.framer-v-108wwn3 .framer-1lx7msh { order: 0; }",
    ".framer-VOQ3i.framer-v-cper99 .framer-181g4lo, .framer-VOQ3i.framer-v-5ql4oj .framer-181g4lo, .framer-VOQ3i.framer-v-108wwn3 .framer-181g4lo { width: min-content; }",
    ".framer-VOQ3i.framer-v-cper99 .framer-1lx7msh { gap: 10px; order: 0; }",
    ".framer-VOQ3i.framer-v-cper99 .framer-1hm8kl3 { height: 36px; width: 36px; }",
    ".framer-VOQ3i.framer-v-cper99 .framer-e5trr4 { aspect-ratio: unset; height: 20px; width: 20px; }",
    ".framer-VOQ3i.framer-v-cper99 .framer-thk5h5 { height: var(--framer-aspect-ratio-supported, 36px); width: 36px; }",
    ".framer-VOQ3i.framer-v-cper99 .framer-rnis3n { height: var(--framer-aspect-ratio-supported, 18px); width: 18px; }",
    ".framer-VOQ3i.framer-v-cper99 .framer-1efnhrc-container, .framer-VOQ3i.framer-v-5ql4oj .framer-1efnhrc-container, .framer-VOQ3i.framer-v-108wwn3 .framer-1efnhrc-container { order: 1; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-VOQ3i.framer-v-cper99 .framer-7c2f2b, .framer-VOQ3i.framer-v-cper99 .framer-1lx7msh { gap: 0px; } .framer-VOQ3i.framer-v-cper99 .framer-7c2f2b > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-VOQ3i.framer-v-cper99 .framer-7c2f2b > :first-child { margin-top: 0px; } .framer-VOQ3i.framer-v-cper99 .framer-7c2f2b > :last-child { margin-bottom: 0px; } .framer-VOQ3i.framer-v-cper99 .framer-1lx7msh > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-VOQ3i.framer-v-cper99 .framer-1lx7msh > :first-child { margin-left: 0px; } .framer-VOQ3i.framer-v-cper99 .framer-1lx7msh > :last-child { margin-right: 0px; } }",
    ".framer-VOQ3i.framer-v-5ql4oj.framer-cjtuux { align-content: flex-start; align-items: flex-start; height: min-content; justify-content: flex-start; padding: 40px 20px 50px 20px; width: 390px; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-VOQ3i.framer-v-5ql4oj .framer-7c2f2b { gap: 0px; } .framer-VOQ3i.framer-v-5ql4oj .framer-7c2f2b > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-VOQ3i.framer-v-5ql4oj .framer-7c2f2b > :first-child { margin-top: 0px; } .framer-VOQ3i.framer-v-5ql4oj .framer-7c2f2b > :last-child { margin-bottom: 0px; } }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-VOQ3i.framer-v-108wwn3 .framer-7c2f2b { gap: 0px; } .framer-VOQ3i.framer-v-108wwn3 .framer-7c2f2b > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-VOQ3i.framer-v-108wwn3 .framer-7c2f2b > :first-child { margin-top: 0px; } .framer-VOQ3i.framer-v-108wwn3 .framer-7c2f2b > :last-child { margin-bottom: 0px; } }",
    ...Cr,
    '.framer-VOQ3i[data-border="true"]::after, .framer-VOQ3i [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
  ],
  Re = J(Za, qa, "framer-VOQ3i"),
  Je = Re;
Re.displayName = "HEADER";
Re.defaultProps = { height: 140, width: 1200 };
E(Re, {
  variant: {
    options: ["JHL7wiVhj", "E_Oku47lh", "s3mX7LzQV", "o9vEUxmEQ", "AXEg_uJdb"],
    optionTitles: [
      "Variant 1",
      "Variant 2",
      "Variant 3",
      "Variant 4",
      "Variant 5",
    ],
    title: "Variant",
    type: p.Enum,
  },
});
H(
  Re,
  [
    {
      explicitInter: !0,
      fonts: [
        {
          family: "Poppins",
          source: "google",
          style: "normal",
          url: "https://fonts.gstatic.com/s/poppins/v21/pxiByp8kv8JHgFVrLDz8V15vFP-KUEg.woff2",
          weight: "300",
        },
        {
          family: "Orbitron",
          source: "google",
          style: "normal",
          url: "https://fonts.gstatic.com/s/orbitron/v31/yMJMMIlzdpvBhQQL_SC3X9yhF25-T1nyxSmxo2IyXjU1pg.woff2",
          weight: "600",
        },
      ],
    },
    ...Pa,
    ...fr(zr),
  ],
  { supportsExplicitInterCodegen: !0 }
);
function Se(r) {
  let {
      label: a,
      content: l,
      fill: m,
      color: c,
      style: d,
      onClick: h,
      font: x,
      hoverOptions: y,
      ...o
    } = r,
    L = pr({ fontWeight: 500, ...o }),
    u = Ie(r),
    g = xr(r),
    b = ve(() => {
      var v;
      (v = D.clipboard) === null || v === void 0 || v.writeText(l), h?.();
    }, [h, l]);
  return e(i.button, {
    style: {
      border: "none",
      outline: "none",
      resize: "none",
      width: "max-content",
      wordBreak: "break-word",
      overflowWrap: "break-word",
      WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
      letterSpacing: "-0.2px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: m,
      borderRadius: u,
      cursor: "pointer",
      padding: g,
      color: c,
      ...L,
      ...x,
      ...d,
    },
    onClick: b,
    ...o,
    whileHover: y,
    transition: y?.transition,
    children: a,
  });
}
E(Se, {
  content: {
    type: p.String,
    title: "Content",
    displayTextArea: !0,
    description: "When clicked, this content will be copied to the clipboard.",
  },
  label: { type: p.String, title: "Label", defaultValue: "Copy to Clipboard" },
  fill: { type: p.Color, title: "Fill", defaultValue: "#06F" },
  color: { type: p.Color, title: "Text", defaultValue: "#fff" },
  font: { type: p.Font, controls: "extended", defaultValue: { fontSize: 16 } },
  hoverOptions: {
    type: p.Object,
    title: "Hover",
    buttonTitle: "Effect",
    optional: !0,
    controls: {
      scale: {
        type: p.Number,
        title: "Scale",
        min: 0,
        max: 10,
        displayStepper: !0,
        step: 0.01,
        defaultValue: 1.1,
      },
      backgroundColor: {
        type: p.Color,
        title: "Fill",
        defaultValue: "#0088FF",
        optional: !0,
      },
      color: {
        type: p.Color,
        title: "Color",
        defaultValue: "#FFF",
        optional: !0,
      },
      transition: {
        type: p.Transition,
        title: "Transition",
        defaultValue: { type: "spring", stiffness: 400, damping: 30 },
      },
    },
  },
  padding: {
    type: p.FusedNumber,
    toggleKey: "paddingPerSide",
    toggleTitles: ["Padding", "Padding per side"],
    valueKeys: ["paddingTop", "paddingRight", "paddingBottom", "paddingLeft"],
    valueLabels: ["T", "R", "B", "L"],
    min: 0,
    title: "Padding",
    defaultValue: 10,
  },
  borderRadius: {
    title: "Radius",
    type: p.FusedNumber,
    toggleKey: "isMixedBorderRadius",
    toggleTitles: ["Radius", "Radius per corner"],
    valueKeys: [
      "topLeftRadius",
      "topRightRadius",
      "bottomRightRadius",
      "bottomLeftRadius",
    ],
    valueLabels: ["TL", "TR", "BR", "BL"],
    min: 0,
    defaultValue: 50,
  },
  ...Me,
});
var Ja = U(Se),
  Ha = ["roypuGmOl", "Hkfjl2l0B", "q2os6Ofg7"],
  Xa = "framer-ZYqfc",
  _a = {
    Hkfjl2l0B: "framer-v-mcv2pz",
    q2os6Ofg7: "framer-v-gkgzvb",
    roypuGmOl: "framer-v-6q7hz",
  };
function Lr(r, ...a) {
  let l = {};
  return a?.forEach((m) => m && Object.assign(l, r[m])), l;
}
var $a = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: "spring" },
  et = ({ value: r, children: a }) => {
    let l = ee(A),
      m = r ?? l.transition,
      c = I(() => ({ ...l, transition: m }), [JSON.stringify(m)]);
    return e(A.Provider, { value: c, children: a });
  },
  rt = i(t),
  at = {
    "Variant 1": "roypuGmOl",
    "Variant 2": "Hkfjl2l0B",
    "Variant 3": "q2os6Ofg7",
  },
  tt = ({ height: r, id: a, width: l, ...m }) => {
    var c, d;
    return {
      ...m,
      variant:
        (d = (c = at[m.variant]) !== null && c !== void 0 ? c : m.variant) !==
          null && d !== void 0
          ? d
          : "roypuGmOl",
    };
  },
  it = (r, a) => a.join("-") + r.layoutDependency,
  ot = j(function (r, a) {
    let { activeLocale: l, setLocale: m } = q(),
      { style: c, className: d, layoutId: h, variant: x, ...y } = tt(r),
      {
        baseVariant: o,
        classNames: L,
        gestureVariant: u,
        setGestureState: g,
        setVariant: b,
        variants: v,
      } = ae({
        cycleOrder: Ha,
        defaultVariant: "roypuGmOl",
        variant: x,
        variantClassNames: _a,
      }),
      s = it(r, v),
      { activeVariantCallback: Y, delay: k } = oe(o),
      z = Y(async (...B) => {
        await k(() => b("Hkfjl2l0B"), 100);
      }),
      S = Y(async (...B) => {
        g({ isPressed: !1 }), await k(() => b("q2os6Ofg7"), 100);
      }),
      V = Y(async (...B) => {
        await k(() => b("roypuGmOl"), 100);
      }),
      T = O(null),
      M = Q(),
      G = [],
      K = re();
    return e(Z, {
      id: h ?? M,
      children: e(rt, {
        animate: v,
        initial: !1,
        children: e(et, {
          value: $a,
          children: e(i.div, {
            ...y,
            className: W(Xa, ...G, "framer-6q7hz", d, L),
            "data-border": !0,
            "data-framer-name": "Variant 1",
            "data-highlight": !0,
            layoutDependency: s,
            layoutId: "roypuGmOl",
            onHoverEnd: () => g({ isHovered: !1 }),
            onHoverStart: () => g({ isHovered: !0 }),
            onMouseEnter: z,
            onTap: () => g({ isPressed: !1 }),
            onTapCancel: () => g({ isPressed: !1 }),
            onTapStart: () => g({ isPressed: !0 }),
            ref: a ?? T,
            style: {
              "--border-bottom-width": "0.5px",
              "--border-color": "rgba(255, 255, 255, 0.4)",
              "--border-left-width": "0.5px",
              "--border-right-width": "0.5px",
              "--border-style": "solid",
              "--border-top-width": "0.5px",
              backgroundColor: "rgba(255, 255, 255, 0.04)",
              borderBottomLeftRadius: 10,
              borderBottomRightRadius: 10,
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
              ...c,
            },
            variants: {
              Hkfjl2l0B: { backgroundColor: "rgba(255, 255, 255, 0.2)" },
              q2os6Ofg7: { backgroundColor: "rgba(255, 255, 255, 0.2)" },
            },
            ...Lr(
              {
                Hkfjl2l0B: {
                  "data-framer-name": "Variant 2",
                  onMouseEnter: void 0,
                  onMouseLeave: V,
                  onTap: S,
                },
                q2os6Ofg7: {
                  "data-framer-name": "Variant 3",
                  onMouseEnter: void 0,
                  onMouseLeave: V,
                },
              },
              o,
              u
            ),
            children: e(C, {
              children: e(i.div, {
                className: "framer-lwwbcq-container",
                layoutDependency: s,
                layoutId: "iyayZ540F-container",
                children: e(Se, {
                  borderRadius: 8,
                  bottomLeftRadius: 8,
                  bottomRightRadius: 8,
                  color: "rgb(255, 255, 255)",
                  content: "0xComingSoon",
                  fill: "rgba(255, 255, 255, 0)",
                  font: {
                    fontFamily:
                      '"Montserrat", "Montserrat Placeholder", sans-serif',
                    fontSize: "13px",
                    fontStyle: "normal",
                    fontWeight: 500,
                    letterSpacing: "0em",
                    lineHeight: "0.5em",
                  },
                  height: "100%",
                  id: "iyayZ540F",
                  isMixedBorderRadius: !1,
                  label: "Copy Address",
                  layoutId: "iyayZ540F",
                  padding: 10,
                  paddingBottom: 10,
                  paddingLeft: 10,
                  paddingPerSide: !1,
                  paddingRight: 10,
                  paddingTop: 10,
                  topLeftRadius: 8,
                  topRightRadius: 8,
                  width: "100%",
                  ...Lr({ q2os6Ofg7: { label: "Copied" } }, o, u),
                }),
              }),
            }),
          }),
        }),
      }),
    });
  }),
  nt = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-ZYqfc.framer-abu0gc, .framer-ZYqfc .framer-abu0gc { display: block; }",
    ".framer-ZYqfc.framer-6q7hz { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 5px 10px 5px 10px; position: relative; width: 130px; will-change: var(--framer-will-change-override, transform); }",
    ".framer-ZYqfc .framer-lwwbcq-container { flex: none; height: auto; position: relative; width: auto; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-ZYqfc.framer-6q7hz { gap: 0px; } .framer-ZYqfc.framer-6q7hz > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-ZYqfc.framer-6q7hz > :first-child { margin-top: 0px; } .framer-ZYqfc.framer-6q7hz > :last-child { margin-bottom: 0px; } }",
    ".framer-ZYqfc.framer-v-mcv2pz.framer-6q7hz { cursor: pointer; }",
    '.framer-ZYqfc[data-border="true"]::after, .framer-ZYqfc [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
  ],
  ze = J(ot, nt, "framer-ZYqfc"),
  He = ze;
ze.displayName = "Copy";
ze.defaultProps = { height: 36.5, width: 130 };
E(ze, {
  variant: {
    options: ["roypuGmOl", "Hkfjl2l0B", "q2os6Ofg7"],
    optionTitles: ["Variant 1", "Variant 2", "Variant 3"],
    title: "Variant",
    type: p.Enum,
  },
});
H(
  ze,
  [
    {
      explicitInter: !0,
      fonts: [
        {
          family: "Montserrat",
          source: "google",
          style: "normal",
          url: "https://fonts.gstatic.com/s/montserrat/v26/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCtZ6Ew7Y3tcoqK5.woff2",
          weight: "500",
        },
      ],
    },
    ...Ja,
  ],
  { supportsExplicitInterCodegen: !0 }
);
var lt = ["LqeypFFz4", "PBJXi6IGV"],
  mt = "framer-Jw97z",
  ft = { LqeypFFz4: "framer-v-crgyh", PBJXi6IGV: "framer-v-7yc9nc" };
function st(r, ...a) {
  let l = {};
  return a?.forEach((m) => m && Object.assign(l, r[m])), l;
}
var ct = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: "spring" },
  dt = ({ value: r, children: a }) => {
    let l = ee(A),
      m = r ?? l.transition,
      c = I(() => ({ ...l, transition: m }), [JSON.stringify(m)]);
    return e(A.Provider, { value: c, children: a });
  },
  pt = i(t),
  ht = { "Variant 1": "LqeypFFz4", "Variant 2": "PBJXi6IGV" },
  gt = ({ height: r, id: a, width: l, ...m }) => {
    var c, d;
    return {
      ...m,
      variant:
        (d = (c = ht[m.variant]) !== null && c !== void 0 ? c : m.variant) !==
          null && d !== void 0
          ? d
          : "LqeypFFz4",
    };
  },
  xt = (r, a) => a.join("-") + r.layoutDependency,
  ut = j(function (r, a) {
    let { activeLocale: l, setLocale: m } = q(),
      { style: c, className: d, layoutId: h, variant: x, ...y } = gt(r),
      {
        baseVariant: o,
        classNames: L,
        gestureVariant: u,
        setGestureState: g,
        setVariant: b,
        variants: v,
      } = ae({
        cycleOrder: lt,
        defaultVariant: "LqeypFFz4",
        variant: x,
        variantClassNames: ft,
      }),
      s = xt(r, v),
      { activeVariantCallback: Y, delay: k } = oe(o),
      z = Y(async (...K) => {
        b("PBJXi6IGV");
      }),
      S = Y(async (...K) => {
        b("LqeypFFz4");
      }),
      V = O(null),
      T = Q(),
      M = [],
      G = re();
    return e(Z, {
      id: h ?? T,
      children: e(pt, {
        animate: v,
        initial: !1,
        children: e(dt, {
          value: ct,
          children: e(R, {
            href: "https://mighty-2.gitbook.io/vistax",
            openInNewTab: !1,
            children: e(i.a, {
              ...y,
              className: `${W(mt, ...M, "framer-crgyh", d, L)} framer-14bxrkl`,
              "data-framer-name": "Variant 1",
              "data-highlight": !0,
              layoutDependency: s,
              layoutId: "LqeypFFz4",
              onHoverEnd: () => g({ isHovered: !1 }),
              onHoverStart: () => g({ isHovered: !0 }),
              onMouseEnter: z,
              onTap: () => g({ isPressed: !1 }),
              onTapCancel: () => g({ isPressed: !1 }),
              onTapStart: () => g({ isPressed: !0 }),
              ref: a ?? V,
              style: {
                backgroundColor: "rgb(16, 192, 240)",
                borderBottomLeftRadius: 25,
                borderBottomRightRadius: 25,
                borderTopLeftRadius: 25,
                borderTopRightRadius: 25,
                ...c,
              },
              variants: { PBJXi6IGV: { backgroundColor: "rgb(0, 194, 181)" } },
              ...st(
                {
                  PBJXi6IGV: {
                    "data-framer-name": "Variant 2",
                    onMouseLeave: S,
                  },
                },
                o,
                u
              ),
              children: e(f, {
                __fromCanvasComponent: !0,
                children: e(t, {
                  children: e(i.p, {
                    style: {
                      "--font-selector": "R0Y7UG9wcGlucy01MDA=",
                      "--framer-font-family":
                        '"Poppins", "Poppins Placeholder", sans-serif',
                      "--framer-font-weight": "500",
                      "--framer-letter-spacing": "-0.04em",
                      "--framer-text-color":
                        "var(--extracted-r6o4lv, rgb(255, 255, 255))",
                    },
                    children: "Learn More",
                  }),
                }),
                className: "framer-69ofkr",
                fonts: ["GF;Poppins-500"],
                layoutDependency: s,
                layoutId: "DEpG5t05f",
                style: {
                  "--extracted-r6o4lv": "rgb(255, 255, 255)",
                  "--framer-link-text-color": "rgb(0, 153, 255)",
                  "--framer-link-text-decoration": "underline",
                  textShadow: "0px 1px 2px rgba(0,0,0,0.25)",
                },
                verticalAlignment: "top",
                withExternalLayout: !0,
              }),
            }),
          }),
        }),
      }),
    });
  }),
  yt = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-Jw97z.framer-14bxrkl, .framer-Jw97z .framer-14bxrkl { display: block; }",
    ".framer-Jw97z.framer-crgyh { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 40px; justify-content: center; overflow: hidden; padding: 15px 15px 15px 15px; position: relative; text-decoration: none; width: 142px; will-change: var(--framer-will-change-override, transform); }",
    ".framer-Jw97z .framer-69ofkr { flex: none; height: auto; position: relative; white-space: pre; width: auto; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-Jw97z.framer-crgyh { gap: 0px; } .framer-Jw97z.framer-crgyh > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-Jw97z.framer-crgyh > :first-child { margin-left: 0px; } .framer-Jw97z.framer-crgyh > :last-child { margin-right: 0px; } }",
  ],
  Ce = J(ut, yt, "framer-Jw97z"),
  Xe = Ce;
Ce.displayName = "Learn";
Ce.defaultProps = { height: 40, width: 142 };
E(Ce, {
  variant: {
    options: ["LqeypFFz4", "PBJXi6IGV"],
    optionTitles: ["Variant 1", "Variant 2"],
    title: "Variant",
    type: p.Enum,
  },
});
H(
  Ce,
  [
    {
      explicitInter: !0,
      fonts: [
        {
          family: "Poppins",
          source: "google",
          style: "normal",
          url: "https://fonts.gstatic.com/s/poppins/v20/pxiByp8kv8JHgFVrLGT9V15vFP-KUEg.woff2",
          weight: "500",
        },
      ],
    },
  ],
  { supportsExplicitInterCodegen: !0 }
);
var wt = U(Qe),
  bt = U(ne),
  vt = U(Je),
  Ft = lr(Je),
  Ot = U(Xe),
  Yt = U(Be),
  kt = tr(F),
  Rt = U(le),
  St = U(He);
var zt = {
    aNwAkBX2Q: "(min-width: 810px) and (max-width: 1199px)",
    k3DKOFl84: "(min-width: 3840px)",
    puNfXGbrf: "(min-width: 1200px) and (max-width: 3839px)",
    WIuWQVMVd: "(max-width: 809px)",
  },
  Mr = () => typeof document < "u",
  Ir = "framer-O5Y6F",
  Ct = {
    aNwAkBX2Q: "framer-v-1326u90",
    k3DKOFl84: "framer-v-nlvfdy",
    puNfXGbrf: "framer-v-193zvy4",
    WIuWQVMVd: "framer-v-tbtles",
  },
  _e = (r, a) => `perspective(1200px) translate(-50%, -50%) ${a}`,
  Tt = { delay: 0, duration: 5, ease: [0, 0, 1, 1], type: "tween" },
  Lt = {
    opacity: 1,
    rotate: 360,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    x: 0,
    y: 0,
  },
  Ar = (r, a) => `translate(-50%, -50%) ${a}`,
  Mt = (r, a) => `perspective(1200px) translateX(-50%) ${a}`,
  It = { damping: 30, delay: 0, mass: 1, stiffness: 400, type: "spring" },
  At = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 0.9,
    skewX: 0,
    skewY: 0,
    transition: It,
  },
  fe = (r, a) => `perspective(1200px) ${a}`,
  Ve = Ke(),
  Et = {
    "4k": "k3DKOFl84",
    Desktop: "puNfXGbrf",
    Phone: "WIuWQVMVd",
    Tablet: "aNwAkBX2Q",
  },
  Pt = ({ height: r, id: a, width: l, ...m }) => {
    var c, d;
    return {
      ...m,
      variant:
        (d = (c = Et[m.variant]) !== null && c !== void 0 ? c : m.variant) !==
          null && d !== void 0
          ? d
          : "puNfXGbrf",
    };
  },
  Vt = j(function (r, a) {
    let { activeLocale: l, setLocale: m } = q(),
      { style: c, className: d, layoutId: h, variant: x, ...y } = Pt(r);
    er(() => {
      let ce = Ke(void 0, l);
      if (((document.title = ce.title || ""), ce.viewport)) {
        var $;
        ($ = document.querySelector('meta[name="viewport"]')) === null ||
          $ === void 0 ||
          $.setAttribute("content", ce.viewport);
      }
      if (ce.bodyClassName)
        return (
          Array.from(document.body.classList)
            .filter((de) => de.startsWith("framer-body-"))
            .map((de) => document.body.classList.remove(de)),
          document.body.classList.add(`${ce.bodyClassName}-framer-O5Y6F`),
          () => {
            document.body.classList.remove(`${ce.bodyClassName}-framer-O5Y6F`);
          }
        );
    }, [void 0, l]);
    let [o, L] = nr(x, zt, !1),
      u = void 0,
      g = O(null),
      b = he("SRK5yIuMB"),
      v = O(null),
      s = he("NWAyV0MdW"),
      Y = O(null),
      k = () => (o === "WIuWQVMVd" ? !Mr() : !0),
      z = () => (o === "WIuWQVMVd" ? !0 : !Mr()),
      S = he("nUYiCdHF0"),
      V = O(null),
      T = he("Rx7accoiM"),
      M = O(null),
      G = he("vH1s578DV"),
      K = O(null),
      B = he("mo5fzag6J"),
      P = O(null),
      we = he("ai38zY96L"),
      se = O(null),
      Te = he("Ie3G_edR7"),
      be = O(null),
      je = Q(),
      xe = [];
    return (
      ir({}),
      e(or.Provider, {
        value: { primaryVariantId: "puNfXGbrf", variantClassNames: Ct },
        children: n(Z, {
          id: h ?? je,
          children: [
            n(i.div, {
              ...y,
              className: W(Ir, ...xe, "framer-193zvy4", d),
              ref: a ?? g,
              style: { ...c },
              children: [
                e(C, {
                  width: "100vw",
                  children: e(ie, {
                    className: "framer-1jnd53f-container",
                    layoutScroll: !0,
                    children: e(Qe, {
                      height: "100%",
                      id: "MoK4Hi9Jo",
                      layoutId: "MoK4Hi9Jo",
                      style: { height: "100%", width: "100%" },
                      variant: "Z_kdo4eGv",
                      width: "100%",
                    }),
                  }),
                }),
                n("div", {
                  background: {
                    alt: "",
                    fit: "fill",
                    intrinsicHeight: 1190,
                    intrinsicWidth: 2380,
                  },
                  className: "framer-l9ylc9",
                  "data-framer-name": "Section 1",
                  name: "Section 1",
                  children: [
                    e("div", {
                      className: "framer-1j62a04",
                      children: e(C, {
                        children: e(ie, {
                          className: "framer-1dogwpi-container",
                          children: e(ne, {
                            backgroundColor: "rgba(0, 0, 0, 0)",
                            borderRadius: 0,
                            bottomLeftRadius: 0,
                            bottomRightRadius: 0,
                            controls: !1,
                            height: "100%",
                            id: "UzKvUp8Zp",
                            isMixedBorderRadius: !1,
                            layoutId: "UzKvUp8Zp",
                            loop: !0,
                            muted: !0,
                            objectFit: "cover",
                            playing: !0,
                            posterEnabled: !1,
                            srcFile:
                              "https://framerusercontent.com/assets/yh2cdGkBcsFFu1KVl9Jh0ImFLzY.mp4",
                            srcType: "Upload",
                            srcUrl:
                              "https://assets.mixkit.co/videos/preview/mixkit-shining-sun-in-the-sky-surrounded-by-moving-clouds-31793-small.mp4",
                            startTime: 0,
                            style: { height: "100%", width: "100%" },
                            topLeftRadius: 0,
                            topRightRadius: 0,
                            volume: 25,
                            width: "100%",
                          }),
                        }),
                      }),
                    }),
                    n("div", {
                      className: "framer-7lxdii",
                      "data-framer-name": "Main",
                      name: "Main",
                      children: [
                        e("div", {
                          className: "framer-z14e78",
                          children: e(w, {
                            breakpoint: o,
                            overrides: {
                              aNwAkBX2Q: { width: "10px" },
                              WIuWQVMVd: { width: "100vw" },
                            },
                            children: e(C, {
                              children: e(ie, {
                                className: "framer-wwicdc-container",
                                children: e(w, {
                                  breakpoint: o,
                                  overrides: {
                                    aNwAkBX2Q: {
                                      style: { width: "100%" },
                                      variant: "E_Oku47lh",
                                    },
                                    WIuWQVMVd: {
                                      __framer__variantAppearEffectEnabled:
                                        void 0,
                                      style: { width: "100%" },
                                      variant: "s3mX7LzQV",
                                    },
                                  },
                                  children: e(Ft, {
                                    __framer__animateOnce: !1,
                                    __framer__scrollDirection: {
                                      direction: "down",
                                    },
                                    __framer__threshold: 0.5,
                                    __framer__variantAppearEffectEnabled: !0,
                                    height: "100%",
                                    id: "SGrRrYGLh",
                                    layoutId: "SGrRrYGLh",
                                    variant: "JHL7wiVhj",
                                    width: "100%",
                                  }),
                                }),
                              }),
                            }),
                          }),
                        }),
                        n("div", {
                          className: "framer-zjh0o5",
                          children: [
                            n("div", {
                              className: "framer-1x96k7b",
                              children: [
                                e(w, {
                                  breakpoint: o,
                                  overrides: {
                                    aNwAkBX2Q: {
                                      children: e(t, {
                                        children: e("p", {
                                          style: {
                                            "--font-selector":
                                              "R0Y7U29yYS03MDA=",
                                            "--framer-font-family":
                                              '"Sora", "Sora Placeholder", sans-serif',
                                            "--framer-font-size": "31px",
                                            "--framer-font-weight": "700",
                                            "--framer-text-alignment": "center",
                                            "--framer-text-color":
                                              "rgb(255, 255, 255)",
                                          },
                                          children:
                                            "Craft unique, premium-quality, proprietary assets tailored to your gaming ventures",
                                        }),
                                      }),
                                    },
                                    WIuWQVMVd: {
                                      children: e(t, {
                                        children: e("p", {
                                          style: {
                                            "--font-selector":
                                              "R0Y7U29yYS03MDA=",
                                            "--framer-font-family":
                                              '"Sora", "Sora Placeholder", sans-serif',
                                            "--framer-font-size": "20px",
                                            "--framer-font-weight": "700",
                                            "--framer-text-alignment": "center",
                                            "--framer-text-color":
                                              "rgb(255, 255, 255)",
                                          },
                                          children:
                                            "Craft unique, premium-quality, proprietary assets tailored to your gaming ventures",
                                        }),
                                      }),
                                    },
                                  },
                                  children: e(f, {
                                    __fromCanvasComponent: !0,
                                    children: e(t, {
                                      children: e("p", {
                                        style: {
                                          "--font-selector": "R0Y7U29yYS03MDA=",
                                          "--framer-font-family":
                                            '"Sora", "Sora Placeholder", sans-serif',
                                          "--framer-font-size": "34px",
                                          "--framer-font-weight": "700",
                                          "--framer-text-alignment": "center",
                                          "--framer-text-color":
                                            "rgb(255, 255, 255)",
                                        },
                                        children:
                                          "Craft unique, premium-quality, proprietary assets tailored to your gaming ventures",
                                      }),
                                    }),
                                    className: "framer-38n2ck",
                                    fonts: ["GF;Sora-700"],
                                    verticalAlignment: "top",
                                    withExternalLayout: !0,
                                  }),
                                }),
                                e(w, {
                                  breakpoint: o,
                                  overrides: {
                                    WIuWQVMVd: {
                                      children: e(t, {
                                        children: e("p", {
                                          style: {
                                            "--font-selector":
                                              "R0Y7UG9wcGlucy01MDA=",
                                            "--framer-font-family":
                                              '"Poppins", "Poppins Placeholder", sans-serif',
                                            "--framer-font-size": "13px",
                                            "--framer-font-weight": "500",
                                            "--framer-text-alignment": "center",
                                            "--framer-text-color":
                                              "rgba(255, 255, 255, 0.7)",
                                          },
                                          children:
                                            "Revolutionize game development with VistaX's AI engine: Craft assets, tokenize via NEXUS, trade with predictive AI insights, and rent from our elite GPU suite, all in a single, groundbreaking workflow",
                                        }),
                                      }),
                                    },
                                  },
                                  children: e(f, {
                                    __fromCanvasComponent: !0,
                                    children: e(t, {
                                      children: e("p", {
                                        style: {
                                          "--font-selector":
                                            "R0Y7UG9wcGlucy01MDA=",
                                          "--framer-font-family":
                                            '"Poppins", "Poppins Placeholder", sans-serif',
                                          "--framer-font-weight": "500",
                                          "--framer-text-alignment": "center",
                                          "--framer-text-color":
                                            "rgba(255, 255, 255, 0.7)",
                                        },
                                        children:
                                          "Revolutionize game development with VistaX's AI engine: Craft assets, tokenize via NEXUS, trade with predictive AI insights, and rent from our elite GPU suite, all in a single, groundbreaking workflow",
                                      }),
                                    }),
                                    className: "framer-1uwe3a",
                                    fonts: ["GF;Poppins-500"],
                                    verticalAlignment: "top",
                                    withExternalLayout: !0,
                                  }),
                                }),
                              ],
                            }),
                            e("div", { className: "framer-8r7r1s" }),
                            n("div", {
                              className: "framer-g311aq",
                              children: [
                                e(C, {
                                  width: "140px",
                                  children: e(ie, {
                                    className: "framer-1ytj923-container",
                                    children: e(Xe, {
                                      height: "100%",
                                      id: "ZBtkpxF6M",
                                      layoutId: "ZBtkpxF6M",
                                      style: { height: "100%", width: "100%" },
                                      variant: "LqeypFFz4",
                                      width: "100%",
                                    }),
                                  }),
                                }),
                                e(R, {
                                  href: "https://docs.vistaxai.xyz/
",
                                  openInNewTab: !1,
                                  children: n("a", {
                                    className: "framer-gqeenb framer-z95135",
                                    children: [    
                                      e(f, {
                                        __fromCanvasComponent: !0,
                                        children: e(t, {
                                          children: e("p", {
                                            style: {
                                              "--font-selector":
                                                "R0Y7UG9wcGlucy02MDA=",
                                              "--framer-font-family":
                                                '"Poppins", "Poppins Placeholder", sans-serif',
                                              "--framer-font-weight": "600",
                                              "--framer-text-color":
                                                "rgb(255, 255, 255)",
                                            },
                                            children: "Staking",
                                          }),
                                        }),
                                        className: "framer-ogzqbh",
                                        fonts: ["GF;Poppins-600"],
                                        verticalAlignment: "top",
                                        withExternalLayout: !0,
                                      }),
                                    ],
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                        e("div", { className: "framer-m7k3rj" }),
                      ],
                    }),
                  ],
                }),
                n("header", {
                  className: "framer-1a7osbk",
                  "data-border": !0,
                  "data-framer-name": "Header",
                  name: "Header",
                  children: [
                    e(w, {
                      breakpoint: o,
                      overrides: {
                        WIuWQVMVd: {
                          children: e(t, {
                            children: e("p", {
                              style: {
                                "--font-selector": "R0Y7U29yYS01MDA=",
                                "--framer-font-family":
                                  '"Sora", "Sora Placeholder", sans-serif',
                                "--framer-font-size": "21px",
                                "--framer-font-weight": "500",
                                "--framer-letter-spacing": "-0.05em",
                                "--framer-text-color": "rgb(255, 255, 255)",
                              },
                              children: e("span", {
                                "data-text-fill": "true",
                                style: {
                                  backgroundImage:
                                    "linear-gradient(90deg, rgba(255, 255, 255, 0.7) 0%, rgba(255, 255, 255, 0.4) 100%)",
                                },
                                children: "Our Services",
                              }),
                            }),
                          }),
                        },
                      },
                      children: e(f, {
                        __fromCanvasComponent: !0,
                        children: e(t, {
                          children: e("p", {
                            style: {
                              "--font-selector": "R0Y7U29yYS01MDA=",
                              "--framer-font-family":
                                '"Sora", "Sora Placeholder", sans-serif',
                              "--framer-font-size": "34px",
                              "--framer-font-weight": "500",
                              "--framer-letter-spacing": "-0.05em",
                              "--framer-text-color": "rgb(255, 255, 255)",
                            },
                            children: e("span", {
                              "data-text-fill": "true",
                              style: {
                                backgroundImage:
                                  "linear-gradient(90deg, rgba(255, 255, 255, 0.7) 0%, rgba(255, 255, 255, 0.4) 100%)",
                              },
                              children: "Our Services",
                            }),
                          }),
                        }),
                        className: "framer-ujuhi3",
                        fonts: ["GF;Sora-500"],
                        verticalAlignment: "top",
                        withExternalLayout: !0,
                      }),
                    }),
                    e("div", {
                      className: "framer-1t4gckd",
                      children: e("div", {
                        className: "framer-dndma0",
                        children: n("div", {
                          className: "framer-14rhzhf",
                          children: [
                            e("div", {
                              className: "framer-m8ladj",
                              "data-border": !0,
                              children: n("div", {
                                className: "framer-1tva6z4",
                                children: [
                                  n("div", {
                                    className: "framer-duzv6a",
                                    children: [
                                      e("div", { className: "framer-d6hvz3" }),
                                      e(w, {
                                        breakpoint: o,
                                        overrides: {
                                          aNwAkBX2Q: {
                                            background: {
                                              alt: "",
                                              fit: "fill",
                                              intrinsicHeight: 961,
                                              intrinsicWidth: 932.5,
                                              loading: "lazy",
                                              pixelHeight: 1922,
                                              pixelWidth: 1865,
                                              sizes: "116.5px",
                                              src: "https://framerusercontent.com/images/zBbUI23HLL17xBctqXm2uca7uOI.svg?scale-down-to=1024",
                                              srcSet:
                                                "https://framerusercontent.com/images/zBbUI23HLL17xBctqXm2uca7uOI.svg?scale-down-to=1024 993w,https://framerusercontent.com/images/zBbUI23HLL17xBctqXm2uca7uOI.svg 1865w",
                                            },
                                          },
                                        },
                                        children: e(F, {
                                          background: {
                                            alt: "",
                                            fit: "fill",
                                            intrinsicHeight: 961,
                                            intrinsicWidth: 932.5,
                                            pixelHeight: 1922,
                                            pixelWidth: 1865,
                                            sizes: "116.5px",
                                            src: "https://framerusercontent.com/images/zBbUI23HLL17xBctqXm2uca7uOI.svg?scale-down-to=1024",
                                            srcSet:
                                              "https://framerusercontent.com/images/zBbUI23HLL17xBctqXm2uca7uOI.svg?scale-down-to=1024 993w,https://framerusercontent.com/images/zBbUI23HLL17xBctqXm2uca7uOI.svg 1865w",
                                          },
                                          className: "framer-v3qnbw",
                                          "data-framer-name": "graphic",
                                          name: "graphic",
                                        }),
                                      }),
                                    ],
                                  }),
                                  n("div", {
                                    className: "framer-14zao7r",
                                    children: [
                                      e("div", {
                                        className: "framer-14nodav",
                                        children: e("div", {
                                          className: "framer-5e4nu",
                                          children: e("div", {
                                            className: "framer-ahl50x",
                                            children: e(f, {
                                              __fromCanvasComponent: !0,
                                              children: e(t, {
                                                children: e("p", {
                                                  style: {
                                                    "--font-selector":
                                                      "R0Y7UG9wcGlucy02MDA=",
                                                    "--framer-font-family":
                                                      '"Poppins", "Poppins Placeholder", sans-serif',
                                                    "--framer-font-size":
                                                      "21px",
                                                    "--framer-font-weight":
                                                      "600",
                                                    "--framer-text-color":
                                                      "rgb(255, 255, 255)",
                                                  },
                                                  children:
                                                    "Tokenize Game Assets",
                                                }),
                                              }),
                                              className: "framer-1thesjn",
                                              fonts: ["GF;Poppins-600"],
                                              verticalAlignment: "top",
                                              withExternalLayout: !0,
                                            }),
                                          }),
                                        }),
                                      }),
                                      e(f, {
                                        __fromCanvasComponent: !0,
                                        children: n(t, {
                                          children: [
                                            e("p", {
                                              style: {
                                                "--font-selector":
                                                  "R0Y7UG9wcGlucy1yZWd1bGFy",
                                                "--framer-font-family":
                                                  '"Poppins", "Poppins Placeholder", sans-serif',
                                                "--framer-font-size": "18px",
                                                "--framer-letter-spacing":
                                                  "-0.03em",
                                                "--framer-text-alignment":
                                                  "center",
                                                "--framer-text-color":
                                                  "rgba(255, 255, 255, 0.5)",
                                              },
                                              children:
                                                "Tokenization is the process of converting an asset into a digital token on the blockchain, much like how a deed represents ownership of land in the real world.",
                                            }),
                                            e("p", {
                                              style: {
                                                "--font-selector":
                                                  "R0Y7UG9wcGlucy1yZWd1bGFy",
                                                "--framer-font-family":
                                                  '"Poppins", "Poppins Placeholder", sans-serif',
                                                "--framer-font-size": "18px",
                                                "--framer-letter-spacing":
                                                  "-0.03em",
                                                "--framer-text-alignment":
                                                  "center",
                                                "--framer-text-color":
                                                  "rgba(255, 255, 255, 0.5)",
                                              },
                                              children: e("br", {
                                                className: "trailing-break",
                                              }),
                                            }),
                                          ],
                                        }),
                                        className: "framer-3e85ky",
                                        fonts: ["GF;Poppins-regular"],
                                        verticalAlignment: "top",
                                        withExternalLayout: !0,
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            }),
                            e("div", {
                              className: "framer-phvcje",
                              "data-border": !0,
                              children: n("div", {
                                className: "framer-183mz1s",
                                children: [
                                  n("div", {
                                    className: "framer-1vf7dr9",
                                    children: [
                                      e("div", { className: "framer-10g7gjk" }),
                                      e(w, {
                                        breakpoint: o,
                                        overrides: {
                                          aNwAkBX2Q: {
                                            background: {
                                              alt: "",
                                              fit: "fill",
                                              intrinsicHeight: 473,
                                              intrinsicWidth: 526.5,
                                              loading: "lazy",
                                              pixelHeight: 946,
                                              pixelWidth: 1053,
                                              sizes: "133.5729px",
                                              src: "https://framerusercontent.com/images/9oso6EFhDzS4jLJE5QP2DpXzCTg.svg?scale-down-to=1024",
                                              srcSet:
                                                "https://framerusercontent.com/images/9oso6EFhDzS4jLJE5QP2DpXzCTg.svg?scale-down-to=512 512w,https://framerusercontent.com/images/9oso6EFhDzS4jLJE5QP2DpXzCTg.svg?scale-down-to=1024 1024w,https://framerusercontent.com/images/9oso6EFhDzS4jLJE5QP2DpXzCTg.svg 1053w",
                                            },
                                          },
                                          WIuWQVMVd: {
                                            background: {
                                              alt: "",
                                              fit: "fill",
                                              intrinsicHeight: 473,
                                              intrinsicWidth: 526.5,
                                              loading: "lazy",
                                              pixelHeight: 946,
                                              pixelWidth: 1053,
                                              sizes: "133.5729px",
                                              src: "https://framerusercontent.com/images/9oso6EFhDzS4jLJE5QP2DpXzCTg.svg?scale-down-to=1024",
                                              srcSet:
                                                "https://framerusercontent.com/images/9oso6EFhDzS4jLJE5QP2DpXzCTg.svg?scale-down-to=512 512w,https://framerusercontent.com/images/9oso6EFhDzS4jLJE5QP2DpXzCTg.svg?scale-down-to=1024 1024w,https://framerusercontent.com/images/9oso6EFhDzS4jLJE5QP2DpXzCTg.svg 1053w",
                                            },
                                          },
                                        },
                                        children: e(F, {
                                          background: {
                                            alt: "",
                                            fit: "fill",
                                            intrinsicHeight: 473,
                                            intrinsicWidth: 526.5,
                                            pixelHeight: 946,
                                            pixelWidth: 1053,
                                            sizes: "133.5729px",
                                            src: "https://framerusercontent.com/images/9oso6EFhDzS4jLJE5QP2DpXzCTg.svg?scale-down-to=1024",
                                            srcSet:
                                              "https://framerusercontent.com/images/9oso6EFhDzS4jLJE5QP2DpXzCTg.svg?scale-down-to=512 512w,https://framerusercontent.com/images/9oso6EFhDzS4jLJE5QP2DpXzCTg.svg?scale-down-to=1024 1024w,https://framerusercontent.com/images/9oso6EFhDzS4jLJE5QP2DpXzCTg.svg 1053w",
                                          },
                                          className: "framer-1pkqxk8",
                                          "data-framer-name": "graphic",
                                          name: "graphic",
                                        }),
                                      }),
                                    ],
                                  }),
                                  n("div", {
                                    className: "framer-183eb3t",
                                    children: [
                                      e("div", {
                                        className: "framer-z3xeq3",
                                        children: e("div", {
                                          className: "framer-di6tbe",
                                          children: e("div", {
                                            className: "framer-3xuq95",
                                            children: e(f, {
                                              __fromCanvasComponent: !0,
                                              children: e(t, {
                                                children: e("p", {
                                                  style: {
                                                    "--font-selector":
                                                      "R0Y7UG9wcGlucy02MDA=",
                                                    "--framer-font-family":
                                                      '"Poppins", "Poppins Placeholder", sans-serif',
                                                    "--framer-font-size":
                                                      "21px",
                                                    "--framer-font-weight":
                                                      "600",
                                                    "--framer-text-color":
                                                      "rgb(255, 255, 255)",
                                                  },
                                                  children: "Trade Based on AI",
                                                }),
                                              }),
                                              className: "framer-1p8y6td",
                                              fonts: ["GF;Poppins-600"],
                                              verticalAlignment: "top",
                                              withExternalLayout: !0,
                                            }),
                                          }),
                                        }),
                                      }),
                                      e(f, {
                                        __fromCanvasComponent: !0,
                                        children: e(t, {
                                          children: e("p", {
                                            style: {
                                              "--font-selector":
                                                "R0Y7UG9wcGlucy1yZWd1bGFy",
                                              "--framer-font-family":
                                                '"Poppins", "Poppins Placeholder", sans-serif',
                                              "--framer-font-size": "18px",
                                              "--framer-letter-spacing":
                                                "-0.03em",
                                              "--framer-text-alignment":
                                                "center",
                                              "--framer-text-color":
                                                "rgba(255, 255, 255, 0.5)",
                                            },
                                            children:
                                              "The trading experience on VistaX is not just about swapping items. It's backed by sophisticated AI on NEXUS gateway that helps in offering predictive analytics and pricing recommendations.",
                                          }),
                                        }),
                                        className: "framer-16ycp4x",
                                        fonts: ["GF;Poppins-regular"],
                                        verticalAlignment: "top",
                                        withExternalLayout: !0,
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            }),
                            e("div", {
                              className: "framer-11hkzdp",
                              "data-border": !0,
                              children: n("div", {
                                className: "framer-1w0rnuh",
                                children: [
                                  n("div", {
                                    className: "framer-zcjpe",
                                    children: [
                                      e("div", { className: "framer-11rmz6p" }),
                                      e(w, {
                                        breakpoint: o,
                                        overrides: {
                                          aNwAkBX2Q: {
                                            background: {
                                              alt: "",
                                              fit: "fill",
                                              intrinsicHeight: 704,
                                              intrinsicWidth: 1026.5,
                                              loading: "lazy",
                                              pixelHeight: 1408,
                                              pixelWidth: 2053,
                                              sizes: "175px",
                                              src: "https://framerusercontent.com/images/BTnoa8S9CyRZtss3Gn89ZomAUU.svg?scale-down-to=2048",
                                              srcSet:
                                                "https://framerusercontent.com/images/BTnoa8S9CyRZtss3Gn89ZomAUU.svg?scale-down-to=512 512w,https://framerusercontent.com/images/BTnoa8S9CyRZtss3Gn89ZomAUU.svg?scale-down-to=1024 1024w,https://framerusercontent.com/images/BTnoa8S9CyRZtss3Gn89ZomAUU.svg?scale-down-to=2048 2048w,https://framerusercontent.com/images/BTnoa8S9CyRZtss3Gn89ZomAUU.svg 2053w",
                                            },
                                          },
                                          WIuWQVMVd: {
                                            background: {
                                              alt: "",
                                              fit: "fill",
                                              intrinsicHeight: 704,
                                              intrinsicWidth: 1026.5,
                                              loading: "lazy",
                                              pixelHeight: 1408,
                                              pixelWidth: 2053,
                                              sizes: "175px",
                                              src: "https://framerusercontent.com/images/BTnoa8S9CyRZtss3Gn89ZomAUU.svg?scale-down-to=2048",
                                              srcSet:
                                                "https://framerusercontent.com/images/BTnoa8S9CyRZtss3Gn89ZomAUU.svg?scale-down-to=512 512w,https://framerusercontent.com/images/BTnoa8S9CyRZtss3Gn89ZomAUU.svg?scale-down-to=1024 1024w,https://framerusercontent.com/images/BTnoa8S9CyRZtss3Gn89ZomAUU.svg?scale-down-to=2048 2048w,https://framerusercontent.com/images/BTnoa8S9CyRZtss3Gn89ZomAUU.svg 2053w",
                                            },
                                          },
                                        },
                                        children: e(F, {
                                          background: {
                                            alt: "",
                                            fit: "fill",
                                            intrinsicHeight: 704,
                                            intrinsicWidth: 1026.5,
                                            pixelHeight: 1408,
                                            pixelWidth: 2053,
                                            sizes: "175px",
                                            src: "https://framerusercontent.com/images/BTnoa8S9CyRZtss3Gn89ZomAUU.svg?scale-down-to=2048",
                                            srcSet:
                                              "https://framerusercontent.com/images/BTnoa8S9CyRZtss3Gn89ZomAUU.svg?scale-down-to=512 512w,https://framerusercontent.com/images/BTnoa8S9CyRZtss3Gn89ZomAUU.svg?scale-down-to=1024 1024w,https://framerusercontent.com/images/BTnoa8S9CyRZtss3Gn89ZomAUU.svg?scale-down-to=2048 2048w,https://framerusercontent.com/images/BTnoa8S9CyRZtss3Gn89ZomAUU.svg 2053w",
                                          },
                                          className: "framer-n5n46w",
                                          "data-framer-name": "graphic",
                                          name: "graphic",
                                        }),
                                      }),
                                    ],
                                  }),
                                  n("div", {
                                    className: "framer-k9lskp",
                                    children: [
                                      e("div", {
                                        className: "framer-wkcdj0",
                                        children: e("div", {
                                          className: "framer-cjnfpx",
                                          children: e("div", {
                                            className: "framer-1du74fv",
                                            children: e(f, {
                                              __fromCanvasComponent: !0,
                                              children: e(t, {
                                                children: e("p", {
                                                  style: {
                                                    "--font-selector":
                                                      "R0Y7UG9wcGlucy02MDA=",
                                                    "--framer-font-family":
                                                      '"Poppins", "Poppins Placeholder", sans-serif',
                                                    "--framer-font-size":
                                                      "21px",
                                                    "--framer-font-weight":
                                                      "600",
                                                    "--framer-text-color":
                                                      "rgb(255, 255, 255)",
                                                  },
                                                  children:
                                                    "Rent Gaming Servers",
                                                }),
                                              }),
                                              className: "framer-y7o748",
                                              fonts: ["GF;Poppins-600"],
                                              verticalAlignment: "top",
                                              withExternalLayout: !0,
                                            }),
                                          }),
                                        }),
                                      }),
                                      e(f, {
                                        __fromCanvasComponent: !0,
                                        children: n(t, {
                                          children: [
                                            e("p", {
                                              style: {
                                                "--font-selector":
                                                  "R0Y7UG9wcGlucy1yZWd1bGFy",
                                                "--framer-font-family":
                                                  '"Poppins", "Poppins Placeholder", sans-serif',
                                                "--framer-font-size": "18px",
                                                "--framer-letter-spacing":
                                                  "-0.03em",
                                                "--framer-text-alignment":
                                                  "center",
                                                "--framer-text-color":
                                                  "rgba(255, 255, 255, 0.5)",
                                              },
                                              children:
                                                "The creation of high-quality game assets is a resource-intensive task. Traditionally, this would require substantial upfront investment in hardware for developers.",
                                            }),
                                            e("p", {
                                              style: {
                                                "--font-selector":
                                                  "R0Y7UG9wcGlucy1yZWd1bGFy",
                                                "--framer-font-family":
                                                  '"Poppins", "Poppins Placeholder", sans-serif',
                                                "--framer-font-size": "18px",
                                                "--framer-letter-spacing":
                                                  "-0.03em",
                                                "--framer-text-alignment":
                                                  "center",
                                                "--framer-text-color":
                                                  "rgba(255, 255, 255, 0.5)",
                                              },
                                              children: e("br", {
                                                className: "trailing-break",
                                              }),
                                            }),
                                          ],
                                        }),
                                        className: "framer-13j9od7",
                                        fonts: ["GF;Poppins-regular"],
                                        verticalAlignment: "top",
                                        withExternalLayout: !0,
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                      }),
                    }),
                  ],
                }),
                n("header", {
                  className: "framer-d3hm2h",
                  "data-framer-name": "Tokenomics",
                  id: b,
                  name: "Tokenomics",
                  ref: v,
                  children: [
                    n("div", {
                      className: "framer-syduod",
                      children: [
                        e(w, {
                          breakpoint: o,
                          overrides: {
                            WIuWQVMVd: {
                              children: n(t, {
                                children: [
                                  e("p", {
                                    style: {
                                      "--font-selector": "R0Y7U29yYS01MDA=",
                                      "--framer-font-family":
                                        '"Sora", "Sora Placeholder", sans-serif',
                                      "--framer-font-size": "34px",
                                      "--framer-font-weight": "500",
                                      "--framer-letter-spacing": "-0.05em",
                                      "--framer-text-alignment": "center",
                                      "--framer-text-color":
                                        "rgb(255, 255, 255)",
                                    },
                                    children: e("span", {
                                      "data-text-fill": "true",
                                      style: {
                                        backgroundImage:
                                          "linear-gradient(90deg, rgba(255, 255, 255, 0.7) 0%, rgba(255, 255, 255, 0.4) 100%)",
                                      },
                                      children: "The Nexus",
                                    }),
                                  }),
                                  e("p", {
                                    style: {
                                      "--font-selector": "R0Y7U29yYS01MDA=",
                                      "--framer-font-family":
                                        '"Sora", "Sora Placeholder", sans-serif',
                                      "--framer-font-size": "21px",
                                      "--framer-font-weight": "500",
                                      "--framer-letter-spacing": "-0.05em",
                                      "--framer-text-alignment": "center",
                                      "--framer-text-color":
                                        "rgb(255, 255, 255)",
                                    },
                                    children: e("span", {
                                      "data-text-fill": "true",
                                      style: {
                                        backgroundImage:
                                          "linear-gradient(90deg, rgba(255, 255, 255, 0.7) 0%, rgba(255, 255, 255, 0.4) 100%)",
                                      },
                                      children: "Infinite Asset Tokenization",
                                    }),
                                  }),
                                ],
                              }),
                            },
                          },
                          children: e(f, {
                            __fromCanvasComponent: !0,
                            children: e(t, {
                              children: e("p", {
                                style: {
                                  "--font-selector": "R0Y7U29yYS01MDA=",
                                  "--framer-font-family":
                                    '"Sora", "Sora Placeholder", sans-serif',
                                  "--framer-font-size": "34px",
                                  "--framer-font-weight": "500",
                                  "--framer-letter-spacing": "-0.05em",
                                  "--framer-text-color": "rgb(255, 255, 255)",
                                },
                                children: e("span", {
                                  "data-text-fill": "true",
                                  style: {
                                    backgroundImage:
                                      "linear-gradient(90deg, rgba(255, 255, 255, 0.7) 0%, rgba(255, 255, 255, 0.4) 100%)",
                                  },
                                  children:
                                    "The Nexus - Infinite Asset Tokenization",
                                }),
                              }),
                            }),
                            className: "framer-1yqmz82",
                            fonts: ["GF;Sora-500"],
                            verticalAlignment: "top",
                            withExternalLayout: !0,
                          }),
                        }),
                        e(w, {
                          breakpoint: o,
                          overrides: {
                            WIuWQVMVd: {
                              children: e(t, {
                                children: e("p", {
                                  style: {
                                    "--font-selector": "R0Y7UG9wcGlucy0zMDA=",
                                    "--framer-font-family":
                                      '"Poppins", "Poppins Placeholder", sans-serif',
                                    "--framer-font-size": "14px",
                                    "--framer-font-weight": "300",
                                    "--framer-text-alignment": "center",
                                    "--framer-text-color":
                                      "rgba(255, 255, 255, 0.5)",
                                  },
                                  children:
                                    "The Nexus Gateway is an integral component of our product suite, designed to democratize asset ownership and create the perfect environment for digital asset trading. Infinite tokenization awaits",
                                }),
                              }),
                            },
                          },
                          children: e(f, {
                            __fromCanvasComponent: !0,
                            children: e(t, {
                              children: e("p", {
                                style: {
                                  "--font-selector": "R0Y7UG9wcGlucy0zMDA=",
                                  "--framer-font-family":
                                    '"Poppins", "Poppins Placeholder", sans-serif',
                                  "--framer-font-size": "18px",
                                  "--framer-font-weight": "300",
                                  "--framer-text-alignment": "center",
                                  "--framer-text-color":
                                    "rgba(255, 255, 255, 0.5)",
                                },
                                children:
                                  "The Nexus Gateway is an integral component of our product suite, designed to democratize asset ownership and create the perfect environment for digital asset trading. Infinite tokenization awaits",
                              }),
                            }),
                            className: "framer-cfbwdx",
                            fonts: ["GF;Poppins-300"],
                            verticalAlignment: "top",
                            withExternalLayout: !0,
                          }),
                        }),
                      ],
                    }),
                    e("div", { className: "framer-16irkgz" }),
                    e(F, {
                      background: {
                        alt: "",
                        fit: "fill",
                        intrinsicHeight: 234.5,
                        intrinsicWidth: 279,
                        loading: "lazy",
                        pixelHeight: 469,
                        pixelWidth: 558,
                        sizes: "603px",
                        src: "https://framerusercontent.com/images/EXB7t1T6DLoab0EKo4WMZK9eQ.svg?scale-down-to=512",
                        srcSet:
                          "https://framerusercontent.com/images/EXB7t1T6DLoab0EKo4WMZK9eQ.svg?scale-down-to=512 512w,https://framerusercontent.com/images/EXB7t1T6DLoab0EKo4WMZK9eQ.svg 558w",
                      },
                      className: "framer-nh3lsz",
                      "data-framer-name": "graphic",
                      name: "graphic",
                      transformTemplate: _e,
                    }),
                  ],
                }),
                n("header", {
                  className: "framer-1u74xdr",
                  "data-border": !0,
                  "data-framer-name": "Header",
                  name: "Header",
                  children: [
                    e("div", {
                      className: "framer-14t7xo",
                      children: e(w, {
                        breakpoint: o,
                        overrides: {
                          WIuWQVMVd: {
                            children: e(t, {
                              children: e("p", {
                                style: {
                                  "--font-selector": "R0Y7U29yYS01MDA=",
                                  "--framer-font-family":
                                    '"Sora", "Sora Placeholder", sans-serif',
                                  "--framer-font-size": "21px",
                                  "--framer-font-weight": "500",
                                  "--framer-letter-spacing": "-0.05em",
                                  "--framer-text-color": "rgb(255, 255, 255)",
                                },
                                children: e("span", {
                                  "data-text-fill": "true",
                                  style: {
                                    backgroundImage:
                                      "linear-gradient(90deg, rgba(255, 255, 255, 0.7) 0%, rgba(255, 255, 255, 0.4) 100%)",
                                  },
                                  children: "Direct 3D Modelling with AI",
                                }),
                              }),
                            }),
                          },
                        },
                        children: e(f, {
                          __fromCanvasComponent: !0,
                          children: e(t, {
                            children: e("p", {
                              style: {
                                "--font-selector": "R0Y7U29yYS01MDA=",
                                "--framer-font-family":
                                  '"Sora", "Sora Placeholder", sans-serif',
                                "--framer-font-size": "34px",
                                "--framer-font-weight": "500",
                                "--framer-letter-spacing": "-0.05em",
                                "--framer-text-color": "rgb(255, 255, 255)",
                              },
                              children: e("span", {
                                "data-text-fill": "true",
                                style: {
                                  backgroundImage:
                                    "linear-gradient(90deg, rgba(255, 255, 255, 0.7) 0%, rgba(255, 255, 255, 0.4) 100%)",
                                },
                                children: "Direct 3D Modelling with AI",
                              }),
                            }),
                          }),
                          className: "framer-18vb4tq",
                          fonts: ["GF;Sora-500"],
                          verticalAlignment: "top",
                          withExternalLayout: !0,
                        }),
                      }),
                    }),
                    e(w, {
                      breakpoint: o,
                      overrides: {
                        aNwAkBX2Q: { width: "100vw" },
                        WIuWQVMVd: { width: "calc(100vw - 20px)" },
                      },
                      children: e(C, {
                        width: "calc(100vw - 100px)",
                        children: e(ie, {
                          className: "framer-tmzp42-container",
                          children: e(w, {
                            breakpoint: o,
                            overrides: {
                              aNwAkBX2Q: { variant: "z0StExMaq" },
                              WIuWQVMVd: { variant: "IhTeJmgPv" },
                            },
                            children: e(Be, {
                              height: "100%",
                              id: "kCNQJOuYn",
                              layoutId: "kCNQJOuYn",
                              style: { width: "100%" },
                              variant: "aXHAIdr7o",
                              width: "100%",
                            }),
                          }),
                        }),
                      }),
                    }),
                  ],
                }),
                n("header", {
                  className: "framer-9fndzt",
                  "data-framer-name": "Tokenomics",
                  name: "Tokenomics",
                  children: [
                    e("div", { className: "framer-1uqmxhu" }),
                    n("div", {
                      className: "framer-1odo3c5",
                      id: s,
                      ref: Y,
                      children: [
                        k() &&
                          e("div", {
                            className: "framer-1ynp2gk hidden-tbtles",
                            children: e(f, {
                              __fromCanvasComponent: !0,
                              children: e(t, {
                                children: e("p", {
                                  style: {
                                    "--font-selector": "R0Y7U29yYS01MDA=",
                                    "--framer-font-family":
                                      '"Sora", "Sora Placeholder", sans-serif',
                                    "--framer-font-size": "34px",
                                    "--framer-font-weight": "500",
                                    "--framer-letter-spacing": "-0.05em",
                                    "--framer-text-color": "rgb(255, 255, 255)",
                                  },
                                  children: e("span", {
                                    "data-text-fill": "true",
                                    style: {
                                      backgroundImage:
                                        "linear-gradient(90deg, rgba(255, 255, 255, 0.7) 0%, rgba(255, 255, 255, 0.4) 100%)",
                                    },
                                    children: "A Cloud-Suite for Gaming",
                                  }),
                                }),
                              }),
                              className: "framer-5zoy37",
                              fonts: ["GF;Sora-500"],
                              verticalAlignment: "top",
                              withExternalLayout: !0,
                            }),
                          }),
                        n("div", {
                          className: "framer-ww9t7u",
                          children: [
                            e(w, {
                              breakpoint: o,
                              overrides: {
                                WIuWQVMVd: {
                                  background: {
                                    alt: "",
                                    fit: "fill",
                                    intrinsicHeight: 639,
                                    intrinsicWidth: 637,
                                    loading: "lazy",
                                    pixelHeight: 1278,
                                    pixelWidth: 1274,
                                    sizes: "345.0909px",
                                    src: "https://framerusercontent.com/images/VvZkSOIaO9WtDMb7vxNbEZZ8z8.svg?scale-down-to=1024",
                                    srcSet:
                                      "https://framerusercontent.com/images/VvZkSOIaO9WtDMb7vxNbEZZ8z8.svg?scale-down-to=1024 1020w,https://framerusercontent.com/images/VvZkSOIaO9WtDMb7vxNbEZZ8z8.svg 1274w",
                                  },
                                },
                              },
                              children: e(kt, {
                                __framer__loop: Lt,
                                __framer__loopEffectEnabled: !0,
                                __framer__loopRepeatDelay: 0,
                                __framer__loopRepeatType: "loop",
                                __framer__loopTransition: Tt,
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                background: {
                                  alt: "",
                                  fit: "fill",
                                  intrinsicHeight: 639,
                                  intrinsicWidth: 637,
                                  loading: "lazy",
                                  pixelHeight: 1278,
                                  pixelWidth: 1274,
                                  sizes: "1040px",
                                  src: "https://framerusercontent.com/images/VvZkSOIaO9WtDMb7vxNbEZZ8z8.svg?scale-down-to=1024",
                                  srcSet:
                                    "https://framerusercontent.com/images/VvZkSOIaO9WtDMb7vxNbEZZ8z8.svg?scale-down-to=1024 1020w,https://framerusercontent.com/images/VvZkSOIaO9WtDMb7vxNbEZZ8z8.svg 1274w",
                                },
                                className: "framer-lhmw3x",
                                "data-framer-name": "graphic",
                                name: "graphic",
                                style: { rotate: 700 },
                                transformTemplate: Ar,
                              }),
                            }),
                            e(ue, {
                              className: "framer-ymn3ik",
                              "data-framer-name": "graphic",
                              fill: "black",
                              intrinsicHeight: 581,
                              intrinsicWidth: 581,
                              name: "graphic",
                              svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="581" height="581"><image width="581" height="581" xlink:href="data:img/png;base64,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"/></svg>',
                              withExternalLayout: !0,
                            }),
                            e(w, {
                              breakpoint: o,
                              overrides: {
                                WIuWQVMVd: {
                                  background: {
                                    alt: "",
                                    fit: "fill",
                                    intrinsicHeight: 644,
                                    intrinsicWidth: 644.5,
                                    loading: "lazy",
                                    pixelHeight: 1288,
                                    pixelWidth: 1289,
                                    sizes: "365px",
                                    src: "https://framerusercontent.com/images/bMx01SsjJXebhJum2KRQCPA9zY.svg?scale-down-to=1024",
                                    srcSet:
                                      "https://framerusercontent.com/images/bMx01SsjJXebhJum2KRQCPA9zY.svg?scale-down-to=512 512w,https://framerusercontent.com/images/bMx01SsjJXebhJum2KRQCPA9zY.svg?scale-down-to=1024 1024w,https://framerusercontent.com/images/bMx01SsjJXebhJum2KRQCPA9zY.svg 1289w",
                                  },
                                },
                              },
                              children: e(F, {
                                background: {
                                  alt: "",
                                  fit: "fill",
                                  intrinsicHeight: 644,
                                  intrinsicWidth: 644.5,
                                  loading: "lazy",
                                  pixelHeight: 1288,
                                  pixelWidth: 1289,
                                  sizes: "1100px",
                                  src: "https://framerusercontent.com/images/bMx01SsjJXebhJum2KRQCPA9zY.svg?scale-down-to=1024",
                                  srcSet:
                                    "https://framerusercontent.com/images/bMx01SsjJXebhJum2KRQCPA9zY.svg?scale-down-to=512 512w,https://framerusercontent.com/images/bMx01SsjJXebhJum2KRQCPA9zY.svg?scale-down-to=1024 1024w,https://framerusercontent.com/images/bMx01SsjJXebhJum2KRQCPA9zY.svg 1289w",
                                },
                                className: "framer-1juho2w",
                                "data-framer-name": "graphic",
                                name: "graphic",
                                style: { rotate: 134 },
                                transformTemplate: Ar,
                              }),
                            }),
                            e("div", {
                              className: "framer-1wso9oh",
                              children:
                                z() &&
                                e("div", {
                                  className:
                                    "framer-1mldoj7 hidden-193zvy4 hidden-1326u90 hidden-nlvfdy",
                                  children: e(f, {
                                    __fromCanvasComponent: !0,
                                    children: n(t, {
                                      children: [
                                        e("p", {
                                          style: {
                                            "--font-selector":
                                              "R0Y7U29yYS01MDA=",
                                            "--framer-font-family":
                                              '"Sora", "Sora Placeholder", sans-serif',
                                            "--framer-font-size": "24px",
                                            "--framer-font-weight": "500",
                                            "--framer-letter-spacing":
                                              "-0.05em",
                                            "--framer-text-alignment": "center",
                                            "--framer-text-color":
                                              "rgb(255, 255, 255)",
                                          },
                                          children: e("span", {
                                            "data-text-fill": "true",
                                            style: {
                                              backgroundImage:
                                                "linear-gradient(90deg, rgba(255, 255, 255, 0.7) 0%, rgba(255, 255, 255, 0.4) 100%)",
                                            },
                                            children: "Cloud GPU Rental for ",
                                          }),
                                        }),
                                        e("p", {
                                          style: {
                                            "--font-selector":
                                              "R0Y7U29yYS01MDA=",
                                            "--framer-font-family":
                                              '"Sora", "Sora Placeholder", sans-serif',
                                            "--framer-font-size": "24px",
                                            "--framer-font-weight": "500",
                                            "--framer-letter-spacing":
                                              "-0.05em",
                                            "--framer-text-alignment": "center",
                                            "--framer-text-color":
                                              "rgb(255, 255, 255)",
                                          },
                                          children: e("span", {
                                            "data-text-fill": "true",
                                            style: {
                                              backgroundImage:
                                                "linear-gradient(90deg, rgba(255, 255, 255, 0.7) 0%, rgba(255, 255, 255, 0.4) 100%)",
                                            },
                                            children: "(Game) Developers",
                                          }),
                                        }),
                                      ],
                                    }),
                                    className: "framer-oujm3k",
                                    fonts: ["GF;Sora-500"],
                                    id: S,
                                    ref: V,
                                    verticalAlignment: "top",
                                    withExternalLayout: !0,
                                  }),
                                }),
                            }),
                            e(w, {
                              breakpoint: o,
                              overrides: {
                                WIuWQVMVd: {
                                  background: {
                                    alt: "",
                                    fit: "fill",
                                    intrinsicHeight: 234.5,
                                    intrinsicWidth: 279,
                                    loading: "lazy",
                                    pixelHeight: 469,
                                    pixelWidth: 558,
                                    sizes: "78px",
                                    src: "https://framerusercontent.com/images/EXB7t1T6DLoab0EKo4WMZK9eQ.svg?scale-down-to=512",
                                    srcSet:
                                      "https://framerusercontent.com/images/EXB7t1T6DLoab0EKo4WMZK9eQ.svg?scale-down-to=512 512w,https://framerusercontent.com/images/EXB7t1T6DLoab0EKo4WMZK9eQ.svg 558w",
                                  },
                                  transformTemplate: Mt,
                                },
                              },
                              children: e(F, {
                                background: {
                                  alt: "",
                                  fit: "fill",
                                  intrinsicHeight: 234.5,
                                  intrinsicWidth: 279,
                                  loading: "lazy",
                                  pixelHeight: 469,
                                  pixelWidth: 558,
                                  sizes: "114px",
                                  src: "https://framerusercontent.com/images/EXB7t1T6DLoab0EKo4WMZK9eQ.svg?scale-down-to=512",
                                  srcSet:
                                    "https://framerusercontent.com/images/EXB7t1T6DLoab0EKo4WMZK9eQ.svg?scale-down-to=512 512w,https://framerusercontent.com/images/EXB7t1T6DLoab0EKo4WMZK9eQ.svg 558w",
                                },
                                className: "framer-jleat7",
                                "data-framer-name": "graphic",
                                name: "graphic",
                                transformTemplate: _e,
                              }),
                            }),
                          ],
                        }),
                        e("div", {
                          className: "framer-7kqin0",
                          children: e(f, {
                            __fromCanvasComponent: !0,
                            children: e(t, {
                              children: e("p", {
                                style: {
                                  "--font-selector": "R0Y7UG9wcGlucy0zMDA=",
                                  "--framer-font-family":
                                    '"Poppins", "Poppins Placeholder", sans-serif',
                                  "--framer-font-size": "15px",
                                  "--framer-font-weight": "300",
                                  "--framer-letter-spacing": "-0.03em",
                                  "--framer-text-alignment": "center",
                                  "--framer-text-color":
                                    "rgba(255, 255, 255, 0.7)",
                                },
                                children:
                                  "VistaX's Cloud offering provides an easy way for (game-) developers to rent on-demand GPU power. With our plug & play solutions for asset tokenization and asset creation, creating and running games has never been easier.",
                              }),
                            }),
                            className: "framer-1018tna",
                            fonts: ["GF;Poppins-300"],
                            verticalAlignment: "top",
                            withExternalLayout: !0,
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                e("header", {
                  className: "framer-m31cdb",
                  "data-framer-name": "Header",
                  id: T,
                  name: "Header",
                  ref: M,
                  children: e("div", {
                    className: "framer-ni735g",
                    children: n("div", {
                      className: "framer-61fj45",
                      children: [
                        n("div", {
                          className: "framer-8nmqq2",
                          children: [
                            e("div", {
                              className: "framer-4ttm9n",
                              "data-border": !0,
                              children: n("div", {
                                className: "framer-2bgpc7",
                                children: [
                                  e("div", {
                                    className: "framer-72du4m",
                                    children: e("div", {
                                      className: "framer-1j7cihu",
                                      children: e("div", {
                                        className: "framer-16bg7sc",
                                        children: e("div", {
                                          className: "framer-1dv922c",
                                          children: e(f, {
                                            __fromCanvasComponent: !0,
                                            children: e(t, {
                                              children: e("p", {
                                                style: {
                                                  "--font-selector":
                                                    "R0Y7UG9wcGlucy02MDA=",
                                                  "--framer-font-family":
                                                    '"Poppins", "Poppins Placeholder", sans-serif',
                                                  "--framer-font-size": "21px",
                                                  "--framer-font-weight": "600",
                                                  "--framer-text-color":
                                                    "rgb(255, 255, 255)",
                                                },
                                                children: "Ease of Access",
                                              }),
                                            }),
                                            className: "framer-zfkn5i",
                                            fonts: ["GF;Poppins-600"],
                                            verticalAlignment: "top",
                                            withExternalLayout: !0,
                                          }),
                                        }),
                                      }),
                                    }),
                                  }),
                                  e(f, {
                                    __fromCanvasComponent: !0,
                                    children: e(t, {
                                      children: e("p", {
                                        style: {
                                          "--font-selector":
                                            "R0Y7UG9wcGlucy0zMDA=",
                                          "--framer-font-family":
                                            '"Poppins", "Poppins Placeholder", sans-serif',
                                          "--framer-font-size": "15px",
                                          "--framer-font-weight": "300",
                                          "--framer-text-alignment": "center",
                                          "--framer-text-color":
                                            "rgba(255, 255, 255, 0.7)",
                                        },
                                        children:
                                          "With VistaX, accessing high-end GPUs becomes as simple as a few clicks. Developers can scale their computational resources up or down based on their project's phase and needs, ensuring they're only paying for what they use.",
                                      }),
                                    }),
                                    className: "framer-173dkl5",
                                    fonts: ["GF;Poppins-300"],
                                    verticalAlignment: "top",
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                            }),
                            e("div", {
                              className: "framer-yb7idc",
                              "data-border": !0,
                              children: n("div", {
                                className: "framer-fcbtka",
                                children: [
                                  e("div", {
                                    className: "framer-egj7f8",
                                    children: e("div", {
                                      className: "framer-gemeia",
                                      children: e("div", {
                                        className: "framer-16g1v86",
                                        children: e("div", {
                                          className: "framer-xyg76z",
                                          children: e(f, {
                                            __fromCanvasComponent: !0,
                                            children: e(t, {
                                              children: e("p", {
                                                style: {
                                                  "--font-selector":
                                                    "R0Y7UG9wcGlucy02MDA=",
                                                  "--framer-font-family":
                                                    '"Poppins", "Poppins Placeholder", sans-serif',
                                                  "--framer-font-size": "21px",
                                                  "--framer-font-weight": "600",
                                                  "--framer-text-color":
                                                    "rgb(255, 255, 255)",
                                                },
                                                children: "Cost Efficiency",
                                              }),
                                            }),
                                            className: "framer-189egwi",
                                            fonts: ["GF;Poppins-600"],
                                            verticalAlignment: "top",
                                            withExternalLayout: !0,
                                          }),
                                        }),
                                      }),
                                    }),
                                  }),
                                  e(f, {
                                    __fromCanvasComponent: !0,
                                    children: n(t, {
                                      children: [
                                        e("p", {
                                          style: {
                                            "--font-selector":
                                              "R0Y7UG9wcGlucy0zMDA=",
                                            "--framer-font-family":
                                              '"Poppins", "Poppins Placeholder", sans-serif',
                                            "--framer-font-size": "15px",
                                            "--framer-font-weight": "300",
                                            "--framer-text-alignment": "center",
                                            "--framer-text-color":
                                              "rgba(255, 255, 255, 0.7)",
                                          },
                                          children:
                                            "Upfront investments in expensive hardware can be prohibitive, especially for independent developers or small studios. By renting GPUs, developers can allocate their budget more effectively.",
                                        }),
                                        e("p", {
                                          style: {
                                            "--font-selector":
                                              "R0Y7UG9wcGlucy0zMDA=",
                                            "--framer-font-family":
                                              '"Poppins", "Poppins Placeholder", sans-serif',
                                            "--framer-font-size": "15px",
                                            "--framer-font-weight": "300",
                                            "--framer-text-alignment": "center",
                                            "--framer-text-color":
                                              "rgba(255, 255, 255, 0.7)",
                                          },
                                          children: e("br", {
                                            className: "trailing-break",
                                          }),
                                        }),
                                      ],
                                    }),
                                    className: "framer-1dv8vet",
                                    fonts: ["GF;Poppins-300"],
                                    verticalAlignment: "top",
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                        n("div", {
                          className: "framer-u0y2s4",
                          children: [
                            e("div", {
                              className: "framer-ya0fx9",
                              "data-border": !0,
                              children: n("div", {
                                className: "framer-14wr2dt",
                                children: [
                                  e("div", {
                                    className: "framer-1bbi0qr",
                                    children: e("div", {
                                      className: "framer-10s15d1",
                                      children: e("div", {
                                        className: "framer-1g7rzxj",
                                        children: e("div", {
                                          className: "framer-1jd31wb",
                                          children: e(f, {
                                            __fromCanvasComponent: !0,
                                            children: e(t, {
                                              children: e("p", {
                                                style: {
                                                  "--font-selector":
                                                    "R0Y7UG9wcGlucy02MDA=",
                                                  "--framer-font-family":
                                                    '"Poppins", "Poppins Placeholder", sans-serif',
                                                  "--framer-font-size": "21px",
                                                  "--framer-font-weight": "600",
                                                  "--framer-text-color":
                                                    "rgb(255, 255, 255)",
                                                },
                                                children:
                                                  "Flexibility and Scalability",
                                              }),
                                            }),
                                            className: "framer-awermi",
                                            fonts: ["GF;Poppins-600"],
                                            verticalAlignment: "top",
                                            withExternalLayout: !0,
                                          }),
                                        }),
                                      }),
                                    }),
                                  }),
                                  e(f, {
                                    __fromCanvasComponent: !0,
                                    children: e(t, {
                                      children: e("p", {
                                        style: {
                                          "--font-selector":
                                            "R0Y7UG9wcGlucy0zMDA=",
                                          "--framer-font-family":
                                            '"Poppins", "Poppins Placeholder", sans-serif',
                                          "--framer-font-size": "15px",
                                          "--framer-font-weight": "300",
                                          "--framer-text-alignment": "center",
                                          "--framer-text-color":
                                            "rgba(255, 255, 255, 0.7)",
                                        },
                                        children:
                                          "Whether you're working on a small indie game or a large, graphically intensive title, our service adjusts to your needs. This flexibility means you can start small and scale up as your game grows, ensuring you always have the right amount of power at your disposal.",
                                      }),
                                    }),
                                    className: "framer-10ai5uv",
                                    fonts: ["GF;Poppins-300"],
                                    verticalAlignment: "top",
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                            }),
                            e("div", {
                              className: "framer-1ywrsqf",
                              "data-border": !0,
                              children: e("div", {
                                className: "framer-1ymopor",
                                children: n("div", {
                                  className: "framer-13aubvo",
                                  children: [
                                    e("div", {
                                      className: "framer-11dc5xn",
                                      children: e("div", {
                                        className: "framer-lhywgf",
                                        children: e("div", {
                                          className: "framer-1l56cfq",
                                          children: e("div", {
                                            className: "framer-1leph2n",
                                            children: e(f, {
                                              __fromCanvasComponent: !0,
                                              children: e(t, {
                                                children: e("p", {
                                                  style: {
                                                    "--font-selector":
                                                      "R0Y7UG9wcGlucy02MDA=",
                                                    "--framer-font-family":
                                                      '"Poppins", "Poppins Placeholder", sans-serif',
                                                    "--framer-font-size":
                                                      "21px",
                                                    "--framer-font-weight":
                                                      "600",
                                                    "--framer-text-color":
                                                      "rgb(255, 255, 255)",
                                                  },
                                                  children:
                                                    "Focus on Creativity",
                                                }),
                                              }),
                                              className: "framer-150pmcy",
                                              fonts: ["GF;Poppins-600"],
                                              verticalAlignment: "top",
                                              withExternalLayout: !0,
                                            }),
                                          }),
                                        }),
                                      }),
                                    }),
                                    e(f, {
                                      __fromCanvasComponent: !0,
                                      children: e(t, {
                                        children: e("p", {
                                          style: {
                                            "--font-selector":
                                              "R0Y7UG9wcGlucy0zMDA=",
                                            "--framer-font-family":
                                              '"Poppins", "Poppins Placeholder", sans-serif',
                                            "--framer-font-size": "15px",
                                            "--framer-font-weight": "300",
                                            "--framer-text-alignment": "center",
                                            "--framer-text-color":
                                              "rgba(255, 255, 255, 0.7)",
                                          },
                                          children:
                                            "With the technical side of GPU power handled by VistaX, developers can focus more on the creative aspects of game development. This means better games, built faster, and with fewer obstacles in the way of innovation.",
                                        }),
                                      }),
                                      className: "framer-8dq8in",
                                      fonts: ["GF;Poppins-300"],
                                      verticalAlignment: "top",
                                      withExternalLayout: !0,
                                    }),
                                  ],
                                }),
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                }),
                n("header", {
                  className: "framer-1j871wm",
                  "data-border": !0,
                  "data-framer-name": "Header",
                  name: "Header",
                  children: [
                    e("div", {
                      className: "framer-yd1hrc",
                      children: e(w, {
                        breakpoint: o,
                        overrides: {
                          WIuWQVMVd: {
                            children: e(t, {
                              children: e("p", {
                                style: {
                                  "--font-selector": "R0Y7U29yYS01MDA=",
                                  "--framer-font-family":
                                    '"Sora", "Sora Placeholder", sans-serif',
                                  "--framer-font-size": "21px",
                                  "--framer-font-weight": "500",
                                  "--framer-letter-spacing": "-0.05em",
                                  "--framer-text-color": "rgb(255, 255, 255)",
                                },
                                children: e("span", {
                                  "data-text-fill": "true",
                                  style: {
                                    backgroundImage:
                                      "linear-gradient(90deg, rgba(255, 255, 255, 0.7) 0%, rgba(255, 255, 255, 0.4) 100%)",
                                  },
                                  children: "The VistaX Tokenization Ecosystem",
                                }),
                              }),
                            }),
                          },
                        },
                        children: e(f, {
                          __fromCanvasComponent: !0,
                          children: e(t, {
                            children: e("p", {
                              style: {
                                "--font-selector": "R0Y7U29yYS01MDA=",
                                "--framer-font-family":
                                  '"Sora", "Sora Placeholder", sans-serif',
                                "--framer-font-size": "34px",
                                "--framer-font-weight": "500",
                                "--framer-letter-spacing": "-0.05em",
                                "--framer-text-color": "rgb(255, 255, 255)",
                              },
                              children: e("span", {
                                "data-text-fill": "true",
                                style: {
                                  backgroundImage:
                                    "linear-gradient(90deg, rgba(255, 255, 255, 0.7) 0%, rgba(255, 255, 255, 0.4) 100%)",
                                },
                                children: "The VistaX Tokenization Ecosystem",
                              }),
                            }),
                          }),
                          className: "framer-1nafqk1",
                          fonts: ["GF;Sora-500"],
                          verticalAlignment: "top",
                          withExternalLayout: !0,
                        }),
                      }),
                    }),
                    n("header", {
                      background: { alt: "", fit: "fill", loading: "lazy" },
                      className: "framer-1emnbdp",
                      "data-framer-name": "Header",
                      id: G,
                      name: "Header",
                      ref: K,
                      children: [
                        e("div", {
                          className: "framer-iiqzg0",
                          children: e("div", {
                            className: "framer-9rf623",
                            children: e(C, {
                              children: e(ie, {
                                className: "framer-qubs51-container",
                                children: e(ne, {
                                  backgroundColor: "rgba(0, 0, 0, 0)",
                                  borderRadius: 0,
                                  bottomLeftRadius: 0,
                                  bottomRightRadius: 0,
                                  controls: !1,
                                  height: "100%",
                                  id: "C0fOtc00v",
                                  isMixedBorderRadius: !1,
                                  layoutId: "C0fOtc00v",
                                  loop: !0,
                                  muted: !0,
                                  objectFit: "cover",
                                  playing: !0,
                                  posterEnabled: !1,
                                  srcFile:
                                    "https://framerusercontent.com/assets/kU1mNIsEu1ilyQFd6zlq99pAo.mp4",
                                  srcType: "Upload",
                                  srcUrl:
                                    "https://assets.mixkit.co/videos/preview/mixkit-shining-sun-in-the-sky-surrounded-by-moving-clouds-31793-small.mp4",
                                  startTime: 0,
                                  style: { height: "100%", width: "100%" },
                                  topLeftRadius: 0,
                                  topRightRadius: 0,
                                  volume: 25,
                                  width: "100%",
                                }),
                              }),
                            }),
                          }),
                        }),
                        n("div", {
                          className: "framer-ip7gip",
                          children: [
                            e(w, {
                              breakpoint: o,
                              overrides: {
                                WIuWQVMVd: {
                                  width: "calc(min(100vw, 1200px) - 30px)",
                                },
                              },
                              children: e(C, {
                                width: "393px",
                                children: e(ie, {
                                  className: "framer-1ovkxo4-container",
                                  children: e(w, {
                                    breakpoint: o,
                                    overrides: {
                                      WIuWQVMVd: { variant: "kBowbAcQD" },
                                    },
                                    children: e(le, {
                                      height: "100%",
                                      id: "juDMVoeol",
                                      layoutId: "juDMVoeol",
                                      m7ZSjyZav: "Tokenization",
                                      style: { width: "100%" },
                                      variant: "LgGeFnZGx",
                                      width: "100%",
                                      YotR7rXrE:
                                        "Verify the original steam asset ownership on the VistaX platform & lock the item.",
                                    }),
                                  }),
                                }),
                              }),
                            }),
                            e(w, {
                              breakpoint: o,
                              overrides: {
                                WIuWQVMVd: {
                                  width: "calc(min(100vw, 1200px) - 30px)",
                                },
                              },
                              children: e(C, {
                                width: "393px",
                                children: e(ie, {
                                  className: "framer-azsavf-container",
                                  children: e(w, {
                                    breakpoint: o,
                                    overrides: {
                                      WIuWQVMVd: { variant: "kBowbAcQD" },
                                    },
                                    children: e(le, {
                                      height: "100%",
                                      id: "ugSyZtkIc",
                                      layoutId: "ugSyZtkIc",
                                      m7ZSjyZav: "Mint & Trade",
                                      style: { width: "100%" },
                                      variant: "LgGeFnZGx",
                                      width: "100%",
                                      YotR7rXrE:
                                        "Mint the vNFT for the steam asset including all original attributes. Then trade it on our dedicated marketplace.",
                                    }),
                                  }),
                                }),
                              }),
                            }),
                            e(w, {
                              breakpoint: o,
                              overrides: {
                                WIuWQVMVd: {
                                  width: "calc(min(100vw, 1200px) - 30px)",
                                },
                              },
                              children: e(C, {
                                width: "393px",
                                children: e(ie, {
                                  className: "framer-1palma6-container",
                                  children: e(w, {
                                    breakpoint: o,
                                    overrides: {
                                      WIuWQVMVd: { variant: "kBowbAcQD" },
                                    },
                                    children: e(le, {
                                      height: "100%",
                                      id: "mNbuRkqOU",
                                      layoutId: "mNbuRkqOU",
                                      m7ZSjyZav: "Sell & Redeem",
                                      style: { width: "100%" },
                                      variant: "LgGeFnZGx",
                                      width: "100%",
                                      YotR7rXrE:
                                        "Upon sale of the vNFT, its ownership changes. Burning the vNFT triggers the redemption of the original steam asset to the new owner.",
                                    }),
                                  }),
                                }),
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                n("header", {
                  className: "framer-xnl9wa",
                  "data-framer-name": "Tokenomics",
                  id: B,
                  name: "Tokenomics",
                  ref: P,
                  children: [
                    e("div", { className: "framer-8bxoa" }),
                    e("div", {
                      className: "framer-1no0igs",
                      children: e(w, {
                        breakpoint: o,
                        overrides: {
                          WIuWQVMVd: {
                            children: e(t, {
                              children: e("p", {
                                style: {
                                  "--font-selector": "R0Y7U29yYS01MDA=",
                                  "--framer-font-family":
                                    '"Sora", "Sora Placeholder", sans-serif',
                                  "--framer-font-size": "21px",
                                  "--framer-font-weight": "500",
                                  "--framer-letter-spacing": "-0.05em",
                                  "--framer-text-color": "rgb(255, 255, 255)",
                                },
                                children: e("span", {
                                  "data-text-fill": "true",
                                  style: {
                                    backgroundImage:
                                      "linear-gradient(90deg, rgba(255, 255, 255, 0.7) 0%, rgba(255, 255, 255, 0.4) 100%)",
                                  },
                                  children: "Tokenomics",
                                }),
                              }),
                            }),
                          },
                        },
                        children: e(f, {
                          __fromCanvasComponent: !0,
                          children: e(t, {
                            children: e("p", {
                              style: {
                                "--font-selector": "R0Y7U29yYS01MDA=",
                                "--framer-font-family":
                                  '"Sora", "Sora Placeholder", sans-serif',
                                "--framer-font-size": "34px",
                                "--framer-font-weight": "500",
                                "--framer-letter-spacing": "-0.05em",
                                "--framer-text-color": "rgb(255, 255, 255)",
                              },
                              children: e("span", {
                                "data-text-fill": "true",
                                style: {
                                  backgroundImage:
                                    "linear-gradient(90deg, rgba(255, 255, 255, 0.7) 0%, rgba(255, 255, 255, 0.4) 100%)",
                                },
                                children: "Tokenomics",
                              }),
                            }),
                          }),
                          className: "framer-egc4z1",
                          fonts: ["GF;Sora-500"],
                          verticalAlignment: "top",
                          withExternalLayout: !0,
                        }),
                      }),
                    }),
                    n("div", {
                      className: "framer-xz66qp",
                      children: [
                        n("div", {
                          className: "framer-q9h42q",
                          "data-border": !0,
                          children: [
                            n("div", {
                              className: "framer-21awx4",
                              children: [
                                e(w, {
                                  breakpoint: o,
                                  overrides: {
                                    WIuWQVMVd: {
                                      background: {
                                        alt: "",
                                        fit: "fill",
                                        intrinsicHeight: 234.5,
                                        intrinsicWidth: 279,
                                        loading: "lazy",
                                        pixelHeight: 469,
                                        pixelWidth: 558,
                                        sizes: "154px",
                                        src: "https://framerusercontent.com/images/EXB7t1T6DLoab0EKo4WMZK9eQ.svg?scale-down-to=512",
                                        srcSet:
                                          "https://framerusercontent.com/images/EXB7t1T6DLoab0EKo4WMZK9eQ.svg?scale-down-to=512 512w,https://framerusercontent.com/images/EXB7t1T6DLoab0EKo4WMZK9eQ.svg 558w",
                                      },
                                    },
                                  },
                                  children: e(F, {
                                    background: {
                                      alt: "",
                                      fit: "fill",
                                      intrinsicHeight: 234.5,
                                      intrinsicWidth: 279,
                                      loading: "lazy",
                                      pixelHeight: 469,
                                      pixelWidth: 558,
                                      sizes: "114px",
                                      src: "https://framerusercontent.com/images/EXB7t1T6DLoab0EKo4WMZK9eQ.svg?scale-down-to=512",
                                      srcSet:
                                        "https://framerusercontent.com/images/EXB7t1T6DLoab0EKo4WMZK9eQ.svg?scale-down-to=512 512w,https://framerusercontent.com/images/EXB7t1T6DLoab0EKo4WMZK9eQ.svg 558w",
                                    },
                                    className: "framer-qv5e39",
                                    "data-framer-name": "graphic",
                                    name: "graphic",
                                    transformTemplate: _e,
                                  }),
                                }),
                                n("div", {
                                  className: "framer-1my5lur",
                                  children: [
                                    e("div", { className: "framer-102t1zs" }),
                                    e(w, {
                                      breakpoint: o,
                                      overrides: {
                                        WIuWQVMVd: { style: { rotate: -31 } },
                                      },
                                      children: e(i.div, {
                                        className: "framer-zs0iv1",
                                        style: { rotate: -23 },
                                      }),
                                    }),
                                    e(w, {
                                      breakpoint: o,
                                      overrides: {
                                        WIuWQVMVd: { style: { rotate: -6 } },
                                      },
                                      children: e(i.div, {
                                        className: "framer-actxzn",
                                        style: { rotate: -17 },
                                      }),
                                    }),
                                  ],
                                }),
                                e("div", { className: "framer-h5hjz8" }),
                              ],
                            }),
                            n("div", {
                              className: "framer-16r1ux8",
                              children: [
                                e(f, {
                                  __fromCanvasComponent: !0,
                                  children: e(t, {
                                    children: e("p", {
                                      style: {
                                        "--font-selector":
                                          "R0Y7UG9wcGlucy02MDA=",
                                        "--framer-font-family":
                                          '"Poppins", "Poppins Placeholder", sans-serif',
                                        "--framer-font-size": "21px",
                                        "--framer-font-weight": "600",
                                        "--framer-text-color":
                                          "rgba(255, 255, 255, 0.7)",
                                      },
                                      children: "Supply Scheme",
                                    }),
                                  }),
                                  className: "framer-1sizsey",
                                  fonts: ["GF;Poppins-600"],
                                  verticalAlignment: "top",
                                  withExternalLayout: !0,
                                }),
                                e("div", {
                                  className: "framer-lxiuzw",
                                  "data-border": !0,
                                  children: e("div", {
                                    className: "framer-10d5i2k",
                                    children: n("div", {
                                      className: "framer-h8tult",
                                      children: [
                                        e("div", {
                                          className: "framer-4znfql",
                                        }),
                                        e(f, {
                                          __fromCanvasComponent: !0,
                                          children: e(t, {
                                            children: e("p", {
                                              style: {
                                                "--font-selector":
                                                  "R0Y7Um9ib3RvLTMwMA==",
                                                "--framer-font-family":
                                                  '"Roboto", "Roboto Placeholder", sans-serif',
                                                "--framer-font-size": "21px",
                                                "--framer-font-weight": "300",
                                                "--framer-text-color":
                                                  "rgb(255, 255, 255)",
                                              },
                                              children: "Liquidity Pool: 90%",
                                            }),
                                          }),
                                          className: "framer-18pxoic",
                                          fonts: ["GF;Roboto-300"],
                                          verticalAlignment: "top",
                                          withExternalLayout: !0,
                                        }),
                                      ],
                                    }),
                                  }),
                                }),
                                e("div", {
                                  className: "framer-qst9zg",
                                  "data-border": !0,
                                  children: e("div", {
                                    className: "framer-16wyqsv",
                                    children: n("div", {
                                      className: "framer-wfkd66",
                                      children: [
                                        e("div", {
                                          className: "framer-19vyefi",
                                        }),
                                        e(f, {
                                          __fromCanvasComponent: !0,
                                          children: e(t, {
                                            children: e("p", {
                                              style: {
                                                "--font-selector":
                                                  "R0Y7Um9ib3RvLTMwMA==",
                                                "--framer-font-family":
                                                  '"Roboto", "Roboto Placeholder", sans-serif',
                                                "--framer-font-size": "21px",
                                                "--framer-font-weight": "300",
                                                "--framer-text-color":
                                                  "rgb(255, 255, 255)",
                                              },
                                              children: "Marketing: 5%",
                                            }),
                                          }),
                                          className: "framer-165y8u9",
                                          fonts: ["GF;Roboto-300"],
                                          verticalAlignment: "top",
                                          withExternalLayout: !0,
                                        }),
                                      ],
                                    }),
                                  }),
                                }),
                                e("div", {
                                  className: "framer-xf2fun",
                                  "data-border": !0,
                                  children: e("div", {
                                    className: "framer-17w0yp1",
                                    children: n("div", {
                                      className: "framer-18ij9qv",
                                      children: [
                                        e("div", {
                                          className: "framer-kllrln",
                                        }),
                                        e(f, {
                                          __fromCanvasComponent: !0,
                                          children: e(t, {
                                            children: e("p", {
                                              style: {
                                                "--font-selector":
                                                  "R0Y7Um9ib3RvLTMwMA==",
                                                "--framer-font-family":
                                                  '"Roboto", "Roboto Placeholder", sans-serif',
                                                "--framer-font-size": "21px",
                                                "--framer-font-weight": "300",
                                                "--framer-text-color":
                                                  "rgb(255, 255, 255)",
                                              },
                                              children: "Team: 5%",
                                            }),
                                          }),
                                          className: "framer-jge3m0",
                                          fonts: ["GF;Roboto-300"],
                                          verticalAlignment: "top",
                                          withExternalLayout: !0,
                                        }),
                                      ],
                                    }),
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                        n("div", {
                          className: "framer-c1m4a1",
                          "data-border": !0,
                          children: [
                            e("div", {
                              className: "framer-c5tuux",
                              children: n("div", {
                                className: "framer-gme3bg",
                                children: [
                                  e("div", {
                                    className: "framer-154qdgf",
                                    "data-border": !0,
                                    children: e("div", {
                                      className: "framer-psjzps",
                                      children: e("div", {
                                        className: "framer-k74r39",
                                        children: e(f, {
                                          __fromCanvasComponent: !0,
                                          children: e(t, {
                                            children: e("p", {
                                              style: {
                                                "--font-selector":
                                                  "R0Y7Um9ib3RvLTMwMA==",
                                                "--framer-font-family":
                                                  '"Roboto", "Roboto Placeholder", sans-serif',
                                                "--framer-font-size": "21px",
                                                "--framer-font-weight": "300",
                                                "--framer-text-color":
                                                  "rgb(255, 255, 255)",
                                              },
                                              children: "2% Ecosystem",
                                            }),
                                          }),
                                          className: "framer-14bes3r",
                                          fonts: ["GF;Roboto-300"],
                                          verticalAlignment: "top",
                                          withExternalLayout: !0,
                                        }),
                                      }),
                                    }),
                                  }),
                                  e("div", {
                                    className: "framer-1nrlp5f",
                                    "data-border": !0,
                                    children: e("div", {
                                      className: "framer-10amtw2",
                                      children: e("div", {
                                        className: "framer-14xjmrf",
                                        children: e(f, {
                                          __fromCanvasComponent: !0,
                                          children: e(t, {
                                            children: e("p", {
                                              style: {
                                                "--font-selector":
                                                  "R0Y7Um9ib3RvLTMwMA==",
                                                "--framer-font-family":
                                                  '"Roboto", "Roboto Placeholder", sans-serif',
                                                "--framer-font-size": "21px",
                                                "--framer-font-weight": "300",
                                                "--framer-text-color":
                                                  "rgb(255, 255, 255)",
                                              },
                                              children: "2% Marketing",
                                            }),
                                          }),
                                          className: "framer-azc2t3",
                                          fonts: ["GF;Roboto-300"],
                                          verticalAlignment: "top",
                                          withExternalLayout: !0,
                                        }),
                                      }),
                                    }),
                                  }),
                                  e("div", {
                                    className: "framer-1jtro0e",
                                    "data-border": !0,
                                    children: e("div", {
                                      className: "framer-1gp2ibl",
                                      children: e("div", {
                                        className: "framer-zpispj",
                                        children: e(f, {
                                          __fromCanvasComponent: !0,
                                          children: e(t, {
                                            children: e("p", {
                                              style: {
                                                "--font-selector":
                                                  "R0Y7Um9ib3RvLTMwMA==",
                                                "--framer-font-family":
                                                  '"Roboto", "Roboto Placeholder", sans-serif',
                                                "--framer-font-size": "21px",
                                                "--framer-font-weight": "300",
                                                "--framer-text-color":
                                                  "rgb(255, 255, 255)",
                                              },
                                              children: "1% GPU Node Expansion",
                                            }),
                                          }),
                                          className: "framer-1foa3go",
                                          fonts: ["GF;Roboto-300"],
                                          verticalAlignment: "top",
                                          withExternalLayout: !0,
                                        }),
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                            }),
                            n("div", {
                              className: "framer-18n7767",
                              children: [
                                e(f, {
                                  __fromCanvasComponent: !0,
                                  children: e(t, {
                                    children: e("p", {
                                      style: {
                                        "--font-selector":
                                          "R0Y7UG9wcGlucy02MDA=",
                                        "--framer-font-family":
                                          '"Poppins", "Poppins Placeholder", sans-serif',
                                        "--framer-font-size": "34px",
                                        "--framer-font-weight": "600",
                                        "--framer-text-color":
                                          "rgba(255, 255, 255, 0.7)",
                                      },
                                      children: "$VTX",
                                    }),
                                  }),
                                  className: "framer-o5fwoo",
                                  fonts: ["GF;Poppins-600"],
                                  verticalAlignment: "top",
                                  withExternalLayout: !0,
                                }),
                                e(w, {
                                  breakpoint: o,
                                  overrides: {
                                    WIuWQVMVd: {
                                      children: e(t, {
                                        children: e("p", {
                                          style: {
                                            "--font-selector":
                                              "R0Y7Um9ib3RvLTMwMA==",
                                            "--framer-font-family":
                                              '"Roboto", "Roboto Placeholder", sans-serif',
                                            "--framer-font-weight": "300",
                                            "--framer-text-color":
                                              "rgb(255, 255, 255)",
                                          },
                                          children: "0xComingSoon",
                                        }),
                                      }),
                                    },
                                  },
                                  children: e(f, {
                                    __fromCanvasComponent: !0,
                                    children: e(t, {
                                      children: e("p", {
                                        style: {
                                          "--font-selector":
                                            "R0Y7Um9ib3RvLTMwMA==",
                                          "--framer-font-family":
                                            '"Roboto", "Roboto Placeholder", sans-serif',
                                          "--framer-font-size": "21px",
                                          "--framer-font-weight": "300",
                                          "--framer-text-color":
                                            "rgb(255, 255, 255)",
                                        },
                                        children: "0xComingSoon",
                                      }),
                                    }),
                                    className: "framer-1uy0123",
                                    fonts: ["GF;Roboto-300"],
                                    verticalAlignment: "top",
                                    withExternalLayout: !0,
                                  }),
                                }),
                                e(C, {
                                  children: e(ie, {
                                    className: "framer-1pxq2ug-container",
                                    whileTap: At,
                                    children: e(He, {
                                      height: "100%",
                                      id: "Hv88hXIcs",
                                      layoutId: "Hv88hXIcs",
                                      variant: "roypuGmOl",
                                      width: "100%",
                                    }),
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                n("header", {
                  className: "framer-riw76y",
                  "data-framer-name": "Tokenomics",
                  id: we,
                  name: "Tokenomics",
                  ref: se,
                  children: [
                    e("div", { className: "framer-1usnbge" }),
                    e(F, {
                      background: {
                        alt: "",
                        fit: "fill",
                        intrinsicHeight: 141.5,
                        intrinsicWidth: 211.5,
                        loading: "lazy",
                        pixelHeight: 283,
                        pixelWidth: 423,
                        src: "https://framerusercontent.com/images/uNbMjhpo7eerNtIB7n9UANSoU8w.svg",
                      },
                      className: "framer-17t37vx",
                      "data-framer-name": "graphic",
                      name: "graphic",
                    }),
                    e(F, {
                      background: {
                        alt: "",
                        fit: "fill",
                        intrinsicHeight: 766.5,
                        intrinsicWidth: 1280,
                        loading: "lazy",
                        pixelHeight: 1533,
                        pixelWidth: 2560,
                        sizes: "116.895px",
                        src: "https://framerusercontent.com/images/54ULn4qkXZY7asgXSSnQcBVwgE.png?scale-down-to=2048",
                        srcSet:
                          "https://framerusercontent.com/images/54ULn4qkXZY7asgXSSnQcBVwgE.png?scale-down-to=512 512w,https://framerusercontent.com/images/54ULn4qkXZY7asgXSSnQcBVwgE.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/54ULn4qkXZY7asgXSSnQcBVwgE.png?scale-down-to=2048 2048w,https://framerusercontent.com/images/54ULn4qkXZY7asgXSSnQcBVwgE.png 2560w",
                      },
                      className: "framer-chmkkw",
                      "data-framer-name": "image",
                      name: "image",
                    }),
                    e(F, {
                      background: {
                        alt: "",
                        fit: "fill",
                        intrinsicHeight: 200.5,
                        intrinsicWidth: 500,
                        loading: "lazy",
                        pixelHeight: 401,
                        pixelWidth: 1e3,
                        sizes: "174.5636px",
                        src: "https://framerusercontent.com/images/P0UzAzbIkB0URvqxhQlvobuswQw.png?scale-down-to=512",
                        srcSet:
                          "https://framerusercontent.com/images/P0UzAzbIkB0URvqxhQlvobuswQw.png?scale-down-to=512 512w,https://framerusercontent.com/images/P0UzAzbIkB0URvqxhQlvobuswQw.png 1000w",
                      },
                      className: "framer-lelg5t",
                      "data-framer-name": "image",
                      name: "image",
                    }),
                    e(F, {
                      background: {
                        alt: "",
                        fit: "fill",
                        intrinsicHeight: 411.5,
                        intrinsicWidth: 512,
                        loading: "lazy",
                        pixelHeight: 823,
                        pixelWidth: 1024,
                        sizes: "87.096px",
                        src: "https://framerusercontent.com/images/05sV2bIuF5mxbUndMRjGZqN6M.png?scale-down-to=512",
                        srcSet:
                          "https://framerusercontent.com/images/05sV2bIuF5mxbUndMRjGZqN6M.png?scale-down-to=512 512w,https://framerusercontent.com/images/05sV2bIuF5mxbUndMRjGZqN6M.png 1024w",
                      },
                      className: "framer-15nqsvp",
                      "data-framer-name": "image",
                      name: "image",
                    }),
                  ],
                }),
                n("header", {
                  className: "framer-1fqnsyc",
                  "data-framer-name": "Tokenomics",
                  id: Te,
                  name: "Tokenomics",
                  ref: be,
                  children: [
                    e("div", { className: "framer-1hwoypl" }),
                    e("div", {
                      className: "framer-1joti7b",
                      children: e(w, {
                        breakpoint: o,
                        overrides: {
                          WIuWQVMVd: {
                            children: e(t, {
                              children: e("p", {
                                style: {
                                  "--font-selector": "R0Y7U29yYS01MDA=",
                                  "--framer-font-family":
                                    '"Sora", "Sora Placeholder", sans-serif',
                                  "--framer-font-size": "21px",
                                  "--framer-font-weight": "500",
                                  "--framer-letter-spacing": "-0.05em",
                                  "--framer-text-color": "rgb(255, 255, 255)",
                                },
                                children: e("span", {
                                  "data-text-fill": "true",
                                  style: {
                                    backgroundImage:
                                      "linear-gradient(90deg, rgba(255, 255, 255, 0.7) 0%, rgba(255, 255, 255, 0.4) 100%)",
                                  },
                                  children: "Roadmap",
                                }),
                              }),
                            }),
                          },
                        },
                        children: e(f, {
                          __fromCanvasComponent: !0,
                          children: e(t, {
                            children: e("p", {
                              style: {
                                "--font-selector": "R0Y7U29yYS01MDA=",
                                "--framer-font-family":
                                  '"Sora", "Sora Placeholder", sans-serif',
                                "--framer-font-size": "34px",
                                "--framer-font-weight": "500",
                                "--framer-letter-spacing": "-0.05em",
                                "--framer-text-color": "rgb(255, 255, 255)",
                              },
                              children: e("span", {
                                "data-text-fill": "true",
                                style: {
                                  backgroundImage:
                                    "linear-gradient(90deg, rgba(255, 255, 255, 0.7) 0%, rgba(255, 255, 255, 0.4) 100%)",
                                },
                                children: "Roadmap",
                              }),
                            }),
                          }),
                          className: "framer-qvxf5a",
                          fonts: ["GF;Sora-500"],
                          verticalAlignment: "top",
                          withExternalLayout: !0,
                        }),
                      }),
                    }),
                    n("div", {
                      className: "framer-web97o",
                      children: [
                        n("div", {
                          className: "framer-58vhza",
                          "data-border": !0,
                          children: [
                            n("div", {
                              className: "framer-1efc536",
                              children: [
                                e(f, {
                                  __fromCanvasComponent: !0,
                                  children: e(t, {
                                    children: e("p", {
                                      style: {
                                        "--font-selector":
                                          "R0Y7UG9wcGlucy02MDA=",
                                        "--framer-font-family":
                                          '"Poppins", "Poppins Placeholder", sans-serif',
                                        "--framer-font-size": "34px",
                                        "--framer-font-weight": "600",
                                        "--framer-text-color":
                                          "rgba(255, 255, 255, 0.7)",
                                      },
                                      children: "Stage 1",
                                    }),
                                  }),
                                  className: "framer-180ii4p",
                                  fonts: ["GF;Poppins-600"],
                                  verticalAlignment: "top",
                                  withExternalLayout: !0,
                                }),
                                e(w, {
                                  breakpoint: o,
                                  overrides: {
                                    WIuWQVMVd: {
                                      children: e(t, {
                                        children: e("p", {
                                          style: {
                                            "--font-selector":
                                              "R0Y7Um9ib3RvLTUwMA==",
                                            "--framer-font-family":
                                              '"Roboto", "Roboto Placeholder", sans-serif',
                                            "--framer-font-weight": "500",
                                            "--framer-text-color":
                                              "rgba(255, 255, 255, 0.5)",
                                          },
                                          children:
                                            "Launch and Community Building",
                                        }),
                                      }),
                                    },
                                  },
                                  children: e(f, {
                                    __fromCanvasComponent: !0,
                                    children: e(t, {
                                      children: e("p", {
                                        style: {
                                          "--font-selector":
                                            "R0Y7Um9ib3RvLTUwMA==",
                                          "--framer-font-family":
                                            '"Roboto", "Roboto Placeholder", sans-serif',
                                          "--framer-font-size": "21px",
                                          "--framer-font-weight": "500",
                                          "--framer-text-color":
                                            "rgba(255, 255, 255, 0.5)",
                                        },
                                        children:
                                          "Launch and Community Building",
                                      }),
                                    }),
                                    className: "framer-vbmkwi",
                                    fonts: ["GF;Roboto-500"],
                                    verticalAlignment: "top",
                                    withExternalLayout: !0,
                                  }),
                                }),
                              ],
                            }),
                            n("div", {
                              className: "framer-1gezt3f",
                              children: [
                                e(F, {
                                  background: {
                                    alt: "",
                                    fit: "fill",
                                    intrinsicHeight: 234.5,
                                    intrinsicWidth: 279,
                                    loading: "lazy",
                                    pixelHeight: 469,
                                    pixelWidth: 558,
                                    sizes: "30px",
                                    src: "https://framerusercontent.com/images/EXB7t1T6DLoab0EKo4WMZK9eQ.svg?scale-down-to=512",
                                    srcSet:
                                      "https://framerusercontent.com/images/EXB7t1T6DLoab0EKo4WMZK9eQ.svg?scale-down-to=512 512w,https://framerusercontent.com/images/EXB7t1T6DLoab0EKo4WMZK9eQ.svg 558w",
                                  },
                                  className: "framer-1r3gnwk",
                                  "data-framer-name": "graphic",
                                  name: "graphic",
                                  style: { rotate: 360 },
                                  transformTemplate: fe,
                                }),
                                e("div", {
                                  className: "framer-5xxthi",
                                  children: e(f, {
                                    __fromCanvasComponent: !0,
                                    children: e(t, {
                                      children: e("p", {
                                        style: {
                                          "--font-selector":
                                            "R0Y7Um9ib3RvLTMwMA==",
                                          "--framer-font-family":
                                            '"Roboto", "Roboto Placeholder", sans-serif',
                                          "--framer-font-size": "17px",
                                          "--framer-font-weight": "300",
                                          "--framer-text-color":
                                            "rgb(255, 255, 255)",
                                        },
                                        children:
                                          "Establish and promote mission",
                                      }),
                                    }),
                                    className: "framer-1je96q6",
                                    fonts: ["GF;Roboto-300"],
                                    verticalAlignment: "top",
                                    withExternalLayout: !0,
                                  }),
                                }),
                              ],
                            }),
                            n("div", {
                              className: "framer-5p0ooj",
                              children: [
                                e(F, {
                                  background: {
                                    alt: "",
                                    fit: "fill",
                                    intrinsicHeight: 234.5,
                                    intrinsicWidth: 279,
                                    loading: "lazy",
                                    pixelHeight: 469,
                                    pixelWidth: 558,
                                    sizes: "30px",
                                    src: "https://framerusercontent.com/images/EXB7t1T6DLoab0EKo4WMZK9eQ.svg?scale-down-to=512",
                                    srcSet:
                                      "https://framerusercontent.com/images/EXB7t1T6DLoab0EKo4WMZK9eQ.svg?scale-down-to=512 512w,https://framerusercontent.com/images/EXB7t1T6DLoab0EKo4WMZK9eQ.svg 558w",
                                  },
                                  className: "framer-wooshp",
                                  "data-framer-name": "graphic",
                                  name: "graphic",
                                  style: { rotate: 360 },
                                  transformTemplate: fe,
                                }),
                                e("div", {
                                  className: "framer-1uxhzev",
                                  children: e(f, {
                                    __fromCanvasComponent: !0,
                                    children: e(t, {
                                      children: e("p", {
                                        style: {
                                          "--font-selector":
                                            "R0Y7Um9ib3RvLTMwMA==",
                                          "--framer-font-family":
                                            '"Roboto", "Roboto Placeholder", sans-serif',
                                          "--framer-font-size": "17px",
                                          "--framer-font-weight": "300",
                                          "--framer-text-color":
                                            "rgb(255, 255, 255)",
                                        },
                                        children:
                                          "Kickoff grand launch and community events",
                                      }),
                                    }),
                                    className: "framer-d3ul2o",
                                    fonts: ["GF;Roboto-300"],
                                    verticalAlignment: "top",
                                    withExternalLayout: !0,
                                  }),
                                }),
                              ],
                            }),
                            n("div", {
                              className: "framer-1360mo0",
                              children: [
                                e(F, {
                                  background: {
                                    alt: "",
                                    fit: "fill",
                                    intrinsicHeight: 234.5,
                                    intrinsicWidth: 279,
                                    loading: "lazy",
                                    pixelHeight: 469,
                                    pixelWidth: 558,
                                    sizes: "30px",
                                    src: "https://framerusercontent.com/images/EXB7t1T6DLoab0EKo4WMZK9eQ.svg?scale-down-to=512",
                                    srcSet:
                                      "https://framerusercontent.com/images/EXB7t1T6DLoab0EKo4WMZK9eQ.svg?scale-down-to=512 512w,https://framerusercontent.com/images/EXB7t1T6DLoab0EKo4WMZK9eQ.svg 558w",
                                  },
                                  className: "framer-u9m65e",
                                  "data-framer-name": "graphic",
                                  name: "graphic",
                                  style: { rotate: 360 },
                                  transformTemplate: fe,
                                }),
                                e("div", {
                                  className: "framer-1wv8ce",
                                  children: e(f, {
                                    __fromCanvasComponent: !0,
                                    children: e(t, {
                                      children: e("p", {
                                        style: {
                                          "--font-selector":
                                            "R0Y7Um9ib3RvLTMwMA==",
                                          "--framer-font-family":
                                            '"Roboto", "Roboto Placeholder", sans-serif',
                                          "--framer-font-size": "17px",
                                          "--framer-font-weight": "300",
                                          "--framer-text-color":
                                            "rgb(255, 255, 255)",
                                        },
                                        children: "Engage Key Opinion Leaders",
                                      }),
                                    }),
                                    className: "framer-2yxsfe",
                                    fonts: ["GF;Roboto-300"],
                                    verticalAlignment: "top",
                                    withExternalLayout: !0,
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                        n("div", {
                          className: "framer-9j1btl",
                          "data-border": !0,
                          children: [
                            n("div", {
                              className: "framer-4s8m1y",
                              children: [
                                e(f, {
                                  __fromCanvasComponent: !0,
                                  children: e(t, {
                                    children: e("p", {
                                      style: {
                                        "--font-selector":
                                          "R0Y7UG9wcGlucy02MDA=",
                                        "--framer-font-family":
                                          '"Poppins", "Poppins Placeholder", sans-serif',
                                        "--framer-font-size": "34px",
                                        "--framer-font-weight": "600",
                                        "--framer-text-color":
                                          "rgba(255, 255, 255, 0.7)",
                                      },
                                      children: "Stage 2",
                                    }),
                                  }),
                                  className: "framer-dx2p3m",
                                  fonts: ["GF;Poppins-600"],
                                  verticalAlignment: "top",
                                  withExternalLayout: !0,
                                }),
                                e(w, {
                                  breakpoint: o,
                                  overrides: {
                                    WIuWQVMVd: {
                                      children: e(t, {
                                        children: e("p", {
                                          style: {
                                            "--font-selector":
                                              "R0Y7Um9ib3RvLTUwMA==",
                                            "--framer-font-family":
                                              '"Roboto", "Roboto Placeholder", sans-serif',
                                            "--framer-font-weight": "500",
                                            "--framer-text-color":
                                              "rgba(255, 255, 255, 0.5)",
                                          },
                                          children:
                                            "Expansion and Beta Testing",
                                        }),
                                      }),
                                    },
                                  },
                                  children: e(f, {
                                    __fromCanvasComponent: !0,
                                    children: e(t, {
                                      children: e("p", {
                                        style: {
                                          "--font-selector":
                                            "R0Y7Um9ib3RvLTUwMA==",
                                          "--framer-font-family":
                                            '"Roboto", "Roboto Placeholder", sans-serif',
                                          "--framer-font-size": "21px",
                                          "--framer-font-weight": "500",
                                          "--framer-text-color":
                                            "rgba(255, 255, 255, 0.5)",
                                        },
                                        children: "Expansion and Beta Testing",
                                      }),
                                    }),
                                    className: "framer-1jlmpqn",
                                    fonts: ["GF;Roboto-500"],
                                    verticalAlignment: "top",
                                    withExternalLayout: !0,
                                  }),
                                }),
                              ],
                            }),
                            n("div", {
                              className: "framer-1aoahbi",
                              children: [
                                e(F, {
                                  background: {
                                    alt: "",
                                    fit: "fill",
                                    intrinsicHeight: 234.5,
                                    intrinsicWidth: 279,
                                    loading: "lazy",
                                    pixelHeight: 469,
                                    pixelWidth: 558,
                                    sizes: "30px",
                                    src: "https://framerusercontent.com/images/EXB7t1T6DLoab0EKo4WMZK9eQ.svg?scale-down-to=512",
                                    srcSet:
                                      "https://framerusercontent.com/images/EXB7t1T6DLoab0EKo4WMZK9eQ.svg?scale-down-to=512 512w,https://framerusercontent.com/images/EXB7t1T6DLoab0EKo4WMZK9eQ.svg 558w",
                                  },
                                  className: "framer-12x500",
                                  "data-framer-name": "graphic",
                                  name: "graphic",
                                  style: { rotate: 360 },
                                  transformTemplate: fe,
                                }),
                                e("div", {
                                  className: "framer-g8zynx",
                                  children: e(f, {
                                    __fromCanvasComponent: !0,
                                    children: e(t, {
                                      children: e("p", {
                                        style: {
                                          "--font-selector":
                                            "R0Y7Um9ib3RvLTMwMA==",
                                          "--framer-font-family":
                                            '"Roboto", "Roboto Placeholder", sans-serif',
                                          "--framer-font-size": "17px",
                                          "--framer-font-weight": "300",
                                          "--framer-text-color":
                                            "rgb(255, 255, 255)",
                                        },
                                        children: "Introduce NEXUS gateway",
                                      }),
                                    }),
                                    className: "framer-cznsz",
                                    fonts: ["GF;Roboto-300"],
                                    verticalAlignment: "top",
                                    withExternalLayout: !0,
                                  }),
                                }),
                              ],
                            }),
                            n("div", {
                              className: "framer-1yel45o",
                              children: [
                                e(F, {
                                  background: {
                                    alt: "",
                                    fit: "fill",
                                    intrinsicHeight: 234.5,
                                    intrinsicWidth: 279,
                                    loading: "lazy",
                                    pixelHeight: 469,
                                    pixelWidth: 558,
                                    sizes: "30px",
                                    src: "https://framerusercontent.com/images/EXB7t1T6DLoab0EKo4WMZK9eQ.svg?scale-down-to=512",
                                    srcSet:
                                      "https://framerusercontent.com/images/EXB7t1T6DLoab0EKo4WMZK9eQ.svg?scale-down-to=512 512w,https://framerusercontent.com/images/EXB7t1T6DLoab0EKo4WMZK9eQ.svg 558w",
                                  },
                                  className: "framer-1ax3gx5",
                                  "data-framer-name": "graphic",
                                  name: "graphic",
                                  style: { rotate: 360 },
                                  transformTemplate: fe,
                                }),
                                e("div", {
                                  className: "framer-1voq1cy",
                                  children: e(f, {
                                    __fromCanvasComponent: !0,
                                    children: e(t, {
                                      children: e("p", {
                                        style: {
                                          "--font-selector":
                                            "R0Y7Um9ib3RvLTMwMA==",
                                          "--framer-font-family":
                                            '"Roboto", "Roboto Placeholder", sans-serif',
                                          "--framer-font-size": "17px",
                                          "--framer-font-weight": "300",
                                          "--framer-text-color":
                                            "rgb(255, 255, 255)",
                                        },
                                        children:
                                          "Launch beta and Cloud GPU Rental ",
                                      }),
                                    }),
                                    className: "framer-rjyhg2",
                                    fonts: ["GF;Roboto-300"],
                                    verticalAlignment: "top",
                                    withExternalLayout: !0,
                                  }),
                                }),
                              ],
                            }),
                            n("div", {
                              className: "framer-1fgrtn1",
                              children: [
                                e(F, {
                                  background: {
                                    alt: "",
                                    fit: "fill",
                                    intrinsicHeight: 234.5,
                                    intrinsicWidth: 279,
                                    loading: "lazy",
                                    pixelHeight: 469,
                                    pixelWidth: 558,
                                    sizes: "30px",
                                    src: "https://framerusercontent.com/images/EXB7t1T6DLoab0EKo4WMZK9eQ.svg?scale-down-to=512",
                                    srcSet:
                                      "https://framerusercontent.com/images/EXB7t1T6DLoab0EKo4WMZK9eQ.svg?scale-down-to=512 512w,https://framerusercontent.com/images/EXB7t1T6DLoab0EKo4WMZK9eQ.svg 558w",
                                  },
                                  className: "framer-1se8xvp",
                                  "data-framer-name": "graphic",
                                  name: "graphic",
                                  style: { rotate: 360 },
                                  transformTemplate: fe,
                                }),
                                e("div", {
                                  className: "framer-p0yms5",
                                  children: e(f, {
                                    __fromCanvasComponent: !0,
                                    children: e(t, {
                                      children: e("p", {
                                        style: {
                                          "--font-selector":
                                            "R0Y7Um9ib3RvLTMwMA==",
                                          "--framer-font-family":
                                            '"Roboto", "Roboto Placeholder", sans-serif',
                                          "--framer-font-size": "17px",
                                          "--framer-font-weight": "300",
                                          "--framer-text-color":
                                            "rgb(255, 255, 255)",
                                        },
                                        children:
                                          "Introduce AI-enhanced trading tools",
                                      }),
                                    }),
                                    className: "framer-1tsax7y",
                                    fonts: ["GF;Roboto-300"],
                                    verticalAlignment: "top",
                                    withExternalLayout: !0,
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                        n("div", {
                          className: "framer-1rsdpa1",
                          "data-border": !0,
                          children: [
                            n("div", {
                              className: "framer-nyp1kz",
                              children: [
                                e(f, {
                                  __fromCanvasComponent: !0,
                                  children: e(t, {
                                    children: e("p", {
                                      style: {
                                        "--font-selector":
                                          "R0Y7UG9wcGlucy02MDA=",
                                        "--framer-font-family":
                                          '"Poppins", "Poppins Placeholder", sans-serif',
                                        "--framer-font-size": "34px",
                                        "--framer-font-weight": "600",
                                        "--framer-text-color":
                                          "rgba(255, 255, 255, 0.7)",
                                      },
                                      children: "Stage 3",
                                    }),
                                  }),
                                  className: "framer-1r7lfp7",
                                  fonts: ["GF;Poppins-600"],
                                  verticalAlignment: "top",
                                  withExternalLayout: !0,
                                }),
                                e(w, {
                                  breakpoint: o,
                                  overrides: {
                                    WIuWQVMVd: {
                                      children: e(t, {
                                        children: e("p", {
                                          style: {
                                            "--font-selector":
                                              "R0Y7Um9ib3RvLTUwMA==",
                                            "--framer-font-family":
                                              '"Roboto", "Roboto Placeholder", sans-serif',
                                            "--framer-font-weight": "500",
                                            "--framer-text-color":
                                              "rgba(255, 255, 255, 0.5)",
                                          },
                                          children: "Leadership and Innovation",
                                        }),
                                      }),
                                    },
                                  },
                                  children: e(f, {
                                    __fromCanvasComponent: !0,
                                    children: e(t, {
                                      children: e("p", {
                                        style: {
                                          "--font-selector":
                                            "R0Y7Um9ib3RvLTUwMA==",
                                          "--framer-font-family":
                                            '"Roboto", "Roboto Placeholder", sans-serif',
                                          "--framer-font-size": "21px",
                                          "--framer-font-weight": "500",
                                          "--framer-text-color":
                                            "rgba(255, 255, 255, 0.5)",
                                        },
                                        children: "Leadership and Innovation",
                                      }),
                                    }),
                                    className: "framer-1ktjbmf",
                                    fonts: ["GF;Roboto-500"],
                                    verticalAlignment: "top",
                                    withExternalLayout: !0,
                                  }),
                                }),
                              ],
                            }),
                            n("div", {
                              className: "framer-pemad",
                              children: [
                                e(F, {
                                  background: {
                                    alt: "",
                                    fit: "fill",
                                    intrinsicHeight: 234.5,
                                    intrinsicWidth: 279,
                                    loading: "lazy",
                                    pixelHeight: 469,
                                    pixelWidth: 558,
                                    sizes: "30px",
                                    src: "https://framerusercontent.com/images/EXB7t1T6DLoab0EKo4WMZK9eQ.svg?scale-down-to=512",
                                    srcSet:
                                      "https://framerusercontent.com/images/EXB7t1T6DLoab0EKo4WMZK9eQ.svg?scale-down-to=512 512w,https://framerusercontent.com/images/EXB7t1T6DLoab0EKo4WMZK9eQ.svg 558w",
                                  },
                                  className: "framer-79jfbx",
                                  "data-framer-name": "graphic",
                                  name: "graphic",
                                  style: { rotate: 360 },
                                  transformTemplate: fe,
                                }),
                                e("div", {
                                  className: "framer-23ibbr",
                                  children: e(f, {
                                    __fromCanvasComponent: !0,
                                    children: e(t, {
                                      children: e("p", {
                                        style: {
                                          "--font-selector":
                                            "R0Y7Um9ib3RvLTMwMA==",
                                          "--framer-font-family":
                                            '"Roboto", "Roboto Placeholder", sans-serif',
                                          "--framer-font-size": "17px",
                                          "--framer-font-weight": "300",
                                          "--framer-text-color":
                                            "rgb(255, 255, 255)",
                                        },
                                        children:
                                          "Strengthen industry position",
                                      }),
                                    }),
                                    className: "framer-1vd1grm",
                                    fonts: ["GF;Roboto-300"],
                                    verticalAlignment: "top",
                                    withExternalLayout: !0,
                                  }),
                                }),
                              ],
                            }),
                            n("div", {
                              className: "framer-4ekbvg",
                              children: [
                                e(F, {
                                  background: {
                                    alt: "",
                                    fit: "fill",
                                    intrinsicHeight: 234.5,
                                    intrinsicWidth: 279,
                                    loading: "lazy",
                                    pixelHeight: 469,
                                    pixelWidth: 558,
                                    sizes: "30px",
                                    src: "https://framerusercontent.com/images/EXB7t1T6DLoab0EKo4WMZK9eQ.svg?scale-down-to=512",
                                    srcSet:
                                      "https://framerusercontent.com/images/EXB7t1T6DLoab0EKo4WMZK9eQ.svg?scale-down-to=512 512w,https://framerusercontent.com/images/EXB7t1T6DLoab0EKo4WMZK9eQ.svg 558w",
                                  },
                                  className: "framer-rsz5r8",
                                  "data-framer-name": "graphic",
                                  name: "graphic",
                                  style: { rotate: 360 },
                                  transformTemplate: fe,
                                }),
                                e("div", {
                                  className: "framer-ru5je7",
                                  children: e(f, {
                                    __fromCanvasComponent: !0,
                                    children: e(t, {
                                      children: e("p", {
                                        style: {
                                          "--font-selector":
                                            "R0Y7Um9ib3RvLTMwMA==",
                                          "--framer-font-family":
                                            '"Roboto", "Roboto Placeholder", sans-serif',
                                          "--framer-font-size": "17px",
                                          "--framer-font-weight": "300",
                                          "--framer-text-color":
                                            "rgb(255, 255, 255)",
                                        },
                                        children:
                                          "Improve platform integration",
                                      }),
                                    }),
                                    className: "framer-yrvgfi",
                                    fonts: ["GF;Roboto-300"],
                                    verticalAlignment: "top",
                                    withExternalLayout: !0,
                                  }),
                                }),
                              ],
                            }),
                            n("div", {
                              className: "framer-12sken4",
                              children: [
                                e(F, {
                                  background: {
                                    alt: "",
                                    fit: "fill",
                                    intrinsicHeight: 234.5,
                                    intrinsicWidth: 279,
                                    loading: "lazy",
                                    pixelHeight: 469,
                                    pixelWidth: 558,
                                    sizes: "30px",
                                    src: "https://framerusercontent.com/images/EXB7t1T6DLoab0EKo4WMZK9eQ.svg?scale-down-to=512",
                                    srcSet:
                                      "https://framerusercontent.com/images/EXB7t1T6DLoab0EKo4WMZK9eQ.svg?scale-down-to=512 512w,https://framerusercontent.com/images/EXB7t1T6DLoab0EKo4WMZK9eQ.svg 558w",
                                  },
                                  className: "framer-x70k6",
                                  "data-framer-name": "graphic",
                                  name: "graphic",
                                  style: { rotate: 360 },
                                  transformTemplate: fe,
                                }),
                                e("div", {
                                  className: "framer-euuich",
                                  children: e(f, {
                                    __fromCanvasComponent: !0,
                                    children: e(t, {
                                      children: e("p", {
                                        style: {
                                          "--font-selector":
                                            "R0Y7Um9ib3RvLTMwMA==",
                                          "--framer-font-family":
                                            '"Roboto", "Roboto Placeholder", sans-serif',
                                          "--framer-font-size": "17px",
                                          "--framer-font-weight": "300",
                                          "--framer-text-color":
                                            "rgb(255, 255, 255)",
                                        },
                                        children:
                                          "Research & develop next-gen features",
                                      }),
                                    }),
                                    className: "framer-11biv6m",
                                    fonts: ["GF;Roboto-300"],
                                    verticalAlignment: "top",
                                    withExternalLayout: !0,
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                n("header", {
                  className: "framer-1paacuh",
                  "data-framer-name": "Tokenomics",
                  name: "Tokenomics",
                  children: [
                    n("div", {
                      className: "framer-1vzshxr",
                      "data-framer-name": "HEADER",
                      name: "HEADER",
                      children: [
                        n("div", {
                          className: "framer-62d7d",
                          children: [
                            e(F, {
                              background: {
                                alt: "",
                                fit: "fill",
                                intrinsicHeight: 234.5,
                                intrinsicWidth: 279,
                                loading: "lazy",
                                pixelHeight: 469,
                                pixelWidth: 558,
                                sizes: "41.6418px",
                                src: "https://framerusercontent.com/images/EXB7t1T6DLoab0EKo4WMZK9eQ.svg?scale-down-to=512",
                                srcSet:
                                  "https://framerusercontent.com/images/EXB7t1T6DLoab0EKo4WMZK9eQ.svg?scale-down-to=512 512w,https://framerusercontent.com/images/EXB7t1T6DLoab0EKo4WMZK9eQ.svg 558w",
                              },
                              className: "framer-1fr285q",
                              "data-framer-name": "graphic",
                              name: "graphic",
                              transformTemplate: fe,
                            }),
                            e(f, {
                              __fromCanvasComponent: !0,
                              children: e(t, {
                                children: e("p", {
                                  style: {
                                    "--font-selector":
                                      "R0Y7UG9wcGlucy1yZWd1bGFy",
                                    "--framer-font-family":
                                      '"Poppins", "Poppins Placeholder", sans-serif',
                                    "--framer-font-size": "21px",
                                    "--framer-text-color": "rgb(255, 255, 255)",
                                  },
                                  children: "VistaX",
                                }),
                              }),
                              className: "framer-eyjhb4",
                              fonts: ["GF;Poppins-regular"],
                              verticalAlignment: "top",
                              withExternalLayout: !0,
                            }),
                          ],
                        }),
                        n("div", {
                          className: "framer-eg5yrq",
                          children: [
                            e(R, {
                              href: "https://t.me/vistax_ai",
                              children: e("a", {
                                className: "framer-1n3ysq6 framer-z95135",
                                "data-border": !0,
                                children: e(ue, {
                                  className: "framer-7p787b",
                                  "data-framer-name": "graphic",
                                  fill: "rgb(255, 255, 255)",
                                  intrinsicHeight: 24,
                                  intrinsicWidth: 24,
                                  name: "graphic",
                                  svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="m20.665 3.717-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42 10.532-6.645c.498-.303.953-.14.579.192l-8.533 7.701h-.002l.002.001-.314 4.692c.46 0 .663-.211.921-.46l2.211-2.15 4.599 3.397c.848.467 1.457.227 1.668-.785l3.019-14.228c.309-1.239-.473-1.8-1.282-1.434z"/></svg>',
                                  withExternalLayout: !0,
                                }),
                              }),
                            }),
                            e(w, {
                              breakpoint: o,
                              overrides: {
                                aNwAkBX2Q: { href: "https://x.com/vistax_ai" },
                              },
                              children: e(R, {
                                href: "https://x.com/vistax_ai",
                                openInNewTab: !0,
                                children: e("a", {
                                  className: "framer-1iy9x0t framer-z95135",
                                  "data-border": !0,
                                  children: e(ue, {
                                    className: "framer-1us79o8",
                                    "data-framer-name": "graphic",
                                    fill: "rgb(255, 255, 255)",
                                    intrinsicHeight: 72,
                                    intrinsicWidth: 72,
                                    name: "graphic",
                                    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 72"><switch><g><path d="M42.5 31.2 66 6h-6L39.8 27.6 24 6H4l24.6 33.6L4 66h6l21.3-22.8L48 66h20L42.5 31.2zM12.9 10h8L59 62h-8L12.9 10z"/></g></switch></svg>',
                                    withExternalLayout: !0,
                                  }),
                                }),
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    e("div", { className: "framer-15w7aix" }),
                    e("div", {
                      className: "framer-xd5rzz",
                      "data-framer-name": "HEADER",
                      name: "HEADER",
                      children: e(f, {
                        __fromCanvasComponent: !0,
                        children: e(t, {
                          children: e("p", {
                            style: {
                              "--font-selector": "R0Y7SW50ZXItMzAw",
                              "--framer-font-family":
                                '"Inter", "Inter Placeholder", sans-serif',
                              "--framer-font-size": "13px",
                              "--framer-font-weight": "300",
                              "--framer-text-alignment": "center",
                              "--framer-text-color": "rgba(255, 255, 255, 0.8)",
                            },
                            children: "\xA92024 VISTAX",
                          }),
                        }),
                        className: "framer-oraw7",
                        fonts: ["GF;Inter-300"],
                        verticalAlignment: "top",
                        withExternalLayout: !0,
                      }),
                    }),
                  ],
                }),
              ],
            }),
            e("div", { className: W(Ir, ...xe), id: "overlay" }),
          ],
        }),
      })
    );
  }),
  Nt = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    `.${Ve.bodyClassName}-framer-O5Y6F { background: rgb(0, 0, 0); }`,
    ".framer-O5Y6F.framer-z95135, .framer-O5Y6F .framer-z95135 { display: block; }",
    ".framer-O5Y6F.framer-193zvy4 { align-content: center; align-items: center; background-color: #000000; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: 1200px; }",
    ".framer-O5Y6F .framer-1jnd53f-container { bottom: 0px; flex: none; left: 0px; pointer-events: none; position: fixed; right: 0px; top: 0px; z-index: 8; }",
    ".framer-O5Y6F .framer-l9ylc9 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 100vh; justify-content: center; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: 100%; }",
    ".framer-O5Y6F .framer-1j62a04 { align-content: center; align-items: center; background: linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgb(0, 0, 0) 100%); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 100%; justify-content: center; left: calc(50.00000000000002% - 100% / 2); overflow: hidden; padding: 0px 0px 0px 0px; position: absolute; top: calc(50.00000000000002% - 100% / 2); width: 100%; z-index: 0; }",
    ".framer-O5Y6F .framer-1dogwpi-container { flex: none; height: 100%; position: relative; width: 100%; }",
    ".framer-O5Y6F .framer-7lxdii { align-content: center; align-items: center; background: linear-gradient(180deg, rgba(0, 0, 0, 0.1) 0%, rgb(0, 0, 0) 100%); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 100%; justify-content: center; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: 100%; }",
    ".framer-O5Y6F .framer-z14e78 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 141px; justify-content: center; left: 0px; overflow: hidden; padding: 0px 0px 0px 0px; position: absolute; top: 0px; width: 100%; }",
    ".framer-O5Y6F .framer-wwicdc-container { flex: none; height: auto; position: relative; width: auto; z-index: 1; }",
    ".framer-O5Y6F .framer-zjh0o5 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; max-width: 1200px; overflow: hidden; padding: 100px 100px 100px 100px; position: relative; width: 100%; }",
    ".framer-O5Y6F .framer-1x96k7b, .framer-O5Y6F .framer-72du4m, .framer-O5Y6F .framer-egj7f8, .framer-O5Y6F .framer-1bbi0qr, .framer-O5Y6F .framer-11dc5xn { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: min-content; }",
    ".framer-O5Y6F .framer-38n2ck { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; -webkit-user-select: none; flex: none; height: auto; position: relative; user-select: none; white-space: pre-wrap; width: 772px; word-break: break-word; word-wrap: break-word; }",
    ".framer-O5Y6F .framer-1uwe3a { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; -webkit-user-select: none; flex: none; height: auto; position: relative; user-select: none; white-space: pre-wrap; width: 816px; word-break: break-word; word-wrap: break-word; }",
    ".framer-O5Y6F .framer-8r7r1s { background-color: rgba(255, 255, 255, 0.2); flex: none; height: 1px; overflow: hidden; position: relative; width: 452px; }",
    ".framer-O5Y6F .framer-g311aq, .framer-O5Y6F .framer-eg5yrq { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: min-content; }",
    ".framer-O5Y6F .framer-1ytj923-container { flex: none; height: 40px; position: relative; width: 140px; }",
    ".framer-O5Y6F .framer-gqeenb { align-content: center; align-items: center; background-color: rgba(255, 255, 255, 0.1); border-bottom-left-radius: 25px; border-bottom-right-radius: 25px; border-top-left-radius: 25px; border-top-right-radius: 25px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 40px; justify-content: center; overflow: hidden; padding: 20px 20px 20px 20px; position: relative; text-decoration: none; width: 140px; will-change: var(--framer-will-change-override, transform); }",
    ".framer-O5Y6F .framer-sbc56h { aspect-ratio: 0.8719101123595505 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 23px); position: relative; width: 20px; }",
    ".framer-O5Y6F .framer-ogzqbh { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; text-shadow: 0px 1px 2px rgba(0, 0, 0, 0.25); white-space: pre; width: auto; }",
    ".framer-O5Y6F .framer-m7k3rj { align-content: center; align-items: center; bottom: 0px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 100px; height: 106px; justify-content: center; left: 0px; overflow: hidden; padding: 0px 0px 0px 0px; position: absolute; width: 100%; z-index: 1; }",
    ".framer-O5Y6F .framer-1a7osbk { --border-bottom-width: 0px; --border-color: rgba(255, 255, 255, 0.2); --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 2px; align-content: center; align-items: center; background: linear-gradient(180deg, #111111 0%, rgb(0, 0, 0) 100%); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 20px 20px 20px 20px; position: relative; width: 100%; }",
    ".framer-O5Y6F .framer-ujuhi3, .framer-O5Y6F .framer-1thesjn, .framer-O5Y6F .framer-1p8y6td, .framer-O5Y6F .framer-y7o748, .framer-O5Y6F .framer-1yqmz82, .framer-O5Y6F .framer-18vb4tq, .framer-O5Y6F .framer-5zoy37, .framer-O5Y6F .framer-zfkn5i, .framer-O5Y6F .framer-189egwi, .framer-O5Y6F .framer-awermi, .framer-O5Y6F .framer-150pmcy, .framer-O5Y6F .framer-1nafqk1, .framer-O5Y6F .framer-egc4z1, .framer-O5Y6F .framer-1sizsey, .framer-O5Y6F .framer-18pxoic, .framer-O5Y6F .framer-165y8u9, .framer-O5Y6F .framer-jge3m0, .framer-O5Y6F .framer-14bes3r, .framer-O5Y6F .framer-azc2t3, .framer-O5Y6F .framer-1foa3go, .framer-O5Y6F .framer-o5fwoo, .framer-O5Y6F .framer-1uy0123, .framer-O5Y6F .framer-qvxf5a, .framer-O5Y6F .framer-180ii4p, .framer-O5Y6F .framer-vbmkwi, .framer-O5Y6F .framer-dx2p3m, .framer-O5Y6F .framer-1jlmpqn, .framer-O5Y6F .framer-1r7lfp7, .framer-O5Y6F .framer-1ktjbmf, .framer-O5Y6F .framer-oraw7 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre; width: auto; }",
    ".framer-O5Y6F .framer-1t4gckd, .framer-O5Y6F .framer-ni735g { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: auto; justify-content: center; max-width: 1200px; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: 100%; }",
    ".framer-O5Y6F .framer-dndma0 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: auto; justify-content: center; overflow: hidden; padding: 20px 20px 50px 20px; position: relative; width: 100%; z-index: 3; }",
    ".framer-O5Y6F .framer-14rhzhf { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: wrap; height: min-content; justify-content: space-between; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: 100%; }",
    ".framer-O5Y6F .framer-m8ladj, .framer-O5Y6F .framer-phvcje, .framer-O5Y6F .framer-11hkzdp { --border-bottom-width: 1px; --border-color: rgba(255, 255, 255, 0.2); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: center; align-items: center; border-bottom-left-radius: 50px; border-bottom-right-radius: 50px; border-top-left-radius: 50px; border-top-right-radius: 50px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: auto; justify-content: center; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: 363px; will-change: var(--framer-will-change-override, transform); }",
    ".framer-O5Y6F .framer-1tva6z4, .framer-O5Y6F .framer-183mz1s, .framer-O5Y6F .framer-1w0rnuh { align-content: center; align-items: center; background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 100%); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: auto; justify-content: center; overflow: hidden; padding: 25px 25px 25px 25px; position: relative; width: 100%; z-index: 3; }",
    ".framer-O5Y6F .framer-duzv6a, .framer-O5Y6F .framer-1vf7dr9, .framer-O5Y6F .framer-zcjpe { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 40px; height: 120px; justify-content: center; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: 164px; }",
    ".framer-O5Y6F .framer-d6hvz3 { background: linear-gradient(180deg, rgba(0, 0, 0, 0) 38.86337058212064%, rgb(0, 0, 0) 100%); flex: none; height: 100%; left: calc(50.00000000000002% - 100% / 2); overflow: hidden; position: absolute; top: calc(50.00000000000002% - 100% / 2); width: 100%; z-index: 1; }",
    ".framer-O5Y6F .framer-v3qnbw { aspect-ratio: 0.9703433922996878 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 120px); overflow: visible; position: relative; width: 117px; }",
    ".framer-O5Y6F .framer-14zao7r, .framer-O5Y6F .framer-183eb3t, .framer-O5Y6F .framer-k9lskp, .framer-O5Y6F .framer-1efc536, .framer-O5Y6F .framer-4s8m1y, .framer-O5Y6F .framer-nyp1kz { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: 100%; }",
    ".framer-O5Y6F .framer-14nodav, .framer-O5Y6F .framer-z3xeq3, .framer-O5Y6F .framer-wkcdj0, .framer-O5Y6F .framer-1j7cihu, .framer-O5Y6F .framer-gemeia, .framer-O5Y6F .framer-10s15d1, .framer-O5Y6F .framer-lhywgf { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: min-content; }",
    ".framer-O5Y6F .framer-5e4nu, .framer-O5Y6F .framer-di6tbe, .framer-O5Y6F .framer-cjnfpx, .framer-O5Y6F .framer-16bg7sc, .framer-O5Y6F .framer-16g1v86, .framer-O5Y6F .framer-1g7rzxj, .framer-O5Y6F .framer-1l56cfq, .framer-O5Y6F .framer-gme3bg { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: min-content; }",
    ".framer-O5Y6F .framer-ahl50x, .framer-O5Y6F .framer-3xuq95, .framer-O5Y6F .framer-1du74fv, .framer-O5Y6F .framer-1dv922c, .framer-O5Y6F .framer-xyg76z, .framer-O5Y6F .framer-1jd31wb, .framer-O5Y6F .framer-1leph2n, .framer-O5Y6F .framer-62d7d { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: min-content; }",
    ".framer-O5Y6F .framer-3e85ky, .framer-O5Y6F .framer-16ycp4x, .framer-O5Y6F .framer-13j9od7, .framer-O5Y6F .framer-oujm3k, .framer-O5Y6F .framer-173dkl5, .framer-O5Y6F .framer-1dv8vet, .framer-O5Y6F .framer-10ai5uv, .framer-O5Y6F .framer-8dq8in, .framer-O5Y6F .framer-1je96q6, .framer-O5Y6F .framer-d3ul2o, .framer-O5Y6F .framer-2yxsfe, .framer-O5Y6F .framer-cznsz, .framer-O5Y6F .framer-rjyhg2, .framer-O5Y6F .framer-1tsax7y, .framer-O5Y6F .framer-1vd1grm, .framer-O5Y6F .framer-yrvgfi, .framer-O5Y6F .framer-11biv6m { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }",
    ".framer-O5Y6F .framer-10g7gjk, .framer-O5Y6F .framer-11rmz6p { background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.18) 100%); flex: none; height: 100%; left: calc(50.00000000000002% - 100% / 2); overflow: hidden; position: absolute; top: calc(50.00000000000002% - 100% / 2); width: 100%; z-index: 1; }",
    ".framer-O5Y6F .framer-1pkqxk8 { aspect-ratio: 1.113107822410148 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 120px); overflow: visible; position: relative; width: 134px; }",
    ".framer-O5Y6F .framer-n5n46w { aspect-ratio: 1.4580965909090908 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 120px); overflow: visible; position: relative; width: 175px; }",
    ".framer-O5Y6F .framer-d3hm2h { align-content: center; align-items: center; background: linear-gradient(180deg, #000000 0%, rgb(0, 0, 0) 100%); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 50px; height: min-content; justify-content: center; max-width: 1200px; overflow: hidden; padding: 20px 50px 20px 50px; position: relative; width: 100%; }",
    ".framer-O5Y6F .framer-syduod { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; max-width: 1000px; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: min-content; }",
    ".framer-O5Y6F .framer-cfbwdx { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 896px; word-break: break-word; word-wrap: break-word; }",
    ".framer-O5Y6F .framer-16irkgz, .framer-O5Y6F .framer-1uqmxhu, .framer-O5Y6F .framer-8bxoa, .framer-O5Y6F .framer-1usnbge, .framer-O5Y6F .framer-1hwoypl, .framer-O5Y6F .framer-15w7aix { background: linear-gradient(270deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.2) 49.549549549549546%, rgba(255, 255, 255, 0) 100%); flex: none; height: 2px; left: calc(50.00000000000002% - 100% / 2); overflow: hidden; position: absolute; top: 0px; width: 100%; z-index: 1; }",
    ".framer-O5Y6F .framer-nh3lsz { aspect-ratio: 1.1897654584221748 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 507px); left: 50%; opacity: 0.05; overflow: visible; position: absolute; top: 50%; transform: perspective(1200px) translate(-50%, -50%); width: 603px; z-index: 0; }",
    ".framer-O5Y6F .framer-1u74xdr, .framer-O5Y6F .framer-1j871wm { --border-bottom-width: 0px; --border-color: rgba(255, 255, 255, 0.2); --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 2px; align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 100px 50px 50px 50px; position: relative; width: 100%; }",
    ".framer-O5Y6F .framer-14t7xo, .framer-O5Y6F .framer-yd1hrc { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; max-width: 1000px; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: 1000px; }",
    ".framer-O5Y6F .framer-tmzp42-container { flex: none; height: auto; position: relative; width: 100%; }",
    ".framer-O5Y6F .framer-9fndzt { align-content: center; align-items: center; background: linear-gradient(180deg, #000000 0%, rgb(0, 0, 0) 100%); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 50px; height: min-content; justify-content: center; max-width: 1200px; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: 100%; }",
    ".framer-O5Y6F .framer-1odo3c5 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 795px; justify-content: flex-end; overflow: hidden; padding: 40px 100px 40px 100px; position: relative; width: 1px; }",
    ".framer-O5Y6F .framer-1ynp2gk { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; max-width: 1000px; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: 800px; z-index: 3; }",
    ".framer-O5Y6F .framer-ww9t7u { aspect-ratio: 0.9972337482710927 / 1; bottom: -308px; flex: none; left: 50%; overflow: hidden; position: absolute; top: 50px; transform: translateX(-50%); width: var(--framer-aspect-ratio-supported, 1050px); z-index: 1; }",
    ".framer-O5Y6F .framer-lhmw3x { align-content: center; align-items: center; aspect-ratio: 0.9968701095461658 / 1; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: var(--framer-aspect-ratio-supported, 996px); justify-content: center; left: 50%; overflow: visible; padding: 0px 0px 0px 0px; position: absolute; top: 50%; transform: translate(-50%, -50%); width: 95%; }",
    ".framer-O5Y6F .framer-ymn3ik { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 277px); left: 50%; position: absolute; top: 50%; transform: translate(-50%, -50%); width: 277px; }",
    ".framer-O5Y6F .framer-1juho2w { align-content: center; align-items: center; aspect-ratio: 1.000776397515528 / 1; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: var(--framer-aspect-ratio-supported, 1049px); justify-content: center; left: 50%; overflow: visible; padding: 0px 0px 0px 0px; position: absolute; top: 50%; transform: translate(-50%, -50%); width: 100%; z-index: 2; }",
    ".framer-O5Y6F .framer-1wso9oh { background: linear-gradient(0deg, #000000 34.61261333510283%, rgba(0, 0, 0, 0) 100%); flex: none; height: 100%; left: calc(50.00000000000002% - 100% / 2); overflow: hidden; position: absolute; top: calc(49.954669084315526% - 100% / 2); width: 100%; z-index: 2; }",
    ".framer-O5Y6F .framer-1mldoj7 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-end; left: 0px; max-width: 1000px; overflow: hidden; padding: 0px 0px 0px 0px; position: absolute; top: 0px; width: 350px; z-index: 3; }",
    ".framer-O5Y6F .framer-jleat7 { aspect-ratio: 1.1897654584221748 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 96px); left: 50%; overflow: visible; position: absolute; top: 50%; transform: perspective(1200px) translate(-50%, -50%); width: 114px; z-index: 1; }",
    ".framer-O5Y6F .framer-7kqin0 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: 649px; }",
    ".framer-O5Y6F .framer-1018tna { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; z-index: 1; }",
    ".framer-O5Y6F .framer-m31cdb { align-content: center; align-items: center; background: linear-gradient(0deg, #111111 0%, rgb(0, 0, 0) 100%); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px 50px 50px 50px; position: relative; width: 100%; }",
    ".framer-O5Y6F .framer-61fj45 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: auto; justify-content: center; overflow: hidden; padding: 20px 50px 50px 50px; position: relative; width: 100%; z-index: 3; }",
    ".framer-O5Y6F .framer-8nmqq2, .framer-O5Y6F .framer-u0y2s4 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: wrap; gap: 40px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: 100%; }",
    ".framer-O5Y6F .framer-4ttm9n, .framer-O5Y6F .framer-yb7idc, .framer-O5Y6F .framer-ya0fx9, .framer-O5Y6F .framer-1ywrsqf { --border-bottom-width: 1px; --border-color: rgba(255, 255, 255, 0.2); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: center; align-items: center; border-bottom-left-radius: 50px; border-bottom-right-radius: 50px; border-top-left-radius: 50px; border-top-right-radius: 50px; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: auto; justify-content: center; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: 1px; will-change: var(--framer-will-change-override, transform); }",
    ".framer-O5Y6F .framer-2bgpc7, .framer-O5Y6F .framer-fcbtka, .framer-O5Y6F .framer-14wr2dt { align-content: center; align-items: center; background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 100%); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: auto; justify-content: center; overflow: hidden; padding: 30px 30px 30px 30px; position: relative; width: 100%; z-index: 3; }",
    ".framer-O5Y6F .framer-1ymopor, .framer-O5Y6F .framer-1gezt3f, .framer-O5Y6F .framer-5p0ooj, .framer-O5Y6F .framer-1360mo0, .framer-O5Y6F .framer-1aoahbi, .framer-O5Y6F .framer-1yel45o, .framer-O5Y6F .framer-1fgrtn1, .framer-O5Y6F .framer-pemad, .framer-O5Y6F .framer-4ekbvg, .framer-O5Y6F .framer-12sken4 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: 100%; }",
    ".framer-O5Y6F .framer-13aubvo { align-content: center; align-items: center; background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 100%); display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: auto; justify-content: center; overflow: hidden; padding: 30px 30px 30px 30px; position: relative; width: 1px; z-index: 3; }",
    ".framer-O5Y6F .framer-1emnbdp { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 100px; height: min-content; justify-content: center; max-width: 1200px; overflow: hidden; padding: 0px 40px 100px 40px; position: relative; width: 100%; }",
    ".framer-O5Y6F .framer-iiqzg0 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 80px; height: min-content; justify-content: center; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 30%; }",
    ".framer-O5Y6F .framer-9rf623 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 100%; }",
    ".framer-O5Y6F .framer-qubs51-container { flex: none; height: 443px; position: relative; width: 600px; }",
    ".framer-O5Y6F .framer-ip7gip { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: auto; justify-content: center; overflow: hidden; padding: 10px 10px 10px 10px; position: relative; width: 50%; z-index: 1; }",
    ".framer-O5Y6F .framer-1ovkxo4-container, .framer-O5Y6F .framer-azsavf-container, .framer-O5Y6F .framer-1palma6-container { flex: none; height: auto; position: relative; width: 393px; }",
    ".framer-O5Y6F .framer-xnl9wa { align-content: center; align-items: center; background: linear-gradient(180deg, #000000 0%, rgb(0, 0, 0) 100%); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 50px; height: min-content; justify-content: center; max-width: 1200px; overflow: hidden; padding: 100px 200px 100px 200px; position: relative; width: 100%; }",
    ".framer-O5Y6F .framer-1no0igs, .framer-O5Y6F .framer-1joti7b { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; max-width: 1000px; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: 100%; }",
    ".framer-O5Y6F .framer-xz66qp { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: 902px; }",
    ".framer-O5Y6F .framer-q9h42q { --border-bottom-width: 1px; --border-color: rgba(255, 255, 255, 0.2); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: center; align-items: center; background: linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, rgb(0, 0, 0) 100%); border-bottom-left-radius: 16px; border-bottom-right-radius: 16px; border-top-left-radius: 16px; border-top-right-radius: 16px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: hidden; padding: 40px 50px 40px 50px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }",
    ".framer-O5Y6F .framer-21awx4 { align-content: center; align-items: center; background-color: rgba(17, 191, 240, 0.78); border-bottom-left-radius: 180px; border-bottom-right-radius: 180px; border-top-left-radius: 180px; border-top-right-radius: 180px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 360px; justify-content: center; overflow: hidden; padding: 20px 20px 20px 20px; position: relative; width: 360px; will-change: var(--framer-will-change-override, transform); }",
    ".framer-O5Y6F .framer-qv5e39 { aspect-ratio: 1.1897654584221748 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 96px); left: 50%; overflow: visible; position: absolute; top: 50%; transform: perspective(1200px) translate(-50%, -50%); width: 114px; z-index: 2; }",
    ".framer-O5Y6F .framer-1my5lur { background-color: #5e5e5e; flex: none; height: 180px; overflow: hidden; position: absolute; right: 0px; top: 0px; width: 180px; z-index: 1; }",
    ".framer-O5Y6F .framer-102t1zs { background-color: #000000; border-bottom-left-radius: 160px; border-bottom-right-radius: 160px; border-top-left-radius: 160px; border-top-right-radius: 160px; bottom: -160px; flex: none; height: 320px; left: -160px; overflow: hidden; position: absolute; width: 320px; will-change: var(--framer-will-change-override, transform); z-index: 2; }",
    ".framer-O5Y6F .framer-zs0iv1 { background-color: #1b98be; flex: none; height: 129px; left: -127px; overflow: hidden; position: absolute; top: -6px; width: 301px; z-index: 1; }",
    ".framer-O5Y6F .framer-actxzn { background-color: rgba(255, 255, 255, 0.8); flex: none; height: 169px; left: -36px; overflow: hidden; position: absolute; top: -15px; width: 210px; z-index: 0; }",
    ".framer-O5Y6F .framer-h5hjz8 { background-color: #000000; border-bottom-left-radius: 160px; border-bottom-right-radius: 160px; border-top-left-radius: 160px; border-top-right-radius: 160px; flex: none; height: 320px; overflow: hidden; position: relative; width: 320px; will-change: var(--framer-will-change-override, transform); }",
    ".framer-O5Y6F .framer-16r1ux8 { align-content: flex-start; align-items: flex-start; align-self: stretch; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: auto; justify-content: center; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: 305px; }",
    ".framer-O5Y6F .framer-lxiuzw, .framer-O5Y6F .framer-qst9zg, .framer-O5Y6F .framer-xf2fun, .framer-O5Y6F .framer-154qdgf, .framer-O5Y6F .framer-1nrlp5f, .framer-O5Y6F .framer-1jtro0e { --border-bottom-width: 1px; --border-color: rgba(255, 255, 255, 0.2); --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 0px; align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 10px 10px 10px 10px; position: relative; width: min-content; }",
    ".framer-O5Y6F .framer-10d5i2k, .framer-O5Y6F .framer-16wyqsv, .framer-O5Y6F .framer-17w0yp1, .framer-O5Y6F .framer-psjzps, .framer-O5Y6F .framer-10amtw2, .framer-O5Y6F .framer-1gp2ibl { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: min-content; }",
    ".framer-O5Y6F .framer-h8tult, .framer-O5Y6F .framer-wfkd66, .framer-O5Y6F .framer-18ij9qv, .framer-O5Y6F .framer-k74r39, .framer-O5Y6F .framer-14xjmrf, .framer-O5Y6F .framer-zpispj { align-content: center; align-items: center; align-self: stretch; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: auto; }",
    ".framer-O5Y6F .framer-4znfql { background-color: #10c0f0; flex: none; height: 20px; overflow: hidden; position: relative; width: 20px; }",
    ".framer-O5Y6F .framer-19vyefi { background-color: #ffffff; flex: none; height: 20px; overflow: hidden; position: relative; width: 20px; }",
    ".framer-O5Y6F .framer-kllrln { background-color: #424242; flex: none; height: 20px; overflow: hidden; position: relative; width: 20px; }",
    ".framer-O5Y6F .framer-c1m4a1 { --border-bottom-width: 1px; --border-color: rgba(255, 255, 255, 0.2); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: center; align-items: center; background: linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, rgb(0, 0, 0) 100%); border-bottom-left-radius: 16px; border-bottom-right-radius: 16px; border-top-left-radius: 16px; border-top-right-radius: 16px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: hidden; padding: 20px 50px 20px 50px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }",
    ".framer-O5Y6F .framer-c5tuux { align-content: flex-start; align-items: flex-start; border-bottom-left-radius: 16px; border-bottom-right-radius: 16px; border-top-left-radius: 16px; border-top-right-radius: 16px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }",
    ".framer-O5Y6F .framer-18n7767 { align-content: flex-start; align-items: flex-start; align-self: stretch; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: auto; justify-content: center; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: min-content; }",
    ".framer-O5Y6F .framer-1pxq2ug-container { flex: none; height: auto; position: relative; width: auto; }",
    ".framer-O5Y6F .framer-riw76y { align-content: center; align-items: center; background: linear-gradient(180deg, #000000 0%, rgb(0, 0, 0) 100%); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 50px; height: min-content; justify-content: center; max-width: 1200px; overflow: hidden; padding: 100px 20px 100px 20px; position: relative; width: 100%; }",
    ".framer-O5Y6F .framer-17t37vx { aspect-ratio: 1.4946996466431095 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 70px); overflow: visible; position: relative; width: 105px; }",
    ".framer-O5Y6F .framer-chmkkw { aspect-ratio: 1.669928245270711 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 70px); overflow: visible; position: relative; width: 117px; }",
    ".framer-O5Y6F .framer-lelg5t { aspect-ratio: 2.493765586034913 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 70px); overflow: visible; position: relative; width: 175px; }",
    ".framer-O5Y6F .framer-15nqsvp { aspect-ratio: 1.244228432563791 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 70px); overflow: visible; position: relative; width: 87px; }",
    ".framer-O5Y6F .framer-1fqnsyc { align-content: center; align-items: center; background: linear-gradient(180deg, #000000 0%, rgb(0, 0, 0) 100%); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 50px; height: min-content; justify-content: center; max-width: 1200px; overflow: hidden; padding: 100px 20px 100px 20px; position: relative; width: 100%; }",
    ".framer-O5Y6F .framer-web97o { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: wrap; gap: 20px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: 100%; }",
    ".framer-O5Y6F .framer-58vhza { --border-bottom-width: 1px; --border-color: rgba(255, 255, 255, 0.2); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: flex-start; align-items: flex-start; background: linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, rgb(0, 0, 0) 100%); border-bottom-left-radius: 16px; border-bottom-right-radius: 16px; border-top-left-radius: 16px; border-top-right-radius: 16px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: hidden; padding: 20px 20px 20px 20px; position: relative; width: 360px; will-change: var(--framer-will-change-override, transform); }",
    ".framer-O5Y6F .framer-1r3gnwk, .framer-O5Y6F .framer-wooshp { -webkit-filter: grayscale(0); aspect-ratio: 1.1951219512195121 / 1; filter: grayscale(0); flex: none; height: var(--framer-aspect-ratio-supported, 25px); overflow: visible; position: relative; transform: perspective(1200px); width: 30px; z-index: 2; }",
    ".framer-O5Y6F .framer-5xxthi, .framer-O5Y6F .framer-1uxhzev, .framer-O5Y6F .framer-1wv8ce, .framer-O5Y6F .framer-g8zynx, .framer-O5Y6F .framer-1voq1cy, .framer-O5Y6F .framer-p0yms5, .framer-O5Y6F .framer-23ibbr, .framer-O5Y6F .framer-ru5je7, .framer-O5Y6F .framer-euuich { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: 1px; }",
    ".framer-O5Y6F .framer-u9m65e, .framer-O5Y6F .framer-12x500, .framer-O5Y6F .framer-1ax3gx5, .framer-O5Y6F .framer-1se8xvp, .framer-O5Y6F .framer-rsz5r8, .framer-O5Y6F .framer-x70k6 { -webkit-filter: grayscale(1); aspect-ratio: 1.1951219512195121 / 1; filter: grayscale(1); flex: none; height: var(--framer-aspect-ratio-supported, 25px); overflow: visible; position: relative; transform: perspective(1200px); width: 30px; z-index: 2; }",
    ".framer-O5Y6F .framer-9j1btl { --border-bottom-width: 1px; --border-color: rgba(255, 255, 255, 0.2); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: flex-start; align-items: flex-start; align-self: stretch; background: linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, rgb(0, 0, 0) 100%); border-bottom-left-radius: 16px; border-bottom-right-radius: 16px; border-top-left-radius: 16px; border-top-right-radius: 16px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: auto; justify-content: flex-start; overflow: hidden; padding: 20px 20px 20px 20px; position: relative; width: 360px; will-change: var(--framer-will-change-override, transform); }",
    ".framer-O5Y6F .framer-1rsdpa1 { --border-bottom-width: 1px; --border-color: rgba(255, 255, 255, 0.2); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: flex-start; align-items: flex-start; align-self: stretch; background: linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, rgb(0, 0, 0) 100%); border-bottom-left-radius: 16px; border-bottom-right-radius: 16px; border-top-left-radius: 16px; border-top-right-radius: 16px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: auto; justify-content: center; overflow: hidden; padding: 20px 20px 20px 20px; position: relative; width: 360px; will-change: var(--framer-will-change-override, transform); }",
    ".framer-O5Y6F .framer-79jfbx { -webkit-filter: grayscale(1); aspect-ratio: 1.1951219512195121 / 1; filter: grayscale(1); flex: none; height: var(--framer-aspect-ratio-supported, 26px); overflow: visible; position: relative; transform: perspective(1200px); width: 30px; z-index: 2; }",
    ".framer-O5Y6F .framer-1paacuh { align-content: center; align-items: center; background: linear-gradient(180deg, #000000 0%, rgb(0, 0, 0) 100%); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 50px; height: min-content; justify-content: center; max-width: 1200px; overflow: hidden; padding: 100px 20px 40px 20px; position: relative; width: 100%; }",
    ".framer-O5Y6F .framer-1vzshxr { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; max-width: 1200px; overflow: hidden; padding: 0px 70px 0px 70px; position: relative; width: 100%; z-index: 1; }",
    ".framer-O5Y6F .framer-1fr285q { aspect-ratio: 1.1897654584221748 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 35px); overflow: visible; position: relative; transform: perspective(1200px); width: 42px; }",
    ".framer-O5Y6F .framer-eyjhb4 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.4); white-space: pre; width: auto; }",
    ".framer-O5Y6F .framer-1n3ysq6 { --border-bottom-width: 1px; --border-color: rgba(255, 255, 255, 0.2); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: center; align-items: center; border-bottom-left-radius: 10px; border-bottom-right-radius: 10px; border-top-left-radius: 10px; border-top-right-radius: 10px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 40px; justify-content: center; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; text-decoration: none; width: 40px; will-change: var(--framer-will-change-override, transform); }",
    ".framer-O5Y6F .framer-7p787b, .framer-O5Y6F .framer-1us79o8 { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 24px); position: relative; width: 24px; }",
    ".framer-O5Y6F .framer-1iy9x0t { --border-bottom-width: 1px; --border-color: rgba(255, 255, 255, 0.2); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: center; align-items: center; aspect-ratio: 1 / 1; border-bottom-left-radius: 10px; border-bottom-right-radius: 10px; border-top-left-radius: 10px; border-top-right-radius: 10px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: var(--framer-aspect-ratio-supported, 40px); justify-content: center; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; text-decoration: none; width: 40px; will-change: var(--framer-will-change-override, transform); }",
    ".framer-O5Y6F .framer-xd5rzz { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; max-width: 1200px; overflow: hidden; padding: 0px 70px 0px 70px; position: relative; width: 100%; z-index: 1; }",
    "@supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-O5Y6F.framer-193zvy4, .framer-O5Y6F .framer-l9ylc9, .framer-O5Y6F .framer-1j62a04, .framer-O5Y6F .framer-7lxdii, .framer-O5Y6F .framer-z14e78, .framer-O5Y6F .framer-zjh0o5, .framer-O5Y6F .framer-1x96k7b, .framer-O5Y6F .framer-g311aq, .framer-O5Y6F .framer-gqeenb, .framer-O5Y6F .framer-m7k3rj, .framer-O5Y6F .framer-1a7osbk, .framer-O5Y6F .framer-1t4gckd, .framer-O5Y6F .framer-dndma0, .framer-O5Y6F .framer-m8ladj, .framer-O5Y6F .framer-1tva6z4, .framer-O5Y6F .framer-duzv6a, .framer-O5Y6F .framer-14zao7r, .framer-O5Y6F .framer-14nodav, .framer-O5Y6F .framer-5e4nu, .framer-O5Y6F .framer-ahl50x, .framer-O5Y6F .framer-phvcje, .framer-O5Y6F .framer-183mz1s, .framer-O5Y6F .framer-1vf7dr9, .framer-O5Y6F .framer-183eb3t, .framer-O5Y6F .framer-z3xeq3, .framer-O5Y6F .framer-di6tbe, .framer-O5Y6F .framer-3xuq95, .framer-O5Y6F .framer-11hkzdp, .framer-O5Y6F .framer-1w0rnuh, .framer-O5Y6F .framer-zcjpe, .framer-O5Y6F .framer-k9lskp, .framer-O5Y6F .framer-wkcdj0, .framer-O5Y6F .framer-cjnfpx, .framer-O5Y6F .framer-1du74fv, .framer-O5Y6F .framer-d3hm2h, .framer-O5Y6F .framer-syduod, .framer-O5Y6F .framer-1u74xdr, .framer-O5Y6F .framer-14t7xo, .framer-O5Y6F .framer-9fndzt, .framer-O5Y6F .framer-1odo3c5, .framer-O5Y6F .framer-1ynp2gk, .framer-O5Y6F .framer-lhmw3x, .framer-O5Y6F .framer-1juho2w, .framer-O5Y6F .framer-1mldoj7, .framer-O5Y6F .framer-7kqin0, .framer-O5Y6F .framer-m31cdb, .framer-O5Y6F .framer-ni735g, .framer-O5Y6F .framer-61fj45, .framer-O5Y6F .framer-8nmqq2, .framer-O5Y6F .framer-4ttm9n, .framer-O5Y6F .framer-2bgpc7, .framer-O5Y6F .framer-72du4m, .framer-O5Y6F .framer-1j7cihu, .framer-O5Y6F .framer-16bg7sc, .framer-O5Y6F .framer-1dv922c, .framer-O5Y6F .framer-yb7idc, .framer-O5Y6F .framer-fcbtka, .framer-O5Y6F .framer-egj7f8, .framer-O5Y6F .framer-gemeia, .framer-O5Y6F .framer-16g1v86, .framer-O5Y6F .framer-xyg76z, .framer-O5Y6F .framer-u0y2s4, .framer-O5Y6F .framer-ya0fx9, .framer-O5Y6F .framer-14wr2dt, .framer-O5Y6F .framer-1bbi0qr, .framer-O5Y6F .framer-10s15d1, .framer-O5Y6F .framer-1g7rzxj, .framer-O5Y6F .framer-1jd31wb, .framer-O5Y6F .framer-1ywrsqf, .framer-O5Y6F .framer-1ymopor, .framer-O5Y6F .framer-13aubvo, .framer-O5Y6F .framer-11dc5xn, .framer-O5Y6F .framer-lhywgf, .framer-O5Y6F .framer-1l56cfq, .framer-O5Y6F .framer-1leph2n, .framer-O5Y6F .framer-1j871wm, .framer-O5Y6F .framer-yd1hrc, .framer-O5Y6F .framer-1emnbdp, .framer-O5Y6F .framer-iiqzg0, .framer-O5Y6F .framer-9rf623, .framer-O5Y6F .framer-ip7gip, .framer-O5Y6F .framer-xnl9wa, .framer-O5Y6F .framer-1no0igs, .framer-O5Y6F .framer-xz66qp, .framer-O5Y6F .framer-21awx4, .framer-O5Y6F .framer-16r1ux8, .framer-O5Y6F .framer-lxiuzw, .framer-O5Y6F .framer-10d5i2k, .framer-O5Y6F .framer-h8tult, .framer-O5Y6F .framer-qst9zg, .framer-O5Y6F .framer-16wyqsv, .framer-O5Y6F .framer-wfkd66, .framer-O5Y6F .framer-xf2fun, .framer-O5Y6F .framer-17w0yp1, .framer-O5Y6F .framer-18ij9qv, .framer-O5Y6F .framer-c5tuux, .framer-O5Y6F .framer-gme3bg, .framer-O5Y6F .framer-154qdgf, .framer-O5Y6F .framer-psjzps, .framer-O5Y6F .framer-k74r39, .framer-O5Y6F .framer-1nrlp5f, .framer-O5Y6F .framer-10amtw2, .framer-O5Y6F .framer-14xjmrf, .framer-O5Y6F .framer-1jtro0e, .framer-O5Y6F .framer-1gp2ibl, .framer-O5Y6F .framer-zpispj, .framer-O5Y6F .framer-18n7767, .framer-O5Y6F .framer-riw76y, .framer-O5Y6F .framer-1fqnsyc, .framer-O5Y6F .framer-1joti7b, .framer-O5Y6F .framer-web97o, .framer-O5Y6F .framer-58vhza, .framer-O5Y6F .framer-1efc536, .framer-O5Y6F .framer-1gezt3f, .framer-O5Y6F .framer-5xxthi, .framer-O5Y6F .framer-5p0ooj, .framer-O5Y6F .framer-1uxhzev, .framer-O5Y6F .framer-1360mo0, .framer-O5Y6F .framer-1wv8ce, .framer-O5Y6F .framer-9j1btl, .framer-O5Y6F .framer-4s8m1y, .framer-O5Y6F .framer-1aoahbi, .framer-O5Y6F .framer-g8zynx, .framer-O5Y6F .framer-1yel45o, .framer-O5Y6F .framer-1voq1cy, .framer-O5Y6F .framer-1fgrtn1, .framer-O5Y6F .framer-p0yms5, .framer-O5Y6F .framer-1rsdpa1, .framer-O5Y6F .framer-nyp1kz, .framer-O5Y6F .framer-pemad, .framer-O5Y6F .framer-23ibbr, .framer-O5Y6F .framer-4ekbvg, .framer-O5Y6F .framer-ru5je7, .framer-O5Y6F .framer-12sken4, .framer-O5Y6F .framer-euuich, .framer-O5Y6F .framer-1paacuh, .framer-O5Y6F .framer-62d7d, .framer-O5Y6F .framer-eg5yrq, .framer-O5Y6F .framer-1n3ysq6, .framer-O5Y6F .framer-1iy9x0t, .framer-O5Y6F .framer-xd5rzz { gap: 0px; } .framer-O5Y6F.framer-193zvy4 > *, .framer-O5Y6F .framer-dndma0 > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-O5Y6F.framer-193zvy4 > :first-child, .framer-O5Y6F .framer-7lxdii > :first-child, .framer-O5Y6F .framer-z14e78 > :first-child, .framer-O5Y6F .framer-zjh0o5 > :first-child, .framer-O5Y6F .framer-1x96k7b > :first-child, .framer-O5Y6F .framer-1a7osbk > :first-child, .framer-O5Y6F .framer-1t4gckd > :first-child, .framer-O5Y6F .framer-dndma0 > :first-child, .framer-O5Y6F .framer-m8ladj > :first-child, .framer-O5Y6F .framer-1tva6z4 > :first-child, .framer-O5Y6F .framer-14zao7r > :first-child, .framer-O5Y6F .framer-14nodav > :first-child, .framer-O5Y6F .framer-5e4nu > :first-child, .framer-O5Y6F .framer-phvcje > :first-child, .framer-O5Y6F .framer-183mz1s > :first-child, .framer-O5Y6F .framer-183eb3t > :first-child, .framer-O5Y6F .framer-z3xeq3 > :first-child, .framer-O5Y6F .framer-di6tbe > :first-child, .framer-O5Y6F .framer-11hkzdp > :first-child, .framer-O5Y6F .framer-1w0rnuh > :first-child, .framer-O5Y6F .framer-k9lskp > :first-child, .framer-O5Y6F .framer-wkcdj0 > :first-child, .framer-O5Y6F .framer-cjnfpx > :first-child, .framer-O5Y6F .framer-d3hm2h > :first-child, .framer-O5Y6F .framer-syduod > :first-child, .framer-O5Y6F .framer-1u74xdr > :first-child, .framer-O5Y6F .framer-14t7xo > :first-child, .framer-O5Y6F .framer-1odo3c5 > :first-child, .framer-O5Y6F .framer-1ynp2gk > :first-child, .framer-O5Y6F .framer-lhmw3x > :first-child, .framer-O5Y6F .framer-1mldoj7 > :first-child, .framer-O5Y6F .framer-7kqin0 > :first-child, .framer-O5Y6F .framer-m31cdb > :first-child, .framer-O5Y6F .framer-ni735g > :first-child, .framer-O5Y6F .framer-61fj45 > :first-child, .framer-O5Y6F .framer-4ttm9n > :first-child, .framer-O5Y6F .framer-2bgpc7 > :first-child, .framer-O5Y6F .framer-72du4m > :first-child, .framer-O5Y6F .framer-1j7cihu > :first-child, .framer-O5Y6F .framer-16bg7sc > :first-child, .framer-O5Y6F .framer-yb7idc > :first-child, .framer-O5Y6F .framer-fcbtka > :first-child, .framer-O5Y6F .framer-egj7f8 > :first-child, .framer-O5Y6F .framer-gemeia > :first-child, .framer-O5Y6F .framer-16g1v86 > :first-child, .framer-O5Y6F .framer-ya0fx9 > :first-child, .framer-O5Y6F .framer-14wr2dt > :first-child, .framer-O5Y6F .framer-1bbi0qr > :first-child, .framer-O5Y6F .framer-10s15d1 > :first-child, .framer-O5Y6F .framer-1g7rzxj > :first-child, .framer-O5Y6F .framer-1ywrsqf > :first-child, .framer-O5Y6F .framer-13aubvo > :first-child, .framer-O5Y6F .framer-11dc5xn > :first-child, .framer-O5Y6F .framer-lhywgf > :first-child, .framer-O5Y6F .framer-1l56cfq > :first-child, .framer-O5Y6F .framer-1j871wm > :first-child, .framer-O5Y6F .framer-yd1hrc > :first-child, .framer-O5Y6F .framer-iiqzg0 > :first-child, .framer-O5Y6F .framer-9rf623 > :first-child, .framer-O5Y6F .framer-ip7gip > :first-child, .framer-O5Y6F .framer-xnl9wa > :first-child, .framer-O5Y6F .framer-1no0igs > :first-child, .framer-O5Y6F .framer-xz66qp > :first-child, .framer-O5Y6F .framer-21awx4 > :first-child, .framer-O5Y6F .framer-16r1ux8 > :first-child, .framer-O5Y6F .framer-10d5i2k > :first-child, .framer-O5Y6F .framer-16wyqsv > :first-child, .framer-O5Y6F .framer-17w0yp1 > :first-child, .framer-O5Y6F .framer-c5tuux > :first-child, .framer-O5Y6F .framer-gme3bg > :first-child, .framer-O5Y6F .framer-psjzps > :first-child, .framer-O5Y6F .framer-10amtw2 > :first-child, .framer-O5Y6F .framer-1gp2ibl > :first-child, .framer-O5Y6F .framer-18n7767 > :first-child, .framer-O5Y6F .framer-1fqnsyc > :first-child, .framer-O5Y6F .framer-1joti7b > :first-child, .framer-O5Y6F .framer-58vhza > :first-child, .framer-O5Y6F .framer-1efc536 > :first-child, .framer-O5Y6F .framer-5xxthi > :first-child, .framer-O5Y6F .framer-1uxhzev > :first-child, .framer-O5Y6F .framer-1wv8ce > :first-child, .framer-O5Y6F .framer-9j1btl > :first-child, .framer-O5Y6F .framer-4s8m1y > :first-child, .framer-O5Y6F .framer-g8zynx > :first-child, .framer-O5Y6F .framer-1voq1cy > :first-child, .framer-O5Y6F .framer-p0yms5 > :first-child, .framer-O5Y6F .framer-1rsdpa1 > :first-child, .framer-O5Y6F .framer-nyp1kz > :first-child, .framer-O5Y6F .framer-23ibbr > :first-child, .framer-O5Y6F .framer-ru5je7 > :first-child, .framer-O5Y6F .framer-euuich > :first-child, .framer-O5Y6F .framer-1paacuh > :first-child { margin-top: 0px; } .framer-O5Y6F.framer-193zvy4 > :last-child, .framer-O5Y6F .framer-7lxdii > :last-child, .framer-O5Y6F .framer-z14e78 > :last-child, .framer-O5Y6F .framer-zjh0o5 > :last-child, .framer-O5Y6F .framer-1x96k7b > :last-child, .framer-O5Y6F .framer-1a7osbk > :last-child, .framer-O5Y6F .framer-1t4gckd > :last-child, .framer-O5Y6F .framer-dndma0 > :last-child, .framer-O5Y6F .framer-m8ladj > :last-child, .framer-O5Y6F .framer-1tva6z4 > :last-child, .framer-O5Y6F .framer-14zao7r > :last-child, .framer-O5Y6F .framer-14nodav > :last-child, .framer-O5Y6F .framer-5e4nu > :last-child, .framer-O5Y6F .framer-phvcje > :last-child, .framer-O5Y6F .framer-183mz1s > :last-child, .framer-O5Y6F .framer-183eb3t > :last-child, .framer-O5Y6F .framer-z3xeq3 > :last-child, .framer-O5Y6F .framer-di6tbe > :last-child, .framer-O5Y6F .framer-11hkzdp > :last-child, .framer-O5Y6F .framer-1w0rnuh > :last-child, .framer-O5Y6F .framer-k9lskp > :last-child, .framer-O5Y6F .framer-wkcdj0 > :last-child, .framer-O5Y6F .framer-cjnfpx > :last-child, .framer-O5Y6F .framer-d3hm2h > :last-child, .framer-O5Y6F .framer-syduod > :last-child, .framer-O5Y6F .framer-1u74xdr > :last-child, .framer-O5Y6F .framer-14t7xo > :last-child, .framer-O5Y6F .framer-1odo3c5 > :last-child, .framer-O5Y6F .framer-1ynp2gk > :last-child, .framer-O5Y6F .framer-lhmw3x > :last-child, .framer-O5Y6F .framer-1mldoj7 > :last-child, .framer-O5Y6F .framer-7kqin0 > :last-child, .framer-O5Y6F .framer-m31cdb > :last-child, .framer-O5Y6F .framer-ni735g > :last-child, .framer-O5Y6F .framer-61fj45 > :last-child, .framer-O5Y6F .framer-4ttm9n > :last-child, .framer-O5Y6F .framer-2bgpc7 > :last-child, .framer-O5Y6F .framer-72du4m > :last-child, .framer-O5Y6F .framer-1j7cihu > :last-child, .framer-O5Y6F .framer-16bg7sc > :last-child, .framer-O5Y6F .framer-yb7idc > :last-child, .framer-O5Y6F .framer-fcbtka > :last-child, .framer-O5Y6F .framer-egj7f8 > :last-child, .framer-O5Y6F .framer-gemeia > :last-child, .framer-O5Y6F .framer-16g1v86 > :last-child, .framer-O5Y6F .framer-ya0fx9 > :last-child, .framer-O5Y6F .framer-14wr2dt > :last-child, .framer-O5Y6F .framer-1bbi0qr > :last-child, .framer-O5Y6F .framer-10s15d1 > :last-child, .framer-O5Y6F .framer-1g7rzxj > :last-child, .framer-O5Y6F .framer-1ywrsqf > :last-child, .framer-O5Y6F .framer-13aubvo > :last-child, .framer-O5Y6F .framer-11dc5xn > :last-child, .framer-O5Y6F .framer-lhywgf > :last-child, .framer-O5Y6F .framer-1l56cfq > :last-child, .framer-O5Y6F .framer-1j871wm > :last-child, .framer-O5Y6F .framer-yd1hrc > :last-child, .framer-O5Y6F .framer-iiqzg0 > :last-child, .framer-O5Y6F .framer-9rf623 > :last-child, .framer-O5Y6F .framer-ip7gip > :last-child, .framer-O5Y6F .framer-xnl9wa > :last-child, .framer-O5Y6F .framer-1no0igs > :last-child, .framer-O5Y6F .framer-xz66qp > :last-child, .framer-O5Y6F .framer-21awx4 > :last-child, .framer-O5Y6F .framer-16r1ux8 > :last-child, .framer-O5Y6F .framer-10d5i2k > :last-child, .framer-O5Y6F .framer-16wyqsv > :last-child, .framer-O5Y6F .framer-17w0yp1 > :last-child, .framer-O5Y6F .framer-c5tuux > :last-child, .framer-O5Y6F .framer-gme3bg > :last-child, .framer-O5Y6F .framer-psjzps > :last-child, .framer-O5Y6F .framer-10amtw2 > :last-child, .framer-O5Y6F .framer-1gp2ibl > :last-child, .framer-O5Y6F .framer-18n7767 > :last-child, .framer-O5Y6F .framer-1fqnsyc > :last-child, .framer-O5Y6F .framer-1joti7b > :last-child, .framer-O5Y6F .framer-58vhza > :last-child, .framer-O5Y6F .framer-1efc536 > :last-child, .framer-O5Y6F .framer-5xxthi > :last-child, .framer-O5Y6F .framer-1uxhzev > :last-child, .framer-O5Y6F .framer-1wv8ce > :last-child, .framer-O5Y6F .framer-9j1btl > :last-child, .framer-O5Y6F .framer-4s8m1y > :last-child, .framer-O5Y6F .framer-g8zynx > :last-child, .framer-O5Y6F .framer-1voq1cy > :last-child, .framer-O5Y6F .framer-p0yms5 > :last-child, .framer-O5Y6F .framer-1rsdpa1 > :last-child, .framer-O5Y6F .framer-nyp1kz > :last-child, .framer-O5Y6F .framer-23ibbr > :last-child, .framer-O5Y6F .framer-ru5je7 > :last-child, .framer-O5Y6F .framer-euuich > :last-child, .framer-O5Y6F .framer-1paacuh > :last-child { margin-bottom: 0px; } .framer-O5Y6F .framer-l9ylc9 > *, .framer-O5Y6F .framer-1j62a04 > *, .framer-O5Y6F .framer-gqeenb > *, .framer-O5Y6F .framer-ahl50x > *, .framer-O5Y6F .framer-3xuq95 > *, .framer-O5Y6F .framer-1du74fv > *, .framer-O5Y6F .framer-1juho2w > *, .framer-O5Y6F .framer-1dv922c > *, .framer-O5Y6F .framer-xyg76z > *, .framer-O5Y6F .framer-1jd31wb > *, .framer-O5Y6F .framer-1ymopor > *, .framer-O5Y6F .framer-1leph2n > *, .framer-O5Y6F .framer-lxiuzw > *, .framer-O5Y6F .framer-h8tult > *, .framer-O5Y6F .framer-qst9zg > *, .framer-O5Y6F .framer-wfkd66 > *, .framer-O5Y6F .framer-xf2fun > *, .framer-O5Y6F .framer-18ij9qv > *, .framer-O5Y6F .framer-154qdgf > *, .framer-O5Y6F .framer-k74r39 > *, .framer-O5Y6F .framer-1nrlp5f > *, .framer-O5Y6F .framer-14xjmrf > *, .framer-O5Y6F .framer-1jtro0e > *, .framer-O5Y6F .framer-zpispj > *, .framer-O5Y6F .framer-1gezt3f > *, .framer-O5Y6F .framer-5p0ooj > *, .framer-O5Y6F .framer-1360mo0 > *, .framer-O5Y6F .framer-1aoahbi > *, .framer-O5Y6F .framer-1yel45o > *, .framer-O5Y6F .framer-1fgrtn1 > *, .framer-O5Y6F .framer-pemad > *, .framer-O5Y6F .framer-4ekbvg > *, .framer-O5Y6F .framer-12sken4 > *, .framer-O5Y6F .framer-62d7d > *, .framer-O5Y6F .framer-1n3ysq6 > *, .framer-O5Y6F .framer-1iy9x0t > *, .framer-O5Y6F .framer-xd5rzz > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-O5Y6F .framer-l9ylc9 > :first-child, .framer-O5Y6F .framer-1j62a04 > :first-child, .framer-O5Y6F .framer-g311aq > :first-child, .framer-O5Y6F .framer-gqeenb > :first-child, .framer-O5Y6F .framer-m7k3rj > :first-child, .framer-O5Y6F .framer-duzv6a > :first-child, .framer-O5Y6F .framer-ahl50x > :first-child, .framer-O5Y6F .framer-1vf7dr9 > :first-child, .framer-O5Y6F .framer-3xuq95 > :first-child, .framer-O5Y6F .framer-zcjpe > :first-child, .framer-O5Y6F .framer-1du74fv > :first-child, .framer-O5Y6F .framer-9fndzt > :first-child, .framer-O5Y6F .framer-1juho2w > :first-child, .framer-O5Y6F .framer-8nmqq2 > :first-child, .framer-O5Y6F .framer-1dv922c > :first-child, .framer-O5Y6F .framer-xyg76z > :first-child, .framer-O5Y6F .framer-u0y2s4 > :first-child, .framer-O5Y6F .framer-1jd31wb > :first-child, .framer-O5Y6F .framer-1ymopor > :first-child, .framer-O5Y6F .framer-1leph2n > :first-child, .framer-O5Y6F .framer-1emnbdp > :first-child, .framer-O5Y6F .framer-lxiuzw > :first-child, .framer-O5Y6F .framer-h8tult > :first-child, .framer-O5Y6F .framer-qst9zg > :first-child, .framer-O5Y6F .framer-wfkd66 > :first-child, .framer-O5Y6F .framer-xf2fun > :first-child, .framer-O5Y6F .framer-18ij9qv > :first-child, .framer-O5Y6F .framer-154qdgf > :first-child, .framer-O5Y6F .framer-k74r39 > :first-child, .framer-O5Y6F .framer-1nrlp5f > :first-child, .framer-O5Y6F .framer-14xjmrf > :first-child, .framer-O5Y6F .framer-1jtro0e > :first-child, .framer-O5Y6F .framer-zpispj > :first-child, .framer-O5Y6F .framer-riw76y > :first-child, .framer-O5Y6F .framer-web97o > :first-child, .framer-O5Y6F .framer-1gezt3f > :first-child, .framer-O5Y6F .framer-5p0ooj > :first-child, .framer-O5Y6F .framer-1360mo0 > :first-child, .framer-O5Y6F .framer-1aoahbi > :first-child, .framer-O5Y6F .framer-1yel45o > :first-child, .framer-O5Y6F .framer-1fgrtn1 > :first-child, .framer-O5Y6F .framer-pemad > :first-child, .framer-O5Y6F .framer-4ekbvg > :first-child, .framer-O5Y6F .framer-12sken4 > :first-child, .framer-O5Y6F .framer-62d7d > :first-child, .framer-O5Y6F .framer-eg5yrq > :first-child, .framer-O5Y6F .framer-1n3ysq6 > :first-child, .framer-O5Y6F .framer-1iy9x0t > :first-child, .framer-O5Y6F .framer-xd5rzz > :first-child { margin-left: 0px; } .framer-O5Y6F .framer-l9ylc9 > :last-child, .framer-O5Y6F .framer-1j62a04 > :last-child, .framer-O5Y6F .framer-g311aq > :last-child, .framer-O5Y6F .framer-gqeenb > :last-child, .framer-O5Y6F .framer-m7k3rj > :last-child, .framer-O5Y6F .framer-duzv6a > :last-child, .framer-O5Y6F .framer-ahl50x > :last-child, .framer-O5Y6F .framer-1vf7dr9 > :last-child, .framer-O5Y6F .framer-3xuq95 > :last-child, .framer-O5Y6F .framer-zcjpe > :last-child, .framer-O5Y6F .framer-1du74fv > :last-child, .framer-O5Y6F .framer-9fndzt > :last-child, .framer-O5Y6F .framer-1juho2w > :last-child, .framer-O5Y6F .framer-8nmqq2 > :last-child, .framer-O5Y6F .framer-1dv922c > :last-child, .framer-O5Y6F .framer-xyg76z > :last-child, .framer-O5Y6F .framer-u0y2s4 > :last-child, .framer-O5Y6F .framer-1jd31wb > :last-child, .framer-O5Y6F .framer-1ymopor > :last-child, .framer-O5Y6F .framer-1leph2n > :last-child, .framer-O5Y6F .framer-1emnbdp > :last-child, .framer-O5Y6F .framer-lxiuzw > :last-child, .framer-O5Y6F .framer-h8tult > :last-child, .framer-O5Y6F .framer-qst9zg > :last-child, .framer-O5Y6F .framer-wfkd66 > :last-child, .framer-O5Y6F .framer-xf2fun > :last-child, .framer-O5Y6F .framer-18ij9qv > :last-child, .framer-O5Y6F .framer-154qdgf > :last-child, .framer-O5Y6F .framer-k74r39 > :last-child, .framer-O5Y6F .framer-1nrlp5f > :last-child, .framer-O5Y6F .framer-14xjmrf > :last-child, .framer-O5Y6F .framer-1jtro0e > :last-child, .framer-O5Y6F .framer-zpispj > :last-child, .framer-O5Y6F .framer-riw76y > :last-child, .framer-O5Y6F .framer-web97o > :last-child, .framer-O5Y6F .framer-1gezt3f > :last-child, .framer-O5Y6F .framer-5p0ooj > :last-child, .framer-O5Y6F .framer-1360mo0 > :last-child, .framer-O5Y6F .framer-1aoahbi > :last-child, .framer-O5Y6F .framer-1yel45o > :last-child, .framer-O5Y6F .framer-1fgrtn1 > :last-child, .framer-O5Y6F .framer-pemad > :last-child, .framer-O5Y6F .framer-4ekbvg > :last-child, .framer-O5Y6F .framer-12sken4 > :last-child, .framer-O5Y6F .framer-62d7d > :last-child, .framer-O5Y6F .framer-eg5yrq > :last-child, .framer-O5Y6F .framer-1n3ysq6 > :last-child, .framer-O5Y6F .framer-1iy9x0t > :last-child, .framer-O5Y6F .framer-xd5rzz > :last-child { margin-right: 0px; } .framer-O5Y6F .framer-7lxdii > *, .framer-O5Y6F .framer-z14e78 > *, .framer-O5Y6F .framer-1x96k7b > *, .framer-O5Y6F .framer-1t4gckd > *, .framer-O5Y6F .framer-m8ladj > *, .framer-O5Y6F .framer-14zao7r > *, .framer-O5Y6F .framer-phvcje > *, .framer-O5Y6F .framer-183eb3t > *, .framer-O5Y6F .framer-11hkzdp > *, .framer-O5Y6F .framer-k9lskp > *, .framer-O5Y6F .framer-1odo3c5 > *, .framer-O5Y6F .framer-lhmw3x > *, .framer-O5Y6F .framer-7kqin0 > *, .framer-O5Y6F .framer-ni735g > *, .framer-O5Y6F .framer-4ttm9n > *, .framer-O5Y6F .framer-72du4m > *, .framer-O5Y6F .framer-yb7idc > *, .framer-O5Y6F .framer-egj7f8 > *, .framer-O5Y6F .framer-ya0fx9 > *, .framer-O5Y6F .framer-1bbi0qr > *, .framer-O5Y6F .framer-1ywrsqf > *, .framer-O5Y6F .framer-11dc5xn > *, .framer-O5Y6F .framer-9rf623 > *, .framer-O5Y6F .framer-21awx4 > *, .framer-O5Y6F .framer-10d5i2k > *, .framer-O5Y6F .framer-16wyqsv > *, .framer-O5Y6F .framer-17w0yp1 > *, .framer-O5Y6F .framer-psjzps > *, .framer-O5Y6F .framer-10amtw2 > *, .framer-O5Y6F .framer-1gp2ibl > *, .framer-O5Y6F .framer-1efc536 > *, .framer-O5Y6F .framer-4s8m1y > *, .framer-O5Y6F .framer-nyp1kz > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-O5Y6F .framer-zjh0o5 > *, .framer-O5Y6F .framer-1a7osbk > *, .framer-O5Y6F .framer-1tva6z4 > *, .framer-O5Y6F .framer-5e4nu > *, .framer-O5Y6F .framer-183mz1s > *, .framer-O5Y6F .framer-di6tbe > *, .framer-O5Y6F .framer-1w0rnuh > *, .framer-O5Y6F .framer-cjnfpx > *, .framer-O5Y6F .framer-syduod > *, .framer-O5Y6F .framer-1u74xdr > *, .framer-O5Y6F .framer-14t7xo > *, .framer-O5Y6F .framer-1ynp2gk > *, .framer-O5Y6F .framer-1mldoj7 > *, .framer-O5Y6F .framer-m31cdb > *, .framer-O5Y6F .framer-61fj45 > *, .framer-O5Y6F .framer-2bgpc7 > *, .framer-O5Y6F .framer-16bg7sc > *, .framer-O5Y6F .framer-fcbtka > *, .framer-O5Y6F .framer-16g1v86 > *, .framer-O5Y6F .framer-14wr2dt > *, .framer-O5Y6F .framer-1g7rzxj > *, .framer-O5Y6F .framer-13aubvo > *, .framer-O5Y6F .framer-1l56cfq > *, .framer-O5Y6F .framer-1j871wm > *, .framer-O5Y6F .framer-yd1hrc > *, .framer-O5Y6F .framer-ip7gip > *, .framer-O5Y6F .framer-1no0igs > *, .framer-O5Y6F .framer-16r1ux8 > *, .framer-O5Y6F .framer-c5tuux > *, .framer-O5Y6F .framer-gme3bg > *, .framer-O5Y6F .framer-18n7767 > *, .framer-O5Y6F .framer-1joti7b > *, .framer-O5Y6F .framer-58vhza > *, .framer-O5Y6F .framer-5xxthi > *, .framer-O5Y6F .framer-1uxhzev > *, .framer-O5Y6F .framer-1wv8ce > *, .framer-O5Y6F .framer-9j1btl > *, .framer-O5Y6F .framer-g8zynx > *, .framer-O5Y6F .framer-1voq1cy > *, .framer-O5Y6F .framer-p0yms5 > *, .framer-O5Y6F .framer-1rsdpa1 > *, .framer-O5Y6F .framer-23ibbr > *, .framer-O5Y6F .framer-ru5je7 > *, .framer-O5Y6F .framer-euuich > * { margin: 0px; margin-bottom: calc(20px / 2); margin-top: calc(20px / 2); } .framer-O5Y6F .framer-g311aq > *, .framer-O5Y6F .framer-web97o > *, .framer-O5Y6F .framer-eg5yrq > * { margin: 0px; margin-left: calc(20px / 2); margin-right: calc(20px / 2); } .framer-O5Y6F .framer-m7k3rj > *, .framer-O5Y6F .framer-1emnbdp > * { margin: 0px; margin-left: calc(100px / 2); margin-right: calc(100px / 2); } .framer-O5Y6F .framer-duzv6a > *, .framer-O5Y6F .framer-1vf7dr9 > *, .framer-O5Y6F .framer-zcjpe > *, .framer-O5Y6F .framer-8nmqq2 > *, .framer-O5Y6F .framer-u0y2s4 > * { margin: 0px; margin-left: calc(40px / 2); margin-right: calc(40px / 2); } .framer-O5Y6F .framer-14nodav > *, .framer-O5Y6F .framer-z3xeq3 > *, .framer-O5Y6F .framer-wkcdj0 > *, .framer-O5Y6F .framer-1j7cihu > *, .framer-O5Y6F .framer-gemeia > *, .framer-O5Y6F .framer-10s15d1 > *, .framer-O5Y6F .framer-lhywgf > *, .framer-O5Y6F .framer-xz66qp > * { margin: 0px; margin-bottom: calc(40px / 2); margin-top: calc(40px / 2); } .framer-O5Y6F .framer-d3hm2h > *, .framer-O5Y6F .framer-xnl9wa > *, .framer-O5Y6F .framer-1fqnsyc > *, .framer-O5Y6F .framer-1paacuh > * { margin: 0px; margin-bottom: calc(50px / 2); margin-top: calc(50px / 2); } .framer-O5Y6F .framer-9fndzt > *, .framer-O5Y6F .framer-riw76y > * { margin: 0px; margin-left: calc(50px / 2); margin-right: calc(50px / 2); } .framer-O5Y6F .framer-iiqzg0 > * { margin: 0px; margin-bottom: calc(80px / 2); margin-top: calc(80px / 2); } }",
    "@media (min-width: 1200px) and (max-width: 3839px) { .framer-O5Y6F .hidden-193zvy4 { display: none !important; } }",
    `@media (min-width: 810px) and (max-width: 1199px) { .framer-O5Y6F .hidden-1326u90 { display: none !important; } .${Ve.bodyClassName}-framer-O5Y6F { background: rgb(0, 0, 0); } .framer-O5Y6F.framer-193zvy4 { width: 810px; } .framer-O5Y6F .framer-7lxdii { flex: 1 0 0px; width: 1px; } .framer-O5Y6F .framer-wwicdc-container, .framer-O5Y6F .framer-1x96k7b, .framer-O5Y6F .framer-38n2ck, .framer-O5Y6F .framer-syduod, .framer-O5Y6F .framer-cfbwdx, .framer-O5Y6F .framer-14t7xo, .framer-O5Y6F .framer-yd1hrc, .framer-O5Y6F .framer-xz66qp { width: 100%; } .framer-O5Y6F .framer-zjh0o5 { padding: 50px 50px 50px 50px; } .framer-O5Y6F .framer-1uwe3a { width: 87%; } .framer-O5Y6F .framer-1a7osbk { padding: 100px 200px 50px 200px; } .framer-O5Y6F .framer-1t4gckd { overflow: visible; } .framer-O5Y6F .framer-dndma0 { align-content: center; align-items: center; overflow: visible; padding: 0px 0px 0px 0px; } .framer-O5Y6F .framer-14rhzhf { flex-direction: column; overflow: visible; } .framer-O5Y6F .framer-d3hm2h { padding: 50px 50px 20px 50px; } .framer-O5Y6F .framer-1u74xdr, .framer-O5Y6F .framer-1j871wm { gap: 40px; padding: 100px 0px 50px 0px; } .framer-O5Y6F .framer-1emnbdp { flex-direction: column; gap: 20px; } .framer-O5Y6F .framer-iiqzg0 { gap: 0px; order: 0; width: 73%; } .framer-O5Y6F .framer-ip7gip { order: 1; width: 100%; } .framer-O5Y6F .framer-xnl9wa { padding: 100px 30px 100px 30px; } .framer-O5Y6F .framer-q9h42q, .framer-O5Y6F .framer-c1m4a1 { flex-wrap: wrap; gap: 40px; justify-content: center; } .framer-O5Y6F .framer-16r1ux8 { align-content: center; align-items: center; align-self: unset; height: 360px; } .framer-O5Y6F .framer-gme3bg { align-content: center; align-items: center; } .framer-O5Y6F .framer-18n7767 { align-content: center; align-items: center; align-self: unset; height: min-content; } .framer-O5Y6F .framer-riw76y, .framer-O5Y6F .framer-1fqnsyc { padding: 100px 200px 100px 200px; } .framer-O5Y6F .framer-web97o { flex-direction: column; } .framer-O5Y6F .framer-58vhza { flex-wrap: wrap; width: 410px; } .framer-O5Y6F .framer-1efc536, .framer-O5Y6F .framer-1gezt3f, .framer-O5Y6F .framer-5p0ooj, .framer-O5Y6F .framer-1360mo0, .framer-O5Y6F .framer-4s8m1y, .framer-O5Y6F .framer-1aoahbi, .framer-O5Y6F .framer-1yel45o, .framer-O5Y6F .framer-1fgrtn1, .framer-O5Y6F .framer-nyp1kz, .framer-O5Y6F .framer-pemad, .framer-O5Y6F .framer-4ekbvg, .framer-O5Y6F .framer-12sken4 { width: min-content; } .framer-O5Y6F .framer-1r3gnwk, .framer-O5Y6F .framer-1se8xvp { height: var(--framer-aspect-ratio-supported, 26px); } .framer-O5Y6F .framer-5xxthi, .framer-O5Y6F .framer-1uxhzev, .framer-O5Y6F .framer-1wv8ce, .framer-O5Y6F .framer-g8zynx, .framer-O5Y6F .framer-1voq1cy, .framer-O5Y6F .framer-p0yms5, .framer-O5Y6F .framer-23ibbr, .framer-O5Y6F .framer-ru5je7, .framer-O5Y6F .framer-euuich { flex: none; width: min-content; } .framer-O5Y6F .framer-1je96q6, .framer-O5Y6F .framer-d3ul2o, .framer-O5Y6F .framer-2yxsfe, .framer-O5Y6F .framer-cznsz, .framer-O5Y6F .framer-rjyhg2, .framer-O5Y6F .framer-1tsax7y, .framer-O5Y6F .framer-1vd1grm, .framer-O5Y6F .framer-yrvgfi, .framer-O5Y6F .framer-11biv6m { white-space: pre; width: auto; } .framer-O5Y6F .framer-9j1btl { align-self: unset; flex-wrap: wrap; height: min-content; justify-content: center; width: 410px; } .framer-O5Y6F .framer-1rsdpa1 { align-self: unset; flex-wrap: wrap; height: min-content; width: 410px; } .framer-O5Y6F .framer-79jfbx { height: var(--framer-aspect-ratio-supported, 25px); } .framer-O5Y6F .framer-1paacuh { padding: 100px 50px 40px 50px; } @supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-O5Y6F .framer-14rhzhf, .framer-O5Y6F .framer-1u74xdr, .framer-O5Y6F .framer-1j871wm, .framer-O5Y6F .framer-1emnbdp, .framer-O5Y6F .framer-iiqzg0, .framer-O5Y6F .framer-q9h42q, .framer-O5Y6F .framer-c1m4a1, .framer-O5Y6F .framer-web97o { gap: 0px; } .framer-O5Y6F .framer-14rhzhf > *, .framer-O5Y6F .framer-14rhzhf > :first-child, .framer-O5Y6F .framer-14rhzhf > :last-child { margin: 0px; } .framer-O5Y6F .framer-1u74xdr > *, .framer-O5Y6F .framer-1j871wm > * { margin: 0px; margin-bottom: calc(40px / 2); margin-top: calc(40px / 2); } .framer-O5Y6F .framer-1u74xdr > :first-child, .framer-O5Y6F .framer-1j871wm > :first-child, .framer-O5Y6F .framer-1emnbdp > :first-child, .framer-O5Y6F .framer-iiqzg0 > :first-child, .framer-O5Y6F .framer-web97o > :first-child { margin-top: 0px; } .framer-O5Y6F .framer-1u74xdr > :last-child, .framer-O5Y6F .framer-1j871wm > :last-child, .framer-O5Y6F .framer-1emnbdp > :last-child, .framer-O5Y6F .framer-iiqzg0 > :last-child, .framer-O5Y6F .framer-web97o > :last-child { margin-bottom: 0px; } .framer-O5Y6F .framer-1emnbdp > *, .framer-O5Y6F .framer-web97o > * { margin: 0px; margin-bottom: calc(20px / 2); margin-top: calc(20px / 2); } .framer-O5Y6F .framer-iiqzg0 > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-O5Y6F .framer-q9h42q > *, .framer-O5Y6F .framer-c1m4a1 > * { margin: 0px; margin-left: calc(40px / 2); margin-right: calc(40px / 2); } .framer-O5Y6F .framer-q9h42q > :first-child, .framer-O5Y6F .framer-c1m4a1 > :first-child { margin-left: 0px; } .framer-O5Y6F .framer-q9h42q > :last-child, .framer-O5Y6F .framer-c1m4a1 > :last-child { margin-right: 0px; } }}`,
    `@media (max-width: 809px) { .framer-O5Y6F .hidden-tbtles { display: none !important; } .${Ve.bodyClassName}-framer-O5Y6F { background: rgb(0, 0, 0); } .framer-O5Y6F.framer-193zvy4 { width: 390px; } .framer-O5Y6F .framer-l9ylc9, .framer-O5Y6F .framer-14rhzhf, .framer-O5Y6F .framer-9fndzt, .framer-O5Y6F .framer-8nmqq2, .framer-O5Y6F .framer-u0y2s4, .framer-O5Y6F .framer-web97o { flex-direction: column; } .framer-O5Y6F .framer-z14e78 { height: min-content; justify-content: flex-start; } .framer-O5Y6F .framer-wwicdc-container, .framer-O5Y6F .framer-1x96k7b, .framer-O5Y6F .framer-38n2ck, .framer-O5Y6F .framer-1uwe3a, .framer-O5Y6F .framer-8r7r1s, .framer-O5Y6F .framer-m8ladj, .framer-O5Y6F .framer-phvcje, .framer-O5Y6F .framer-11hkzdp, .framer-O5Y6F .framer-syduod, .framer-O5Y6F .framer-cfbwdx, .framer-O5Y6F .framer-14t7xo, .framer-O5Y6F .framer-yd1hrc, .framer-O5Y6F .framer-1ovkxo4-container, .framer-O5Y6F .framer-azsavf-container, .framer-O5Y6F .framer-1palma6-container, .framer-O5Y6F .framer-xz66qp { width: 100%; } .framer-O5Y6F .framer-zjh0o5 { padding: 25px 25px 25px 25px; } .framer-O5Y6F .framer-1a7osbk { padding: 50px 20px 20px 20px; } .framer-O5Y6F .framer-dndma0, .framer-O5Y6F .framer-61fj45 { padding: 0px 0px 0px 0px; } .framer-O5Y6F .framer-d3hm2h { padding: 100px 20px 20px 20px; } .framer-O5Y6F .framer-1yqmz82 { white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; } .framer-O5Y6F .framer-1u74xdr { gap: 40px; padding: 100px 10px 50px 10px; } .framer-O5Y6F .framer-1odo3c5 { flex: none; height: 546px; padding: 40px 20px 40px 20px; width: 100%; } .framer-O5Y6F .framer-ww9t7u { bottom: unset; height: var(--framer-aspect-ratio-supported, 366px); left: unset; order: 0; position: relative; top: unset; transform: unset; width: 365px; } .framer-O5Y6F .framer-lhmw3x { height: var(--framer-aspect-ratio-supported, 346px); } .framer-O5Y6F .framer-ymn3ik { height: var(--framer-aspect-ratio-supported, 122px); left: 50%; top: 50%; width: 122px; } .framer-O5Y6F .framer-1juho2w { height: var(--framer-aspect-ratio-supported, 365px); } .framer-O5Y6F .framer-1wso9oh { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; justify-content: flex-end; padding: 0px 0px 0px 0px; } .framer-O5Y6F .framer-1mldoj7 { left: unset; position: relative; top: unset; } .framer-O5Y6F .framer-jleat7 { height: var(--framer-aspect-ratio-supported, 66px); left: 50%; top: 158px; transform: perspective(1200px) translateX(-50%); width: 78px; } .framer-O5Y6F .framer-7kqin0 { order: 2; width: 100%; } .framer-O5Y6F .framer-m31cdb { padding: 0px 20px 50px 20px; } .framer-O5Y6F .framer-4ttm9n, .framer-O5Y6F .framer-yb7idc, .framer-O5Y6F .framer-ya0fx9, .framer-O5Y6F .framer-1ywrsqf { flex: none; width: 100%; } .framer-O5Y6F .framer-1j871wm { gap: 40px; padding: 100px 0px 50px 0px; } .framer-O5Y6F .framer-1emnbdp { flex-direction: column; gap: 0px; padding: 0px 15px 0px 15px; } .framer-O5Y6F .framer-iiqzg0 { order: 0; width: 100%; } .framer-O5Y6F .framer-qubs51-container { height: 361px; width: 463px; } .framer-O5Y6F .framer-ip7gip { order: 1; padding: 0px 0px 0px 0px; width: 100%; } .framer-O5Y6F .framer-xnl9wa { padding: 100px 10px 100px 10px; } .framer-O5Y6F .framer-q9h42q, .framer-O5Y6F .framer-c1m4a1 { flex-wrap: wrap; gap: 40px; justify-content: center; } .framer-O5Y6F .framer-21awx4 { aspect-ratio: 1 / 1; height: var(--framer-aspect-ratio-supported, 300px); width: 300px; } .framer-O5Y6F .framer-qv5e39 { height: var(--framer-aspect-ratio-supported, 130px); top: 50%; width: 154px; } .framer-O5Y6F .framer-zs0iv1 { height: 158px; left: -134px; top: -13px; } .framer-O5Y6F .framer-actxzn { height: 167px; top: -34px; } .framer-O5Y6F .framer-h5hjz8 { aspect-ratio: 1 / 1; height: var(--framer-aspect-ratio-supported, 270px); width: 270px; z-index: 1; } .framer-O5Y6F .framer-16r1ux8, .framer-O5Y6F .framer-18n7767 { align-content: center; align-items: center; align-self: unset; height: min-content; } .framer-O5Y6F .framer-gme3bg { align-content: center; align-items: center; } .framer-O5Y6F .framer-riw76y { flex-wrap: wrap; padding: 100px 15px 100px 15px; } .framer-O5Y6F .framer-1fqnsyc { padding: 100px 15px 100px 15px; } .framer-O5Y6F .framer-58vhza { flex-wrap: wrap; width: 100%; } .framer-O5Y6F .framer-9j1btl { align-self: unset; flex-wrap: wrap; height: min-content; justify-content: center; width: 100%; } .framer-O5Y6F .framer-1ax3gx5 { height: var(--framer-aspect-ratio-supported, 26px); } .framer-O5Y6F .framer-1rsdpa1 { align-self: unset; flex-wrap: wrap; height: min-content; width: 100%; } .framer-O5Y6F .framer-79jfbx { height: var(--framer-aspect-ratio-supported, 25px); } .framer-O5Y6F .framer-1paacuh { padding: 100px 15px 40px 15px; } .framer-O5Y6F .framer-1vzshxr { flex-direction: column; gap: 40px; justify-content: center; } .framer-O5Y6F .framer-xd5rzz { padding: 0px 40px 0px 40px; } @supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-O5Y6F .framer-l9ylc9, .framer-O5Y6F .framer-14rhzhf, .framer-O5Y6F .framer-1u74xdr, .framer-O5Y6F .framer-9fndzt, .framer-O5Y6F .framer-1wso9oh, .framer-O5Y6F .framer-8nmqq2, .framer-O5Y6F .framer-u0y2s4, .framer-O5Y6F .framer-1j871wm, .framer-O5Y6F .framer-1emnbdp, .framer-O5Y6F .framer-q9h42q, .framer-O5Y6F .framer-c1m4a1, .framer-O5Y6F .framer-web97o, .framer-O5Y6F .framer-1vzshxr { gap: 0px; } .framer-O5Y6F .framer-l9ylc9 > *, .framer-O5Y6F .framer-1wso9oh > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-O5Y6F .framer-l9ylc9 > :first-child, .framer-O5Y6F .framer-1u74xdr > :first-child, .framer-O5Y6F .framer-9fndzt > :first-child, .framer-O5Y6F .framer-1wso9oh > :first-child, .framer-O5Y6F .framer-8nmqq2 > :first-child, .framer-O5Y6F .framer-u0y2s4 > :first-child, .framer-O5Y6F .framer-1j871wm > :first-child, .framer-O5Y6F .framer-1emnbdp > :first-child, .framer-O5Y6F .framer-web97o > :first-child, .framer-O5Y6F .framer-1vzshxr > :first-child { margin-top: 0px; } .framer-O5Y6F .framer-l9ylc9 > :last-child, .framer-O5Y6F .framer-1u74xdr > :last-child, .framer-O5Y6F .framer-9fndzt > :last-child, .framer-O5Y6F .framer-1wso9oh > :last-child, .framer-O5Y6F .framer-8nmqq2 > :last-child, .framer-O5Y6F .framer-u0y2s4 > :last-child, .framer-O5Y6F .framer-1j871wm > :last-child, .framer-O5Y6F .framer-1emnbdp > :last-child, .framer-O5Y6F .framer-web97o > :last-child, .framer-O5Y6F .framer-1vzshxr > :last-child { margin-bottom: 0px; } .framer-O5Y6F .framer-14rhzhf > *, .framer-O5Y6F .framer-14rhzhf > :first-child, .framer-O5Y6F .framer-14rhzhf > :last-child { margin: 0px; } .framer-O5Y6F .framer-1u74xdr > *, .framer-O5Y6F .framer-8nmqq2 > *, .framer-O5Y6F .framer-u0y2s4 > *, .framer-O5Y6F .framer-1j871wm > *, .framer-O5Y6F .framer-1vzshxr > * { margin: 0px; margin-bottom: calc(40px / 2); margin-top: calc(40px / 2); } .framer-O5Y6F .framer-9fndzt > * { margin: 0px; margin-bottom: calc(50px / 2); margin-top: calc(50px / 2); } .framer-O5Y6F .framer-1emnbdp > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-O5Y6F .framer-q9h42q > *, .framer-O5Y6F .framer-c1m4a1 > * { margin: 0px; margin-left: calc(40px / 2); margin-right: calc(40px / 2); } .framer-O5Y6F .framer-q9h42q > :first-child, .framer-O5Y6F .framer-c1m4a1 > :first-child { margin-left: 0px; } .framer-O5Y6F .framer-q9h42q > :last-child, .framer-O5Y6F .framer-c1m4a1 > :last-child { margin-right: 0px; } .framer-O5Y6F .framer-web97o > * { margin: 0px; margin-bottom: calc(20px / 2); margin-top: calc(20px / 2); } }}`,
    `@media (min-width: 3840px) { .framer-O5Y6F .hidden-nlvfdy { display: none !important; } .${Ve.bodyClassName}-framer-O5Y6F { background: rgb(0, 0, 0); } .framer-O5Y6F.framer-193zvy4 { width: 3840px; }}`,
    '.framer-O5Y6F[data-border="true"]::after, .framer-O5Y6F [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
  ],
  Ne = J(Vt, Nt, "framer-O5Y6F"),
  so = Ne;
Ne.displayName = "Page";
Ne.defaultProps = { height: 7233.5, width: 1200 };
H(
  Ne,
  [
    {
      explicitInter: !0,
      fonts: [
        {
          family: "Sora",
          source: "google",
          style: "normal",
          url: "https://fonts.gstatic.com/s/sora/v12/xMQOuFFYT72X5wkB_18qmnndmSe1mX-PIwNhBti0.woff2",
          weight: "700",
        },
        {
          family: "Poppins",
          source: "google",
          style: "normal",
          url: "https://fonts.gstatic.com/s/poppins/v21/pxiByp8kv8JHgFVrLGT9V15vFP-KUEg.woff2",
          weight: "500",
        },
        {
          family: "Poppins",
          source: "google",
          style: "normal",
          url: "https://fonts.gstatic.com/s/poppins/v21/pxiByp8kv8JHgFVrLEj6V15vFP-KUEg.woff2",
          weight: "600",
        },
        {
          family: "Sora",
          source: "google",
          style: "normal",
          url: "https://fonts.gstatic.com/s/sora/v12/xMQOuFFYT72X5wkB_18qmnndmSdgnn-PIwNhBti0.woff2",
          weight: "500",
        },
        {
          family: "Poppins",
          source: "google",
          style: "normal",
          url: "https://fonts.gstatic.com/s/poppins/v21/pxiEyp8kv8JHgFVrFJXUc1NECPY.woff2",
          weight: "400",
        },
        {
          family: "Poppins",
          source: "google",
          style: "normal",
          url: "https://fonts.gstatic.com/s/poppins/v21/pxiByp8kv8JHgFVrLDz8V15vFP-KUEg.woff2",
          weight: "300",
        },
        {
          family: "Roboto",
          source: "google",
          style: "normal",
          url: "https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmSU5vBh05IsDqlA.woff2",
          weight: "300",
        },
        {
          family: "Roboto",
          source: "google",
          style: "normal",
          url: "https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmEU9vBh05IsDqlA.woff2",
          weight: "500",
        },
        {
          family: "Inter",
          source: "google",
          style: "normal",
          url: "https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuOKfMZ1rib2Bg-4.woff2",
          weight: "300",
        },
      ],
    },
    ...wt,
    ...bt,
    ...vt,
    ...Ot,
    ...Yt,
    ...Rt,
    ...St,
  ],
  { supportsExplicitInterCodegen: !0 }
);
var co = {
  exports: {
    Props: { type: "tsType", annotations: { framerContractVersion: "1" } },
    default: {
      type: "reactComponent",
      name: "Framerg3nUh9yVa",
      slots: [],
      annotations: {
        framerDisplayContentsDiv: "false",
        framerIntrinsicWidth: "1200",
        framerCanvasComponentVariantDetails:
          '{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"aNwAkBX2Q":{"layout":["fixed","auto"]},"WIuWQVMVd":{"layout":["fixed","auto"]},"k3DKOFl84":{"layout":["fixed","auto"]}}}',
        framerResponsiveScreen: "",
        framerIntrinsicHeight: "7233.5",
        framerImmutableVariables: "true",
        framerComponentViewportWidth: "true",
        framerContractVersion: "1",
      },
    },
    __FramerMetadata__: { type: "variable" },
  },
};
export { co as __FramerMetadata__, so as default };
//# sourceMappingURL=QOlNRLaGRKUPCqKsDwmWZylfgktASkfICaH-2AhyQzE.ETIOJBTF.mjs.map
