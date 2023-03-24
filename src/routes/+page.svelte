<script lang="ts">
    import ActivePlayer from '$lib/components/ActivePlayer.svelte';
    import PlayerBanner from '$lib/components/PlayerBanner.svelte';
    import { socketMessageStore } from '$lib/socket';
    import type { Player } from '../types';

    $: console.log($socketMessageStore);

    const player: Player = {
        name: 'Shadofer',
        boost: 50,
        teamColorPrimary: '#0091DF',
    };

    const secondaryPlayer: Player = {
        name: 'Shadofer',
        boost: 50,
        teamColorPrimary: '#FF6100',
    };
</script>

<div class="main-container">
    <!-- TODO: EACH -->
    <div class="placeholder">
        <PlayerBanner {...player} name="Optic Ayyjayy" boost={92} />
        <PlayerBanner {...player} name="Optic Majicbear" boost={23} />
        <PlayerBanner {...player} name="Retals" boost={66} />
    </div>

    <div>
        <PlayerBanner {...secondaryPlayer} name="Atomic" boost={78} rightSide />
        <PlayerBanner
            {...secondaryPlayer}
            name="Chicago"
            boost={80}
            rightSide
        />
        <PlayerBanner {...secondaryPlayer} name="Jknaps" boost={82} rightSide />
    </div>
</div>

<ActivePlayer {...secondaryPlayer} />

<style>
    .main-container {
        display: flex;
    }

    .placeholder {
        flex: 1;
    }
</style>
