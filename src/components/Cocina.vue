<template>
  <div>
    <b-breadcrumb :items="items" />
    <h1>Para la cocina</h1>
    <b-button variant="success" href="#/info/cocina/estufas">Estufas</b-button>
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