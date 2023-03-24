<script lang="ts">
    export let boost: number;
    export let teamColorPrimary: string;
    export let rightSide = false;
    export let isReused = false;
</script>

<div class={`boost-container ${rightSide ? 'right' : 'left'}`}>
    <div
        id="boost"
        style={`width: ${boost}%; background: ${
            isReused ? 'white' : teamColorPrimary
        };`}
    />
</div>

<style>
    .boost-container {
        display: flex;
        width: 100%;
        background-color: rgb(0, 0, 0, 50%);
        border-radius: 10px;
    }

    .right {
        flex-direction: row-reverse;
    }

    #boost {
        position: relative;
        height: 6px;
        border-radius: 10px;
        transition: 300ms;
    }
</style>
