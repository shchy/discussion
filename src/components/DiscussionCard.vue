<template>
  <div class="discussion-card">
    <div class="voting">
      <fa icon="arrow-up" />
      <div class="vote">
        <span>{{ discussion.vote }}</span>
      </div>
    </div>
    <div class="display">
      <div class="title">{{ discussion.title }}</div>
      <div class="info">
        <span>{{ discussion.categoryName }}</span>
        <span>{{ discussion.createUserName }}</span>
        <span>{{ "作成日:" + sinceDate(discussion.created) }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Discussion } from "@/services/Models";
import { defineComponent, PropType } from "vue";
import { dateMixin } from "@/mixin/dateMethods";

export default defineComponent({
  name: "DiscussionCard",
  mixins: [dateMixin],
  props: {
    discussion: Discussion,
  },
  setup() {
    return {};
  },
});
</script>

<style lang="scss">
.discussion-card {
  display: flex;
  border-bottom: solid lightgray 1px;
  padding: 1rem;

  .voting {
    .vote {
      background-color: #a2e9c9;
      border-radius: 1rem;
      font-size: small;
      color: #42b983;
      padding: 2px 6px;
    }
  }
  .display {
    padding: 0 1rem;
    flex: 1;
    .title {
      font-weight: bold;
      text-align: left;
    }
    .info {
      color: lightgray;
      display: flex;
      font-size: small;
      span {
        padding-right: 0.5rem;
      }
    }
  }
}
</style>
