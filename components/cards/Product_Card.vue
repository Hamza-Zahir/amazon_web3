<template>
  <div class="Product_Cards">
    <h4 class="m-2">RESULTS</h4>
    <div v-for="item in items" :key="`item-${item.position}`" class="Product_Card">
      <nuxt-link :to="`/Prodact/${itemName}>${item.position}`" class="img_link">
        <img :src="item.img" alt="img" />
      </nuxt-link>
      <div class="text">
        <nuxt-link
          :to="`/Prodact/${itemName}>${item.position}`"
          class="link_text"
        >

          {{ item.description }}
        </nuxt-link>
        <div class="starts text-warning">
          <b-icon icon="star-fill" class="text-warning"></b-icon>
          <b-icon icon="star-fill" class="text-warning"></b-icon>
          <b-icon icon="star-fill" class="text-warning"></b-icon>
          <b-icon icon="star-half" class="text-warning"></b-icon>
          <b-icon icon="star" class="text-warning"></b-icon>
        </div>
        <div class="price">
          <span class="current_price">
            <sup>$</sup> {{ item.current_price.toString().split(".")[0] }}
            <sup>{{ item.current_price.toString().split(".")[1] }}</sup>
          </span>

          <span class="old_price px-2">
            <del>
              <sub> {{ item.old_price ? `$ ${item.old_price}` : "" }} </sub>
            </del>
          </span>
        </div>
        <h6 class="Ships_to">Ships to {{ Country }}</h6>
      </div>
    </div>
  </div>
</template>
<script>
import {  mapGetters } from "vuex";

export default {
  props: {
    items: {
      required: true,
      type: Array,
    },
    itemName: {
      required: true,
      type: String,
    },
  },
  computed: {
    ...mapGetters(["Country"]),
  },

};
</script>
<style lang="scss" scoped>
.Product_Cards {
  padding: 0 15px;

  .Product_Card {
    width: 100%;
    display: flex;
    margin: 10px 0;
    border: 1px solid #6d6a6a77;
    transition: all 0.5s ease;
    -webkit-transition: all 0.5s ease;
    -moz-transition: all 0.5s ease;
    -ms-transition: all 0.5s ease;
    -o-transition: all 0.5s ease;

    &:hover {
      -webkit-transform: translateY(-5px);
      -moz-transform: translateY(-5px);
      -ms-transform: translateY(-5px);
      -o-transform: translateY(-5px);
      transform: translateY(-5px);
      box-shadow: 0px 0px 10px 0px black;
    }

    .img_link {
      display: inline-block;
      padding: 10px;
      width: 30%;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      background-color: white;
      img {
        max-width: 100%;
        max-height: 200px;
      }
    }
    .text {
      width: 70%;
      padding: 10px;
      background-color: #dadada3b;

      .link_text {
        text-decoration: none;
        overflow: hidden;
        display: -webkit-box;
        display: -moz-box;
        -webkit-box-orient: vertical;
        -moz-box-orient: vertical;
        text-overflow: ellipsis;
        -webkit-line-clamp: 2;
        line-clamp: 2;
        color: black;
        letter-spacing: 0.2px;
        &:hover {
          color: #fd4800;
        }
      }
    }
  }

  .current_price {
    font-weight: 500;
  }
  .old_price {
    opacity: 0.9;
  }
  .starts {
    * {
      font-size: 1.2em;
    }
  }
  .price {
    margin: 10px;
  }
  .Ships_to {
    font-size: 0.8em;
    letter-spacing: 0px;
    opacity: 0.8;
  }
}
</style>
