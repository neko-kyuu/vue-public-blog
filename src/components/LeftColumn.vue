<template>
    <div id="left-column">
      <MusicBox class="music"/>
      <Calendar class="calendar"/>
      <ArchiveList class="archive-content"/>
    </div>
</template>
<script>
import MusicBox from "./leftColComponents/MusicBox";
import Calendar from "./leftColComponents/Calendar";
import ArchiveList from "./leftColComponents/ArchiveList";
export default {
  name: 'LeftColumn',
  components:{
    MusicBox, Calendar,ArchiveList
  }
}
</script>
<style>
.music{
  width: 80%; height: 160px;
  position: relative; top: 160px; left: 10%;
  background-color: lightblue;
  text-align: left;
  border-radius: 9px;
}
.calendar{
    width:80%; height: 140px;
    position: relative; top: 210px; left:10%; z-index: 1;
    border-radius: 6px;
}
@media (max-width:992px) {
    .calendar{
      display: none;
    }
}
.archive-content{
    position: relative; top: 290px;
    font-size: 12px; font-weight: bold;
}
</style>