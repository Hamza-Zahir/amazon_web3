<template>
  <div>
    <div class="Header">
      <div class="content d-flex justify-content-between align-items-center">

        <nuxt-link class="logo mt-2 mx-2 mx-md-4" to="/">
          <img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" />
        </nuxt-link>
        <div class="d-none d-lg-block cp befor me-2">
          <div class="delivr Header_option d-flex flex-column p-2">
            <span class="option_one">Deliver to</span>
            <span class="option_tow">
              <b-icon icon="geo-alt" class="me-1"></b-icon>
              {{ Country }}
            </span>
          </div>
        </div>
        <div class="search_component col d-none d-lg-block">
          <SearchComponent />
        </div>
        <div
          class="Header_nav d-flex jusyify-content-evenly align-items-center"
        >
          <div v-if="CurrentAccount" class="d-none d-md-block mx-2"><Switsh_Network_btn /></div>

          <Wallet_btn />

          <nuxt-link to="/Cart" class="text-light td-none Link cart">
            <div class="Header_ShoppingCart d-flex befor p-2">
              <div class="option_one">
                <span class="h5 fw-bol tx_orongr">
                  {{numberOfAllitems}}
                </span>
              </div>
              <span class="align-self-end fw-bold d-none d-sm-block ps-1">Cart</span>
            </div>
          </nuxt-link>
        </div>
      </div>

      <div
        class="search_component col mx-1 d-flex d-lg-none align-items-center"
      >
        <div class="col">
          <SearchComponent />
        </div>

          <div v-if="CurrentAccount" class="ms-2 d-md-none"><Switsh_Network_btn /></div>


      </div>
    </div>
    <NavBar />
    <div class="delivrSm p-1 text-light d-lg-none">
      <b-icon icon="geo-alt" class=""></b-icon>
      Deliver to
      <span class="fw-bold">
        {{ Country }}
      </span>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";

import SearchComponent from "./SearchComponent.vue";
import NavBar from "./NavBar.vue";
import Wallet_btn from "./Wallet_btn.vue";
import Switsh_Network_btn from "../changeNetwork.vue";
export default {
  components: {
    SearchComponent,
    NavBar,
    Wallet_btn,
    Switsh_Network_btn,
  },
  computed: {
    ...mapGetters(["Country"]),
    ...mapGetters(["CurrentAccount"]),
    ...mapGetters(["numberOfAllitems"]),
  },
  mounted() {
    this.getCountry();
  },
  methods: {
    ...mapActions(["getCountry"]),
  },
};
</script>

<style lang="scss" scoped>
.Header {
  background-color: #131921;
  color: #ffffff;
  z-index: 9999;
  padding: 5px;
  .Link {
    text-decoration: none;
  }
  .content {
    .logo {
      img {
        width: 100px;
      }
    }
  }
  .Header_option {
    .option_one {
      font-size: 13px;
      opacity: 0.9;
    }
    .option_tow {
      font-size: 14px;
      font-weight: bold;
    }
  }
}
.delivrSm {
  background-color: #1c3455;
}
.cart {
  .option_one {
    position: relative;
    width: 60px;
    height: 40px;
    background: url("~/assets/imgs/basskit.jpg");
    background-size: 100% 100%;
    text-align: center;
  }
}
</style>
