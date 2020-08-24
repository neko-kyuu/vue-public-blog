<template>
  <div id="app">
    <Index/>
    <!--<router-view/>显示的是当前路由地址对应的内容-->
  </div>
</template>

<script>
import Index from "./views/Index"
export default {
  name: 'App',
  components:{
    Index
  }
}
</script>

<style>
html,body{
  margin:0;padding:0;
  width:100%; height:100%
}
#app {
  width:100%; height:100%;
  font-family: sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: lightslategray;
}
li{
  list-style-type: none;
}
@media screen and (max-width:1200px) {
    body,html {
      font-size:15px ;
    }
}
@media screen and (max-width:992px) {
    body,html {
      font-size:14px ;
    }
}
@media screen and (max-width:768px) {
    body,html {
      font-size:13px ;
    }
}
@media screen and (max-width:576px) {
    body,html {
      font-size:12px ;
    }
}
@media screen and (max-width:400px) {
    body,html {
      font-size:11px ;
    }
}
</style>
