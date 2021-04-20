<template>
    <ul class="infinite-list" v-infinite-scroll="load" style="overflow: auto">
      <li v-for="i in count" class="infinite-list-item"></li>
    </ul>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    load() {
      this.count += 2;
    },
  },
  setup() {},
});
</script>

<style lang="stylus" scoped>
.infinite-list {
    height 100%
    width 100%
    .infinite-list-item {
        height 200px
        width 100%
        background #fff
        border-bottom 1px solid #ccc
    }
}
</style>
