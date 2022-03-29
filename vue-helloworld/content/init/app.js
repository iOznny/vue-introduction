const app = Vue.createApp({
    // template: `
    //     <h1>Hellow World</h1>
    //     <p>{{ true ? 'Active' : 'Inactive' }}</p>
    // `
    data() {
        return {
            message: "I'm Batman",
            author: "Bruce Wayne"
        }
    },
    methods: {
        changeQuote(event) {
            console.log('Quote', event);
            this.author = "Demo Demo";
            this.capitalize();
        },
        capitalize() {
            this.message = this.message.toUpperCase();
        }
    }
}).mount('#app');