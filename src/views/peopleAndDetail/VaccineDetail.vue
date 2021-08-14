<template>
  <p>Name: {{ Vaccine.name}}</p>
  <p>Detail: {{ Vaccine.detail}}</p>
  <p>Country: {{ Vaccine.Country}}</p>

</template>

<script>

export default {
  props: ['Vaccine'],
  
}
</script>