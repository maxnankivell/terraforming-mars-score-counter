import { persisted } from 'svelte-local-storage-store';

// First param is the local storage key.
// Second param is the initial value.
export const perTurnScoreStore = persisted('perTurnScoreStore', {
	playerNames: null
});
