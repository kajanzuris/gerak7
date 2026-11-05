// KONFIGURASI: warna, variabel tema, latar, transisi, daftar nama. Angka yang sering diutak-atik ada di sini.

import { loadFont } from "@remotion/google-fonts/Poppins";
import React from "react";
import type { Item } from "./types";

// Tema "explainer": latar krem berbintik, header merek, judul 2 tingkat (kecil + besar) yang muncul per kata
// mengikuti suara, blok UI (jendela chat, dialog, folder, perbandingan, pohon) di tengah, maskot di bawah.
// Aktif bila scenes.src.json punya  "style": "explainer".

export const { fontFamily: FONT } = loadFont("normal", { weights: ["400", "600", "800"], subsets: ["latin"] });

export const C = { bg: "#f3efe6", ink: "#16161a", mute: "#6b665c", red: "#e5252a", blue: "#3b6fd8", green: "#1f9d8a", line: "#e2dccf", soft: "#efeadd" };

export const FILE_COL = ["#2aa876", "#3b6fd8", "#7b4fd8", "#e5252a"];

// Warna kartu lewat CSS variable supaya satu komponen bisa tampil di tema "clean" (terang) maupun "hud" (kaca gelap).
// Nilai di belakang koma = tampilan tema clean.
export const V = {
  cardBg: "var(--card-bg,#fff)",
  cardLine: "var(--card-line,#e2dccf)",
  cardInk: "var(--card-ink,#16161a)",
  cardShadow: "var(--card-shadow,0 10px 30px rgba(40,30,10,.10))",
  radius: "var(--card-radius,32px)",
  soft: "var(--soft,#efeadd)",
  row: "var(--row,#f4f1e8)",
  row2: "var(--row2,#f7f3ea)",
  note: "var(--note-bg,#fff3cf)",
  noteLine: "var(--note-line,#f1d98a)",
  ghost: "var(--btn-ghost,#e9e4d6)",
  mute: "var(--mute,#6b665c)",
  bar: "var(--bar,#cfc8b8)",
  callout: "var(--callout-bg,linear-gradient(180deg,#fff,#ffe9d6))",
};

export const HUD_CYAN = "#22d3ee";

export const HUD_ORANGE = "#ff7a1a";

export const HUD_VARS = {
  "--card-bg": "rgba(8,22,50,.72)",
  "--card-line": "rgba(34,211,238,.55)",
  "--card-ink": "#e8f6ff",
  "--card-shadow": "0 0 28px rgba(34,211,238,.25), inset 0 0 22px rgba(34,211,238,.08)",
  "--card-radius": "20px",
  "--soft": "rgba(34,211,238,.16)",
  "--row": "rgba(34,211,238,.10)",
  "--row2": "rgba(34,211,238,.10)",
  "--note-bg": "rgba(255,122,26,.16)",
  "--note-line": "rgba(255,122,26,.6)",
  "--btn-ghost": "rgba(255,255,255,.14)",
  "--mute": "#9fb3d1",
  "--bar": "rgba(34,211,238,.45)",
  "--callout-bg": "linear-gradient(180deg,rgba(8,22,50,.88),rgba(60,28,8,.78))",
} as unknown as React.CSSProperties;

export const TUT_VARS = {
  "--card-bg": "#ffffff",
  "--card-line": "#ffffff",
  "--card-ink": "#16161a",
  "--card-shadow": "0 10px 0 rgba(90,30,5,.55), 0 26px 44px rgba(60,15,0,.28)",
  "--card-radius": "22px",
} as unknown as React.CSSProperties;

export const NEON_VARS = {
  "--card-bg": "linear-gradient(180deg, rgba(44,14,66,.92), rgba(20,6,38,.94))",
  "--card-line": "rgba(255,63,142,.85)",
  "--card-ink": "#ffffff",
  "--card-shadow": "0 0 26px rgba(255,63,142,.28)",
  "--card-radius": "20px",
  "--soft": "rgba(255,255,255,.10)",
  "--row": "rgba(255,255,255,.08)",
  "--row2": "rgba(255,255,255,.08)",
  "--note-bg": "rgba(255,178,31,.14)",
  "--note-line": "rgba(255,178,31,.55)",
  "--btn-ghost": "rgba(255,255,255,.16)",
  "--mute": "#b9a8c9",
  "--bar": "rgba(255,63,142,.45)",
  "--callout-bg": "linear-gradient(180deg,rgba(44,14,66,.92),rgba(80,20,60,.85))",
} as unknown as React.CSSProperties;

// ---- latar yang bisa dipilih (satu video boleh memakai beberapa, ganti otomatis tiap N adegan) ----
export type Preset = { bg: string; pattern: "dots" | "grid" | "none"; dot: string; ink: string; mute: string };

export const BG_PRESETS: Record<string, Preset> = {
  cream: { bg: "#f3efe6", pattern: "dots", dot: "#d9d2c1", ink: "#16161a", mute: "#6b665c" },
  mint: { bg: "#e6f4ee", pattern: "dots", dot: "#c5e3d6", ink: "#10261f", mute: "#4f6b60" },
  sky: { bg: "#e7f0fb", pattern: "dots", dot: "#c9dcf3", ink: "#10203a", mute: "#53647f" },
  sunset: { bg: "linear-gradient(180deg,#ffe3d0,#ffc9d8)", pattern: "none", dot: "transparent", ink: "#2a1420", mute: "#7a4d5c" },
  paper: { bg: "#ffffff", pattern: "none", dot: "transparent", ink: "#16161a", mute: "#6b665c" },
  grid: { bg: "#f6f4ee", pattern: "grid", dot: "#e3ded0", ink: "#16161a", mute: "#6b665c" },
  dark: { bg: "#14161d", pattern: "dots", dot: "#262a36", ink: "#ffffff", mute: "#a5acc0" },
  navy: { bg: "#0f2347", pattern: "dots", dot: "#1d3a6e", ink: "#ffffff", mute: "#b4c3e0" },
};

export const bgStyle = (p: Preset): React.CSSProperties => {
  const imgs: string[] = [];
  const sizes: string[] = [];
  if (p.pattern === "dots") { imgs.push(`radial-gradient(${p.dot} 2px, transparent 2.5px)`); sizes.push("36px 36px"); }
  if (p.pattern === "grid") {
    imgs.push(`linear-gradient(${p.dot} 2px, transparent 2px)`, `linear-gradient(90deg, ${p.dot} 2px, transparent 2px)`);
    sizes.push("48px 48px", "48px 48px");
  }
  const isGrad = p.bg.startsWith("linear");
  if (isGrad) { imgs.push(p.bg); sizes.push("100% 100%"); }
  return { backgroundColor: isGrad ? undefined : p.bg, backgroundImage: imgs.length ? imgs.join(",") : undefined, backgroundSize: sizes.length ? sizes.join(",") : undefined };
};

// ---- transisi antar adegan: adegan lama KELUAR sambil adegan baru MASUK (durasi TD detik) ----
export const TRANS = ["fade", "slide-left", "slide-up", "zoom", "wipe", "none"];

export const TD = 0.45;

export const easeIO = (k: number) => (k < 0.5 ? 4 * k * k * k : 1 - Math.pow(-2 * k + 2, 3) / 2);

export const transPair = (kind: string, k: number): { inn: React.CSSProperties; out: React.CSSProperties } => {
  const e = easeIO(Math.max(0, Math.min(1, k)));
  switch (kind) {
    case "fade": return { inn: { opacity: e }, out: { opacity: 1 - e } };
    case "slide-left": return { inn: { transform: `translateX(${(1 - e) * 1080}px)` }, out: { transform: `translateX(${-e * 1080}px)` } };
    case "slide-up": return { inn: { transform: `translateY(${(1 - e) * 1300}px)` }, out: { transform: `translateY(${-e * 1300}px)` } };
    case "zoom": return { inn: { opacity: e, transform: `scale(${0.85 + 0.15 * e})` }, out: { opacity: 1 - e, transform: `scale(${1 + 0.15 * e})` } };
    case "wipe": return { inn: { clipPath: `inset(0 ${(1 - e) * 100}% 0 0)` }, out: {} };
    default: return { inn: {}, out: {} };
  }
};

// ================= BLOK BARU: TUTORIAL (ved1) & NEON (ved2) =================
// Semua blok di bawah murni tambahan; blok lama tidak diubah.
export const TONE2 = "#ffb21f";

export const TERM_COL: Record<string, string> = { cmd: "#e8eaf0", out: "#9aa3b5", ok: "#4ade80", err: "#ff6b6b", dim: "#6b7385" };

// ================= TEMA HUD / HOLOGRAM =================
export const MONO = "ui-monospace, 'SFMono-Regular', Menlo, Consolas, 'DejaVu Sans Mono', monospace";

// ================= TEMA KLASIK (stickman + latar kota/ruang, caption di atas) =================
export const CLASSIC_BGS = ["dawn", "dusk", "room", "stage", "night", "day", "office"];

export const CLASSIC_PROPS = ["bulb", "confetti", "crowd", "fork", "laptop", "money", "orb", "phone", "shadow", "think", "trophy", "rocket", "chart", "lock"];

export const classicVars = (accent: string) => ({
  "--card-bg": "rgba(14,18,38,.88)",
  "--card-line": accent,
  "--card-ink": "#ffffff",
  "--card-shadow": "0 10px 30px rgba(0,0,0,.35)",
  "--card-radius": "44px",
  "--soft": "rgba(255,255,255,.14)",
  "--row": "rgba(255,255,255,.09)",
  "--row2": "rgba(255,255,255,.09)",
  "--note-bg": "rgba(255,209,102,.16)",
  "--note-line": "rgba(255,209,102,.5)",
  "--btn-ghost": "rgba(255,255,255,.16)",
  "--mute": "#c4c9d8",
  "--bar": "rgba(255,255,255,.35)",
  "--callout-bg": "linear-gradient(180deg,rgba(14,18,38,.92),rgba(40,30,70,.85))",
}) as unknown as React.CSSProperties;

// ---- LAYOUT PER TEMA (satu tempat untuk semua angka posisi, layar 1080x1920) ----
// headTop        : posisi atas judul (Headline) bila adegan punya blok visual
// stageTop/Bottom: jarak area blok visual dari atas/bawah layar; versi "M" dipakai bila adegan memakai maskot
// feet / mScale  : tinggi lantai & skala maskot;  mxLeft/Center/Right: posisi horizontal maskot
// shiftWhenNoHeader: true = naik 80px bila header merek dimatikan (hanya tema clean)
// stageAlign/Gap : perataan & jarak antar blok di area visual
export type ThemeName = "clean" | "hud" | "classic" | "tutorial" | "neon";
export type ThemeLayout = {
  headTop: number; stageTop: number; stageTopM: number; stageBottom: number; stageBottomM: number;
  feet: number; mScale: number; mxLeft: number; mxCenter: number; mxRight: number;
  shiftWhenNoHeader: boolean; stageAlign: "center" | "flex-start"; stageGap: number;
};
export const LAYOUT: Record<ThemeName, ThemeLayout> = {
  clean:    { headTop: 190, stageTop: 520, stageTopM: 500, stageBottom: 200, stageBottomM: 520, feet: 1800, mScale: 0.62, mxLeft: 250, mxCenter: 540, mxRight: 830, shiftWhenNoHeader: true,  stageAlign: "center",     stageGap: 28 },
  hud:      { headTop: 150, stageTop: 500, stageTopM: 480, stageBottom: 440, stageBottomM: 790, feet: 1470, mScale: 0.62, mxLeft: 250, mxCenter: 540, mxRight: 830, shiftWhenNoHeader: false, stageAlign: "center",     stageGap: 28 },
  classic:  { headTop: 190, stageTop: 360, stageTopM: 420, stageBottom: 260, stageBottomM: 840, feet: 1500, mScale: 0.85, mxLeft: 300, mxCenter: 540, mxRight: 780, shiftWhenNoHeader: false, stageAlign: "center",     stageGap: 28 },
  tutorial: { headTop: 150, stageTop: 470, stageTopM: 500, stageBottom: 540, stageBottomM: 700, feet: 1800, mScale: 0.62, mxLeft: 250, mxCenter: 540, mxRight: 830, shiftWhenNoHeader: false, stageAlign: "center",     stageGap: 28 },
  neon:     { headTop: 190, stageTop: 170, stageTopM: 170, stageBottom: 700, stageBottomM: 700, feet: 1800, mScale: 0.62, mxLeft: 250, mxCenter: 540, mxRight: 830, shiftWhenNoHeader: false, stageAlign: "flex-start", stageGap: 18 },
};

// ================= POSISI DEFAULT "POPS" (objek pelengkap) =================
// Dipakai bila sebuah pop tidak punya "y" di scenes.src.json. Tujuannya: pops tidak menimpa teks kartu.

// Batas bawah pops per tema (di atas caption tema tersebut).
export const POP_MAX_Y: Record<ThemeName, number> = {
  clean: 1780, hud: 1500, classic: 1480, tutorial: 1430, neon: 1270,
};

// Ukuran dasar pop (harus sama dengan SIZE di overlays.tsx)
const POP_SIZE = 260;

// Perkiraan tinggi (px) tiap blok stage. Angka ini perkiraan; setel bila pops masih terlalu dekat / jauh.
export const estBlockH = (b: Item): number => {
  const n = (a?: unknown[], max = 4) => Math.min(max, (a || []).length);
  switch (b.type) {
    case "image": return b.frame === false ? (b.h || 760) + (b.caption ? 50 : 0) : (b.h || 640) + 28 + (b.caption ? 50 : 0);
    case "callout": return 96 + 77 + (b.sub ? 68 : 0) + (b.cta ? 80 : 0);
    case "window": return 118 + n(b.rows) * 72 + 16 * Math.max(0, n(b.rows) - 1);
    case "list": return 124 + n(b.items) * 90 + (b.cta ? 80 : 0);
    case "stat": return 340;
    case "chip": return 120;
    case "tiles": return n(b.cols) <= 2 ? 100 : 218;
    case "kpi": return b.big ? 260 : 140;
    case "notifs": return n(b.notifs) * 84 + 12 * Math.max(0, n(b.notifs) - 1);
    case "meter": return 160;
    case "bars": return 480;
    case "terminal": return (b.h || 420) + 110;
    case "browser": return (b.h || 380) + 120;
    case "phone": return b.h || 820;
    case "compare": return 330;
    case "tree": return 230;
    case "dialog": return 520;
    case "files": return (b.title ? 50 : 0) + 280;
    case "icons": return 330;
    case "profile": return 230;
    case "brand": return 380;
    default: return 300;
  }
};

// Y default (puncak) untuk pops pada satu adegan.
//   - adegan bergambar     : pops di dekat pojok atas gambar (seperti sebelumnya)
//   - adegan kartu         : pops di BAWAH kartu bila muat di atas caption tema
//   - bila tidak muat      : pops jadi "stiker" di atas tepi atas kartu, tidak menutupi teks
export const popDefaultY = (stage: Item[], theme: ThemeName, hasMascot: boolean, shift: number, popCount: number): number => {
  const L = LAYOUT[theme];
  const top = (hasMascot ? L.stageTopM : L.stageTop) + shift;
  const bottom = 1920 - (hasMascot ? L.stageBottomM : L.stageBottom);
  const gap = L.stageGap;
  const hs = stage.map(estBlockH);
  const total = hs.reduce((a, b) => a + b, 0) + gap * Math.max(0, hs.length - 1);
  const start = L.stageAlign === "center" ? top + (bottom - top - total) / 2 : top;

  const imgI = stage.findIndex((b) => b.type === "image");
  if (imgI >= 0) {
    const off = hs.slice(0, imgI).reduce((a, h) => a + h + gap, 0);
    return Math.round(start + off + 10);
  }

  const rows = Math.max(1, Math.ceil(popCount / 2));
  const need = rows * POP_SIZE + (rows - 1) * 20;
  const maxY = Math.min(POP_MAX_Y[theme], bottom + 60);
  const cardBottom = start + total;
  if (cardBottom + 24 + need <= maxY) return Math.round(cardBottom + 24);

  return Math.round(Math.max(20, start - 130));
};
