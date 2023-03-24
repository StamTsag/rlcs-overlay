<script lang="ts">
    export let title: string;
    export let value: number;
</script>

<div class="stat-container">
    <h1 id="value">{value}</h1>
    <h1 id="title">{title}</h1>
</div>

<style>
    .stat-container {
        display: flex;
        align-items: center;
        padding-left: 20px;
        padding-right: 20px;
    }

    h1 {
        margin: 0;
        text-transform: uppercase;
    }

    #value {
        font-size: 1.6rem;
        color: white;
        margin-right: 5px;
        font-weight: 900;
    }

    #title {
        font-size: 0.8rem;
        color: white;
        letter-spacing: 1px;
    }
</style>
