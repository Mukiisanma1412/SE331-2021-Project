<template>
  <div>
    <div class="row g-0">
      <div class="col-md-4">
        <img class="img-thumbnail" v-bind:src="people.img" />
      </div>
      <div class="col-md-8">
        <div class="card-body">
        
          <h4 class="card-title">{{ people.name }} {{ people.Surname }}</h4>
          <hr>
          
          <p class="card-text">Age : {{ people.age }}</p>
          <p class="card-text">Home Town : {{ people.hometown }}</p>
          <p class="card-text">Vaccine : {{ people.Vaccinename }}</p>
          <p class="card-text">
            Status :
            <span v-if="people.status === ' 1 '">1 dose</span>
            <span v-else
              >2 doses <span class="material-icons"> check_circle </span></span
            >
          </p>
          <p class="card-text">Latest vaccinated : {{ people.when }}</p>
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["people"],
};
</script>

