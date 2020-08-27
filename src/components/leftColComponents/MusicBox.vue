<template>
    <div id="music">
      <div class="music-header">
        <div id="music-logo"></div>
        <audio :src="MusicList[musicIndex].src" @play="play" @pause="pause" autoplay loop controls></audio>
      </div>
      <div class="music-list">
        <ul>
          <li v-for="(item, index) in MusicList" :key="index" @mousedown="musicShift(index)" :title="item.name">
            {{item.name}}
          </li>
        </ul>
      </div>
    </div>
</template>
<script>
export default {
  name: 'MusicBox',
  data(){
    return{
      musicIndex: 0,
      MusicList:[{name:"for river", src: "../../static/audio/for river.mp3"},
                 {name:"きみが呼ぶなまえ~夢のつづき", src:"../../static/audio/natsume.mp3"},
                 {name:"music3", src:""}
      ],
    };
  },
  methods:{
    play(){},
    pause(){},
    musicShift(index){
      this.musicIndex = index;
    }
  }
}
</script>
<style>
.music-header{
    width: 80%; height: 24%;
    position: relative; top: 3%; left: 10%;    
}
#music-logo{
    width: 40px; height: 40px;
    float:left;
    background: url(../../assets/img/music.png); background-repeat: no-repeat; background-position: center;
}
@media (max-width:992px) {
    audio{
      display: none;
    }
}
.music-header audio{
    width: 70%; height: 24px;
    position: absolute; top:8px; right:0; 
    outline: none;
}
.music-header audio:hover{
    width: 280px; height: 40px;
    position: absolute; top:8px; left:0; 
    outline: none;
}
.music-list{
  width: 90%;
  position: absolute; top: 55px; left: 5%;
  background-color: white;
  border-radius: 0 0 6px 6px;
}
.music-list>ul>li{
  margin:10px 0 10px; padding: 0 5px 0;
  width: 80%; height: 18px;
  position: relative; left: 10%;
  font-size: 12px;
  background-color: rgba(135, 207, 235, 0.336);
  overflow: hidden;
  cursor: pointer;
}
</style>