<template>
  <div class="discussion-list">
    <DiscussionCard
      v-for="discussion in sortedList"
      :key="discussion.id"
      :discussion="discussion"
    />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from "vue";
import DiscussionCard from "@/components/DiscussionCard.vue";
import { Discussion } from "@/services/Models";

export default defineComponent({
  name: "DiscussionList",
  components: {
    DiscussionCard,
  },
  props: {
    discussions: { type: Object as PropType<Discussion[]> },
  },
  setup(props) {
    const sortedList = computed(() => {
      if (props.discussions === undefined) {
        return [];
      }
      const xs = props.discussions
        .slice()
        .sort((a, b) => a.vote - b.vote)
        .reverse();
      return xs;
    });
    return {
      sortedList,
    };
  },
});
</script>

<style lang="scss">
.discussion-list {
  display: flex;
  flex-direction: column;
}
</style>
