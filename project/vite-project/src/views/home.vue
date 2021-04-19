<template>
  <h1 class="title">创建一个blog...</h1>
  <div class="editor">
    <wangEditor @update="editorUpdate"></wangEditor>
  </div>
  <div class="btn">
    <el-button type="primary">提交</el-button>
  </div>
</template>

<script lang="ts">
import wangEditor from "../components/wangEditor.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    wangEditor,
  },
  data() {
    return {
      id: "wangEditor",
      editHtml: "",
    };
  },
  methods: {
    editorUpdate(data) {
      this.editHtml = data;
    },
  },
  setup() {},
});
</script>

<style lang="stylus" scoped>
h1 {
    padding 20px
}
.editor {
    padding 20px
}
.btn {
    padding 20px
    .el-button {
        float right
    }
}
</style>
