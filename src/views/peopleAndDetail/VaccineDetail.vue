<template>
  <p>Name: {{ Vaccine.name}}</p>
  <p>Detail: {{ Vaccine.detail}}</p>
  <p>Country: {{ Vaccine.Country}}</p>

</template>

<script>
import EventService from "@/service/EventService.js";

export default {
  props: ['people'],
  data() {
    return {
      Vaccine: null
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
}
</script>