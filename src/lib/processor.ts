import { derived } from 'svelte/store';
import { socketMessageStore } from './socket';

export const updateState = derived(socketMessageStore, ($msg, set) => {
    if (!$msg) return;

    if ($msg.event === 'game:update_state') {
        set($msg.data);
    }
});

export const targetPlayer = derived(updateState, ($update, set) => {
    if (!$update) return;

    // @ts-ignore
    if ($update.game.hasTarget) {
        // @ts-ignore
        const player = $update.players[$update.game.target];

        set(player);
    } else {
        set({});
    }
});
