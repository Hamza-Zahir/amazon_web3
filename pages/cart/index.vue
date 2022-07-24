<template>
  <div class="d-md-flex flex-row-reverse mx-2 mx-md-3 my-3 my-md-4 p-0">
    <div class="sibar col-md-4 col-xl-3 ps-md-3">
      <div v-if="items.length">
        <div class="card mb-3 p-3">
          <div class="subtotal h6">
            Subtotal ({{ itemsQuantity }} items):
            <span class="fw-bold h5">
              <sup>$</sup>
              {{calcTotalPrices()}}
            </span>
          </div>

          <div>
            <input
              type="checkbox"
              id="order_contains"
              name="subscribe"
              value=""
              class="me-2"
            />
            <label for="order_contains" class="fs-14">
              This order contains a gift
            </label>
          </div>
          <div class="btn btn-warning mt-3">Proceed to checkout</div>
        </div>
        <div class="card mb-3 p-3">
          <h6 class="fs-14">
            Sponsored Products related to items in your cart
          </h6>
        </div>
      </div>
    </div>
    <div class="card p-3 col">
      <div v-if="items.length">
        <h4>Shopping Cart</h4>
        <div class="border-bottom"></div>
        <div class="">
          <div v-for="item in items" :key="`item-${item.position}`" class="">
            <shopping_card :item="item" />
          </div>
        </div>
        <h5 class="text-end fw-bold">Subtotal ({{items.length}} items): ${{calcTotalPrices()}}</h5>

      </div>
      <div
        v-if="!items.length"
        class="empty_Cart d-flex align-items-center flex-wrap"
      >
        <div class="col-12 col-sm-7 col-md-5 mx-auto">
          <img
            src="https://m.media-amazon.com/images/G/01/cart/empty/kettle-desaturated._CB445243794_.svg"
            alt=""
            class=""
          />
        </div>
        <div class="col-12 col-md-6 mt-3 ps-3">
          <div v-if="!CurrentAccount" class="">
            <h2 class="fw-bold">Connect your wallet to show your cart items</h2>
            <div class="btn btn-warning ms-3">Connect wallet</div>
          </div>
          <div v-if="CurrentAccount && !corectChainId()" class="">
            <h2 class="fw-bold">pleas change the network</h2>
            <div class="btn btn-warning ms-3">Swetch network</div>
          </div>
          <div v-if="CurrentAccount && corectChainId()" class="">
            <h2 class="fw-bold">Your Amazon Cart is empty</h2>
            <nuxt-link to="/">Shop today's deals</nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";

import Prodacts from "~/json/Products.json";
import shopping_card from "~/components/cart/shopping_card.vue";
const items = [
  Prodacts.Gaming.Hats[1],
  Prodacts.Gaming.Hats[5],
  Prodacts.Gaming.Hats[6],
];
export default {
  data() {
    return {
      items,
    };
  },
  components: {
    shopping_card,
  },
  computed: {
    ...mapGetters(["CurrentAccount"]),
    ...mapGetters(["ChainId"]),
    // ...mapGetters(["userBlance"]),
  },
  methods: {
    ...mapActions(["connectMetamask"]),

    corectChainId() {
      if (
        this.ChainId == 97 ||
        this.ChainId == 59 ||
        this.ChainId == 1 ||
        this.ChainId == 3 ||
        this.ChainId == 4 ||
        this.ChainId == 42
      ) {
        return true;
      } else {
        return false;
      }
    },
    calcTotalPrices(){
    let totalPrices = 0;
    if(this.items.length){

// product(e.itemName[0], e.itemName[1])
// e.quantity
    this.items.map((e) => {
      let itemprice = e.current_price;
      totalPrices = totalPrices + 1 * itemprice;
    });
    }
    return totalPrices.toFixed(2);
  }
  },
};
</script>
<style lang="scss" scoped>
a {
  text-decoration: none;
}
</style>
