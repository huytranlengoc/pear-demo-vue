<template>
    <div class="container mt-5 text-center">
      <h3>{{ auth ? message : 'You are not logged in' }}</h3>
    </div>
</template>

<script>
import {onMounted, ref, computed} from "vue";
import axios from "axios";
import {useStore} from "vuex";

export default {
    name: "HomeView",
    setup() {
      const message = ref('You are not logged in!');
      const store = useStore();
      const auth = computed(() => store.state.auth);


      onMounted(async () => {
        try {
          const response = await axios.get('user');
          message.value = `Welcome ${response.data.first_name} ${response.data.last_name}!`;
          await store.dispatch('setAuth', true);
        } catch (e) {
          await store.dispatch('setAuth', false);
        }
      });

      return {
        message,
        auth
      }
    }
}
</script>

<style>
</style>