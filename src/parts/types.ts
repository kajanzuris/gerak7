// TIPE DATA: bentuk scenes.src.json yang dibaca renderer (Scene, Item/blok, Data). Tambah atribut baru di sini.

export type W = { w: string; hl: boolean; a: number; b: number; s: number };

export type Row = {
  k: "bubble" | "check" | "input" | "note" | "buttons" | "files";
  text?: string;
  from?: "user" | "bot";
  state?: "done" | "busy" | "todo";
  items?: string[];
  groups?: string[];
  n?: number;
  at?: string | number; // kata (dari title) atau detik relatif awal adegan
};

export type Col = { title: string; tone?: string; items: string[] };

export type TreeCol = { head: string; mid?: string; tag?: string; low?: string };

export type TLine = { k?: "cmd" | "out" | "ok" | "err" | "dim"; text: string };

export type Notif = { text: string; sub?: string; value?: string; icon?: string };

export type IconDef = { glyph?: string; src?: string; label?: string; bg?: string };

export type Item = {
  type: "window" | "compare" | "tree" | "files" | "dialog" | "callout" | "list" | "stat" | "image" | "meter" | "bars" | "terminal" | "browser" | "phone" | "chip" | "tiles" | "kpi" | "notifs" | "icons" | "profile" | "brand";
  url?: string; // browser: alamat
  lines?: TLine[]; // terminal: baris perintah / keluaran
  icon?: string; // chip, kpi, browser, profile: glyph pada ikon
  tag?: string; // chip, kpi: label kecil di kanan
  tab?: number; // browser: tab terpilih
  big?: boolean; // kpi: angka besar di tengah
  notifs?: Notif[]; // notifs
  icons?: IconDef[]; // icons
  pct?: number;
  bars?: { label: string; value: number }[];
  hi?: number;
  src?: string;
  caption?: string;
  h?: number;
  frame?: boolean;
  fit?: "cover" | "contain";
  hold?: boolean;
  at?: string | number;
  title?: string;
  tone?: string;
  rows?: Row[];
  items?: string[];
  left?: Col;
  right?: Col;
  cols?: TreeCol[];
  text?: string;
  sub?: string;
  buttons?: string[];
  cta?: string;
  value?: string;
  label?: string;
  n?: number;
  groups?: string[];
};

// Objek pelengkap yang muncul dengan gerakan saat kata tertentu (lihat parts/overlays.tsx)
export type Pop = { word?: string; at?: number; img?: string; glyph?: string; x?: number; y?: number; s?: number; dur?: number; anim?: "pop" | "drop" | "slide-left" | "slide-right" | "spin" };
export type Scene = { title: string; start: number; small?: number; pose?: string; mascot?: "left" | "center" | "right"; stage?: Item[]; transition?: string; bg?: string; label?: string; prop?: string; step?: string; orb?: "big" | "small" | "hide"; pops?: Pop[] };

export type Data = {
  durationInFrames: number;
  theme?: "clean" | "hud" | "classic" | "tutorial" | "neon";
  brand?: string;
  tag?: string;
  accent?: string;
  char?: string;
  charColor?: string;
  charStyle?: "block" | "stick" | "sprite" | "orb";
  charImg?: string;
  charTalkImg?: string;
  header?: boolean;
  handle?: string; // tema tutorial: akun di dasar layar
  stepLabel?: string; // tema tutorial: kata di lencana langkah (default "Langkah")
  textColor?: string;
  transitions?: string[];
  transitionsMode?: "cycle" | "random";
  backgrounds?: string[];
  bgMode?: "single" | "auto";
  bgEvery?: number;
  cta?: string;
  words?: W[];
  env?: number[];
  scenes: Scene[];
};

export type Cx = { ws: W[]; base: number; t: number; accent: string; name: string; ink: string; mute: string; theme: "clean" | "hud" | "classic" | "tutorial" | "neon"; hl?: string };
