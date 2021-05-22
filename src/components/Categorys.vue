<template>
  <aside class="nav">
    <h3 class="title">カテゴリ</h3>
    <div class="categorys">
      <router-link
        v-for="category in categorys"
        :key="category.id"
        :to="'/category/' + category.id"
        >{{ category.name }}</router-link
      >
    </div>
  </aside>
</template>

<script lang="ts">
import { defineComponent, reactive, PropType } from "vue";
import { Category } from "@/services/Models";

export default defineComponent({
  name: "Categorys",
  props: {
    categorys: [] as PropType<Category[]>,
  },
});
</script>

<style lang="scss">
.nav {
  padding: 0.5rem;
  .title {
    font-size: inherit;
    text-align: left;
    margin-bottom: 0.2rem;
  }
  .categorys {
    display: flex;
    flex-direction: column;

    a {
      // font-weight: bold;
      color: #2c3e50;
      text-align: start;
      padding: 0.5rem 1rem;
      margin: 0.1rem;
      border-radius: 6px;

      &:hover {
        background-color: rgb(241, 241, 241);
      }
      &.router-link-exact-active {
        background-color: #42b983;
        color: white;
      }
    }
  }
}
</style>
