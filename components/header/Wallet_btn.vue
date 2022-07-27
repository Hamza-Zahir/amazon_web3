<template>
  <div
    class="fs-14 btn wllet-btn text-light mx-1 mx-md-2"
    @click="
      () => {
        connectMetamask();
      }
    "
  >
    {{
      CurrentAccount
        ? `${CurrentAccount.slice(0, 4)}...${CurrentAccount.slice(
            CurrentAccount.length - 4
          )}`
        : " Conect Wallet"
    }}
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["CurrentAccount"]),
  },
  mounted() {
    this.checkWalletIsConnected();
  },
  methods: {
    ...mapActions(["checkWalletIsConnected"]),
    ...mapActions(["connectMetamask"]),
  },
};
</script>

<style lang="scss" scoped>
.wllet-btn {
  background: #f0a636;
}
</style>
