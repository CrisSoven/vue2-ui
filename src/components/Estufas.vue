<template>
  <div>
    <b-breadcrumb :items="items" />
    <h1>Estufas</h1>
    <h5>:)</h5>
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
          name: "info",
        },
        {
          text: "Cocina",
          href: "#/info/cocina",
          name: 'cocina',
        },
        {
          text: "Estufas",
          active: true,
        },
      ],
    };
  },
};
</script>