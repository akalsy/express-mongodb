<template>
  <div ref="editor"></div>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  reactive,
  onMounted,
  onBeforeUnmount,
} from "vue";
import WangEditor from "wangeditor";

export default defineComponent({
  name: "WangEditor",
  setup(props, { emit }) {
    const editor = ref();
    const content = reactive({
      html: "",
      text: "",
    });
    let instance;
    onMounted(() => {
      console.log(editor);
      instance = new WangEditor(editor.value);
      instance.config.height = 500;
      instance.config.uploadImgShowBase64 = true;
      Object.assign(instance.config, {
        onchange() {
          emit("update", instance.txt.html());
        },
      });
      instance.create();
    });

    onBeforeUnmount(() => {
      instance.destroy();
      instance = null;
    });

    return {
      editor,
    };
  },
});
</script>
