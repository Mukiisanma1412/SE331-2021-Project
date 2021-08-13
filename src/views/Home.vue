<template>
  <div class="home">
    <PeopleList v-for="people in peoples" :key="people.id" :people="people" />
  </div>
</template>

<script>
// @ is an alias to /src
import PeopleList from "@/components/Peoplelist.vue";
import EventService from "@/service/EventService.js";

export default {
  name: "Home",
  components: {
    PeopleList,
  },
  data() {
    return {
      peoples: null,
      totalEvents: 0,
    };
  },
  created() {
    EventService.getPeoplelList(this.page)
      .then((response) => {
        this.peoples = response.data;
        this.totalEvents = response.headers["x-total-count"];
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>
