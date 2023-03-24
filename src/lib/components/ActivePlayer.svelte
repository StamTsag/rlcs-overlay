<script lang="ts">
    import PlayerBanner from './PlayerBanner.svelte';
    import Stat from './Stat.svelte';

    export let name: string;
    export let boost: number;
    export let teamColorPrimary: string;
</script>

<div class="active-container">
    <PlayerBanner name="Jknaps" {boost} {teamColorPrimary} isReused />

    <div
        class="stats-container"
        style={`border-bottom: 4px solid ${teamColorPrimary}`}
    >
        <Stat title="Score" value={24} />
        <Stat title="Goals" value={0} />
        <Stat title="Shots" value={0} />
        <Stat title="Asst" value={0} />
        <Stat title="Saves" value={0} />
    </div>
</div>

<style>
    .active-container {
        width: max-content;
        height: max-content;
        margin: auto;
        display: flex;
        align-items: flex-end;
        position: fixed;
        bottom: 0;
    }

    .stats-container {
        display: flex;
        align-items: center;
        justify-content: center;
        padding-left: 20px;
        width: max-content;
        height: 40px;
        background: rgb(27, 27, 27);
        border-top-right-radius: 5px;
    }
</style>
