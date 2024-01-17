<template>
    <div>
      <b-breadcrumb :items="items" />
      <h1>Detergente industrial</h1>
      <h5>:)</h5>
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
            href: "#/categories/limpieza",
            name: "limpieza"
          },
          {
            text: "Detergente Industrial",
            active: true,
          },
        ],
      };
    },
  };
  </script>