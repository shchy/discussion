<template>
  <div class="home">
    <button class="new-discussion">新規作成</button>
    <DiscussionList />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useAuthStore } from "@/stores/auth";
import DiscussionList from "@/components/DiscussionList.vue";

export default defineComponent({
  name: "Home",
  components: {
    DiscussionList,
  },
  setup() {
    const state = useAuthStore();
    console.log(state);
    return {
      ...state,
    };
  },
});
</script>

<style lang="scss">
.home {
  display: flex;
  flex-direction: column;
  .new-discussion {
    align-self: flex-end;
    border: none;
    padding: 0.5rem;
    border-radius: 6px;
    background-color: #42b983;
    color: white;
  }
}
</style>
