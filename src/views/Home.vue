<template>
<h1 v-if="GStore.currentUser" >Log in</h1>
<h1 v-else>Not log in</h1>

</template>

<script>
// @ is an alias to /src
import AuthService from '@/service/AuthService.js'
export default {
  inject: ["GStore"], //<--
  computed: {
    currentUser() {
      return localStorage.getItem('user')
    }
  },
  methods: {
    logout() {
      AuthService.logout()
      this.$router.go()
    }
  }
}
</script>
<style>
 .home {
   margin-top: 10px;
 }
</style>