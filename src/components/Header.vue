<template>
  <div class="header">
    <h1 class="title">ナレッジ</h1>
    <div class="separator-small"></div>
    <div class="menu">
      <!-- <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link> -->
    </div>
    <div class="separator"></div>
    <div class="auth">
      {{ state.displayName }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useAuthStore } from "@/stores/auth";

export default defineComponent({
  name: "Header",
  setup() {
    const state = useAuthStore();
    return {
      ...state,
    };
  },
});
</script>

<style lang="scss">
.header {
  background: #2c3e50;
  color: white;
  display: flex;

  .title {
    font-size: inherit;
    margin: 0;
  }
  .menu {
    display: flex;

    a {
      font-weight: bold;
      color: white;
      margin-right: 1rem;

      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
  .separator-small {
    width: 2rem;
  }
  .separator {
    flex: 5;
  }
  .auth {
    align-items: flex-end;
  }
}
</style>
