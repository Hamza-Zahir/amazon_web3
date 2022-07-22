<template>
  <div class="Section_7">
    <div class="card_scroll px-5 ">
      <h4 class="fw-bold">Inspired by your browsing history</h4>
      <div class="content border-top mt-4">
        <div
          class="next btn_scrol boxsh h3 fw-bold"
          @click="
            (e) => {
              const parent = e.target.parentElement;
              parent.scrollLeft += (parent.offsetWidth / 4) * 3.6;
            }
          "
        >
          &gt;
        </div>
        <div
          class="prev btn_scrol boxsh h3 fw-bold"
          @click="
            (e) => {
              const parent = e.target.parentElement;
              parent.scrollLeft -= (parent.offsetWidth / 4) * 3.6;
            }
          "
        >
          &lt;
        </div>
        <div
          v-for="(Product, i) in Products.Baby_Products"
          :key="`Baby_Products_${i + 1}`"
          class=""
        >
          <BrowsingCard :prodact="Product" />
        </div>
        <div
          v-for="(Product, i) in Products.Fitness"
          :key="`FitnessProdact_${i + 1}`"
          class=""
        >
          <BrowsingCard :prodact="Product" />
        </div>
        <div
          v-for="(Product, i) in Products.Kitchen"
          :key="`KitchenProdact_${i + 1}`"
          class=""
        >
          <BrowsingCard :prodact="Product" />
        </div>
        <div
          v-for="(Product, i) in Products.Pet_Supplies"
          :key="`Pet_SuppliesProdact_${i + 1}`"
          class=""
        >
          <BrowsingCard :prodact="Product" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Products from "~/json/Products.json";
import BrowsingCard from "../../cards/browsingCard.vue";

export default {
  components: {
    BrowsingCard,
  },
  data() {
    return {
      Products,
    };
  },
};
</script>
<style lang="scss" scoped>
.Section_7 {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
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

  .card_scroll {
    background-color: white;
    padding: 15px;
    overflow: hidden;
    position: relative;

    .content {
      width: 100%;
      display: flex;
      align-items: center;
      overflow-x: scroll;
      scroll-behavior: smooth;

      .btn_scrol {
        width: 40px;
        height: 15%;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #fdfcfc7c;
        position: absolute;
        z-index: 9;
        -webkit-transition: 0.5s ease;
        -moz-transition: 0.5s ease;
        -ms-transition: 0.5s ease;
        -o-transition: 0.5s ease;
        transition: 0.5s ease;
        // opacity: 0;
        cursor: pointer;
        &::selection {
          opacity: 0;
        }
      }
      .next {
        right: 0;
        -webkit-border-radius: 5px 0 0 5px;
        -moz-border-radius: 5px 0 0 5px;
        -ms-border-radius: 5px 0 0 5px;
        -o-border-radius: 5px 0 0 5px;
        border-radius: 5px 0 0 5px;
      }
      .prev {
        left: 0;
        -webkit-border-radius: 0 5px 5px 0;
        -moz-border-radius: 0 5px 5px 0;
        -ms-border-radius: 0 5px 5px 0;
        -o-border-radius: 0 5px 5px 0;
        border-radius: 0 5px 5px 0;
      }

      &::-webkit-scrollbar-thumb {
        background: #bbb9b900;
        width: 5px;
        height: 5px;
        -webkit-border-radius: 10px;
        -moz-border-radius: 10px;
        -ms-border-radius: 10px;
        -o-border-radius: 10px;
        border-radius: 10px;
      }

      &::-webkit-scrollbar-thumb:hover {
        background: rgb(97, 96, 96);
      }
      &::-webkit-scrollbar {
        height: 6px;
      }

      .link {
        margin: 10px;
        img {
          max-width: 250px;
          max-height: 200px;
        }
      }
    }
    &:hover {
      ::-webkit-scrollbar-thumb {
        background: #acacac;
      }
    }
  }
}
</style>
