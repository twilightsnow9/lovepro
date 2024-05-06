<template>
  <div id="app">
    <nav>
      <el-button @click="hello">hello</el-button>
    </nav>
  </div>
</template>

<script>
import { getUser } from './api/user'

export default {
  name: 'App',
  async created() {

  },
  methods:{
    async hello() {
      const data = await getUser({name:'jor',age:18})
      console.log(data);
    }
  },

}
</script>

<style lang="scss" scoped>

</style>