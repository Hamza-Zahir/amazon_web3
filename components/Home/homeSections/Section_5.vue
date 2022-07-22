<template>
  <div class="Section_5">
    <!-- Kitchen -->
    <SemplCard :card="card_1" /> <CardGroup :card="card_4" />

    <SemplCard :card="card_3" />
    <div class="d-flex d-md-none d-lg-flex">
      <CardGroup :card="card_2" />
    </div>
  </div>
</template>
<script>
import Products from "~/json/Products.json";
import CardGroup from "../../cards/CardGroup.vue";
import SemplCard from "../../cards/SemplCard.vue";

const card_1 = {
  title: "Shop Pet supplies",
  img_sec:
    "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_Pets_1X._SY304_CB639746743_.jpg",
  link: "See more",
  page: "Show_prodacts/Pet_Supplies",
};
const card_2 = {
  title: "Clothes",
  item1_img: Products.Clothes.Sweatshirts[0].img,
  item1_title: "Sweatshirts",
  productType1: "Clothes+Sweatshirts",
  item2_img: Products.Clothes.Joggers[3].img,
  item2_title: "Joggers",
  productType2: "Clothes+Joggers",
  item3_img: Products.Clothes.Cardigans[1].img,
  productType3: "Clothes+Cardigans",
  item3_title: "Cardigans",
  item4_img: Products.Clothes.tees[6].img,
  item4_title: "tees",
  productType4: "Clothes+tees",
  link: "See more",
  page: "Show_prodacts/Clothes+More",
};
const card_3 = {
  title: "Create with strip lights",
  img_sec:
    "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_StripLighting_379x304_1X_en_US._SY304_CB418597476_.jpg",
  link: "Shop now",
  page: "Show_prodacts/Night_Lights",
};
const card_4 = {
  title: "Phones",
  item1_img: Products.Phones[7].img,
  item2_img: Products.Phones[2].img,
  item3_img: Products.Phones[6].img,
  item4_img: Products.Phones[9].img,
  productType1: "Phones",
  productType2: "Phones",
  productType3: "Phones",
  productType4: "Phones",
  item1_title: "Motorola One 5G Ace",
  item2_title: "Samsung Galaxy S22 ",
  item3_title: "SAMSUNG Electronics Galaxy",
  item4_title: "TCL 20 Pro 5G",
  link: "Shop now",
  center_text: "text-center",
  page: "Show_prodacts/Phones",
};

export default {
  components: {
    CardGroup,
    SemplCard,
  },
  data() {
    return {
      Products,
      card_1,
      card_2,
      card_3,
      card_4,
    };
  },
};
</script>
<style lang="scss" scoped>
.Section_5 {
  z-index: 99;
  position: static;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 1fr);
  gap: 15px;
  width: 100%;
  padding: 15px 0 0 0;

  @media (min-width: 426px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    padding: 15px 15px 0 15px;
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr;
    padding: 15px 15px 0 15px;

    gap: 15px;
  }

  @media (min-width: 992px) {
    grid-template-columns: repeat(4, 1fr);
    padding: 20px 20px 0 20px;
    gap: 20px;
  }

  .center_text {
    text-align: center;
  }

  .CardGroup {
    img {
      max-height: 100px;
    }
  }
}
</style>
