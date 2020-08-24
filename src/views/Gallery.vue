<template>
  <div>
    <div class="gallery-container">
      <div class="gallery-box" v-for="(item,index) in picBox" :key="index">
        <img v-lazy="item.src">
        <h2> {{item.title}} </h2>
        <p> {{item.content}} </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Gallery',
  data(){
    return{
      picBox: [
               {src:"https://c-ssl.duitang.com/uploads/item/201701/23/20170123150101_JPkjB.jpeg",
                title: "title 1",
                content: "random content xxxxxxxxxxxxxxxxxxx"
               },
               {src:"https://c-ssl.duitang.com/uploads/item/201611/11/20161111141030_hTJxL.thumb.1000_0.png",
                title: "title 2",
                content: "random content xxxxxxxxxxxxxxxxxxx"
               },
               {src:"https://c-ssl.duitang.com/uploads/item/201810/17/2018101700213_5CKrA.thumb.1000_0.jpeg",
                title: "title 3",
                content: "random content xxxxxxxxxxxxxxxxxxx"
               },
               {src:"https://c-ssl.duitang.com/uploads/item/201701/17/20170117135828_hsUPC.thumb.1000_0.jpeg",
                title: "title 4",
                content: "random content xxxxxxxxxxxxxxxxxxx"
               },
               {src:"https://c-ssl.duitang.com/uploads/item/201705/13/20170513131323_dxyM2.thumb.1000_0.png",
                title: "title 5",
                content: "random content xxxxxxxxxxxxxxxxxxx"
               },
               {src:"https://c-ssl.duitang.com/uploads/item/201705/13/20170513135038_KHmPU.thumb.1000_0.jpeg",
                title: "title 6",
                content: "random content xxxxxxxxxxxxxxxxxxx"
               },
               {src:"https://c-ssl.duitang.com/uploads/item/201708/16/20170816125631_shdnY.thumb.1000_0.jpeg",
                title: "title 7",
                content: "random content xxxxxxxxxxxxxxxxxxx"
               },
               {src:"https://c-ssl.duitang.com/uploads/item/201701/17/20170117135800_RnQHZ.thumb.1000_0.jpeg",
                title: "title 8",
                content: "random content xxxxxxxxxxxxxxxxxxx"
               },
               {src:"https://c-ssl.duitang.com/uploads/item/201701/17/20170117140024_EzQTk.thumb.1000_0.jpeg",
                title: "title 9",
                content: "random content xxxxxxxxxxxxxxxxxxx" 
               },
               {src:"https://c-ssl.duitang.com/uploads/item/201810/04/2018100401133_GlRNW.thumb.1000_0.png",
                title: "title 10",
                content: "random content xxxxxxxxxxxxxxxxxxx"
               }
      ]
    }
  }
}
</script>

<style>
.gallery-container{
  padding: 15px; 
  width: 100%;
  columns: 5;
}
.gallery-box{
  margin:0 0 10px 0;
  width: 100%;
  background: white;;
  overflow: hidden;
  border: 1px solid #ccc;
  break-inside:avoid;
}
.gallery-box>img{
  max-width: 100%;
}
.gallery-box>img:hover{
  filter:brightness(80%);
}
.gallery-box>p{
  padding: 9px;
}
@media (max-width:1500px) {
  .gallery-container{
    columns: 4;
  }
}
@media (max-width:1200px) {
  .gallery-container{
    columns: 3;
  }
}
@media (max-width:900px) {
  .gallery-container{
    columns: 2;
  }
}
</style>