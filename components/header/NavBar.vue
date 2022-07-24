<template>
  <div class="NavBar">
    <nuxt-link to="/" class="link befor">
      <b-icon icon="justify" class="h5 m-0"></b-icon>
      All
    </nuxt-link>
    <nuxt-link to="/" class="link befor">Today's Deals</nuxt-link>
    <nuxt-link to="/" class="link befor">Customer Service</nuxt-link>
    <nuxt-link to="/" class="link befor">Registry</nuxt-link>
    <nuxt-link to="/" class="link befor">Gift Cards</nuxt-link>
    <nuxt-link to="/" class="link befor">Sell</nuxt-link>
  </div>
</template>

<style lang="scss" scoped>


.NavBar {
  background-color: #121f31;
  color: #f5efef;
  padding: 6px 10px;
  display: flex;
  flex-wrap: nowrap;
  width: 100%;
  overflow: scroll;
&::-webkit-scrollbar {
  display: none;
}


  .link {
    text-decoration: none;
    color: #d3d0d0;
    padding: 6px;
    font-weight: 600;
    margin: 0 5px;
    min-width: fit-content;

    &:hover {
      color: white;
    }
  }
}
</style>
