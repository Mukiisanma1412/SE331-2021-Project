<template>
  <p>Doctor's comment on {{ people.name }}'s vaccination'</p>

  <form>
    <div class="mb-3">
      <label for="name" class="form-label">Name</label>
      <input type="text" class="form-control" id="name" v-model="name" />
    </div>
    <div class="mb-3">
      <label for="comment" class="form-label">Example textarea</label>
      <textarea
        class="form-control"
        id="comment"
        rows="3"
        v-model="comment"
      ></textarea>
    </div>
    <button type="button" class="btn btn-primary" @click="submit">
      Submit
    </button>
  </form>

  <!-- {{ Comments}} -->

  <ul>
    <li v-for="Acomment in Comments" v-bind:key="Acomment.name">
      {{ Acomment.name }} : {{ Acomment.comment }}
    </li>
  </ul>
</template>

<script>
export default {
  props: ["people", "Comments"],
  data() {
    return {
      name: "",
      comment: "",
    };
  },
  methods: {
    submit() {
      let newComment = {
        name: this.name,
        comment: this.comment,
      };
      this.$emit("comment", newComment);
      this.name = ""
      this.comment = ""
    },
  },
};
</script>
