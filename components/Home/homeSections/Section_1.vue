<template>
  <div class="Section_1">
    <CardGroup :card="card_1" />
    <CardGroup :card="card_2" />
    <SemplCard :card="card_3" />

    <div class="d-flex flex-column justify-content-between">
      <div class="Semplcard w-100">
        <h2 class="h4 fw-bold">Sign in for the best experience</h2>
        <nuxt-link to="/" class="btn btn-warning w-100 my-1 p-1">
          Sing in securely
        </nuxt-link>
      </div>
      <img
        class="w-100 mt-2"
        src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/October/Fuji_D2_45M_en_US_1x._CB418309979_.jpg"
        alt=""
      />
    </div>
    <SemplCard :card="card_4" />
    <SemplCard :card="card_5" />
    <SemplCard :card="card_6" />
    <SemplCard :card="card_7" />
    <div class="d-none d-md-flex d-lg-none">
      <SemplCard :card="card_8" />
    </div>
  </div>
</template>
<script>
import Products from "~/json/Products.json";
import CardGroup from "../../cards/CardGroup.vue";
import SemplCard from "../../cards/SemplCard.vue";
const card_1 = {
  title: "Gaming accessories",
  item1_img: Products.Gaming.Headsets[0].img,
  item1_title: "Heanset",
  productType1: "Gaming+Headsets",
  item2_img: Products.Gaming.Keyboards[0].img,
  item2_title: "Keyboards",
  productType2: "Gaming+Keyboards",
  item3_img: Products.Gaming.Gaming_Mice[0].img,
  productType3: "Gaming+Gaming_Mice",
  item3_title: "Computer mice",
  item4_img: Products.Gaming.Chairs[2].img,
  item4_title: "Chairs",
  productType4: "Gaming+Chairs",
  link: "See more",
  page: "Gaming_accessories",
};
const card_2 = {
  title: "Shop by Category",
  item1_img: Products.Computers[2].img,
  item2_img:
    "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/August/DashboardCard/PS4_120X._SY85_CB438749318_.jpg",
  item3_img:
    "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/February/Dashboard/Baby120X._SY85_CB468850882_.jpg",
  item4_img:
    "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/February/Dashboard/Toys120X._SY85_CB468851693_.jpg",
  item1_title: "Computers & Accessories",
  productType1: "Computers",
  productType2: "Gaming+Video_Games",
  productType3: "Baby_Products",
  productType4: "Toys",
  item2_title: "Video Games",
  item3_title: "Baby",
  item4_title: "Toys & Games",
  link: "Shop now",
  center_text: "text-center",
  page: "",
};
const card_3 = {
  title: "AmazonBasics",
  img_sec:
    "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg",
  link: "See more",
  page: "Show_prodacts/Amazon_Basics",
};
const card_4 = {
  title: "Electronics",
  img_sec:
    "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Electronics_1x._SY304_CB432774322_.jpg",
  link: "See more",
  page: "Show_prodacts/Electronics",
};
const card_5 = {
  title: "Find your ideal TV",
  img_sec:
    "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_TV_2X._SY304_CB432517900_.jpg",
  link: "See more",
  page: "Show_prodacts/Tv",
};
const card_6 = {
  title: "Beauty picks",
  img_sec:
    "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Beauty_1x._SY304_CB432774351_.jpg",
  link: "Shop now",
  page: "Show_prodacts/Beauty",
};
const card_7 = {
  title: "Deals & Promotions",
  img_sec:
    "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Deals_1x._SY304_CB430401028_.jpg",
  link: "Shop now",
  page: "",
};
const card_8 = {
  title: "Easy returns",
  img_sec:
    "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Returns_1x._SY304_CB432774714_.jpg",
  link: "Learn more",
  page: "",
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
      card_5,
      card_6,
      card_7,
      card_8,
    };
  },
};
</script>
<style lang="scss" scoped>
.Semplcard {
  background-color: white;
  padding: 15px;
  font-size: 14px;
}

.Section_1 {
  z-index: 99;
  position: static;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(8, 1fr);
  gap: 15px;
  width: 100%;
  padding: 15px 0 0 0;

  @media (min-width: 426px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(4, 1fr);
    padding: 15px 15px 0 15px;
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    padding: 15px 15px 0 15px;

    gap: 15px;
  }

  @media (min-width: 992px) {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
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
