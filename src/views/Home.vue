<template>
  <div class="home">
    <UserList />
  </div>
</template>

<script>
import UserList from '../components/UserList.vue'
export default {
  name: 'Home',
  components: {
    UserList
  },
  data: () => ({
    patients: []
  }),
  mounted() {
   


    //FORMA EN LA QUE NO SE ACTUALIZA SOLA

    // Firebase.firestore()
    //   .collection('pacientes')
    //   .get()
    //   .then((collection) => {
    //     collection.forEach((document) => {
    //       this.pacientes.push({ id: document.id, ...document.data() })
    //     })
    //   })

    // // SE ACTUALIZA LA BASE DE DATOS EN LA VISTA AUTOMATICAMENTE, ESTILO LIVE SERVER
    // Firebase.firestore()
    //   .collection('pacientes')
    //   .onSnapshot((querySnapshot) => {
    //     this.pacientes = []
    //     querySnapshot.forEach((document) => {
    //       this.pacientes.push({ id: document.id, ...document.data() })
    //     })
    //   })
  }
}
</script>
