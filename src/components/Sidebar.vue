<template>
  <b-nav vertical class="pt-5">
    <h1>Nuestras tiendas</h1>
    <b-nav-item>
      <b-link :to="{ name: 'inicio' }"> Juguetes </b-link>
    </b-nav-item>
    <b-nav-item>
      <b-link :to="{ name: 'info' }"> Electrodomesticos </b-link>
    </b-nav-item>
    <b-nav-item>
      <b-link :to="{ name: 'categories' }"> Para el hogar </b-link>
    </b-nav-item>
    <b-nav-item>
      <b-link :to="{ name: 'formulario' }"> Formulario </b-link>
    </b-nav-item>
  </b-nav>
</template>
