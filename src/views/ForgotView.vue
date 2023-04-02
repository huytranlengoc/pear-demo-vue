<template>
    <main class="form-signin w-100 m-auto">
        <div v-if="notify.cls" :class="`alert alert-${notify.cls}`" role="alert">
            {{  notify.message }}
        </div>
        <form @submit.prevent="submit">
            <h1 class="h3 mb-3 fw-normal">Please insert your email</h1>

            <div class="form-floating">
                <input v-model="email" type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
                <label for="floatingInput">Email address</label>
            </div>

            <button class="w-100 btn btn-lg btn-primary mt-3" type="submit">Submit</button>
        </form>
    </main>
</template>

<script>
import {ref, reactive} from "vue";
import axios from 'axios';

export default {
    name: "ForgotView",
    setup() {
        const email = ref('');
        const notify = reactive({
            message: '',
            cls: '',
        });
        const submit = async () => {
            try {
                await axios.post('forgot', { email: email.value });
                notify.message = 'Email was sent!';
                notify.cls = 'success';
            } catch (error) {
                notify.message = 'Email does not exist!';
                notify.cls = 'danger';
            }
        }

        return {
            email,
            notify,
            submit,
        }
    }
}
</script>

<style>
</style>