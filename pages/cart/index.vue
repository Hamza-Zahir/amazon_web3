<template>
  <div class="d-md-flex flex-row-reverse mx-2 mx-md-3 my-3 my-md-4 p-0">
    <div class="sibar col-md-4 col-xl-3 ps-md-3">
      <div v-if="numberOfAllitems">
        <div class="card mb-3 p-3">
          <div class="subtotal h6">
            Subtotal ({{ numberOfAllitems }} items):
            <span class="fw-bold h5">
              <sup>$</sup>
              {{ calcTotalPrices(itemsOfUser) }}
            </span>
          </div>
<!-- v-if="orderContainsAGift" -->
          <div class="my-2" >
            This order contains a gift
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
      <div v-if="numberOfAllitems">
        <h4>Shopping Cart</h4>
        <div class="border-bottom"></div>
        <div class="">
          <div
            v-for="item in manageItems(itemsOfUser)"
            :key="`item-${item.position}`"
            class=""
          >
            <shopping_card :item="item" />
          </div>
        </div>
        <h5 class="text-end fw-bold">
          Subtotal ({{ numberOfAllitems }} items): ${{
            calcTotalPrices(itemsOfUser)
          }}
        </h5>
      </div>
      <div
        v-if="!numberOfAllitems"
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
import { mapGetters } from "vuex";
import Prodacts from "~/json/Products.json";
import shopping_card from "~/components/cart/shopping_card.vue";

export default {
  data() {
    return {
      orderContainsAGift: false,
    };
  },
  components: {
    shopping_card,
  },
  computed: {
    ...mapGetters(["CurrentAccount"]),
    ...mapGetters(["ChainId"]),
    ...mapGetters(["itemsOfUser"]),
    ...mapGetters(["numberOfAllitems"]),
  },
  methods: {
    getItem(itemName) {
      let _item;
      let _itemName = itemName.split(">")[0];
      let _itemIndex = itemName.split(">")[1];
      if (_itemName.split("+")[1]) {
        _item =
          Prodacts[_itemName.split("+")[0]][_itemName.split("+")[1]][
            _itemIndex - 1
          ];
      } else {
        _item = Prodacts[_itemName][_itemIndex - 1];
      }
      return _item;
    },
    manageItems(_itemsOfUser) {
      let _items = [];
      this.orderContainsAGift = false;
      _itemsOfUser.map((e) => {
        if (e.isGeft) {
          this.orderContainsAGift = true;
        }
        if (e.Quantity > 0) {
          _items.push({
            ...{
              inStoke: e.inStoke,
              isGeft: e.isGeft,
              Quantity: e.Quantity,
              itemName: e.itemName,
            },
            ...this.getItem(e.itemName),
          });
          if (e.isGeft) {
            this.orderContainsAGift = true;
          }
        }
      });
      return _items;
    },
    corectChainId() {
      if (
        this.ChainId == 97 ||
        this.ChainId == 3 ||
        this.ChainId == 4 ||
        this.ChainId == 42
      ) {
        return true;
      } else {
        return false;
      }
    },
    calcTotalPrices(_items) {
      let totalPrices = 0;
      if (_items.length) {
        this.manageItems(_items).map((e) => {
          let itemprice = e.current_price;
          totalPrices = totalPrices + e.Quantity * itemprice;
        });
      }
      return totalPrices.toFixed(2);
    },
  },
};
</script>
<style lang="scss" scoped>
a {
  text-decoration: none;
}
</style>
