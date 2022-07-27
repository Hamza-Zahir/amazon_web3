<template>
  <div>
    <div class="text-danger d-none d-lg-block">${{ current_price }}</div>

    <ShippingDetails :price="current_price" />
    <div class="my-2">
      Delivery
      <span class="fw-bold">
        {{ minDeliveryMonth }} {{ minDeliveryDay }} -
        {{ minDeliveryMonth !== maxDeliveryMonth ? maxDeliveryMonth : "" }}
        {{ maxDeliveryDay }}
      </span>
    </div>
    <div class="Location fw-bold fs_14">
      <b-icon icon="geo-alt" class=""></b-icon>
      Deliver to {{ Country }}
    </div>
    <h4 class="text-success my-2">In Stock.</h4>
    <div class="custom-select">
      Qty:
      <select
        name="Product_Number"
        id="Product_Number"
        @change="
          (e) => {
            Quantity = e.target.value;
          }
        "
      >
        <option v-for="i in 30" :key="i" :value="i" class="p-3">{{ i }}</option>
      </select>
    </div>
    <div class="fs-14">
      <div>
        <input
          type="checkbox"
          id=""
          value=""
          class="me-2"
          @change="
            (e) => {
              Geft = e.target.checked;
              if (!Geft) {
                message = '';
              }
            }
          "
        />
        Add a gift receipt for easy returns
      </div>
    </div>
    <div v-if="Geft" class="message my-2">
      <textarea
        name=""
        id=""
        cols=""
        rows="7"
        class="w-100 p-2 rounded-8"
        placeholder="If you want to leave a message to the gift recipient (optional)"
        :value="message"
        @input="
          (e) => {
            message = e.target.value;
          }
        "
      ></textarea>
    </div>
    <div class="DeliveryAddress my-2">
     <small v-if="errorAddress" class="pt-1 text-danger">! Please add the receiving address </small>
     <input
        type="text"
        class="w-100 p-2 rounded-8"
        placeholder="Delivery Address"
        :value="DeliveryAddress"
        @input="
          (e) => {

            DeliveryAddress = e.target.value;
            errorAddress = false;
          }
        "
      />

    </div>

    <div class="btn Add_btn" @click="AddItemsToCart(productName)">
      Add to card
    </div>
    <div class="btn Buy_btn" @click="BuyItem(productName, current_price)">
      Buy Now
    </div>

    <a href="#">
      <b-icon icon="lock-fill" class=""></b-icon>

      Secure transaction
    </a>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import plugins from "~/plugins/index";
import ShippingDetails from "./ShippingDetails.vue";
let minDeliveryDate = +new Date() + 7 * 86400000;
let minDeliveryDay = new Date(minDeliveryDate).toDateString().split(" ")[2];
let minDeliveryMonth = new Date(minDeliveryDate).toDateString().split(" ")[1];
let maxDeliveryDate = +new Date() + 14 * 86400000;
let maxDeliveryDay = new Date(maxDeliveryDate).toDateString().split(" ")[2];
let maxDeliveryMonth = new Date(maxDeliveryDate).toDateString().split(" ")[1];
export default {
  components: {
    ShippingDetails,
  },
  computed: {
    ...mapGetters(["Country"]),
    ...mapGetters(["CurrentAccount"]),
    ...mapGetters(["ChainId"]),
  },
  data() {
    return {
      minDeliveryMonth,
      minDeliveryDay,
      maxDeliveryMonth,
      maxDeliveryDay,
      Quantity: 1,
      Geft: false,
      DeliveryAddress: "",
      message: "",
      errorAddress: false,
    };
  },
  methods: {
    ...mapActions(["getItemsOfUser"]),

    async AddItemsToCart(_itemName) {
      await plugins
        .addItemsToCart(
          this.ChainId,
          this.CurrentAccount,
          _itemName,
          this.Quantity,
          this.Geft
        )
        .then(async () => {
          await this.getItemsOfUser();
        });
    },

    async BuyItem(_itemName, _current_price) {
      if (this.DeliveryAddress) {
        await plugins
          .buyItem(
            this.ChainId,
            this.CurrentAccount,
            _itemName,
            this.DeliveryAddress,
            this.message,
            this.Quantity,
            this.Geft,
            _current_price
          )
          .then(() => {
            this.Quantity = 1;
            this.Geft = false;
            this.DeliveryAddress = "";
            this.message = "";
          });
      } else {
        this.errorAddress = true;
      }
    },
  },
  props: {
    current_price: {
      required: true,
      type: Number,
    },
    productName: {
      required: true,
      type: String,
    },
  },
};
</script>
<style lang="scss" scoped>
.Location {
  color: #0e62df;
  cursor: pointer;
}
.custom-select {
  margin: 15px 0;
  background-color: #d2e9fc;
  position: relative;
  width: fit-content;
  position: relative;
  z-index: 0;
  padding: 0 5px;
  -webkit-border-radius: 8px;
  -moz-border-radius: 8px;
  -ms-border-radius: 8px;
  -o-border-radius: 8px;
  border-radius: 8px;

  select {
    background-color: inherit;
    outline: none;
    width: 80px;
    height: 100%;
    position: absolute;
    z-index: -1;
    left: 0;
    padding-left: 35px;
    -webkit-border-radius: inherit;
    -moz-border-radius: inherit;
    -ms-border-radius: inherit;
    -o-border-radius: inherit;
    border-radius: inherit;
    option {
      background-color: white;
    }
  }
}

.btn {
  -webkit-border-radius: 20px;
  -moz-border-radius: 20px;
  -ms-border-radius: 20px;
  -o-border-radius: 20px;
  border-radius: 20px;
  margin: 15px auto;
  display: block;
  width: 90%;
  font-weight: 500;
}
.Add_btn {
  background-color: #ffe600;
}
.Buy_btn {
  background-color: #ff9100;
}

a {
  text-decoration: none;
}
textarea {
  background: #c9e9f5;
  outline: none;
}
.DeliveryAddress {
  input {
    background: #c9e9f5;
    border: none;
    outline: none;
  }
}
</style>
