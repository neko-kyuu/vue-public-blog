<template>
  <div>
    <div class="logo" id="logo"></div>
    <Icon class="menu-collapse" type="ios-apps-outline" size="30"/>
  </div>  
</template>
<script>
export default {
  name: 'Logo',
}
</script>
<style>
.logo{
  width: 30px; height: 30px;
  margin-top: 5px;
  background: url(../../assets/img/icon1.jpg);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  border-radius: 50%;  
}
.menu-collapse{
  display: none;
}
@media (max-width:992px) {
    .menu-collapse{
      display: block !important;
      position: absolute; top: 5px; left:60px;
      cursor: pointer;
    }
}
</style>