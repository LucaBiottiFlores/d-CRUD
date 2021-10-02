import Vue from 'vue'
import Vuex from 'vuex'
import Firebase from 'firebase'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    patients: []
  },
  getters: {
    enviandoPacientes(state) {
      return state.patients
    }
  },
  mutations: {
    SET_PATIENTS(state, newPatients) {
      state.patients = newPatients
    },
    ADD_PATIENT(state, newPatient) {
      state.patients.push(newPatient)
    },
    DELETE_PATIENT(state, patient) {
      state.patients.pop(patient)
    },
    UPDATE_PATIENT(state, patient) {
      state.patients.push(patient)
    }
  },
  actions: {
    getAllPatients(context) {
      Firebase.firestore()
        .collection('pacientes')
        .get()
        .then((collection) => {
          const patients = []
          collection.forEach((document) => {
            patients.push({ id: document.id, ...document.data() })
          })
          context.commit('SET_PATIENTS', patients)
        })
    },

    createPatient(context, patient) {
      Firebase.firestore()
        .collection('pacientes')
        .add({
          ...patient
        })
      context.commit('ADD_PATIENT', patient)
    },

    deletePatient(context, id) {
      Firebase.firestore().collection('pacientes').doc(id).delete()
      context.commit('DELETE_PATIENT')
    },

 

    actualizarPaciente(context, pacienteActual) {
      Firebase.firestore()
        .collection('pacientes')
        .doc(pacienteActual.idDoc)
        .update({ ...pacienteActual }),
        context.commit('UPDATE_PATIENT')
    }
  },
  modules: {}
})
