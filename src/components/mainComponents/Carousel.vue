<template>
  <Carousel id="home-carousel"
    v-model="value"
    autoplay
    :autoplay-speed="3600"
    dots="inside"
    :radius-dot="false"
    trigger="hover">
    <CarouselItem>
        <div class="carousel-slide" id="carousel-slide-1"></div>
    </CarouselItem>
    <CarouselItem>
        <div class="carousel-slide" id="carousel-slide-2"></div>
    </CarouselItem>
    <CarouselItem>
        <div class="carousel-slide" id="carousel-slide-3"></div>
    </CarouselItem>
    <CarouselItem>
        <div class="carousel-slide" id="carousel-slide-4"></div>
    </CarouselItem>
    <CarouselItem>
        <div class="carousel-slide" id="carousel-slide-5"></div>
    </CarouselItem>
  </Carousel>
</template>
<script>
export default {
  data () {
    return {
      value: 0
    }
  }
}
</script>
<style>
.carousel-slide{
  width: 100%; height: 200px;
  opacity: 0.9;
  background-size: cover; background-position: center 200px;
}
#carousel-slide-1{
  background-image: url(../../assets/img/1.jpg); 
}
#carousel-slide-2{
  background-image: url(../../assets/img/2.jpg); 
}
#carousel-slide-3{
  background-image: url(../../assets/img/3.jpg); 
}
#carousel-slide-4{
  background-image: url(../../assets/img/4.jpg); 
}
#carousel-slide-5{
  background-image: url(../../assets/img/5.jpg); 
}
.ivu-carousel-dots>li{
  left: 160px; 
}
.ivu-carousel-dots>li>button{
  background: rgb(130, 150, 175);
}
</style>