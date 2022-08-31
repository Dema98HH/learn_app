<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
  <div class="todos">
    <div v-for="todo in allTodos" :key="todo.id"> {{ todo.name }} </div>
  </div>
</template>



<script>

import { mapGetters, mapActions } from 'vuex'

export default {
  name: "Todos",

  methods: {
    ...mapActions(['fetchTodos']),
  },

  computed: mapGetters(['allTodos']),

  created() {
    this.fetchTodos();
  }
}



</script>