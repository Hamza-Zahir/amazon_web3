<template>
  <div>
    <b-carousel fade class="slider" indicators="" >
      <!--img-height="480" img-width="1024"
     -->
      <b-carousel-slide
      class="img"
        img-src="https://m.media-amazon.com/images/I/61jovjd+f9L._SX3000_.jpg"
      ></b-carousel-slide>
      <b-carousel-slide
      class="img"
        img-src="https://m.media-amazon.com/images/I/61DUO0NqyyL._SX3000_.jpg"
      ></b-carousel-slide>
      <b-carousel-slide
      class="img"
        img-src="https://m.media-amazon.com/images/I/61TD5JLGhIL._SX3000_.jpg"
      ></b-carousel-slide>
      <b-carousel-slide
      class="img"
        img-src="https://m.media-amazon.com/images/I/71qid7QFWJL._SX3000_.jpg"
      ></b-carousel-slide>

    </b-carousel>
  </div>
</template>
<style lang="scss" scoped>
$main-margin: -120px;
.slider {
  margin-bottom: $main-margin;
  min-height: 300px;
  position: relative;

  .img {
    width: 100%;
    height: 100%;
    mask: linear-gradient(to bottom, black, #00000067);
  }
}
</style>
