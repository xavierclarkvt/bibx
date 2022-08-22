import {writable} from 'svelte/store'; 

function createItemlist() {
	const { subscribe, set, update } = writable([]);

	return {
		subscribe,
    addItem: (item:JSON) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      update(n => [item.val, ...n])
    },
		removeItem: (item:JSON) => {
      update(n => n.filter(v => v !== item))
    },
		reset: () => set([])
	};
}

export const itemlist = createItemlist();
