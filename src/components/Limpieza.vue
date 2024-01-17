<template>
  <div>
    <b-breadcrumb :items="items" />
    <h1>Productos de limpieza</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          text: "Tienda de electrodomesticos",
          href: "#/info",
          name: "info"
        },
        {
          text: "Cocina",
          active: true,
        },
      ],
    };
  },
};
</script>