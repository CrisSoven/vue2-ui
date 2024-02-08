<template>
  <div>
    <b-breadcrumb :items="items" />
    <h1>Formulario</h1>
    <form id="app" @submit="checkForm" method="post" novalidate="true">
      <b-alert show variant="warning" v-if="errors.length">
        <b>Error:</b>
        <ul>
          <li v-for="error in errors" :key="error.index">{{ error }}</li>
        </ul>
      </b-alert>
      <p>
        <label>Nombre(s): </label>
        <input v-model="name" type="text" placeholder="Nombre" />
      </p>
      <p>
        <label>Apellido paterno: </label>
        <input v-model="surname" type="text" placeholder="Apellido paterno" />
      </p>
      <p>
        <label>Apellido materno: </label>
        <input v-model="lastname" type="text" placeholder="Apellido materno" />
      </p>
      <p>
        <label>Direeción: </label>
        <input
          v-model="address"
          type="text"
          placeholder="00000, calle, #, ciudad"
        />
      </p>
      <p>
        <label>Fecha de nacimiento: </label>
        <input
          v-model="birth_date"
          type="date"
          placeholder="fecha de nacimiento"
        />
      </p>
      <p>
        <label>Correo electronico: </label>
        <input v-model="email" type="text" placeholder="tucorre@ejemplo.com" />
      </p>
      <p>
        <label>Número telefonico: </label>
        <input v-model="phone_number" type="number" placeholder="7771234567" />
      </p>
      <p>
        <label>Fotografía (PNG)</label>
        <input type="file" accept="image/png" @change="validPhoto" />
      </p>
      <p>
        <input type="submit" value="Submit" />
      </p>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          text: "Formulario",
          active: true,
        },
      ],
      errors: [],
      name: null,
      surname: null,
      lastname: null,
      address: null,
      birth_date: null,
      email: null,
      phone_number: null,
      photo: false,
    };
  },
  methods: {
    checkForm: function (e) {
      this.errors = [];

      if (!this.name) {
        this.errors.push("Nombre requerido.");
      }

      if (!this.surname) {
        this.errors.push("Apellido paterno requerido.");
      }

      if (!this.birth_date) {
        this.errors.push("Fecha de nacimiento requerida.");
      } else if (!this.validYearOld(this.birth_date)) {
        this.errors.push("Debes tener más de 18 años.");
      }

      if (!this.address) {
        this.errors.push("Dirección requerida.");
      } else if (!this.validAddress(this.address)) {
        this.errors.push(
          "La dirección debe seguir el formato (00000, calle, 0, ciudad)."
        );
      }

      if (!this.email) {
        this.errors.push("Correo electronico requerido.");
      } else if (!this.validEmail(this.email)) {
        this.errors.push("Correo electronico invalido.");
      }

      if (!this.phone_number) {
        this.errors.push("Número telefonico requerido.");
      } else if (!this.validPhone(this.phone_number)) {
        this.errors.push(
          "El número telefónico no puede ser mayor a 10 digitos."
        );
      }

      if (!this.photo) {
        this.errors.push("Fotografía requerida.");
      }

      if (this.errors.length > 0) {
        e.preventDefault();
        return;
      }
    },
    validEmail: function (email) {
      var re =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
    validAddress: function (address) {
      var re = /^[0-9]{5},\s[A-Za-z]+,\s[0-9]+,\s[A-Za-z]+$/;
      return re.test(address);
    },
    validYearOld: function (birth_date) {
      var today = new Date();
      var birthdateDate = new Date(birth_date);
      var years = today.getFullYear() - birthdateDate.getFullYear();
      var month = today.getMonth() - birthdateDate.getMonth();

      if (month < 0 || (month === 0 && today.getDate() < birthdateDate.getDate())) {
        years--;
      }
      return years >= 18;
    },
    validPhone: function (phone_number) {
      var re = /^[0-9]{10}$/;
      return re.test(phone_number);
    },
    validPhoto: function (event) {
      const file = event.target.files[0];
      if (file && file.type === "image/png" && file.size > 3 * 1024 * 1024) {
        this.errors.push("El tamaño de la fotografía debe ser menor a 3MB.");
      } else {
        this.photo = true;
      }
    },
  },
};
</script>
