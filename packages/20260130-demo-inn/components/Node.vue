<script setup lang="ts">
export type ConnectionPoint = 'top' | 'bottom' | 'left' | 'right'

interface Props {
  connections?: ConnectionPoint[]
}

const props = withDefaults(defineProps<Props>(), {
  connections: () => ['left', 'right']
})
</script>

<template>
  <div class="b-2 rounded-lg text-xs relative">
    <!-- 顶部连接点 -->
    <div 
      v-if="connections.includes('top')"
      class="absolute left-1/2 -top-2 transform -translate-x-1/2 size-2 bg-black border-1 rounded-full border-white border-solid z-1"
    />
    <!-- 底部连接点 -->
    <div 
      v-if="connections.includes('bottom')"
      class="absolute left-1/2 -bottom-2 transform -translate-x-1/2 size-2 bg-black border-1 rounded-full border-white border-solid z-1"
    />
    <!-- 左侧连接点 -->
    <div 
      v-if="connections.includes('left')"
      class="absolute top-1/2 -left-2 transform -translate-y-1/2 size-2 bg-black border-1 rounded-full border-white border-solid z-1"
    />
    <!-- 右侧连接点 -->
    <div 
      v-if="connections.includes('right')"
      class="absolute top-1/2 -right-2 transform -translate-y-1/2 size-2 bg-black border-1 rounded-full border-white border-solid z-1"
    />
    <slot />
  </div>
</template>
