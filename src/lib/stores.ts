import {writable} from 'svelte/store'; 

function createCount() {
	const { subscribe, set, update } = writable(0);

	return {
		subscribe,
		increment: () => update(n => n + 1),
		decrement: () => update(n => n - 1),
		reset: () => set(0)
	};
}

function createItemlist() {
	const { subscribe, set, update } = writable([]);

	return {
		subscribe,
    addItem: (item:JSON) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      update(n => [item.val, ...n])
    },
		//removeItem: (item:JSON) => update(n => [...n]),
		reset: () => set([])
	};
}

export const count = createCount();

export const itemlist = createItemlist();
