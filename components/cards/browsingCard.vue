<template>
  <div class="browsingCard m-3">
    <div class="img text-center">
      <img :src="prodact.img" alt="" />
    </div>
    <nuxt-link class="description px-2 pt-2" :to="``">
      {{ prodact.description }}
    </nuxt-link>
    <div class="start px-2">
      <b-icon icon="star-fill" class="text-warning"></b-icon>
      <b-icon icon="star-fill" class="text-warning"></b-icon>
      <b-icon icon="star-fill" class="text-warning"></b-icon>
      <b-icon icon="star-half" class="text-warning"></b-icon>
      <b-icon icon="star" class="text-warning"></b-icon>
    </div>
    <div class="price p-2">
      <span class="current_price">
        <sup>$</sup> {{ prodact.current_price.toString().split(".")[0] }}
        <sup>{{ prodact.current_price.toString().split(".")[1] }}</sup>
      </span>

      <span class="old_price px-2">
        <del>
          <sub> {{ prodact.old_price ? `$ ${prodact.old_price}` : "" }} </sub>
        </del>
      </span>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    prodact: {
      required: true,
      type: Object,
    },
  },
};
</script>
<style lang="scss" scoped>
.browsingCard {
  width: 200px;
  img {
    max-width: 200px;
    max-height: 200px;
  }
  .description {
        text-decoration: none;
        overflow: hidden;
        display: -webkit-box;
        display: -moz-box;
        -webkit-box-orient: vertical;
        -moz-box-orient: vertical;
        text-overflow: ellipsis;
        -webkit-line-clamp: 4;
        line-clamp: 4;
        color: black;
        letter-spacing: 0.2px;
        &:hover {
          color: #fd4800;
        }
      }
}
</style>
