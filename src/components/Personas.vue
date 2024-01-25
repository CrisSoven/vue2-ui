<template>
  <div class="overflow-auto">
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="my-table"
    />

    <p class="mt-3">Current Page: {{ currentPage }}</p>

    <b-table
      id="my-table"
      :items="personas"
      :per-page="perPage"
      :current-page="currentPage"
      small
    />
  </div>
</template>

<script>
import person_services from "../services/Persona";
export default {
  data() {
    return {
      perPage: 3,
      currentPage: 1,
      personas: [],
    };
  },
  mounted() {
    this.obtenerPersonas();
  },
  methods: {
    async obtenerPersonas() {
      try {
        const data = await person_services.obtenerPersonasPaginadas(
          parseInt(this.currentPage),
          parseInt(this.perPage)
        );
        this.personas = data.content;
      } catch (error) {
        console.log("error:", error);
      }
    },
  },
  computed: {
    rows() {
      return this.personas.length;
    },
  },
};
</script>