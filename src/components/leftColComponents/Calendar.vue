<template>
    <div id="calendar">
      <table class="calender-table" id="calender-table">
        <caption>2020-09</caption>
        <!--星期x列标签-->
        <colgroup>
          <col v-for="(item, index) in Colgroup" :key="index" :class="item.class">                           
        </colgroup>

        <!--星期x行标签-->
        <thead>
          <tr>
            <th v-for="(item, index) in theadList" :key="index" scope="col">{{item.name}}</th>
          </tr>
        </thead>

        <!--6行tr 每行一周-->
        <!--calender-inactive不属于本月的日期-->
        <!--calender-today当天的日期-->
        <tbody>
          <tr v-for="(item, index) in tdList" :key="index">
            <td v-for="(item, index) in item" :key="index" :class="item.class" @mousedown="popupOpen(item)">
              {{item.value}}
            </td>
          </tr>
        </tbody>
      </table>
      <transition name="cal-popup">
        <div class="calendar-popup" v-if="clickedFlag"
             @mousedown="dragDown($event)">
          <p> Sep {{clickedDate.value}} </p>
          <button @click="popupClose()"> close </button>
          <Card class="popup-card" dis-hover> 
            <Todo :clickedDate="clickedDate"/>
          </Card>
        </div>
      </transition>
    </div>
</template>
<script>
import Todo from "./Todo"
export default {
  name: 'Calendar',
  data(){
    return{
      Colgroup:[{name:"sun",class:"weekend"},{name:"mon",class:"weekday"},{name:"tue",class:"weekday"},
                {name:"wed",class:"weekday"},{name:"thu",class:"weekday"},{name:"fri",class:"weekday"},
                {name:"sat",class:"weekend"}],
      theadList:[{name:"日"},{name:"一"},{name:"二"},{name:"三"},{name:"四"},{name:"五"},{name:"六"}],
      tdList:[[{class:"calender-inactive",value:"30"},{class:"calender-inactive",value:"31"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"}],
              [{value:"6"},{value:"7"},{value:"8"},{value:"9"},{value:"10"},{value:"11"},{value:"12"}],
              [{value:"13"},{value:"14"},{value:"15"},{value:"16"},{value:"17"},{value:"18"},{value:"19"}],
              [{value:"20"},{value:"21"},{value:"22"},{value:"23"},{value:"24"},{value:"25"},{value:"26"}],
              [{value:"27"},{value:"28"},{value:"29"},{value:"30"},{class:"calender-inactive",value:"1"},{class:"calender-inactive",value:"2"},{class:"calender-inactive",value:"3"}],
              [{class:"calender-inactive",value:"4"},{class:"calender-inactive",value:"5"},{class:"calender-inactive",value:"6"},{class:"calender-inactive",value:"7"},{class:"calender-inactive",value:"8"},{class:"calender-inactive",value:"9"},{class:"calender-inactive",value:"10"}]],
      clickedDate:[],
      clickedFlag: false,
    };
  },
  mounted(){
    var date = new Date();
    var today = date.getDate(); var weekday = date.getDay();
    var table = document.getElementById('calender-table');
    var tableLength = table.rows.length;

    for(var i=1;i<tableLength;i++){
        if(table.rows[i].cells[weekday].innerText==today.toString()){       
            table.rows[i].cells[weekday].classList.add('calender-today');
            break;
        }
    }
  },
  methods:{
    popupOpen(item){
      this.clickedDate = item;
      if(item.class==null){
        this.clickedFlag = true;
      }else{
        this.clickedFlag = false;
      }
      
    },
    popupClose(){
      this.clickedFlag = false;
    },
    dragDown(event){
      var odiv = event.target;
      //相对父元素的left, top
      var Divleft = event.clientX - odiv.offsetLeft;
      var Divtop = event.clientY - odiv.offsetTop;
      var maxleft = window.innerWidth - odiv.offsetWidth;
      var maxtop = window.innerHeight - odiv.offsetHeight;
      document.onmousemove = function(e){
        var left = e.clientX - Divleft;
        var top = e.clientY - Divtop;
        odiv.style.left = (left<maxleft)? left +'px' : maxleft +'px';
        odiv.style.top = (top<maxtop)? top +'px' : maxtop +'px';
      };
      document.onmouseup = function(e){
        document.onmousemove = document.onmouseup = null;
      };
      event.stopPropagation();
    },
  },
  components:{
    Todo,
  }
}
</script>
<style>
.calender-table{
    width: 94%; height: 85%;
    border-collapse: collapse;
    font-size: 12px; color: lightslategray; text-align: center;
    position: absolute; bottom: 3px; left: 3%;
}
  caption{
    height: 20px;
    background-color: rgb(162, 209, 207);
    font-weight: bold;
    border: 1px solid lightslategray;
  }
  .weekend{
    background-color: rgba(255, 182, 193, 0.36);
  }
  .calender-inactive{
    background-color:white;
    color: white;
  }
  .calender-today{ 
      background-color: rgb(255, 208, 55);
  }
    td{
        font-size: 10px;
        border: 1px solid rgba(167, 171, 175, 0.6);
        cursor: pointer;
    }
.calendar-popup{
  padding: 20px;
  width:500px; height: 320px;
  position: absolute; bottom: -75px;
  text-align: left; 
  background-color: white;
  box-shadow: 0 0 3px lightslategray;
}
  .calendar-popup>p{
    text-indent: 6em; font-weight: bold; color: white;
    text-shadow: lightslategrey 1px 0 0, lightslategrey 0 1px 0, lightslategrey -1px 0 0, lightslategrey 0 -1px 0;
  }
  .calendar-popup>button{
    border: none; border-radius: 3px;
    width: 60px;
    position: absolute; top: 15px; right: 15px;
    background-color: rgb(128, 172, 128);
    color: white;
    cursor: pointer;
  }
  .popup-card{
    width: 90%;
    position: absolute; top: 50px;bottom: 20px; left: 5%;
  }
.cal-popup-enter-active, .cal-popup-leave-active {
  transition: opacity 0.6s;
}
.cal-popup-enter, .cal-popup-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>