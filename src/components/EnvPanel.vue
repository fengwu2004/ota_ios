<template>
  <div class="hello">Env
  </div>
</template>

<script>
const axios = require('axios')
export default {
  name: 'EnvPanel',
  mounted() {
    
    axios.get("http://192.168.2.2:8888/ios").then(response=>{

      console.log('请求成功', response)
    })
  },
  methods: {
    
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
