<template>
  <div class="CardGroup">
    <h2 class="w-100 h5 fw-bold">{{ card.title }}</h2>
    <div :class="`items ${card.center_text}`">
      <nuxt-link class="item" :to="`Show_prodacts/${card.productType1}`">
        <img :src="card.item1_img" alt="img not found" />
        <span class="titel">{{ card.item1_title }}</span>
      </nuxt-link>

      <nuxt-link class="item" :to="`Show_prodacts/${card.productType2}`">
        <img :src="card.item2_img" alt="img not found" />
        <span class="titel">{{ card.item2_title }}</span>
      </nuxt-link>
      <nuxt-link class="item" :to="`Show_prodacts/${card.productType3}`">
        <img :src="card.item3_img" alt="img not found" />
        <span class="titel">{{ card.item3_title }}</span>
      </nuxt-link>
      <nuxt-link class="item" :to="`Show_prodacts/${card.productType4}`">
        <img :src="card.item4_img" alt="img not found" />
        <span class="titel">{{ card.item4_title }}</span>
      </nuxt-link>
    </div>
    <nuxt-link class="Link link" :to="`/${card.page}`">
      {{ card.link }}
    </nuxt-link>
  </div>
</template>
<script>
export default {
  props: {
     card: {
      required: true,
      type: Object,
    },

  },
};
</script>
<style lang="scss" scoped>
.CardGroup {
  background-color: white;
  padding: 15px;
  font-size: 14px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .items {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    .item {
      width: calc(50% - 4px);
      margin: 2px;
      color: black;
      text-decoration: none;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;

      overflow: hidden;
      padding: 5px;

      .scale {
        -webkit-transform: scale(1.4);
        -moz-transform: scale(1.4);
        -ms-transform: scale(1.4);
        -o-transform: scale(1.4);
        transform: scale(1.4);
      }
      .titel {
        z-index: 2;
      }
      img {
        max-width: 100%;
        max-height: 120px;
        margin-left: auto;
        margin-right: auto;
      }
    }
  }
  .link {
    display: inline-block;
    margin: 20px 10px 10px;
  }
}
</style>
