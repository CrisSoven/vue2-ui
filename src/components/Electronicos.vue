<template>
  <div>
    <b-breadcrumb :items="items"/>
    <h1>Electronicos</h1>
    <b-button variant="success" href="#/inicio/electronicos/videojuegos">Juegos de video</b-button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        items: [
          {
            text: 'Tienda de juguetes',
            href: '#/inicio'
          },
          {
            text: 'Electronicos',
            active: true
          }
        ]
      }
    }
  }
</script>