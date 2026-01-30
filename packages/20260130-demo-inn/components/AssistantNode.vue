<script setup lang="ts">
import Node, { type ConnectionPoint } from './Node.vue'

interface Props {
  connections?: ConnectionPoint[]
}

defineProps<Props>()
</script>

<template>
  <Node class="b-pink-200 bg-pink-100" :connections="connections">
    <div>
      <slot />
    </div>
  </Node>
</template>
