const app = Vue.createApp({
    template: `
        <h1>Hellow World</h1>
        <p>{{ true ? 'Active' : 'Inactive' }}</p>
    `
})

app.mount('#app')