<template>
    <div>
      <div class="archive-box">
        <p> <Icon type="md-bookmarks" size="18"/> 归档盒 </p>
        <div class="archive-box-link" v-for="(item,index) in archiveTimeList" :key="index" 
             v-bind:style="{backgroundImage:'url(' + item.imgUrl +')', filter:item.filter}"
             @mousedown="tabShift(index)"> 
          <a>
            {{item.name}}
          </a>
        </div>
      </div>
      <div class="archive-layout">
        <archive-card class="archive-card" :cindex="archiveIndex"/>
      </div>
      <div style="clear:both"></div>
    </div>
</template>

<script>
import ArchiveCard from "../components/ArchiveComponents/ArchiveCard";
export default {
  name: 'Archive',
  data(){
    return{
      archiveIndex: 0,
      archiveTimeList: [{name:"AUGUST", imgUrl: require("../../src/assets/img/aug.jpg"), filter:""},
                        {name:"SEPTEMBER", imgUrl: require("../../src/assets/img/sep.jpg"), filter:""},
                        {name:"OCTOBER", imgUrl: require("../../src/assets/img/oct.jpg"), filter:""},
                        {name:"NOVEMBER", imgUrl: require("../../src/assets/img/nov.jpg"), filter:""},
                        {name:"DECEMBER", imgUrl: require("../../src/assets/img/dec.jpg"), filter:""}
      ],
    };
  },
  methods:{
    tabShift(index){
      this.archiveIndex = index;
      for(var i =0; i<this.archiveTimeList.length; i++){
        if(i==index){
          this.archiveTimeList[i].filter = "none";
        }else{
          this.archiveTimeList[i].filter = "";
        }
      }
    }
  },
  components:{
    ArchiveCard,
  }
}
</script>

<style>
.archive-box{
  width: 15%; height: 420px;
  position: absolute; left: 2%; top: 120px;
  background-color: oldlace;
  border-radius: 12px;
  box-shadow: 0 0 6px lightslategray;
}
  .archive-box>p{
    padding: 20px 0 0;
  }
  .archive-box-link{
    margin: 20px 0 20px;
    width: 80%; height: 50px;
    position: relative; left: 10%;
    border-radius: 12px;
    background-size:auto; background-position: center; filter: grayscale(100%);
    box-shadow: 0 0 6px lightslategray;
    cursor: pointer;
  }
  .archive-box-link:hover{
    filter:none;
  }
    .archive-box-link>a{
      position: absolute; right:12px; bottom: 6px;
      color:white; font-weight: bold; 
      text-shadow:lightslategray 1px 0 0,lightslategray 0 1px 0,lightslategray -1px 0 0,lightslategray 0 -1px 0;
    }
.archive-layout{
  width: 81%; height: 100%;
  float:right;
  background-color: rgba(255, 255, 255, 0.5);
  border-left: 1px solid lightslategrey;
}
  .archive-card{
    width: 95%;
    position: relative; left: 5%;
  }
</style>