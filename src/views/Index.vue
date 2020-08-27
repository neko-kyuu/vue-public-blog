<template>
  <div>
    <div class="layout" id="layout" @mousedown.left="createHeart($event)" @mouseup="removeHeart()" 
         v-if="!$route.path.includes('login')">
      <LeftColumn class="left-column"/>
      <div class="main-column" id="main-column">
        <Header  class="header"/>
        <div class="main-content" id="main-content">
          <router-view :class="{router_content: $route.name !== 'home'}"/>
          <div class="right-column" id="right-column"></div>
        </div>
        <button class="up-to-top" @click="upToTop"> <Icon type="ios-arrow-up" /> </button> 
      </div>
      <footer>
        <div class="footer">
          <span> copyright 2020 by neko-kyuu</span>
        </div>
      </footer>
      <div v-if="clicked">
        <div v-for="(item,index) in love" v-bind:key="index" 
            v-bind:ref="count"
            v-bind:style="item"
            class="love">❤
        </div>
      </div>
    </div>
    <router-view v-if="$route.path.includes('login')"/>
</div>
</template>

<script>
import Header from "../components/Header";
import LeftColumn from "../components/LeftColumn";
export default {
  name: 'Home',
  data() {
    return{
      love: [],
      count: 0,
      clicked: true,
      timer: null,
    };
  },
  components:{
    Header, LeftColumn
  },
  methods:{
    upToTop(event){
      event.stopPropagation();
      let sTop = document.documentElement.scrollTop || document.body.scrollTop;
      //5秒回到最顶
      let speed = Math.floor(-sTop / 5);
      let toTop = function(){
        document.documentElement.scrollTop = document.body.scrollTop = sTop + speed;
        sTop = document.documentElement.scrollTop;
        if(sTop>0){
          setTimeout(toTop,30);
        }
      }
      toTop();
    },
    createHeart(event){
      let pNodeName = event.target.parentNode.tagName.toLowerCase(); 
      let nodeName = event.target.tagName.toLowerCase();
      if (pNodeName != "button" && nodeName != "button"){
        //这个if的目的是防止upToTop不被执行
        this.clicked = true;
        var doc = document;
        var x = event.clientX; var y = event.clientY;

        var setting = {
          count: ++this.count,
          position: "fixed",
          left: x +'px',
          top: y +'px',
          color: "rgb(" + parseInt(Math.random() *125 +130) + "," + parseInt(Math.random() *125 +130) + "," + parseInt(Math.random() *125 +130) + ")",
          fontSize: Math.random() *8 +12 +'px',
          opacity: 1,
          transform: "",
          transition: "3.6s",
        };
        this.love.push(setting);
      }
    },
    removeHeart(){
      let pNodeName = event.target.parentNode.tagName.toLowerCase(); 
      let nodeName = event.target.tagName.toLowerCase();
      if (pNodeName != "button" && nodeName != "button"){
        clearTimeout(this.timer);
        
        if(this.love.length>0){
          this.love[this.count-1].transform = "translate(" + (Math.random() *20 -10) +"px," + (Math.random() *(-20) -10) +"px)";
          this.love[this.count-1].opacity = 0;
        }    

        this.timer = setTimeout(()=>{   //设置延迟执行
        this.clicked = false;
        },3600);
      }
    },
  }
}
</script>

<style>
html,body{
  margin:0;
  width:100%; height:100%;
  cursor: url(../assets/img/ccursor.png),auto; 
}
.layout{
  width: 100%; min-height: 100%;
  position: relative;
  background:url(../assets/img/light.jpg);
}
button{
  cursor: pointer;
}
  .left-column{
    width: 14%; height: 100%;
    position: absolute; top: 0; bottom: 0; left: 0; z-index: 4;  
  }
  .header{
    width: 100%; height: 350px;
  }
  .main-column{
    width: 100%; 
  }
    .main-content{
      width: 86%; 
      position: relative; left: 14%; 
      border-left: 2px solid lightslategray;
    }
      .router_content{
      width: 90%; min-height: 587px; 
      position: relative;
      background-color: rgba(135, 207, 235, 0.185);
      }
      .right-column{
        width: 10%; height: 100%;
        position: absolute; right: 0; bottom: 0;
        background-color: rgba(255, 184, 184, 0.384);
        border-left: 2px solid lightslategray;
      }
    .up-to-top{
      border: 1px solid lightslategray; outline: none; border-radius: 6px;
      width: 5%;
      position: fixed; bottom: 20px; right: 1.5%;
      background-color: white;
    }
  footer{
    margin-bottom: 6px;
    width: 100%;
    font-size: 12px; color: lightslategray;
    position: absolute; bottom: 2px;
  }
  .footer{
    padding-top: 6px;
    width: 266px;
    position: relative; left: 43%;
    border-top: 1px solid rgba(119, 136, 153, 0.6);
  }
.love{
  margin: none; padding: none;
  width: 16px; height: 16px;
  position: absolute;
}
</style>