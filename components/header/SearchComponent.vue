<template>
  <div class="Header_search rounded-8">
    <select class="d-none d-md-block cp p-2">
      <option v-for="option in Options" :key="option.id" :value="option.option">
        {{ option.option }}
      </option>
    </select>
    <input class="search_input" type="text" />
    <b-icon
      icon="search"
      class="SearchIcon rounded-8 bg_orongr cp p-2"
    ></b-icon>
  </div>
</template>
<script>
import Options from "~/json/Options.json";

export default {
  data() {
    return {
      Options,
    };
  },
};
</script>

<style lang="scss" scoped>
.Header_search {
  display: flex;
  align-items: center;
  height: 40px;
  background-color: white;

  overflow: hidden;
  position: relative;
  select {
    background-color: #f1f1f1;
    border: none;
    outline: none;
    height: 100%;
    max-width: 170px;
  }
  .search_input {
    border: none;
    outline: none;
    width: 100%;
    height: 100%;
  }

  .SearchIcon {
    height: 100%;
    width: 35px;
  }
}
</style>
