<template>
  <div class="root">
    <Header class="header" />
    <div class="view">
      <Categorys class="categorys" :categorys="categorys" />
      <router-view class="contents" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import Header from "@/components/Header.vue";
import Categorys from "@/components/Categorys.vue";
import apiService from "@/services/APIServiceDebug";
import { Category } from "@/services/Models";

export default defineComponent({
  name: "App",
  components: {
    Header,
    Categorys,
  },
  setup() {
    const data = reactive({
      categorys: [] as Category[],
    });
    apiService.getCategorys().then((xs) => {
      data.categorys.length = 0;
      xs.forEach((x) => data.categorys.push(x));
    });

    return {
      ...data,
    };
  },
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.root {
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  .header {
    padding: 0.5rem;
    min-height: 1rem;
  }
  .view {
    display: flex;
    flex: 1;
    height: calc(100% - 2rem);
    .categorys {
      width: 18rem;
    }
    .contents {
      flex: 1;
      padding: 0.5rem;
      height: calc(100% - 1rem);
      overflow: auto;
    }
  }
}
</style>
