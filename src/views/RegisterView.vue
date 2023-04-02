<template>
    <main class="form-signin w-100 m-auto">
    <form @submit.prevent="submit">
        <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

        <div class="form-floating">
            <input class="form-control" placeholder="First name" v-model="data.first_name">
            <label>First name</label>
        </div>
        <div class="form-floating">
            <input class="form-control" placeholder="Last name" v-model="data.last_name">
            <label>Last name</label>
        </div>
        <div class="form-floating">
            <input type="email" class="form-control" placeholder="name@example.com" v-model="data.email">
            <label>Email address</label>
        </div>
        <div class="form-floating">
            <input type="password" class="form-control" placeholder="Password" v-model="data.password">
            <label>Password</label>
        </div>
        <div class="form-floating">
            <input type="password" class="form-control" placeholder="Password Confirmation" v-model="data.password_confirm">
            <label>Password Confirmation</label>
        </div>

        <button class="w-100 btn btn-lg btn-primary" type="submit">Register</button>
    </form>
    </main>
</template>

<script lang="ts">
import {reactive} from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

export default {
    name: "RegisterView",
    setup() {
      const data = reactive({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        password_confirm: "",
      });

      const router = useRouter();

      const submit = async () => {
        await axios.post('register', data);
        await router.push('/login');
      }

      return {
        data,
        submit,
      }
    }
}
</script>

<style>
</style>