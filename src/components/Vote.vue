<template>
  <div class="voting">
    <button @click="vote(discussion.id)">
      <fa icon="arrow-up" />
    </button>
    <div class="vote">
      <span>{{ discussion.vote }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { Discussion } from "@/services/Models";
import { defineComponent } from "vue";
import discussion from "@/services/discussionBLOC";

export default defineComponent({
  name: "Vote",
  props: {
    discussion: { type: Discussion },
  },
  setup() {
    return {
      ...discussion,
    };
  },
});
</script>

<style lang="scss">
.voting {
  button {
    border: none;
    background-color: transparent;

    &:hover {
      transform: translateY(-3px);
      transition: transform 0.1s;
    }
  }
  .vote {
    background-color: #a2e9c9;
    border-radius: 1rem;
    font-size: small;
    color: #42b983;
    padding: 2px 6px;
  }
}
</style>
