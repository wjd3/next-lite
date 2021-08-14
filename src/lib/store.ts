import { atom } from 'jotai';

export const countAtom = atom(0);
export const colorAtom = atom<string | null>(null);
