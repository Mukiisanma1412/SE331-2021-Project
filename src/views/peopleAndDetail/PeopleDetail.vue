<template>
  <p>Name: {{people.name}} Surname: {{people.Surname}} </p>
  <p>Age : {{people.age}}</p>
  <p>Home Town : {{people.hometown}}</p>

</template>

<script>

export default {
  props: ['people'],
  
}
</script>
