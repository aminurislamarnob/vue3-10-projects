<template>
    <header class="mb-4">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
            <a class="navbar-brand" href="#">
            <img alt="Vue logo" class="logo" src="@/assets/logo.svg" height="50" />
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <RouterLink to="/" class="nav-link">Home</RouterLink>
                </li>
                <li class="nav-item">
                    <RouterLink to="/todo" class="nav-link">Todo</RouterLink>
                </li>
                <li class="nav-item">
                    <RouterLink to="/markdown" class="nav-link">Markdown</RouterLink>
                </li>
                <li class="nav-item">
                    <RouterLink to="/calendar" class="nav-link">Calendar</RouterLink>
                </li>
                <li class="nav-item">
                    <RouterLink to="/slider" class="nav-link">Slider</RouterLink>
                </li>
                <li class="nav-item">
                    <RouterLink to="/todo-com-api" class="nav-link">Todo Comp API</RouterLink>
                </li>
                <li class="nav-item">
                    <RouterLink to="/calculator" class="nav-link">Calculator</RouterLink>
                </li>
                <li class="nav-item">
                    <a v-if="isLoggedIn" href="#" class="nav-link" @click="logOut()">Logout</a>
                    <a v-else href="#" class="nav-link" @click="$emit('show-vue-modal')">Login</a>
                </li>
            </ul>
            </div>
        </div>
        </nav>
    </header>
</template>

<script>
import { getAuth, signOut } from "firebase/auth";
export default {
    props: {
        isLoggedIn:{
            type: Boolean,
            required: true
        }
    },
    methods: {
        logOut(){
            const auth = getAuth();
            signOut(auth).then(() => {
            // Sign-out successful.
            }).catch((error) => {
            // An error happened.
            });
        }
    }
}
</script>