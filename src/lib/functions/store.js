import { writable } from 'svelte/store';

export const menuState = writable(false);
export const animationOpen = writable(false);
export const animationClose = writable(false);

export const logoColor = writable('black');
export const iconColor = writable('black');

export const filter = writable('all');