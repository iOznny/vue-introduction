<template>
    <div>
        <h2>{{ this.title }}</h2>
        <p>{{ counter }} <sup>2</sup> = {{ squareCounter }} </p>
        <p data-test-counter="counter">{{ counter }}</p>

        <div>
            <button @click="increment">+1</button>
            <button @click="decrement">-1</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Counter',
    props: {
        title: {
            type: String,
            default: 'Counter'
        },
        start: {
            type: Number,
            default: 10,
            // required: true,
            validator: function(value) {
                return value >= 0
            }
        }
    },
    data: function() {
        return {
            counter: this.start
        }
    },
    methods: {
        getSquareValue() {            
            return this.counter * this.counter
        },
        increment() {
            this.counter++;
        },
        decrement() {
            this.counter--;
        }
    },
    // Computated Properties
    computed: {
        squareCounter() {            
            return this.counter * this.counter
        },
        setTitle() {
            return this.title ? this.title : 'Counter';
        }
    }
}
</script>

<style>
button {
    background-color: #64BB87;
    border-radius: 5px;
    border: 1px solid white;
    color: white;
    cursor: pointer;        
    margin: 0 5px;
    padding: 5px 15px;
    transition: 0.3s ease-in-out;
}

button:hover {
    background-color: #5aa67b;
    transition: 0.3s ease-in-out;
}
</style>