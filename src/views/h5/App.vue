<template>
    <div id="app">
        <router-view />
    </div>
</template>
<script>
export default {
}
</script>
<style lang="scss">
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: left;
    color: #2c3e50;
    width: 100vw;
    min-height: 100vh;
    background-color: #f5f5f5;
}
</style>
