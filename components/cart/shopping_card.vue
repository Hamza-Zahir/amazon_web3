<template>
  <div class="border my-3 bg-light shopping_card">
    <div class="Product_Card py-1 d-sm-flex">
    <!-- :to="`/Prodact/${item.name}>${item.position}`" -->
    <nuxt-link :to="`/`"

        class="col-12 col-sm-3 col-xl-2 p-2 d-flex justify-content-center align-items-center"
      >
        <img :src="item.img" alt="img" class="" />
      </nuxt-link>
      <div class="text p-2">
        <nuxt-link
          :to="`/`"
          class="td-none text-dark"
        >
          {{ item.description }}
        </nuxt-link>

        <div class="price pt-2">
          <span class="current_price">
            <sup>$</sup>
            <span class="fw-bold">
              {{ item.current_price.toString().split(".")[0] }}
            </span>
            <sup>{{ item.current_price.toString().split(".")[1] }}</sup>
          </span>
        </div>
        <div class="text-success">In Stock</div>
        <small class="gift">
          <input type="checkbox" name="subscribe" value="" class="me-2" />
          This is a gift
          <a
            href="https://www.amazon.com/gp/help/customer/display.html/ref=ord_cart_shr?pop-up=1&nodeId=759346"
            target="blank"
            >Learn more</a
          >
        </small>
        <div class="d-flex align-items-center">
          <div class="custom-select me-4 mt-2">
            Qty:
            <select name="Qty" id="">
              <option v-for="i in 30" :key="`op-${i}`" :value="i">
                {{ i }}
              </option>
            </select>
          </div>
          <span class="delete ms-5 cp text-primary">Delet</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  computed: {
    // ...mapGetters(["Country"]),
  },
  props: {
    item: {
      required: true,
      type: Object,
    },
  },
};
</script>
<style lang="scss" scoped>
.custom-select {
  background-color: #dbecfa;
  position: relative;
  width: fit-content;
  position: relative;
  z-index: 0;
  padding: 3px 5px;
  -webkit-border-radius: 8px;
  -moz-border-radius: 8px;
  -ms-border-radius: 8px;
  -o-border-radius: 8px;
  border-radius: 8px;

  select {
    background-color: inherit;
    outline: none;
    width: 80px;
    height: 100%;
    position: absolute;
    z-index: -1;
    left: 0;
    top: 0;
    padding-left: 35px;
    -webkit-border-radius: inherit;
    -moz-border-radius: inherit;
    -ms-border-radius: inherit;
    -o-border-radius: inherit;
    border-radius: inherit;
    option {
      background-color: white;
    }
  }
}
.shopping_card {
  font-size: 14px;

  img {
    max-width: 100%;
    max-height: 150px;
  }
}
a {
  text-decoration: none;
}
</style>
