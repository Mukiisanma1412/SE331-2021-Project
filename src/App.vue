<template>
  <link
    href="https://fonts.googleapis.com/css2?family=Material+Icons"
    rel="stylesheet"
  />

  <div class="container">
    <nav class="navbar navbar-light bg-light">
      
      <router-link to="/" class="navbar-brand"
        >Home</router-link
      >
    </nav>
  </div>
  <div class="container" id="content">
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
