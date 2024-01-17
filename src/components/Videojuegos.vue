<template>
  <div>
    <b-breadcrumb :items="items"/>
    <h1>Juegos de video</h1>
    <h5>:)</h5>
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
            href: '#/inicio/electronicos'
          },
          {
            text: 'Juegos de video',
            active: true
          }
        ]
      }
    }
  }
</script>