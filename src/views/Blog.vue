<template>
    <div>
      <div class="left-sidebar" :style="leftSideHeight">
        <ul>
          <li class="left-sidebar-li" :id="item.id"
              v-for="(item,index) in sideList" :key="index"
              v-bind:style="item" v-on:mousedown="tabShift(index)">
              {{item.name}}
          </li>
        </ul>
      </div>
      <div class="blog-layout" ref="blogLayout">
        <Card class="article-card" 
              v-for="(item,index) in titleList[tabIndex]" :key="index">
          <p slot="title">
            <Icon type="md-share" size="20"></Icon>
            开发日志 <span> {{item.time}} </span>
          </p>
          <p v-for="(item,index) in contentList[tabIndex]" :key="index" v-html="item"></p>
        </Card>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Blog',
  data(){
    return{
      tabIndex: 0,
      sideList: [{name:"1", id:"left-sidebar-li-1", background:"#cbebcb", transform:"translate( 1px, 0)"},
                 {name:"2", id:"left-sidebar-li-2", background:"#cbdceb", transform:""}
      ],
      titleList: [[{time:"2020-08-17 ~ 08-23"}],
                 [{time:"2020-08-01 ~ 08-14"}]],
      contentList: [["- Vue重置版",
                     "&emsp;&emsp;此项目使用技术栈： 前端Vue \\ 路由 VueRouter \\ UI框架iview \\ 懒加载vue-lazyload",
                     "&emsp;&emsp;\\ npm install 安装依赖 \\ ",
                     "&emsp;&emsp;\\ npm run dev 开发环境 \\",
                     "&emsp;&emsp;\\ npm run build 打包 \\"," \0",
                     "- iview库安装配置：",
                     "&emsp;&emsp;安装：npm install view-design --save",
                     "&emsp;&emsp;webpack 入口文件 main.js 中做如下配置：",
                     "&emsp;&emsp;&emsp;import ViewUI from 'view-design'\;",
                     "&emsp;&emsp;&emsp;import 'view-design/dist/styles/iview.css'\;",
                     "&emsp;&emsp;&emsp;Vue.use(ViewUI)\;",
                     " \0",],
                    ["- 个人博客初版",
                     "&emsp;&emsp;页面布局参考SAO开发笔记 \\ 配色马卡龙 主粉蓝","&emsp;&emsp;jquery 实现音乐盒暂停/播放、logo悬浮层、日志选项卡，以及图片本地上传并预览"],
      ],
      leftSideHeight:{height: ""}
    };
  },
  methods:{
    tabShift(index){
      for(var i =0; i<this.sideList.length; i++){
        if(i!=index){
          this.sideList[i].transform = "";
        }else{
          this.sideList[i].transform = "translate( 1px, 0)";
          this.tabIndex = i;
        }
      };
    }
  },
  mounted(){
    this.leftSideHeight.height = this.$refs.blogLayout.offsetHeight +'px';
  }
}
</script>

<style>
.left-sidebar{
  width: 10%; 
  position: absolute; left: 0; z-index: 1;
  background-color: rgba(255, 228, 225, 0.7); 
}
  .left-sidebar>ul{
    width: 80%;
    position: absolute; right: 0; top: 70px;
  }
  .left-sidebar-li{
    margin: 20px 0 20px auto;
    width: 90%; height: 48px;
    border-top: 1px solid lightslategray; border-bottom: 1px solid lightslategray; border-left: 20px solid lightslategray;
    color: white; font-weight: bold;
    cursor: pointer;
  }
  .left-sidebar-li::before {
    display: inline-block;
    content: "";
    height: 100%;
    vertical-align: middle;
  }
.blog-layout{
  width: 90%; min-height: 587px;
  float: right;
  opacity: 0.8;
  border-left: 1px solid lightslategray;
}
  .article-card{
    margin-top: 35px; margin-bottom: 15px;
    width: 80%;
    position: relative; left: 10%;
    border: 1px solid rgba(119, 136, 153, 0.6);
  }
  .ivu-card-head{
    height: 40px;
    background-color: rgb(183, 202, 201);
    border-bottom: 1px solid rgba(119, 136, 153, 0.6);
  }
  .ivu-card-head>p{
    padding-left: 5%; 
    color: white; font-weight: bold; text-align: left;
    position: relative; bottom: 4px;
  }
  .ivu-card-head>p>span{
    font-size: 12px;
  }
  .ivu-card-body>p{
    padding: 4px 0 4px;
    text-align: left; text-indent: 2em;
  }
</style>