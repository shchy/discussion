<template>
  <div class="discussion-list">
    <DiscussionCard />
    <DiscussionCard />
    <DiscussionCard />
    <DiscussionCard />
    <DiscussionCard />
    <DiscussionCard />
    <DiscussionCard />
    <DiscussionCard />
    <DiscussionCard />
    <DiscussionCard />
    <DiscussionCard />
    <DiscussionCard />
    <DiscussionCard />
    <DiscussionCard />
    <DiscussionCard />
    <DiscussionCard />
    <DiscussionCard />
    <DiscussionCard />
    <DiscussionCard />
    <DiscussionCard />
    <DiscussionCard />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import DiscussionCard from "@/components/DiscussionCard.vue";

export default defineComponent({
  name: "DiscussionList",
  components: {
    DiscussionCard,
  },
});
</script>

<style lang="scss">
.discussion-list {
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
