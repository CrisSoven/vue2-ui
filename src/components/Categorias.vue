<template>
  <div>
    <b-breadcrumb :items="items" />
    <h1>Tienda de productos para el hogar</h1>
    <b-button variant="success" href="#/categories/limpieza">Limpieza</b-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          text: "Tienda de productos para el hogar",
          active: true,
        },
      ],
    };
  },
};
</script>