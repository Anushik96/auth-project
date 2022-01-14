<template>
  <div class="vue-tempalte">
    <Sidebar/>
    <router-view/>
  </div>
</template>
<script>
import Sidebar from "@/components/Sidebar";
import {defineComponent} from "vue";

export default defineComponent({
  name: 'MainLayout',

  components: {
    Sidebar,
  },

  setup() {

    return {}
  }
})
</script>
<style>

</style>