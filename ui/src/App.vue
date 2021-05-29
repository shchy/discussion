<template>
  <suspense>
    <template #default>
      <div class="root">
        <Header class="header" />
        <div class="view">
          <CategoryList class="categorys" v-bind:categorys="data.categorys" />
          <router-view class="contents" />
        </div>
      </div> </template
    ><template #fallback> Loading... </template>
  </suspense>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import Header from "@/components/Header.vue";
import CategoryList from "@/components/CategoryList.vue";
import discussion from "@/services/discussionBLOC";

export default defineComponent({
  name: "App",
  components: {
    Header,
    CategoryList,
  },
  setup() {
    onMounted(async () => {
      await discussion.init();
    });
    return {
      ...discussion,
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
