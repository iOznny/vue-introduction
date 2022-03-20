<template>
    <div>
        <div v-if="!pokemon">
            <h1>Espere por favor...</h1>
        </div>

        <div v-else>
            <h1>¿Quien es este Pokemon?</h1>

            <!-- Picture -->
            <PokemonPicture 
                :pokemonID="pokemon.id" 
                :showPokemon="showPokemon" 
            />

            <!-- Options -->
            <PokemonOptions 
                :pokemons="pokemons" 
                @selection-pokemon="checkAnswer"
            />

            <div v-if="showAnswer" class="fade-in">
                <h2>{{ message }}</h2>
                <button @click="newGame">Nuevo Juego</button>
            </div>
        </div>        
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
            pokemons: [],
            pokemon: null,
            showPokemon: false,
            showAnswer: false,
            message: ''
        }
    },
    methods: {
        async mixPokemons() {
            this.pokemons = await getPokemosOptions();
            
            // Assing ramdon pokemon
            const rndInt = Math.floor(Math.random() * 4);            
            this.pokemon = this.pokemons[rndInt];
        },
        checkAnswer(pokemon_id) {
            this.showPokemon = true;
            this.showAnswer = true;

            if (pokemon_id === this.pokemon.id) {
                this.message = `¡Correcto! ${ this.pokemon.name.toUpperCase() }`;
            } else {
                this.message = `Opps, era ${ this.pokemon.name.toUpperCase() }`;
            }
        },
        newGame() {
            this.showPokemon = false;
            this.showAnswer = false;
            this.pokemons = [];
            this.pokemon = [];
            this.mixPokemons();
        }
    },
    // Lifecycle Hook
    mounted() {        
        this.mixPokemons();
    }
}
</script>