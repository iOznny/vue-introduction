<template>
    <div class="pokemon-container">
        <img class="hidden-pokemon" :src="imagenSrc" alt="Pokemon">
        <img class="fade-in" :src="imagenSrc" v-if="showPokemon" alt="Pokemon">
    </div>
</template>

<script>
export default {
    name: 'PokemonPicture',
    props: {
        pokemonID: {
            type: Number,
            required: true,
            default: 1
        },
        showPokemon: {
            type: Boolean,
            required: true,
            default: false
        }
    },
    computed: {
        imagenSrc() {
            return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${ this.pokemonID }.svg`;
        }
    }
}
</script>

<style scoped>
/* Pokemon Picture */
.pokemon-container {
    height: 200px;
}

img {
    height: 200px;
    position: absolute;
    width: 100vw;
    margin-left: -50vw;
    user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -webkit-user-drag: none;
    -webkit-user-select: none;
}

.hidden-pokemon {
    filter: brightness(0);
}
</style>