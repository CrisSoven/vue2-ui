<template>
  <div>
    <b-breadcrumb :items="items"/>
    <h1>Tienda de juguetes</h1>
    <b-button variant="success" href="#/inicio/electronicos">electrónicos</b-button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        items: [
          {
            text: 'Tienda de juguetes',
            active: true
          }
        ]
      }
    }
  }
</script>