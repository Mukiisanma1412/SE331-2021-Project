<template>
<div class="card-body">
  <h2 class="card-title">Name: {{ Vaccine.name}}</h2>
  <p class="card-text">Detail: {{ Vaccine.detail}}</p>
  <p class="card-text">Country: {{ Vaccine.Country}}</p>
</div>
</template>

<script>
import EventService from "@/service/EventService.js";

export default {
  props: ["people"],
  data() {
    return {
      Vaccine: null,
    };
  },
  created() {
    EventService.getVaccineDetail(this.people.Vaccine)
      .then((response) => {
        this.Vaccine = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>