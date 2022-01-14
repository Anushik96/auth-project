<template>
  <div class="main-content">

    <!-- You only need this form and the form-login.css -->
    <form class="form-login" method="post" action="#">
      <div class="form-log-in-with-email">

        <div class="form-white-background">

          <div class="form-title-row">
            <h1>Log in</h1>
          </div>

          <div class="form-row">
            <label>
              <span>Email</span>
              <input type="email" name="email">
            </label>
          </div>

          <div class="form-row">
            <label>
              <span>Password</span>
              <input type="password" name="password">
            </label>
          </div>

          <div class="form-row">
            <button type="submit">Log in</button>
          </div>

        </div>

        <router-link class="form-create-an-account" :to="{name: 'forgotPassword'}">Forgotten password &middot;</router-link>
        <router-link class="form-create-an-account" :to="{name: 'register'}">Create an account -></router-link>
      </div>

    </form>

  </div>
</template>

<script lang="ts">
import {defineComponent, computed, reactive, onMounted} from 'vue'
import {useStore} from "@/store";
import {useRoute} from "vue-router";

export default defineComponent({
  name: 'Login',

  setup() {
    const store = useStore();

    const user: any = reactive({
      username: '',
      password: ''
    });
    let loading = false;

    const isLoggedIn = computed(() => {
      return store.getters.isLoggedIn
    });


    onMounted(() => {
      return true
    })

    return {user, loading}
  }
})
</script>

<style scoped>
</style>