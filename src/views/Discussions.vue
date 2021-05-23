<template>
  <div class="category">
    <button class="new-discussion">新規作成</button>
    <DiscussionList :discussions="filteredList" />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { useRoute } from "vue-router";
import DiscussionList from "@/components/DiscussionList.vue";
import discussion from "@/services/discussionBLOC";

export default defineComponent({
  name: "Category",
  components: {
    DiscussionList,
  },
  setup() {
    const route = useRoute();
    const filteredList = computed(() => {
      const categoryID = route.params.id;
      const xs = discussion.data.discussions;
      if (categoryID === undefined) {
        return xs;
      }
      return xs.slice().filter((x) => x.categoryID == categoryID);
    });
    return {
      filteredList,
    };
  },
});
</script>

<style lang="scss">
.category {
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
