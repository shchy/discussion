<template>
  <div class="root">
    <div class="header">
      <h1 class="title">ナレッジ</h1>
      <div class="separator-small"></div>
      <div class="menu">
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
      </div>
      <div class="separator"></div>
      <div class="auth">
        {{ state.displayName }}
      </div>
    </div>
    <div class="view">
      <aside class="nav">
        <h3 class="title">カテゴリ</h3>
        <div class="categorys">
          <router-link to="/">Gitlab</router-link>
          <router-link to="/asdf">要望</router-link>
        </div>
      </aside>
      <router-view class="contents" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useAuthStore } from "@/stores/auth";

export default defineComponent({
  name: "App",
  components: {
    // HelloWorld,
  },
  setup() {
    const state = useAuthStore();
    return {
      ...state,
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
    background: #2c3e50;
    color: white;
    display: flex;
    padding: 0.5rem;
    min-height: 1rem;

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
  .view {
    display: flex;
    flex: 1;
    height: calc(100% - 2rem);
    .nav {
      width: 18rem;
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
    .contents {
      flex: 1;
      padding: 0.5rem;
      height: calc(100% - 1rem);
      overflow: auto;
    }
  }
}
</style>
