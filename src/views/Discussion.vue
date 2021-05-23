<template>
  <div class="discussion">
    <div class="title">
      <Vote class="vote" :discussion="findOne" />
      <h1 class="title-text">
        {{ findOne.title }} <span>#{{ findOne.id }}</span>
      </h1>
      <DiscussionInfo class="info" :discussion="findOne" />
    </div>
    <div class="content">
      {{ findOne.content }}
    </div>
    <div class="replys">replays</div>
    <div class="form">form</div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { useRoute } from "vue-router";
import Vote from "@/components/Vote.vue";
import DiscussionInfo from "@/components/DiscussionInfo.vue";
import discussion from "@/services/discussionBLOC";
import { Discussion } from "@/services/Models";

export default defineComponent({
  name: "Discussion",
  components: {
    Vote,
    DiscussionInfo,
  },
  setup() {
    const route = useRoute();
    const findOne = computed(() => {
      const categoryID = route.params.categoryID as string;
      const id = route.params.id as string;
      console.log(`categoryID: ${categoryID}, id: ${id}`);
      const xs = discussion.data.discussions;
      if (categoryID === undefined || id === undefined) {
        return new Discussion({
          title: "not found",
          id: id,
          categoryID: categoryID,
        });
      }
      return xs.find((x) => x.categoryID == categoryID && x.id == id);
    });

    return {
      findOne,
      ...discussion,
    };
  },
});
</script>

<style lang="scss">
.discussion {
  display: flex;
  flex-direction: column;
  .title {
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-rows: 1fr auto;
    grid-gap: 0.5rem;
    .vote {
      grid-row: 1/3;
      grid-column: 1/2;
      align-self: center;
    }
    .title-text {
      grid-row: 1/2;
      grid-column: 2/3;
      text-align: start;
      margin-bottom: 0;
      span {
        color: rgb(139, 148, 158);
      }
    }
    .info {
      grid-row: 2/3;
      grid-column: 2/3;
    }
  }
}
</style>
