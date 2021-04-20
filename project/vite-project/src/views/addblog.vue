<template>
  <h1 class="title">创建一个blog...</h1>
  <div class="btn">
    <el-input placeholder="请输入标题" v-model="title"></el-input>
  </div>
  <div class="editor">
    <wangEditor @update="editorUpdate"></wangEditor>
  </div>
  <div class="btn">
    <el-button @click="submit" type="primary">提交</el-button>
  </div>
</template>

<script lang="ts">
import wangEditor from "../components/wangEditor.vue";
import { defineComponent } from "vue";
import $axios from "../utils/axios";
import { ElMessage } from "element-plus";

export default defineComponent({
  components: {
    wangEditor,
  },
  data() {
    return {
      id: "wangEditor",
      editHtml: "",
      title: "",
    };
  },
  methods: {
    editorUpdate(data: string) {
      this.editHtml = data;
    },
    submit() {
      const data = {
        title: this.title,
        contenthtml: this.editHtml,
      };
      $axios
        .post("/api/blog/createblog", data)
        .then((res: any) => {
          ElMessage({
            message: res.data.message,
            type: res.data.isSucces ? "success" : "error",
          });
        })
        .catch((err) => {
          ElMessage({
            message: err,
            type: "error",
          });
        });
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
