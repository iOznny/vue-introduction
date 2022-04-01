<template>
    <div>
        <h1>¿Quien es este Pokemon?</h1>

        <!-- Picture -->
        <PokemonPicture v-bind:pokemonID="1" :showPokemon="true" />

        <!-- Options -->
        <PokemonOptions />

    </div>
</template>

<script>
import PokemonPicture from '@/components/PokemonPicture.vue';
import PokemonOptions from '@/components/PokemonOptions.vue';

import getPokemons from '@/helpers/getPokemosOptions';

export default {
    name: 'PokemonPage',
    components: {
        PokemonPicture,
        PokemonOptions,
    }
}
</script>