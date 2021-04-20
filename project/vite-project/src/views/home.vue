<template>
  <div class="basehome">
    <blogList></blogList>
  </div>
</template>

<script lang="ts">
import blogList from "./bloglist.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name:"baseHome",
  components: {
    blogList,
  },
  setup() {},
});
</script>

<style lang="stylus" scoped>
.basehome {
  background #ccc
  height 100vh
  width 100%
  padding 5% 20% 2%
  box-sizing border-box
}
</style>
