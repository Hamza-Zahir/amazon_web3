<template>
  <div class="card_scroll">
    <h4 class="fw-bold">
      {{ card.title }}
      <nuxt-link :to="`/Show_prodacts/${card.keyname}`" class="Link fs-6">
        See more
      </nuxt-link>
    </h4>
    <div class="content">
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

      <nuxt-link
        v-for="item in card.items"
        :key="item.position"
        class="link"
        to=""
      >
        <img :src="item.img" alt="" />
      </nuxt-link>
    </div>
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
      height: 30%;
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
      opacity: 0;
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
    .btn_scrol {
      opacity: 1;
    }
    ::-webkit-scrollbar-thumb {
      background: #acacac;
    }
  }
}
</style>
