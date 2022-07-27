<template>
  <div class="">
    <div class="Show_prodacts bg-light">
      <div class="title boxsh bg-light d-flex justify-content-between">
        <div class="fw-bold px-3 py-2">
          {{ items.length }} results for
          <span class="text-danger">"{{ title }}"</span>
        </div>
      </div>
      <div class="d-flex my-1">
        <div class="sidbar d-none d-sm-block">
          <Sidbar />
        </div>
        <div class="results">
          <div v-if="items.length">
            <Product_Card :items="items" :itemName="this.$route.params.prodact" />
          </div>
        </div>
      </div>
    </div>
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
      items: [],
      title: "",
    };
  },
  mounted() {
    this.handelParams();
  },
  methods: {
    handelParams() {
      const itemName = this.$route.params.prodact;
      if (itemName.split("+")[1]) {
        this.items = Products[itemName.split("+")[0]][itemName.split("+")[1]];
        this.title = itemName.split("+")[1].replaceAll("_", " ");
      } else {
        this.items = Products[itemName];
        this.title = itemName.replaceAll("_", " ");
      }
    },
  },
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
