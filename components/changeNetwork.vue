<template>
  <div class="Switsh_Network_btn text-light pr rounded-10">
    <div
      class="bg_orongr py-2 px-3 fw-bold d-flex justify-content-between rounded-10"
      @click="showNetworks = !showNetworks"
    >

      <span v-for="network in networks" :key="network.chainId" :class="network.chainId == ChainId? 'w-100 text-center':'d-none '">
{{ network.chainName }}
      </span>
      {{ corectChainId(ChainId) ? "" : "network error"}}
      <b-icon icon="chevron-down" class="ms-1 pt-1"></b-icon>
    </div>

    <div class="box bg_orongr pat0l0 cp rounded-10" v-if="showNetworks">
      <div v-for="net in networks" :key="net.chainName">
        <div
          class="py-2 px-3 fw-bold p-1 border-top rounded-10"
          :class="net.chainId == ChainId ? 'd-none' : ''"
          @click="
            () => {
              chengNetwork(net);
              showNetworks = false;
            }
          "
        >
          {{ net.chainName }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import networks from "~/json/networks.json";
import { mapActions, mapGetters } from "vuex";
const networksManage = networks;
export default {
  data() {
    return {
      networks,
      showNetworks: false,
    };
  },
  computed: {
    ...mapGetters(["CurrentAccount"]),
    ...mapGetters(["ChainId"]),
  },
  mounted() {
    this.manegChainId();
  },
  methods: {
    ...mapActions(["connectMetamask"]),
    corectChainId(_ChainId) {
      if (_ChainId == 97 || _ChainId == 3 || _ChainId == 4 || _ChainId == 42) {
        return true;
      } else {
        return false;
      }
    },
    manegChainId() {
      networksManage.map((e) => {
        e.chainId = `0x${Number(e.chainId).toString(16)}`;
      });
    },

    async chengNetwork(networkData) {
      try {
        await ethereum.request({
          method: "wallet_switchEthereumChain",
          params: [{ chainId: networkData.chainId }],
        });
      } catch (switchError) {
        console.log(switchError);
        if (switchError.code === 4902) {
          try {
            await ethereum.request({
              method: "wallet_addEthereumChain",
              params: [{ ...networkData }],
            });
          } catch (error) {
            console.log(error);
          }
        }
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.Switsh_Network_btn {
  z-index: 9999;
  font-size: 13px;
  position: relative;
  .box {
    position: absolute;
    width: 100%;
  }
}
</style>
