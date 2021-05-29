<template>
  <div class="info">
    <span>{{ discussion.categoryName }}</span>
    <span>{{ discussion.createUserName }}</span>
    <span>{{ "作成日:" + sinceDate(discussion.created) }}</span>
  </div>
</template>

<script lang="ts">
import { Discussion } from "@/services/Models";
import { defineComponent } from "vue";
import { dateMixin } from "@/mixin/dateMethods";

export default defineComponent({
  name: "DiscussionInfo",
  mixins: [dateMixin],
  props: {
    discussion: { type: Discussion },
  },
});
</script>

<style lang="scss">
.info {
  color: rgb(139, 148, 158);
  display: flex;
  font-size: small;
  span {
    padding-right: 0.5rem;
  }
}
</style>
