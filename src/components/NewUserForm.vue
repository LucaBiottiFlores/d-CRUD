<template>
  <div>
      <h1>Ingresar Nuevo Paciente</h1>
      
    <form @submit.prevent="addNewUser">
        <label for="nombre">Nombre: </label>
        <input 
        id="nombre"
        name="nombre"
        type="text"
        required 
        v-model="patient.nombre"
        />
      <label for="apellido">Apellido: </label>
        <input 
        id="apellido"
        name="apellido"
        type="text"
        required 
        v-model="patient.apellido"
        />
          <label for="edad">Edad: </label>
        <input 
        id="edad"
        name="edad"
        type="number"
        required 
        v-model.number="patient.edad"
        />
          <label for="prevision">Prevision: </label>
        <input 
        id="prevision"
        name="prevision"
        type="text"
        required 
        v-model="patient.prevision"
        />
        <button type="submit">Agregar Nuevo Paciente</button>
    </form>

  </div>
</template>

<script>
export default {
  data: () => ({
        patient: {
        nombre: null,
        apellido: null,
        edad: null,
        prevision: null,
    },
  }),

    methods: {
        addNewUser() {
            this.$store.dispatch('createPatient', {...this.patient})
            this.$router.push('/')
        }
    }
}
</script>

<style>

</style>