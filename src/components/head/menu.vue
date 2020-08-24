<template>
    <div id="menu-bar">
      <Row class="menu-bar-row" type="flex">
        <!-- logo -->
        <Col align="center" class="logo-content" :xl="1" :lg="4" :md="24" :sm="24" :xs="24" order="1">
          <Logo/>
        </Col>
        <!-- 顶部导航菜单 -->
        <Col align="left" v-show="active" class="menu-tab" :xl="23" :lg="20" :md="0" :sm="0" :xs="0" order="2">
          <MenuTab/>
        </Col>
      </Row>
    </div>
</template>
<script>
import Logo from "./Logo";
import MenuTab from "./MenuTab";
export default {
  name: 'Menu',
  computed: {
      active() {
        return this.$route.name !== 'home';
      }
  },
  components:{
    Logo,MenuTab
  }
}
</script>
<style scoped>
#menu-bar{
  width:100%; height:40px;
}
.menu-tab{
  padding:10px 0 10px;
  font-size:14px; font-weight:bold; text-transform: uppercase;
}
</style>