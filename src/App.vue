<template>
  <div id="flashMessage" v-if="GStore.flashMessage">
    {{ GStore.flashMessage }}
  </div>
  <link
    href="https://fonts.googleapis.com/css2?family=Material+Icons"
    rel="stylesheet"
  />

  <nav class="navbar navbar-dark bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="/">Home</a>
      <button
        class="btn btn-sm btn-outline-secondary"
        type="button"
        @click="logout"
        v-if="currentUser"
      >
        Log out
      </button>
    </div>
  </nav>

  <div class="container">
    <router-view />
  </div>

  <div class="container-fluid footer">
    <p class="text-center">footer</p>
  </div>
</template>

<script>
import AuthService from "@/service/AuthService.js";

export default {
  inject: ["GStore"], //<--
  computed: {
    currentUser() {
      return localStorage.getItem("user");
    },
  },
  methods: {
    logout() {
      AuthService.logout();
      this.$router.go();
    },
  },
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
.footer {
  background: #f3f3f3;
  color: #292626;
  margin-top: 1rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
}
</style>

<style scoped>
.navbar {
  background: #3b3a3a;
  padding: 0.01cm;
  font-size: 5cm;
  border-bottom: 0.5px solid rgb(100, 96, 96);
  margin-bottom: 16px;
}
</style>
