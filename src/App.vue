<template>
  <div id="flashMessage" v-if="GStore.flashMessage">
    {{ GStore.flashMessage }}
  </div>
  <link
    href="https://fonts.googleapis.com/css2?family=Material+Icons"
    rel="stylesheet"
  />
<nav class="navbar navbar-light">
      <router-link to="/" class="navbar-brand" style="font-size:20%; color: #EFECE8 ">Home</router-link>
      <router-link to="/" class="navbar-brand" style="font-size:11%; color: #848685 ">Purchasing Detail</router-link>
      <router-link to="/" class="navbar-brand" style="font-size:15%; color: #3b3a3a ">Log out</router-link>
      <router-link to="/" class="navbar-brand" style="font-size:15%; color: #3b3a3a ">Log out</router-link>
      <router-link to="/" class="navbar-brand" style="font-size:15%; color: #3b3a3a ">Log out</router-link>
      <router-link to="/" class="navbar-brand" style="font-size:15%; color: #3b3a3a ">Log out</router-link>
      <router-link to="/" class="navbar-brand" style="font-size:15%; color: #3b3a3a ">Log out</router-link>
      <router-link to="/" class="navbar-brand" style="font-size:15%; color: #3b3a3a ">Log out</router-link>
      <router-link to="/" class="navbar-brand" style="font-size:15%; color: #3b3a3a ">Log out</router-link>
      <router-link to="/" class="navbar-brand" style="font-size:15%; color: #3b3a3a ">Log out</router-link>
      <router-link to="/" class="navbar-brand" style="font-size:13%; color: #EFECE8 ">Log out</router-link>
</nav>
<div class="container">
</div>
<div class="container" id="content">
<router-view />
</div>
</template>

<script>

export default {
  inject: ["GStore"], //<--
};
</script>



<style>
@keyframes beautifade {
  from {
    /* background: rgb(212, 120, 136); */
  }
  to {
    /* background: transparent; */
  }
    
}

#flashMessage {
  animation-name: beautifade;
  animation-duration: 7s;
  position: middle;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #292626;
}
</style>

<style scoped>
.navbar{
    background: #3b3a3a;
    padding: 0.01cm;
    font-size:5cm;
    border-bottom: 0.5px solid rgb(100, 96, 96);


}

</style>