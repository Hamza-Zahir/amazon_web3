<template>
  <div class="bg-muted Head">
    <!-- .......................-->
    <b-carousel fade class="slider Carousel" indicators="">

      <b-carousel-slide
        v-for="(item, i) in items"
        :key="item.position"
        :class="i === 0 ? 'active' : ''"
        class="carousel-item"
        img-src=""
      >
        <nuxt-link :to="`/Prodact/${Product}/${item.position}`" class="item">
          <span class="img">
            <img :src="item.img" alt="" />
          </span>
          <span class="text">{{ item.description }}</span>
          <div class="text-center p-0 m-0">
            <div class="starts">
              <b-icon icon="star-fill" class="text-warning"></b-icon>
              <b-icon icon="star-fill" class="text-warning"></b-icon>
              <b-icon icon="star-fill" class="text-warning"></b-icon>
              <b-icon icon="star-half" class="text-warning"></b-icon>
              <b-icon icon="star" class="text-warning"></b-icon>
            </div>
            <span class="price"> <sup>$</sup> {{ item.current_price }} </span>
          </div>
        </nuxt-link>
      </b-carousel-slide>
    </b-carousel>

    <!-- ..................... -->
    <!-- <div class="carousel Carousel" data-bs-ride="carousel">
      <div
        v-for="(item, i) in items"
        :key="item.position"
        :class="i === 0 ? 'active' : ''"
        class="carousel-item"
      >
        <nuxt-link :to="`/Prodact/${Product}/${item.position}`" class="item">
          <span class="img">
            <img :src="item.img" alt="" />
          </span>
          <span class="text">{{ item.description }}</span>
          <div class="text-center p-0 m-0">
            <div class="starts">
              <b-icon icon="star-fill" class="text-warning"></b-icon>
              <b-icon icon="star-fill" class="text-warning"></b-icon>
              <b-icon icon="star-fill" class="text-warning"></b-icon>
              <b-icon icon="star-half" class="text-warning"></b-icon>
              <b-icon icon="star" class="text-warning"></b-icon>
            </div>
            <span class="price"> <sup>$</sup> {{ item.current_price }} </span>
          </div>
        </nuxt-link>
      </div>
    </div> -->
  </div>
</template>
<script>
// const carousel = require("https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js") ;

export default {
  // components: { },
  data() {
    return {};
  },
  props: {
    items: {
      required: true,
      type: Array,
    },
    Product: {
      required: true,
      type: String,
    },
  },
};
</script>
<style lang="scss" scoped>


.Head {
  padding-bottom: 2px;
  padding-top: 2px;
  .Carousel {
    margin: 0 auto;
    max-width: 500px;
.carousel-item {
    height: 50px;
  }
    .item {
      font-size: 0.8rem;
      text-decoration: none;
      display: flex;
      justify-content: center;
      align-items: center;
      max-width: 500px;
      height: 50px;
      margin: 0 auto;
      transform: translateY(40px);
      .img {
        display: inline-block;
        width: 100px;
        height: 100%;
        background-color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        margin: 0 25px;
        &::before,
        &::after {
          content: "";
          background-color: inherit;
          position: absolute;
          width: 25px;
          height: 100%;
          top: 0;
          bottom: 0;
          z-index: -1;
        }
        &::before {
          left: -24.5px;
          clip-path: polygon(100% 0, 100% 100%, 0 100%);
        }
        &::after {
          right: -24.5px;
          clip-path: polygon(0 0, 100% 0, 0 100%);
        }
        img {
          max-width: 100%;
          max-height: 100%;
        }
      }
      .text {
        margin: 10px;
        display: inline-block;
        white-space: nowrap;
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;

        color: black;
      }
      .starts {
        display: flex;
        color: rgb(255, 166, 0);
        * {
          font-size: 12px;
        }
      }
      .price {
        font-size: 13px;
        color: rgb(255, 22, 22);
      }
    }
  }
  .carousel-control-next-icon,
  .carousel-control-prev-icon {
    display: none;
  }
}
</style>
