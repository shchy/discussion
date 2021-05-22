<template>
  <div class="root">
    <Header />
    <div class="view">
      <Categorys />
      <router-view class="contents" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "@/components/Header.vue";
import Categorys from "@/components/Categorys.vue";

export default defineComponent({
  name: "App",
  components: {
    Header,
    Categorys,
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

  .view {
    display: flex;
    flex: 1;
    height: calc(100% - 2rem);

    .contents {
      flex: 1;
      padding: 0.5rem;
      height: calc(100% - 1rem);
      overflow: auto;
    }
  }
}
</style>
