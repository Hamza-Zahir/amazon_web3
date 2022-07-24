<template>
  <div class="ShippingDetails text-secondary">
    <div class="">
      {{ `$${(39.96 + (price / 100) * 15).toFixed(2)}` }} Shipping & Import Fees
      Deposit to {{ Country }}
      <span class="Details Details_Btn" @click="showDetails = !showDetails">
        Details
      </span>
    </div>
    <div v-if="showDetails" class="box_Details border p-2">
      <h6
        class="border-bottom pb-2 text-dark fw-bold d-flex justify-content-between"
      >
        <span>Shipping & Fee Details</span>

        <b-icon icon="x-lg" class=""></b-icon>
      </h6>
      <div class="py-1 d-flex justify-content-between">
        Price <span>${{ price }} </span>
      </div>
      <div class="py-1 d-flex justify-content-between">
        AmazonGlobal Shipping
        <span>${{ ((price / 100) * 15).toFixed(2) }}</span>
      </div>
      <div class="py-1 d-flex justify-content-between">
        <a
          class=""
          href="https://www.amazon.com/gp/help/customer/display.html?ie=UTF8&pop-up=1&nodeId=201117970&ref=amazon_global_shipmsg_viewed_help"
        >
          Estimated Import Fees Deposit
        </a>
        <span class="">$39.96 </span>
      </div>
      <div
        class="border-top mt-1 pt-2 d-flex justify-content-between text-danger fw-bold"
      >
        Total
        <span class="text-danger">
          $ {{ (39.96 + price + (price / 100) * 15).toFixed(2) }}</span
        >
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      showDetails: false,
    };
  },
  computed: {
    ...mapGetters(["Country"]),
  },
  props: {
    price: {
      required: true,
      type: Number,
    },
  },
  mounted(){
this.headDetails();
  },
  methods: {
    headDetails() {
      document.addEventListener("click", (e) => {
        !e.target.classList.contains("Details_Btn")
          ? (this.showDetails = false)
          : undefined;
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.ShippingDetails {
  cursor: pointer;
  width: fit-content;
  font-size: 13px;
  margin: 10px 0;
  position: relative;
  span.Details {
    color: #0e62df;
    display: inline-block;
    position: relative;

    &::after {
      content: "^";
      position: absolute;
      right: -10px;
      top: 0;
      -webkit-transform: rotate(180deg);
      -moz-transform: rotate(180deg);
      -ms-transform: rotate(180deg);
      -o-transform: rotate(180deg);
      transform: rotate(180deg);
    }
    b {
      content: " ";
      width: 10px;
      height: 10px;
      background-color: white;
      border: 1px solid;
      border-color: #ccc transparent transparent #ccc;
      position: absolute;
      z-index: 6;
      bottom: -10px;
      right: 5px;
      -webkit-transform: rotate(45deg);
      -moz-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      -o-transform: rotate(45deg);
      transform: rotate(45deg);
      display: none;
    }
  }
  &:hover {
    span.Details {
      color: #e61f1f;
    }

    .box {
      display: block;
    }
  }

  .box_Details {
    background-color: white;
    min-width: 270px;
    width: 100%;
    position: absolute;
    right: 0;
    top: calc(100% + 5px);
    z-index: 5;
  }
}
a {
  text-decoration: none;
}
</style>
