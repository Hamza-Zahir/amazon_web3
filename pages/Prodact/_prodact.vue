<template>
  <div class="">
    {{ this.$route.params.prodact }}



  </div>
</template>
<script>
import Products from "~/json/Products.json";
import Product_Card from "~/components/cards/Product_Card.vue";
import Sidbar from "~/components/Show_prodacts/Sidbar.vue";

export default {
  components: {
    Product_Card,
    Sidbar,
  },
  data() {
    return {
      Products,
      // items: "",
      // title: "",
    };
  },
  // mounted() {
  //   this.handelParams();
  // },
  // methods: {
  //   handelParams() {
  //     const itemName = this.$route.params.prodact;
  //     if (itemName.split("+")[1]) {
  //       this.items = Products[itemName.split("+")[0]][itemName.split("+")[1]];
  //       this.title = itemName.split("+")[1].replaceAll("_", " ");
  //     } else {
  //       this.items = Products[itemName];
  //       this.title = itemName.replaceAll("_", " ");
  //     }
  //   },
  // },
};
</script>
<style lang="scss" scoped>
.Show_prodacts {
  .results {
    width: 100%;
  }
  .sidbar {
    width: 200px;
    padding: 10px;
    @media (min-width: 1000px) {
      width: 300px;
    }
  }
}
</style>
