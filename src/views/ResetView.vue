<template>
    <main class="form-signin w-100 m-auto">
    <form @submit.prevent="submit">
        <h1 class="h3 mb-3 fw-normal">Please reset your password</h1>

        <div class="form-floating">
            <input type="password" class="form-control" placeholder="Password" v-model="data.password">
            <label>Password</label>
        </div>
        <div class="form-floating">
            <input type="password" class="form-control" placeholder="Password Confirmation" v-model="data.password_confirm">
            <label>Password Confirmation</label>
        </div>

        <button class="w-100 btn btn-lg btn-primary" type="submit">Submit</button>
    </form>
    </main>
</template>

<script lang="ts">
import {reactive} from "vue";
import axios from "axios";
import { useRoute, useRouter } from "vue-router";

export default {
    name: "ResetView",
    setup() {
      const data = reactive({
        password: "",
        password_confirm: "",
      });

      const route = useRoute();
      const router = useRouter();

      const submit = async () => {
        await axios.post('reset', {
            ...data,
            token: route.params.token,
        });
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