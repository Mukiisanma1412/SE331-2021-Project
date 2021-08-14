<template>
  <div v-if="people">
  
    <div id="nav-nest">
      <ul class="pagination">
        <li class="page-item">
          <router-link
            class="page-link"
            id="page-prev"
            :to="{ PeopleDetail }"
         
            >{{ people.name}}'s detail</router-link
          >
        </li>
        <li class="page-item">
          <router-link
            class="page-link"
            id="page-prev"
            :to="{ DoctorComment }"
       
            >Doctor's recommandation</router-link
          >
        </li>
        <li class="page-item">
          <router-link
            class="page-link"
            id="page-next"
            :to="{ }"
           
            >Vaccine's detail</router-link
          >
        </li>
      </ul>
    </div>
    <router-view :people="people" />
  </div>
</template>

<script>
import EventService from "@/service/EventService.js";

export default {
  props: ["id"],
  data() {
    return {
      people: null,
    };
  },
  created() {
    EventService.getPeopleDetail(this.id)
      .then((response) => {
        this.people = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style scoped>
.nav-nest {
  align-content: center;
}
</style>
