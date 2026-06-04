<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  words: {
    type: Array,
    default: () => [],
  },
  speed: {
    type: Number,
    default: 120,
  },
  deleteSpeed: {
    type: Number,
    default: 60,
  },
  pauseMs: {
    type: Number,
    default: 1400,
  },
})

const displayText = ref('')
let wordIdx = 0
let charIdx = 0
let deleting = false
let pausing = false
let timeout = null

function tick() {
  const word = props.words[wordIdx]

  if (pausing) {
    pausing = false
    deleting = true
    timeout = setTimeout(tick, props.deleteSpeed)
    return
  }

  if (!deleting) {
    displayText.value = word.slice(0, ++charIdx)
    if (charIdx === word.length) {
      pausing = true
      timeout = setTimeout(tick, props.pauseMs)
    } else {
      timeout = setTimeout(tick, props.speed)
    }
  } else {
    displayText.value = word.slice(0, --charIdx)
    if (charIdx === 0) {
      deleting = false
      wordIdx = (wordIdx + 1) % props.words.length
      timeout = setTimeout(tick, props.speed)
    } else {
      timeout = setTimeout(tick, props.deleteSpeed)
    }
  }
}

onMounted(() => {
  if (props.words.length) timeout = setTimeout(tick, props.speed)
})

onUnmounted(() => clearTimeout(timeout))
</script>

<template>
  <span class="typewriter">{{ displayText }}<span class="cursor" aria-hidden="true">|</span></span>
</template>

<style scoped>
.typewriter {
  font-family: var(--serif);
  font-style: italic;
  color: var(--accent);
}

.cursor {
  display: inline-block;
  font-style: normal;
  color: var(--accent);
  animation: blink 1s step-end infinite;
  margin-left: 1px;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50%       { opacity: 0; }
}
</style>
