<template>
  <div class="category">
    <button class="new-discussion">新規作成</button>
    <DiscussionList :discussions="discussions" />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import DiscussionList from "@/components/DiscussionList.vue";
import { Category, Discussion } from "@/services/Models";
import apiService from "@/services/APIServiceDebug";

export default defineComponent({
  name: "Category",
  components: {
    DiscussionList,
  },
  setup() {
    const data = reactive({
      discussions: [] as Discussion[],
    });

    const updateList = (categoryID: string) => {
      var promise: Promise<Discussion[]>;
      if (categoryID === undefined) {
        promise = apiService.getAllDiscussions();
      } else {
        promise = apiService.getDiscussions(categoryID);
      }
      promise.then((xs) => {
        data.discussions.length = 0;
        xs.forEach((x) => data.discussions.push(x));
      });
    };

    const route = useRoute();
    watch(
      () => route.params.id,
      async (newId) => {
        updateList(newId as string);
      }
    );
    updateList(route.params.id as string);

    return {
      ...data,
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
