<template>
  <div>
    <Poptip trigger="hover">
        <div class="logo" id="logo"></div>
        <div slot="title">Custom title</div>
        <div slot="content">
            <a @click="logout"> <Icon type="ios-log-out" /> 登出</a>
        </div>
    </Poptip>
    
    <Icon class="menu-collapse" type="ios-apps-outline" size="30"/>
  </div>  
</template>
<script>
export default {
  name: 'Logo',
  methods:{
    logout(){
      window.sessionStorage.clear();
      this.$router.push('/login');
    }
  }
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
.logo:hover{
  cursor: pointer;
}
  .ivu-poptip-popper a{
    color: lightslategray;
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