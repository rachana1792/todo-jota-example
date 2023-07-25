import { atom } from "jotai";

export const todoAtom = atom([]);
const textAtom = atom('Todo')
export const textUpperCaseAtom = atom(
  (get) => get(textAtom).toUpperCase(),
  (_get, set, newText) => set(textAtom, newText)
)
