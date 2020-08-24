<template>
  <div>
    <div class="archive-timestamp"> {{timestamp[cindex]}} </div>
    <List item-layout="vertical">
        <ListItem v-for="item in data[cindex]" :key="item.title">
            <ListItemMeta class="list-meta" :title="item.title" :description="item.description"/>
            <p v-for="(item,index) in item.content" :key="index" v-html="item"> 
                 
            </p>
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
</template>

<script>
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
                        tag: ["Vue","prop"]
                    },
                    {
                        title: 'v-html指令',
                        description: 'v-html指令可以解析html元素并渲染',
                        content: [
                            "用列表渲染 &lt;p> 元素的时候，希望其中一些元素能够换行，并且添加不同的样式。",
                            "方法一，item.text渲染文字，v-bind绑定item.sytle，非常麻烦。例如要实现一个三行文字的<p>元素，并且给它一个圆角灰色背景，"+
                                "需要分别指定每一行的样式，并且border-radius / padding / text-indent 需要单独设置。",
                            "方法二，使用v-html实现：(&emsp 表示空格)",
                            "<p class='p-code'> &lt;p class='p-code'> line 1 &lt;br> line 2 &lt;br> line 3 &lt;/p> </p>",
                        ],
                        src: "",
                        time: "Sat Aug 22 2020 23:18:45",
                        tag: ["Vue","v-html"]
                    },
                    {
                        title: 'This is title 3',
                        description: 'This is description, this is description, this is description.',
                        content: ['This is the content, this is the content, this is the content, this is the content.'],
                        src: ""
                    }
                ]]
        }
    }
}
</script>

<style scoped>
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
.ivu-list-item{
  margin: 20px 0 10px; padding: 10px;
  text-align:left;
    
}
  .ivu-list-vertical>>> .ivu-list-item-meta-title{
    font-weight: bold; color:lightslategray
  }
  .ivu-list-vertical>>> .ivu-list-item-meta-description{
    font-size: 12px;
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