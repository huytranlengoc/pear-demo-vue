<template>
    <LoginForm @login-data="setLoginData" v-if="loginData.id === 0" />
    <AuthenticatorForm :login-data="loginData" @success="success" v-if="loginData.id !== 0"/>
</template>

<script>
import {reactive} from "vue";
import { useRouter } from "vue-router";
import LoginForm from "@/views/login/LoginForm";
import AuthenticatorForm from "@/views/login/AuthenticatorForm";
import { useStore } from "vuex";

export default {
    name: "LoginView",
    components: {
        LoginForm,
        AuthenticatorForm
    },
    setup() {
        const router = useRouter();
        const store = useStore();
        const loginData = reactive({
            id: 0,
        });
        const setLoginData = (data) => {
            loginData.id = data.id;

            if (data.secret) {
                loginData.secret = data.secret;
                loginData.otpauth_url = data.otpauth_url;
            }
        };

        const success = async () => {
            await store.dispatch('setAuth', true)
            await router.push('/');
        }

        return {
            loginData,
            setLoginData,
            success
        }
    }
}
</script>

<style>
</style>