<template>
  <div id="app">
    <div>
      <router-link to="/" class="item">iOS</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import VersionPanel from './components/VersionPanel.vue'

export default {
  name: 'App',
  components: {
    VersionPanel
  },
  methods: {
    
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
}

.item {

    background: red;
    size: 10rem;
}
</style>
