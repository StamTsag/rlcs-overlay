<script lang="ts">
    import Boost from './Boost.svelte';

    export let name: string;
    export let boost: number;
    export let teamColorPrimary: string;
    export let rightSide = false;
    export let isReused = false;
</script>

<div
    class={`player-container ${rightSide || isReused ? 'right' : 'left'} ${
        isReused ? 'reused' : ''
    }`}
    style={`border-bottom: 2px solid ${teamColorPrimary}; ${
        isReused ? 'background: ' + teamColorPrimary : ''
    }`}
>
    <div class="top-container">
        <h1>{name}</h1>

        {#if !isReused}
            <h1>{boost}</h1>
        {/if}
    </div>

    <Boost {boost} {teamColorPrimary} {rightSide} {isReused} />
</div>

<style>
    .player-container {
        background: rgb(27, 27, 27);
        width: 250px;
        margin-top: 10px;
        padding-bottom: 4px;
    }

    .top-container {
        display: flex;
    }

    .right {
        padding-left: 10px;
        padding-right: 20px;
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
    }

    .left {
        padding-right: 10px;
        padding-left: 20px;
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
    }

    .right .top-container {
        flex-direction: row-reverse;
    }

    .right .top-container h1:nth-child(1) {
        width: 100%;
        text-align: right;
    }

    .reused {
        border-radius: 0;
        border-top-right-radius: 5px;
        padding-left: 30px;
        z-index: 1;
    }

    h1 {
        color: white;
        margin: 0;
        margin-top: 2px;
        font-size: 1.4rem;
        text-transform: uppercase;
        letter-spacing: 0.5px;
    }

    h1:nth-child(1) {
        flex: 1;
    }
</style>
