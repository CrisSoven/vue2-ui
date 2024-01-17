<template>
  <div>
    <b-breadcrumb :items="items" />
    <h1>Tienda de electrodomesticos</h1>
    <b-button variant="success" href="#/info/cocina">Para la cocina</b-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          text: "Tienda de electrodomesticos",
          active: true,
        },
      ],
    };
  },
};
</script>