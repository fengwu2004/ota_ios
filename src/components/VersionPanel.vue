<template>
  <div class="main">
    <div class="fullbg">
      <a v-for="item in items" :key="item" v-bind:href=getCorrectLocation(item)>{{"金阳光" + item}}</a>
    </div>
    <van-cell-group>
      <van-cell title="单元格" value="内容" />
      <van-cell title="单元格" value="内容" label="描述信息" />
    </van-cell-group>
  </div>
</template>

<script>
const axios = require('axios')
export default {
  name: 'VersionPanel',
  mounted() {
    
    axios.get("https://10.84.187.66:8089/iosipa").then(response=>{

      this.items = response["data"];
    })
  },
  data() {
    return {
      items:[]
    }
  },
  methods: {
    getCorrectLocation(item) {

      return "itms-services://?action=download-manifest&url=https://10.84.187.66/ios/" + item + "/manifest.plist"
    }
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main {

  background: green;
}

.fullbg {

  background: white;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  flex: auto;
  display: flex;
  flex-direction: column;
}

</style>
