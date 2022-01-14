<template>
  <component :is="layout">
    <router-view/>
  </component>
</template>

<script lang="ts">
import AuthLayout from "@/layout/AuthLayout.vue";
import MainLayout from "@/layout/MainLayout.vue";
import {defineComponent, computed, watch,} from 'vue'
import {useStore} from '@/store'
import { useRoute } from 'vue-router'

export default defineComponent({
  name: 'App',

  components: {
    AuthLayout,
    MainLayout
  },

  setup: function () {
    const route = useRoute()
    const defaultLayout = 'layout-not-connected'

    const store = useStore()
    const isLoggedIn = computed(() => {
      return store.getters.isLoggedIn
    })

    const layout = computed(() => {
      return (route.meta.layout || defaultLayout)
    });

    return {isLoggedIn, route, layout}
  }
})

</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
