<template>
  <div class="discussion-list">
    <DiscussionCard
      v-for="discussion in discussions"
      :key="discussion.id"
      :discussion="discussion"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import DiscussionCard from "@/components/DiscussionCard.vue";
import { Discussion } from "@/services/Models";

export default defineComponent({
  name: "DiscussionList",
  components: {
    DiscussionCard,
  },
  props: {
    discussions: [] as PropType<Discussion[]>,
  },
});
</script>

<style lang="scss">
.discussion-list {
  display: flex;
  flex-direction: column;
}
</style>
