<template>
    <div id="header">
      <div class="header-left"></div>
      <div class="header-layout">
        <Menu class="menu-bar"/>
        <div class="head-canvas"></div>
        <div class="head-title">- Personal blog start from 2020/7/31 -</div>
      </div>
    </div>
</template>
<script>
import Menu from "./head/Menu"
export default {
  name: 'Header',
  components:{
      Menu
  }
}
</script>
<style scoped>
.header-left{
  width: 14%; height: 350px;
  
}
.header-layout{
    width: 86%; height: 350px;
    position:absolute; top:0; right:0; z-index:3;
    border-bottom: 2px solid lightslategrey; border-left: 2px solid lightslategrey;  
    box-shadow: 2px 3px 6px lightslategray;
}
  .menu-bar{
    height: 40px;
    background-color: white;
    box-shadow: 3px 2px 6px lightslategrey;
    position: relative; z-index: 2;
  }
  .head-canvas{
    height: 280px;
    background: url(../assets/img/54514426_p0.jpg);
    background-position-x: center; background-position-y: -260px;
  }
  .head-title{
      padding: 5px 12% 6px;
      background-color:rgb(189, 189, 189);
      text-align: left; font-size: 12px; font-weight: bold; text-transform: uppercase; color: white;
      position: relative; z-index: 1;
  }
</style>