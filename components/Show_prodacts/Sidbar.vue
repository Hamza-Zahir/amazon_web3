<template>
  <div class="">
    <div class="Department">
      <h4>Department</h4>
      <ul class="m-0 p-0 ps-1">
        <li
          v-for="(prodact, i) in Object.keys(Products)"
          :key="`prodact-${i + 1}`"
        >
          <span class="fw-bold"> &gt; </span>
          {{ prodact.replace(/_/g, " ") }}
        </li>
      </ul>
    </div>
    <div class="Customer_Review my-2">
      <h4>Customer Review</h4>
      <div class="h5">
        <b-icon icon="star-fill" class="text-warning"></b-icon>
        <b-icon icon="star-fill" class="text-warning"></b-icon>
        <b-icon icon="star-fill" class="text-warning"></b-icon>
        <b-icon icon="star-fill" class="text-warning"></b-icon>
        <b-icon icon="star" class="text-warning"></b-icon>
        & Up
      </div>
      <div class="h5">
        <b-icon icon="star-fill" class="text-warning"></b-icon>
        <b-icon icon="star-fill" class="text-warning"></b-icon>
        <b-icon icon="star-fill" class="text-warning"></b-icon>
        <b-icon icon="star" class="text-warning"></b-icon>
        <b-icon icon="star" class="text-warning"></b-icon>
        & Up
      </div>
      <div class="h5">
        <b-icon icon="star-fill" class="text-warning"></b-icon>
        <b-icon icon="star-fill" class="text-warning"></b-icon>
        <b-icon icon="star" class="text-warning"></b-icon>
        <b-icon icon="star" class="text-warning"></b-icon>
        <b-icon icon="star" class="text-warning"></b-icon>
        & Up
      </div>
      <div class="h5">
        <b-icon icon="star-fill" class="text-warning"></b-icon>
        <b-icon icon="star" class="text-warning"></b-icon>
        <b-icon icon="star" class="text-warning"></b-icon>
        <b-icon icon="star" class="text-warning"></b-icon>
        <b-icon icon="star" class="text-warning"></b-icon>
        & Up
      </div>
    </div>
    <div class="Price my-2">
      <h4>Price</h4>
      <ul class="m-0 p-0 ps-1">
        <li>Under $25</li>
        <li>$25 to $50</li>
        <li>$50 to $100</li>
        <li>$100 to $200</li>
        <li>$200 & Above</li>
      </ul>
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
ul {
  li {
    list-style: none;
  }
}
</style>
