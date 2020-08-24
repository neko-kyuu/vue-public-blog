<template>
    <div id="archive-content">
      <div class="archive-header">-ARCHIVE-</div>
      <div class="archive-list">
        <ul>
          <li v-for="(item, index) in ArchiveList" :key="index">
            {{item.name}}
          </li>
        </ul>
      </div>
    </div>
</template>
<script>
export default {
  name: 'ArchiveList',
  data(){
    return{
      ArchiveList:[{name:"-20/08"},{name:"-20/09"},{name:"-20/10"},{name:"-20/11"},{name:"-20/12"}]
    };
  },
}
</script>
<style>
.archive-header{
  padding-left: 14%;
  width: 70%;
  background-color: lightblue;
  position: relative; left: 14%;
  border: 2px solid lightslategray;
}
.archive-list{
  padding-left: 23%;
  width: 80%;
  position: relative; top:25px;
}
.archive-list>ul>li{
  margin-bottom: 12px;
  background-color:rgba(255, 227, 227, 0.8);
  border-bottom: 1px solid lightslategray;
}
</style>