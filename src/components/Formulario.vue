<template>
  <form id="app" @submit="checkForm" method="post" novalidate="true">
    <b-alert show variant="warning" v-if="errors.length">
      <b>Error. Corrigue lo siguiente:</b>
      <ul>
        <li v-for="error in errors" :key="error.index">{{ error }}</li>
      </ul>
    </b-alert>
    <p>
      <label for="name">Nombre(s): </label>
      <input id="name" v-model="name" type="text" name="name" />
    </p>
    <p>
      <label for="surname">Apellido paterno: </label>
      <input id="surname" v-model="surname" type="text" name="surname" />
    </p>
    <p>
      <label for="lastname">Apellido materno: </label>
      <input id="lastname" v-model="lastname" type="text" name="lastname" />
    </p>
    <p>
      <label for="email">Correo electronico: </label>
      <input id="email" v-model="email" type="text" name="email" />
    </p>
    <p>
      <input type="submit" value="Submit" />
    </p>
  </form>
</template>

<script>
export default {
  data() {
    return {
      errors: [],
      name: null,
      surname: null,
      lastname: null,
      email: null,
    };
  },
  methods: {
    checkForm: function (e) {
      if (this.name && this.surname) {
        return true;
      }

      this.errors = [];

      if (!this.name) {
        this.errors.push("Nombre requerido.");
      }

      if (!this.surname) {
        this.errors.push("Apellido paterno requerido.");
      }

      if (!this.email) {
        this.errors.push("Correo electronico requerido.");
      } else if (!this.validEmail(this.email)) {
        this.errors.push("Correo electronico invalido.");
      }
      if (!this.errors.length) return true;
      e.preventDefault();
    },
    
    validEmail: function (email) {
      var re =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
  },
};
</script>
