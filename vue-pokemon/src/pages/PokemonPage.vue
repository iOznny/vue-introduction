<template>
    <div>
        <h1>¿Quien es este Pokemon?</h1>

        <!-- Picture -->
        <PokemonPicture v-bind:pokemonID="1" :showPokemon="true" />

        <!-- Options -->
        <PokemonOptions :pokemons="pokemons" />
    </div>
</template>

<script>
import PokemonPicture from '@/components/PokemonPicture.vue';
import PokemonOptions from '@/components/PokemonOptions.vue';

import getPokemosOptions from '@/helpers/getPokemosOptions';
 
export default {
    name: 'PokemonPage',
    components: {
        PokemonPicture,
        PokemonOptions,
    },
    data() {
        return {
            pokemons: []
        }
    },
    methods: {
        async mixPokemons() {
            this.pokemons = await getPokemosOptions();
            console.log(this.pokemons);
        }
    },
    // Lifecycle Hook
    mounted() {        
        this.mixPokemons();
    }
}
</script>