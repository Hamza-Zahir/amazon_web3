<template>
  <div class="">
    <Head :items="items" :Product="itemName" />

    <Item_Card :item="item" :productName="[itemName, index]" />
<Mour_Prodact :items="items"  :prodactName="itemName" />

  </div>
</template>
<script>
import Products from "~/json/Products.json";
import Head from "~/components/More_For_Product/Head.vue";
import Item_Card from "~/components/More_For_Product/Item_Card.vue";
import Mour_Prodact from "~/components/More_For_Product/mour_prodact.vue";

export default {
  components: {
    Head,
    Item_Card,
    Mour_Prodact,
  },
  data() {
    return {
      Products,
      items: [],
      item: {},
      itemName: "",
      index: "",
    };
  },
  mounted() {
    this.handelParams();
  },
  methods: {
    handelParams() {
      const itemName = this.$route.params.prodact.split(">")[0];
      const index = this.$route.params.prodact.split(">")[1];
      this.index = index;
      this.itemName = itemName;
      if (itemName.split("+")[1]) {
        this.items = Products[itemName.split("+")[0]][itemName.split("+")[1]];
      } else {
        this.items = Products[itemName];
      }
      this.item = this.items[index - 1];
    },
  },
};
</script>
<style lang="scss" scoped></style>
