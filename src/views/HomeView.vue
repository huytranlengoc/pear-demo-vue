<template>
    <div class="container mt-5 text-center">
      <h3>{{ message }}</h3>
    </div>
</template>

<script>
import {onMounted, ref} from "vue";
import axios from "axios";

export default {
    name: "HomeView",
    setup() {
      const message = ref('You are not logged in!');

      onMounted(async () => {
        const response = await axios.get('user');
        message.value = `Welcome ${response.data.first_name} ${response.data.last_name}!`;
      });

      return {
        message
      }
    }
}
</script>

<style>
</style>