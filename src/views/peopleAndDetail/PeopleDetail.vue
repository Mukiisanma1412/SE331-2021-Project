<template>
  <p>Name: {{people.name}} <br> Surname: {{people.Surname}} </p>
  <p>Age : {{people.age}}</p>
  <p>Home Town : {{people.hometown}}</p>
  <img v-bind:src= "people.img" />

</template>

<script>

export default {
  props: ['people'],
  
}
</script>
