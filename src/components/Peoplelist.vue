<template>
  <tr>
    <td>{{ people.name }}</td>
    <td>{{ people.Surname }}</td>
    <td>{{ people.status }}</td>
    <td>
      <router-link :to="{ name: 'PeopleDetail', params: { id: people.id } }">
        >>
      </router-link>
    </td>
  </tr>
</template>

<script>
export default {
  name: "PeopleList",
  props: {
    people: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.id a {
  text-decoration-line: none;
  color: brown;
}
</style>
