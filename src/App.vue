<template>
  <Header @showVueModal="isModalActive = true" :isLoggedIn="isLoggedIn" />

  <LoginModal v-if="isModalActive" @hideVueModal="isModalActive = false"/>
  
  <RouterView />
</template>

<script>
import Header from '@/components/Header.vue'
import LoginModal from '@/components/LoginModal.vue'
import { getAuth, onAuthStateChanged } from "firebase/auth";
export default {
  components: {
    Header,
    LoginModal
  },
  data(){
    return{
      isModalActive: false,
      isLoggedIn: false
    }
  },
  methods: {
    showModal(){
      this.isModalActive = true
    }
  },
  mounted(){
    onAuthStateChanged(getAuth(), (user) => {
      if (user) {
        this.isLoggedIn = true;
      } else {
        this.isLoggedIn = false;
      }
    });
  }
}
</script>

<style>
@import '@/assets/bootstrap.min.css';
@import 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap';
body{
  font-family: 'Poppins', sans-serif;
}
</style>
