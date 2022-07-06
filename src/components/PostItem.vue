<template>
  <div class="post">
    <div>
      <div>{{ post.id }}</div>
      <img :src='post.photo' />
      <div><strong>Название:</strong> {{ post.last_name }}</div>
    </div>
    <div class="post__btns">
      <my-button @click="$router.push(`/posts/${post.id}`)">
        Открыть
      </my-button>
      <my-button @click="$emit('remove', post)">
        Удалить
      </my-button>
    </div>
  </div>
</template>

<script>

import MyButton from "@/components/UI/MyButton";
import MySelect from "@/components/UI/MySelect";
import MyInput from "@/components/UI/MyInput";

export default {
  components: {
    MyButton,
    MySelect,
    MyInput
  },
  props: {
    post: {
      type: Object,
      required: true,
    }
  }
}
</script>

<style scoped>
.post {
  padding: 15px;
  border: 2px solid rgb(214, 224, 224);
  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.post__btns {
  display: flex;
}
</style>
