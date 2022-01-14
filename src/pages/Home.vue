<template>
  <div class="App">
    <div id="navigation-bar">
      <nav>
        <ul v-if="isLoggedIn">
          <li><a @click="logOut">Sign Out </a></li>
        </ul>
        <ul v-else>
          <li><router-link :to="{name: 'login'}">Sign In </router-link></li>
          <li><router-link :to="{name: 'register'}">Register</router-link></li>
        </ul>
      </nav>
      </div>
    <h1>This is Home page for all</h1>
  </div>
</template>

<script lang="ts">
import {computed, defineComponent} from "vue";
import {useStore} from "@/store";
import {ActionTypes} from "@/store/auth/action";
import {useRouter} from "vue-router";

export default defineComponent({
  name: 'Home',

  components:{},

  setup(){
    const store = useStore();
    const router = useRouter();

    const isLoggedIn = computed(() => {
      return store.getters.isLoggedIn
    });
    
    const logOut = () => {
      router.replace({name: 'login'});
      console.log(router, 'router')
      return store.dispatch(ActionTypes.signOut);
    }
    
    return{isLoggedIn, logOut}
  }
})
</script>
