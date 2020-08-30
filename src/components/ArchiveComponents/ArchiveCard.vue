<template>
  <div >
    <div class="archive-timestamp"> {{timestamp[cindex]}} </div>
    <transition name="search-popup">
        <div class="archive-search-info" v-if="isSearched"> 
          搜索到 {{searchCount}} 个与 "{{this.$store.state.inputVal}}" 相关的结果：
          <button class="show-detail-button" @click="showDetail"> 
            详情 
          </button>
        </div>
    </transition>
    <SearchDetail class="search-detail-popup" v-if="detailFlag" :resultMap="resultMap" :data="data"/>
    <div @mousedown="edit">
      <List item-layout="vertical" >
        <ListItem v-for="(item,index) in data[cindex]" :key="index">
            <button @click="toggleEdit(index)"> 
                <span v-if="!item.editFlag"><Icon type="ios-create-outline" size="20"/> 编辑 </span>
                <span v-if="item.editFlag"><Icon type="ios-checkmark-circle-outline" size="20"/> 保存 </span>
            </button>
            <ListItemMeta class="list-meta" :title="item.title" :description="item.description"/>
            <p v-for="(item,index) in item.content" :key="index" v-html="item"></p>
            <template slot="action">
                <li>
                    <Icon type="ios-time" size="15" /> {{item.time}}
                </li>
                <li>
                    <Icon type="md-pricetag" size="15" /> 
                    <span v-for="(item,index) in item.tag" :key="index"> {{item}} </span>
                </li>
            </template>
            <template slot="extra">
                <img :src="item.src" style="width: 180px;">
            </template>
        </ListItem>
      </List>
    </div> 
  </div>
</template>

<script>
import SearchDetail from "./SearchDetail"
export default {
    name: 'ArchiveCard',
    props: ['cindex'],
    data(){
        return{
            timestamp:["AUG","SEP","OCT","NOV","DEC"],
            data: [[
                    {
                        title: 'Vue中的父子传值',
                        description: 'vue 8/21踩坑记录',
                        content: [
                            "在子组件标签上使用自定义属性", 
                            "<p class='p-code'> <span class='blue'> v-bind </span>: <span class='blue'> propName </span> = ' <span class='blue'> parentData </span>'</p>",
                            "在子组件内部通过prop来接收自定义属性",
                            "<p class='p-code'> <span class='blue'> props: </span>[<span class='orange'> 'propName' </span>]</p>",
                            "如果要在传值的同时检查值的类型，（比如数值类型）可以用：",
                            "<p class='p-code'> <span class='blue'> props: </span>{ <br/> &emsp;&emsp;&emsp;&emsp;<span class='blue'>propname: </span>{ <span class='blue'>type</span> : <span class='green'>Number</span> } <br/> &emsp;&emsp;} </p>",
                        ],
                        src: "",
                        time: "Sat Aug 22 2020 20:54:16",
                        tag: ["Vue","prop"],
                        editFlag: false,
                    },
                    {
                        title: 'v-html指令',
                        description: 'v-html指令可以解析html元素并渲染',
                        content: [
                            "用列表渲染 &lt;p> 元素的时候，希望其中一些元素能够换行，并且添加不同的样式。",
                            "方法一，item.text渲染文字，v-bind绑定item.sytle，非常麻烦。例如要实现一个三行文字的&lt;p>元素，并且给它一个圆角灰色背景，"+
                                "需要分别指定每一行的样式，并且border-radius / padding / text-indent 需要单独设置。",
                            "方法二，使用v-html实现：(&emsp 表示空格)",
                            "<p class='p-code'> &lt;p class='p-code'> line 1 &lt;br> line 2 &lt;br> line 3 &lt;/p> </p>",
                        ],
                        src: "",
                        time: "Sat Aug 22 2020 23:18:45",
                        tag: ["Vue","v-html"],
                        editFlag: false,
                    },
                    {
                        title: 'Webpack中配置Babel',
                        description: '',
                        content: [
                          "安装",
                          "<p class='p-code'> npm install --save-dev babel-loader babel-core babel-preset-env </p>",
                          "在webpack.config.js中配置module",
                          "<p class='p-code'> module: {<br>&emsp;&emsp;&emsp;&emsp;rules: [<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{ test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ }<br>&emsp;&emsp;&emsp;&emsp;]<br>&emsp;&emsp;}</p>",
                          "在根目录新建.babelrc文件，对预设（presets）和插件（plugins）进行配置。（vue-cli会自动创建）",
                          "<p class='p-code'> {<br>&emsp;&emsp;&emsp;&emsp;\"presets\": [],<br>&emsp;&emsp;&emsp;&emsp;\"plugins\": []<br>&emsp;&emsp;}</p>",
                        ],
                        src: "",
                        time: "Fri Aug 28 2020 22:41:55",
                        tag:["webpack","babel"],
                        editFlag: false,
                    }],
                    [
                      {
                        title: 'Vue中的父子传值',
                        description: 'vue 8/21踩坑记录',
                        content: [
                            "在子组件标签上使用自定义属性", 
                            "<p class='p-code'> <span class='blue'> v-bind </span>: <span class='blue'> propName </span> = ' <span class='blue'> parentData </span>'</p>",
                            "在子组件内部通过prop来接收自定义属性",
                            "<p class='p-code'> <span class='blue'> props: </span>[<span class='orange'> 'propName' </span>]</p>",
                            "如果要在传值的同时检查值的类型，（比如数值类型）可以用：",
                            "<p class='p-code'> <span class='blue'> props: </span>{ <br/> &emsp;&emsp;&emsp;&emsp;<span class='blue'>propname: </span>{ <span class='blue'>type</span> : <span class='green'>Number</span> } <br/> &emsp;&emsp;} </p>",
                        ],
                        src: "",
                        time: "Sat Aug 22 2020 20:54:16",
                        tag: ["Vue","prop"],
                        editFlag: false,
                    },
                    ]
            ],
            editIndex: 0, preTarget: [],
            /*resultMap 搜索表 
                {
                  i: 月份index,
                  m: 文章index,
                  n: 文章中<p>的index
                  type:"t"/"d"/"p", //title / description / <p>
                  index:pResult.index
                }
            */
            isSearched: false, searchCount:0, resultMap:[], 
            //是否显示详情popup
            detailFlag: false,
        }
    },
    mounted(){
      let pCode = document.getElementsByClassName('p-code');
    },
    methods:{
        toggleEdit(index){
            this.editIndex = index;
            let that = this.data[this.cindex][index];
            that.editFlag = !that.editFlag;
            if(!that.editFlag){
                this.preTarget[0].contentEditable =false;
                this.preTarget.shift();
            }
            event.stopPropagation();
        },
        edit(){
            if(this.data[this.cindex][this.editIndex].editFlag){
              if (event.target.parentNode.tagName.toLowerCase() != "button" && event.target.tagName.toLowerCase() != "button"){
                //获得鼠标当前点击在哪个元素（即要修改哪些文字）上                
                let otarget = event.target;
                if(otarget.tagName.toLowerCase()=="span"){
                    otarget.parentNode.contentEditable =true;
                    this.preTarget.push(otarget.parentNode);
                }else{
                    otarget.contentEditable =true;
                    this.preTarget.push(otarget);
                }
                if(this.preTarget.length==2){
                    this.preTarget[0].contentEditable = false;
                    this.preTarget.shift();
                } 
              }
            }
            event.stopPropagation();
        },
        showDetail(){
          this.detailFlag = !this.detailFlag;
        }
    },
    computed:{
      search(){
        return this.$store.state.inputVal;
      },
    },
    watch:{
      search(){
        this.resultMap = [];
        this.isSearched = true;
        let regExp = new RegExp(this.$store.state.inputVal,"i"),
            thatData = this.data,
            dataCount = this.data.length,
            result = [];
        for(let i = 0; i<dataCount; i++){
          for(let m = 0; m<thatData[i].length; m++){
            var thatDataCard = thatData[i][m],
                title = thatDataCard.title, titleResult = [],
                descrip = thatDataCard.description, descripResult = [],
                pContent = thatDataCard.content, pResult=[];

            titleResult = title.match(regExp);
            descripResult = descrip.match(regExp);
            if(titleResult!=null){
              this.resultMap.push({i:i,m:m,n:-1,type:"t",index:titleResult.index});
            }
            if(descripResult!=null){
              this.resultMap.push({i:i,m:m,n:-1,type:"d",index:descripResult.index});
            }
            // result.push(title.match(regExp),descrip.match(regExp));
            pContent.forEach((item,index)=>{
                pResult = item.match(regExp);
                // result.push(pResult);
                if(pResult!=null){
                  this.resultMap.push({i:i,m:m,n:index,type:"p",index:pResult.index});
                }              
            });
          }
        } 
        this.searchCount = this.resultMap.length;
      }
    },
    components:{
      SearchDetail,
    }
}
</script>

<style scoped>
[contenteditable]:focus{outline: none;}
.archive-timestamp{
  width: 80px; height: 30px; 
  position: absolute; top: 20px; left: -100px;
  background-color: oldlace; 
  border-radius: 6px; border: 1px solid lightslategray;
  box-shadow: 0 0 2px lightslategray;
}
.archive-timestamp::before{
  display: inline-block; 
  content: "";
  height: 100%;
  vertical-align: middle;
}
.archive-search-info{
  padding: 0 15px 0; border-radius: 0 0 9px 9px;
  min-width: 300px; height: 50px;
  position: absolute; top: -20px; right: 15%; z-index: 1;
  text-align: left;
  background-color: white;
  box-shadow: 0 0 2px lightslategray;
}
.archive-search-info::before{
  display: inline-block; 
  content: "";
  height: 100%;
  vertical-align: middle;
}
  .show-detail-button{
    position: relative; top: 10px;
  }
  .search-popup-enter-active, .search-popup-leave-active {
    transition: opacity 0.6s;
  }
  .search-popup-enter, .search-popup-leave-to{
    opacity: 0;
  }
.search-detail-popup{
  padding: 15px 30px 15px; border-radius: 6px;
  position: absolute; top: 20px; z-index: 2;
  background-color: white;
  box-shadow: 0 0 6px lightslategray;
}

.ivu-list-item{
  margin: 20px 0 10px; padding: 10px;
  text-align:left;   
}
  button{
    outline: none;
    width: 70px; height: 25px;
    float: right;
    background-color: oldlace;
    border-radius: 6px; border: 1px solid lightslategray; 
  }
  .ivu-list-vertical>>> .ivu-list-item-meta-title{
    font-weight: bold; color:lightslategray
  }
  .ivu-list-vertical>>> .ivu-list-item-meta-title[contenteditable]:focus{outline: none;}
  .ivu-list-vertical>>> .ivu-list-item-meta-description{
    font-size: 12px;
  }
  .ivu-list-vertical>>> .ivu-list-item-meta-description[contenteditable]:focus{outline: none;}
  .ivu-list-item-main{
      padding: 10px;
  }
    p{
      padding:10px 0 10px;
      max-width: 900px;
      text-align: left; text-indent: 2em;
    }
    p>>> .p-code{
        margin-left:50px; padding: 10px;
        color:white;
        background-color: grey;
        border-radius: 6px;
    }
      p>>> .blue{
          color:#AFEEEE;
      }
      p>>> .orange{
          color:#FFA54F;
      }
      p>>> .green{
          color:#90EE90;
      }
    .ivu-list-item-action>li{
        font-size: 12px;
    }
    .ivu-list-item-action>li>span{
        margin: 0 3px 0; padding: 0 3px 2px;
        border-radius: 6px; border: 1px solid lightslategray;
    }
</style>