<template>
    <div>
      <div class="carousel-layout">
        <Carousel class="home-carousel"/>
      </div>
    </div>
</template>

<script>
import Carousel from "../components/mainComponents/Carousel";
export default {
  name: 'Home',
  components:{
    Carousel 
  }
}
</script>

<style>
.carousel-layout{
  width: 530px; height: 300px;
  position: absolute; right: 50px; top: 60px;
  background: white;
  box-shadow: 0 0 2px; border-radius: 0 0 12px 12px;
}
.home-carousel{
  width: 500px; height: 200px;
  position: absolute; left: 15px; top: 15px;
  box-shadow: 0 0 2px;
}
@media screen and (max-width:768px) {
    .carousel-layout {
      display: none;
    }
}
</style>