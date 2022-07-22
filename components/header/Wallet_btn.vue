<template>
  <div
    class="btn wllet-btn text-light mx-1 mx-md-2"
    :class="CurrentAccount && !corectChainId() ? 'btn-warning' : ''"
    @click="
      () => {
        connectMetamask();
      }
    "
  >
    {{
      CurrentAccount && corectChainId()
        ? `${CurrentAccount.slice(0, 4)}...${CurrentAccount.slice(
            CurrentAccount.length - 4
          )}`
        : CurrentAccount && ChainId != 97
        ? "network erore"
        : " Conect Wallet"
    }}
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
// import plugins from "../plugins/index";, mapMutations

export default {
  data() {
    return {
    };
  },
  computed: {
    ...mapGetters(["CurrentAccount"]),
    ...mapGetters(["ChainId"]),
    // ...mapGetters(["userBlance"]),
  },
  mounted() {
    this.checkWalletIsConnected();
  },
  methods: {
    ...mapActions(["checkWalletIsConnected"]),
    ...mapActions(["connectMetamask"]),
    // ...mapMutations(["setUserBlance"]),

corectChainId(){
  if(this.ChainId == 97 ||
  this.ChainId == 59 ||
  this.ChainId == 1 ||
  this.ChainId == 3 ||
  this.ChainId == 4 ||
  this.ChainId == 42 ){
    return true
  }else{
    return false
  }
}

  },
};
</script>

<style lang="scss" scoped>
.wllet-btn{
  background: #f7b654;
}
</style>
