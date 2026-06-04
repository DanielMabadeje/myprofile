import { ref, watch, onMounted } from 'vue'

const theme = ref('light')

export function useTheme() {
  onMounted(() => {
    const saved = localStorage.getItem('dm-theme') || 'light'
    theme.value = saved
    document.documentElement.setAttribute('data-theme', saved)
  })

  function toggleTheme() {
    theme.value = theme.value === 'dark' ? 'light' : 'dark'
    document.documentElement.setAttribute('data-theme', theme.value)
    localStorage.setItem('dm-theme', theme.value)
  }

  watch(theme, (val) => {
    document.documentElement.setAttribute('data-theme', val)
  })

  return { theme, toggleTheme }
}
