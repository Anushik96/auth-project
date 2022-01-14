<template>
  <nav class="navbar shadow bg-white rounded justify-content-between flex-nowrap flex-row fixed-top">
    <div class="container">
      <ul class="nav navbar-nav flex-row float-right">
        <li class="nav-item">
          <router-link class="nav-link pr-3" to="/login">Sign in</router-link>
        </li>
        <li class="nav-item">
          <router-link class="btn btn-outline-primary" to="/">Sign up</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script lang="ts">
import {defineComponent, computed} from 'vue'
import {useStore} from '@/store'


export default defineComponent({
  name: 'Sidebar',
  setup() {
    const store = useStore();
    const currentUser = computed(() => {
      return store.state.user
    })

    return{currentUser}
  }
})
</script>
<style lang="scss">

</style>