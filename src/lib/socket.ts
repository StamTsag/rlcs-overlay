import { writable } from 'svelte/store';

export const socket = new WebSocket('ws://localhost:49122');

// Conenction control
socket.onopen = () => {
    console.log('Connected to SOS.');
};

socket.onerror = (err) => {
    console.error('WebSocket error', err);
};

// (BakkesMod) SOS Plugin messages
export const socketMessageStore = writable({
    event: 'default',
    data: {},
});

socket.onmessage = ({ data }) => {
    const parsed = JSON.parse(data);
    console.log('New msg:', parsed);

    socketMessageStore.set(parsed);
};
