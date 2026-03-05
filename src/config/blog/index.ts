export type { BlogPost } from "./types";

import { raknautSkattpLon } from "./posts/rakna-ut-skatt-pa-lon";
import { deklarationGuide } from "./posts/deklaration-guide";
import { statligSkatt } from "./posts/statlig-skatt";
import { iskSkatt } from "./posts/isk-skatt";
import { skattBostadsforsaljning } from "./posts/skatt-bostadsforsaljning";
import { reseavdrag } from "./posts/reseavdrag";
import { skatteaterbarning } from "./posts/skatteaterbarning";
import { skattPaFonder } from "./posts/skatt-pa-fonder";
import { skattPension } from "./posts/skatt-pension";
import { skattUthyrningBostad } from "./posts/skatt-uthyrning-bostad";
import { jamkningGrundavdrag } from "./posts/jamkning-grundavdrag";
import { kommunalskatt } from "./posts/kommunalskatt";

export const blogPosts = [
  raknautSkattpLon,
  deklarationGuide,
  statligSkatt,
  iskSkatt,
  skattBostadsforsaljning,
  reseavdrag,
  skatteaterbarning,
  skattPaFonder,
  skattPension,
  skattUthyrningBostad,
  jamkningGrundavdrag,
  kommunalskatt,
];
