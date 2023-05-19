import { writable } from 'svelte/store';

export const menuState = writable(false);
export const animationOpen = writable(false);
export const animationClose = writable(false);
export const logoColor = writable('none');
export const iconColor = writable('white');