import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { initializeApp } from 'firebase/app';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtejSMBz4rmfG4KjftL8DOgDwrfWS9IUY",
  authDomain: "vue-auth-check-d69a8.firebaseapp.com",
  projectId: "vue-auth-check-d69a8",
  storageBucket: "vue-auth-check-d69a8.appspot.com",
  messagingSenderId: "1008554252064",
  appId: "1:1008554252064:web:332565158247cdc3352945"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const app = createApp(App)

app.use(router)

app.mount('#app')
