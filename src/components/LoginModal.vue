<template>
    <section class="vue-modal-back" @click="closeModal"></section>
    <div class="login-modal shadow">
        <h2 class="text-center mb-4">Login here</h2>
        <form @submit.prevent="loginFormSubmit">
            <div class="mb-3">
                <label for="email" class="form-label">Email address</label>
                <input type="email" class="form-control" id="email" v-model="email">
            </div>
            <div class="mb-3">
                <label for="password" class="form-label">Password</label>
                <input type="password" class="form-control" id="password" v-model="password">
            </div>
            <button type="submit" class="btn btn-primary">
                <span class="spinner-border spinner-border-sm me-1" role="status" aria-hidden="true" v-if="isLoading"></span>
            Login</button>
            <p class=" mt-2" mb-0>Or</p>
            <div class="btn btn-danger mt-2" @click="signInWithGoogle">Sign In With Google</div>
        </form>
    </div>
</template>

<script>
import { getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
export default {
    data(){
        return{
            email: "",
            password: "",
            isLoading: false,
        }
    },
    methods: {
        loginFormSubmit(){
            this.isLoading = true;
            const auth = getAuth();
            signInWithEmailAndPassword(auth, this.email, this.password)
            .then(() => {
                // Signed in
                this.email = "";
                this.password = "";
                this.isLoading = false;
                this.closeModal();
            })
            .catch((error) => {
                this.isLoading = false;
            });
        },
        signInWithGoogle(){
            const provider = new GoogleAuthProvider();
            signInWithPopup(getAuth(), provider)
            .then((result) => {
                this.closeModal();
            }).catch((error) => {
                
            });
        },
        closeModal(){
            this.$emit('hideVueModal')
        }
    }
}
</script>

<style>
.vue-modal-back {
    background: #333;
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    opacity: 0.5;
    z-index: 99;
}
.login-modal {
    position: absolute;
    z-index: 999;
    background: #fff;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    min-width: 500px;
    border-radius: 4px;
    padding: 25px;
}
</style>