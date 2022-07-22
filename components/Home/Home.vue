<template>
<div class="w-100 pb-5 mb-5">
        <CarouselSection />
          <Section_1 />
         <Section_2 />
         <Section_3 />
        <Section_4/>
        <Section_5/>
        <Section_6/>
        <Section_7/>
        <Section_8/>
      </div>
      </template>
<script>
import CarouselSection from "../Home/homeSections/CarouselSection.vue"
import Section_1 from "../Home/homeSections/Section_1.vue"
import Section_2 from "../Home/homeSections/Section_2.vue"
import Section_3 from "../Home/homeSections/Section_3.vue"
import Section_4 from "../Home/homeSections/Section_4.vue"
import Section_5 from "../Home/homeSections/Section_5.vue"
import Section_6 from "../Home/homeSections/Section_6.vue"
import Section_7 from "../Home/homeSections/Section_7.vue"
import Section_8 from "../Home/homeSections/Section_8.vue"
export default {
  name: "IndexPage",
  components:{
    CarouselSection,
    Section_1,
    Section_2,
    Section_3,
    Section_4,
    Section_5,
    Section_6,
    Section_7,
    Section_8
  }
};
</script>
