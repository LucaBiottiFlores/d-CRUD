<template>
  <div>
    <button @click="$store.dispatch('getAllPatients')">
      Actualizar Pacientes
    </button>

    <ul>
      <li v-for="paciente in $store.state.patients" :key="paciente.id">
        {{ paciente.nombre }} | {{ paciente.apellido }} | {{ paciente.edad }} |
        {{ paciente.prevision }} |
        <button
          type="button"
          @click="$store.dispatch('deletePatient', paciente.id)"
        >
          Borrar
        </button>
        |
        <div
          class="modal fade"
          id="exampleModalToggle"
          aria-hidden="true"
          aria-labelledby="exampleModalToggleLabel"
          tabindex="-1"
        >
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalToggleLabel">
                  Modal 1
                </h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <input v-model="paciente.nombre" placeholder="nombre" />
                <input v-model="paciente.apellido" placeholder="apellido" />
                <input v-model="paciente.edad" placeholder="edad" />
                <input v-model="paciente.prevision" placeholder="prevision" />
              </div>
              <div class="modal-footer">
                <button
                  class="btn btn-primary"
                  @click="$store.state.dispatch('editPatient')"
                >
                  Editar
                </button>
              </div>
            </div>
          </div>
        </div>

        <a
          class="btn btn-primary"
          data-bs-toggle="modal"
          href="#exampleModalToggle"
          role="button"
          >Editar</a
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data: () => ({
    paciente: {
      nombre: "",
      apellido: "",
      edad: "",
      prevision: "",
    }
  }),
  methods: {},
  props: ['pacientes']
}
</script>

<style></style>
