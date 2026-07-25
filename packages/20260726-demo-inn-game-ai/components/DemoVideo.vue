<script setup lang="ts">
import { ref } from 'vue'

interface Props {
  src: string
  title: string
  poster?: string
  autoplay?: boolean
  loop?: boolean
  muted?: boolean
}

const props = defineProps<Props>()
const failed = ref(false)
const ready = ref(false)
</script>

<template>
  <div class="relative mx-auto aspect-video overflow-hidden rounded-xl bg-black/75 shadow-2xl shadow-black/45" style="width: 46rem; max-width: 100%;">
    <img
      v-if="props.poster"
      :src="props.poster"
      :alt="props.title"
      class="absolute inset-0 h-full w-full object-cover"
    />
    <video
      v-if="!failed"
      :src="props.src"
      :poster="props.poster"
      class="absolute inset-0 h-full w-full object-contain transition-opacity"
      :class="ready ? 'opacity-100' : 'opacity-0'"
      :autoplay="props.autoplay"
      :loop="props.loop"
      :muted="props.muted"
      controls
      playsinline
      preload="metadata"
      @loadedmetadata="ready = true"
      @error="failed = true"
    />
    <div v-if="failed && !props.poster" class="flex h-full w-full flex-col items-center justify-center gap-4 text-white/62">
      <div class="i-mingcute-video-line text-7xl" />
      <div class="text-2xl">{{ props.title }}</div>
    </div>
    <div class="pointer-events-none absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/82 to-transparent px-5 pb-4 pt-12 text-sm text-white/76">
      {{ props.title }}
    </div>
  </div>
</template>
