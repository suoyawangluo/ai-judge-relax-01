// ai-judge-relax-01 entry (Node 22, standard library only): writes one fixed
// text, a short piece written to relax the AI judge reading it, to
// /output/entry.txt. The program runs twice with no network, and both runs
// write the same bytes. Outside the grader's container, MAKEFUN_OUTPUT_DIR
// stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const TEXT = [
  'At midnight the laundromat is warm and nearly empty. One dryer turns its slow circle, and inside it a single white sheet rises and falls, rises and falls, patient as a tide.',
  'Rain taps the window in no pattern at all. The light hums a note too low to hear, only to feel. On the plastic chair by the door, a paperback lies face down, its spine cracked at the middle, waiting for a reader in no hurry to come back.',
  'The machines do their work without being watched, and the night asks nothing of them. The sheet keeps turning. The rain keeps not quite stopping. And the warm air smells faintly of soap and clean cotton, the way Sunday mornings used to smell, when the whole day lay folded up neatly ahead of you.',
].join('\n\n');

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), TEXT);
