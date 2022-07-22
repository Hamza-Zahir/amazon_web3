<template>
  <div class="Gaming_Accessories">
    <img
      class="w-100"
      src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_LPHeader_Gamers_en_US.png"
      alt=""
    />
    <h2 class="text-center my-3 fw-bold">Featured Categories</h2>
    <div class="products">
      <nuxt-link
        v-for="(Product, i) in Object.keys(Products.Gaming)"
        :key="`item-${i}`"
        :to="`/Show_prodacts/Gaming+${Product}`"
        class="text-center product"
      >
        <img :src="Products.Gaming[Product][0].img" alt="" />
        <span>{{ Product.replace(/_/g, " ") }}</span>
      </nuxt-link>
    </div>
  </div>
</template>
<script>
import Products from "~/json/Products.json";

export default {
  components: {},
  data() {
    return {
      Products,
    };
  },
};
</script>
<style lang="scss" scoped>
.Gaming_Accessories {
  background-color: white;
  padding: 5px;

  @media (min-width: 768px) {
    padding: 15px;
  }
  .products {
    width: 100%;
    display: grid;
    grid-template: auto / repeat(2, 1fr);
    gap: 10px;
    @media (min-width: 426px) {
      grid-template-columns: repeat(3, 1fr);
    }

    @media (min-width: 768px) {
      grid-template-columns: repeat(4, 1fr);
      gap: 15px;
    }

    @media (min-width: 992px) {
      grid-template-columns: repeat(5, 1fr);
      gap: 30px;
    }

    .product {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      text-decoration: none;
      color: black;
      position: relative;
      padding: 3px;

      img {
        max-width: 90%;
        max-height: 200px;
        align-self: center;
      }
      span {
        width: 100%;
        margin-top: 10px;
        align-self: flex-end;
      }
    }
  }
}
</style>
