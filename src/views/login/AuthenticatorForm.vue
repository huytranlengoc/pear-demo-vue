<template>
    <main class="form-signin w-100 m-auto">
    <form @submit.prevent="submit">
        <h1 class="h3 mb-3 fw-normal">Please insert your authenticator code</h1>

        <div class="form-floating">
            <input v-model="code" class="form-control" placeholder="6 digits code">
            <label for="floatingInput">6 digits code</label>
        </div>

        <div class="mt-3">
            <router-link to="/forgot">Forgot password?</router-link>
        </div>
        <button class="w-100 btn btn-lg btn-primary" type="submit">Submit</button>
    </form>

    <img :src="img" class="w-100" v-if="img" />
    </main>
</template>

<script lang="ts">
import { ref, SetupContext, ssrContextKey } from "vue";
import axios from 'axios';
import qrcode from 'qrcode';

export default {
    name: "AuthenticatorForm",
    emits: ['success'],
    props: ['loginData'],
    setup(props: { loginData: any }, context: SetupContext ) {
        const code = ref('');
        const img = ref<string | null>(null);

        if (props.loginData.otpauth_url) {
            console.log('oauth_url' + props.loginData.otpauth_url);
            qrcode.toDataURL(props.loginData.otpauth_url, (err, url) => {
                img.value = url;
            });
        } else {
            console.log('not existed');
        }

        const submit = async () => {
            const {data, status} = await axios.post('two-factor', {
                ...props.loginData,
                code: code.value
            }, { withCredentials: true });

            axios.defaults.headers.common['Authorization'] = `Bearer ${data.token}`;
            if (status === 200) {
                context.emit('success');
            }
        };

        return {
            code,
            img,
            submit
        }
    }
}
</script>

<style>
</style>