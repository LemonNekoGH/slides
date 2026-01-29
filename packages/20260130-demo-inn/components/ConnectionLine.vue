<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import { createConnection, type ConnectionDirection } from '~/utils/connections'

interface Props {
  parentSelector: string
  startSelector: string
  endSelector: string
  direction?: ConnectionDirection
}

const props = withDefaults(defineProps<Props>(), {
  direction: 'horizontal'
})

const path = ref('')

function updatePath() {
  requestAnimationFrame(() => {
    const parentElement = document.querySelector(props.parentSelector) as HTMLElement
    const startElement = document.querySelector(props.startSelector) as HTMLElement
    const endElement = document.querySelector(props.endSelector) as HTMLElement
    
    if (parentElement && startElement && endElement) {
      path.value = createConnection(parentElement, startElement, endElement, props.direction)
    }
  })
}

onMounted(() => {
  updatePath()
  window.addEventListener('resize', updatePath)
})

onUnmounted(() => {
  window.removeEventListener('resize', updatePath)
})
</script>

<template>
  <svg class="absolute top-0 left-0 w-full h-full pointer-events-none">
    <path :d="path" stroke="#ccc" stroke-width="2" fill="none" />
  </svg>
</template>
