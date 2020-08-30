<!--菜单栏 tab选项-->
<template>
    <div id="menu-tab">
      <a :id="item.id" v-for="(item, index) in MenuList" :key="index" 
          v-bind:style="item.background" @click="triggerPage(item,index)">
        <Icon :type="item.imageURL" size="20" /> {{item.name}}
      </a>
      <Input v-model="inputVal" class="search-bar" size="small" search placeholder="Search here..." @on-search="search"/>
    </div>
</template>
<script>
export default {
  name: 'MenuTab',
  data(){
      return{
          inputVal:"",
          MenuList:[{name:"首页",imageURL:"ios-home",path:"/",id:"tab-1",background:""},
                    {name:"日志&随心记",imageURL:"ios-quote-outline",path:"/blog",id:"tab-2",background:""},
                    {name:"归档",imageURL:"ios-bookmarks-outline",path:"/archive",id:"tab-3",background:""},
                    {name:"画廊",imageURL:"ios-images-outline",path:"/gallery",id:"tab-4",background:""},
                    {name:"关于本站",imageURL:"ios-information-circle-outline",path:"/about",id:"tab-5",background:""},
                    {name:"登录/注册",imageURL:"ios-contact-outline",path:"/login",id:"tab-6",background:""}]
      };
  },
  methods:{
    triggerPage(item,index){
      this.$router.push(item.path);
      for(var i =0; i<this.MenuList.length; i++){
        if(i!=index){
          this.MenuList[i].background = "";
        }else{
          this.MenuList[i].background = "background: linear-gradient(90deg,#d6f3ffc7,#ffe1f7c7)";
        }
      }
    },
    search(){
      this.$store.commit('edit',this.inputVal);
    }
  },
  mounted(){
    let currentPath = window.location.href;
    currentPath = currentPath.substring(22,currentPath.length);
    switch(currentPath){
      case "home": this.MenuList[0].background = "background: linear-gradient(90deg,#d6f3ffc7,#ffe1f7c7)"; break;
      case "blog": this.MenuList[1].background = "background: linear-gradient(90deg,#d6f3ffc7,#ffe1f7c7)"; break;
      case "archive": this.MenuList[2].background = "background: linear-gradient(90deg,#d6f3ffc7,#ffe1f7c7)"; break;
      case "gallery": this.MenuList[3].background = "background: linear-gradient(90deg,#d6f3ffc7,#ffe1f7c7)"; break;
      case "about": this.MenuList[4].background = "background: linear-gradient(90deg,#d6f3ffc7,#ffe1f7c7)"; break;
    }
    
  }
}
</script>
<style scoped>
a{
    padding:0 20px 0;
    text-decoration:none;
    color: lightslategray;
    border-right:1px solid lightslategray;
}
a:hover{
  color:lightsteelblue;
}
#tab-1{
  margin-left: 30px;
}
#tab-5,#tab-6{
    border:none;
}
#tab-6{
  position: absolute; right: 50px; top:10px;
}
.search-bar{
  width: 20% !important; 
  position: relative; bottom:2px; left:400px;
}
</style>