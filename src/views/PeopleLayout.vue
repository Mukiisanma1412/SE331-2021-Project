<template>
  <div id="layout">
    <div v-if="people">
      <div id="nav-nest">
        <ul class="pagination justify-content-center">
          <li class="page-item">
            <router-link
              class="page-link"
              id="page-prev"
              :to="{ name: 'PeopleDetail' }"
              >{{ people.name }}'s detail</router-link
            >
          </li>
          <li class="page-item">
            <router-link
              class="page-link"
              id="page-prev"
              :to="{ name: 'DoctorComment' }"
              >Doctor's recommandation</router-link
            >
          </li>
          <li class="page-item">
            <router-link
              class="page-link"
              id="page-next"
              :to="{ name: 'VaccineDetail' }"
              >Vaccine's detail</router-link
            >
          </li>
        </ul>
      </div>

      <div id="card" class="card mb-3" style="max-width: 900px">
        <router-view :people="people" />
      </div>
    </div>
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
#layout {
  margin-top: 10px;
}

#card {
  margin: 0 auto;
}
</style>
