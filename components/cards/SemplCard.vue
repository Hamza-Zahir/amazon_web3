<template>
  <div class="Semplcard">

        <h2 class="w-100 h5 fw-bold">{{card.title}}</h2>
        <nuxt-link class="imag_link" :to="`/${card.page}`">
          <img :src="card.img_sec" alt="img not found" />
        </nuxt-link>
        <nuxt-link class="Link link" :to="`/${card.page}`">
          {{card.link}}
        </nuxt-link>
      </div>
</template>
<script>
export default {
  props: {
     card: {
      required: true,
      type: Object,
    },

  },
};
</script>
<style lang="scss" scoped>
.Semplcard {
  background-color: white;
  padding: 15px;
  font-size: 14px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .imag_link {
    width: 100%;
    height: 100%;
    img {
      width: 100%;
      height: 100%;
    }
  }

  .link {
    margin: 20px 10px 10px;
  }
}

</style>
