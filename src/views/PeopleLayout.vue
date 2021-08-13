<template>
  <div v-if="people">
    <h1>{{ people.name }}</h1>

    <router-view :people="people" />
  </div>
</template>

<script>
import EventService from '@/service/EventService.js'

export default {
  props: ['id'],
  data() {
    return {
      people: null
    }
  },
  created() {
    EventService.getPeopleDetail(this.id)
      .then((response) => {
        this.people = response.data
      })
      .catch((error) => {
        console.log(error);
      })
  }
}
</script>
