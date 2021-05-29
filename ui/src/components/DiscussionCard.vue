<template>
  <div class="discussion-card">
    <Vote class="voting" :discussion="discussion" />
    <div class="display">
      <div class="title">
        <router-link
          :to="{
            name: 'Discussion',
            params: { categoryID: discussion.categoryID, id: discussion.id },
          }"
          >{{ discussion.title }}</router-link
        >
      </div>
      <DiscussionInfo class="info" :discussion="discussion" />
    </div>
  </div>
</template>

<script lang="ts">
import { Discussion } from "@/services/Models";
import { defineComponent } from "vue";
import Vote from "@/components/Vote.vue";
import DiscussionInfo from "@/components/DiscussionInfo.vue";
import discussion from "@/services/discussionBLOC";

export default defineComponent({
  name: "DiscussionCard",
  components: {
    Vote,
    DiscussionInfo,
  },
  props: {
    discussion: Discussion,
  },
  setup() {
    return {
      ...discussion,
    };
  },
});
</script>

<style lang="scss">
.discussion-card {
  display: flex;
  border-bottom: solid rgb(139, 148, 158) 1px;
  padding: 1rem;

  .display {
    padding: 0 1rem;
    flex: 1;
    .title {
      font-weight: bold;
      text-align: left;
    }
  }
}
</style>
