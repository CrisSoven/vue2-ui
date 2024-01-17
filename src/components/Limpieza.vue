<template>
  <div>
    <b-breadcrumb :items="items" />
    <h1>Productos de limpieza</h1>
    <b-button variant="success" href="#/categories/limpieza/detergente">Detergente industrial</b-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          text: "Tienda de productos para el hogar",
          href: "#/categories",
          name: "categories"
        },
        {
          text: "Productos de limpieza",
          active: true,
        },
      ],
    };
  },
};
</script>