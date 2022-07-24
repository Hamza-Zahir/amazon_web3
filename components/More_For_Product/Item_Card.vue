<template>
  <div class="Item_Card">
    <div class="img d-none d-sm-flex">
      <img :src="item.img" alt="" />
    </div>
    <div class="d-lg-flex p-2">
      <div class="text p-2">
        <div class="description border-bottom p-2">
          {{ item.description }}
          <div class="starts text-warning">
            <b-icon icon="star-fill" class="text-warning"></b-icon>
            <b-icon icon="star-fill" class="text-warning"></b-icon>
            <b-icon icon="star-fill" class="text-warning"></b-icon>
            <b-icon icon="star-half" class="text-warning"></b-icon>
            <b-icon icon="star" class="text-warning"></b-icon>
          </div>
        </div>
        <div class="d-sm-none text-center">
          <img class="w-75" :src="item.img" alt="" />
        </div>
        <div class="price p-3">
          <div v-if="item.old_price">
            <span class="title">List Price: </span>
            <del class="text-secondary">{{ `$${item.old_price}` }} </del>
          </div>


          <div>
            <span class="title">Price:</span>
            <span class="text-danger"> {{ `$${item.current_price}` }}</span>
          </div>

          <div v-if="item.old_price">
            <span class="title"> You Save: </span>
            <span class="text-danger">
              {{ Save(item.old_price, item.current_price) }}
            </span>
          </div>
        </div>

        <div class="border Information bg-light d-lg-none">
          <Information_Card
            :current_price="item.current_price"

          />
          <!-- :productName="productName" -->
        </div>
        <div class="about">
          <h4 class="m-2 fw-bold">About this item</h4>
          <ul>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              mollitia sit facere rem qui neque exercitationem autem quod
              eligendi ea
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              mollitia sit facere rem qui neque exercitationem autem quod
              eligendi ea Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Excepturi optio iusto labore dignissimos, eligendi est
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              mollitia sit facere rem qui neque exercitationem autem quod
              eligendi ea Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Excepturi optio iusto labore dignissimos, eligendi est
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              mollitia sit facere rem qui neque exercitationem autem quod
              eligendi ea Lorem ipsum, dolor sit amet consectetur adipisicing
              elit. Quaerat, architecto.
            </li>
          </ul>
        </div>
      </div>

      <div class="border Information bg-light d-none d-lg-block">
        <Information_Card
            :current_price="item.current_price"

          />
           <!-- :productName="productName" -->
      </div>
    </div>
  </div>
</template>
<script>
import Information_Card from "./Information_Card.vue"
export default {
  components:{
Information_Card
  },
  props: {
    item: {
      required: true,
      type: Object,
    },
    productName: {
      required: true,
      type: Array,
    },
  },
  methods: {
    Save(old_price, current_price) {
      const saved = old_price - current_price;
      return `$${saved.toFixed(2)} (${(saved / (old_price / 100)).toFixed(
        0
      )}%)`;
    },
  },
};
</script>
<style lang="scss" scoped>
.Item_Card {
  font-weight: 500;
  width: 100%;
  padding: 10px 0;
  background-color: white;
  display: flex;
  .description {
    font-size: 1.2rem;
    line-height: 30px;
    .starts {
      padding-top: 10px;
    }
  }
  .img {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    align-self: flex-start;
    padding: 10px;
    min-width: 35%;
    max-width: 50%;
    position: relative;
    img {
      min-width: 70%;
      max-width: 100%;
      max-height: 550px;
    }
  }

  .price {
    .title {
      display: inline-block;
      width: 75px;
      text-align: right;
    }
  }
  ul {
    padding-left: 15px;
    margin: 0;
    li {
      padding: 5px 0;
    }
  }
  .Information {
    min-width: 220px;
    max-width: 100%;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    -ms-border-radius: 10px;
    -o-border-radius: 10px;
    border-radius: 10px;
    padding: 10px;
    .Shipping {
      font-size: 13px;
      margin: 10px 0;
    }
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
  }

  a {
    text-decoration: none;
  }
}
</style>
