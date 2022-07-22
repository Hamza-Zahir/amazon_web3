<template>
<div class="">
  <Header/>
  <Home/>
</div>

</template>

<script>
import Header from "~/components/header/Header.vue"
import Home from "~/components/Home/Home.vue"
export default {
  name: "IndexPage",
  components:{
    Header,
    Home
  }
};
</script>
