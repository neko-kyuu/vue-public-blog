<template>
  <div>
    <Poptip trigger="hover">
        <div class="logo" id="logo"></div>
        <div slot="title">Custom title</div>
        <div slot="content">
            <a @click="logout"> <Icon type="ios-log-out" /> 登出</a>
        </div>
    </Poptip>
    
    <Icon class="menu-collapse" type="ios-apps-outline" size="30" @click="openDrawer = true"/>
    <Drawer class="menu-drawer" title="- 导航菜单" :closable="false" v-model="openDrawer">
        <a :id="item.id" v-for="(item, index) in MenuList" :key="index" 
          style="display:block" @click="triggerPage(item,index)">
          <Icon :type="item.imageURL" size="20" /> {{item.name}}
        </a>
    </Drawer>
  </div>  
</template>
<script>
export default {
  name: 'Logo',
  data(){
    return{
      openDrawer : false,
      MenuList:[{name:"首页",imageURL:"ios-home",path:"/"},
                {name:"日志",imageURL:"ios-quote-outline",path:"/blog"},
                {name:"归档",imageURL:"ios-bookmarks-outline",path:"/archive"},
                {name:"画廊",imageURL:"ios-images-outline",path:"/gallery"},
                {name:"关于本站",imageURL:"ios-information-circle-outline",path:"/about"},
                {name:"登录/注册",imageURL:"ios-contact-outline",path:"/login"}]
    }
  },
  methods:{
    logout(){
      window.sessionStorage.clear();
      this.$router.push('/login');
    },
    triggerPage(item,index){
      this.$router.push(item.path);
      this.openDrawer = false;
    },
  }
}
</script>
<style scoped>
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
  .menu-drawer a{
    margin: 15px 0 15px; padding: 6px;
    color: lightslategray;
    box-shadow: 0 0 2px lightslategray;
  }
  .menu-drawer a:hover{
    background-color: lightgray;
    color: white;
  }
</style>