<template>
  <div>
    <h2>Counter</h2>
    <p>{{ counter }}</p>
  </div>
</template>

<script>
    export default {
        name: 'Counter',
        data() {
            return {
                counter: 5
            }
        }
    }
</script>

<style></style>