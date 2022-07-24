<template>
  <div class="Section_2">
    <ScrollCard :card="card_1" />
    <ScrollCard :card="card_2" />
  </div>
</template>
<script>
import Products from "~/json/Products.json";
import ScrollCard from "../../cards/ScrollCard.vue";
const card_1 = {
  items: Products.Fitness,
  keyname: "Fitness",
  title: "Best selling sports products",
};

const card_2 = {
  items: Products.Top_sellers_in_home,
  keyname: "Top_sellers_in_home",
  title: "International top sellers in Home",
};
export default {
  components: {
    ScrollCard,
  },
  data() {
    return {
      Products,
      card_1,
      card_2,
    };
  },
};
</script>
<style lang="scss" scoped>
.Section_2 {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, 1fr);
  gap: 15px;
  padding: 15px 0 0 0;

  @media (min-width: 426px) {
    padding: 15px 15px 0 15px;
  }

  @media (min-width: 768px) {
    padding: 15px 15px 0 15px;
  }

  @media (min-width: 992px) {
    padding: 20px 20px 0 20px;
    gap: 20px;
  }
}
</style>
