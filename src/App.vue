<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { RouterLink, RouterView, useRoute } from 'vue-router'
import { useTheme } from '@/composables/useTheme'

const { theme, toggleTheme } = useTheme()
const route = useRoute()
const mobileOpen = ref(false)

const navLinks = [
  { to: '/',         label: 'Home' },
  { to: '/about',    label: 'About' },
  { to: '/works',    label: 'Work' },
  { to: '/packages', label: 'Packages' },
  { to: '/speaking', label: 'Speaking' },
  { to: '/blog',     label: 'Blog' },
  { to: '/contact',  label: 'Contact' },
]

function closeMobile() {
  mobileOpen.value = false
}

// Close mobile nav on route change
import { watch } from 'vue'
watch(() => route.path, closeMobile)
</script>

<template>
  <nav>
    <RouterLink to="/" class="nav-logo">Daniel <em>M.</em></RouterLink>

    <!-- Desktop links -->
    <div class="nav-links">
      <RouterLink
        v-for="link in navLinks"
        :key="link.to"
        :to="link.to"
        :class="{ active: route.path === link.to }"
      >
        {{ link.label }}
      </RouterLink>
    </div>

    <div class="nav-right">
      <button class="theme-btn" @click="toggleTheme" aria-label="Toggle theme">
        {{ theme === 'dark' ? '☀️' : '🌙' }}
      </button>
      <!-- Mobile hamburger -->
      <button class="mobile-menu-btn" @click="mobileOpen = !mobileOpen" aria-label="Open menu">
        <span></span><span></span><span></span>
      </button>
    </div>

    <!-- Mobile dropdown -->
    <Transition name="slide">
      <div v-if="mobileOpen" class="mobile-nav">
        <RouterLink
          v-for="link in navLinks"
          :key="link.to"
          :to="link.to"
          @click="closeMobile"
        >
          {{ link.label }}
        </RouterLink>
      </div>
    </Transition>
  </nav>

  <main>
    <RouterView />
  </main>

  <footer>
    <span class="footer-copy">© {{ new Date().getFullYear() }} Daniel Mabadeje</span>
    <div class="footer-links">
      <a href="https://phptalks.community/" target="_blank" rel="noopener">PHPTalks Community</a>
      <a href="https://github.com/DanielMabadeje" target="_blank" rel="noopener">GitHub</a>
      <a href="mailto:mabadejedaniel1@gmail.com">Email</a>
    </div>
  </footer>
</template>

<style scoped>
/* ── NAV ── */
nav {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 100;
  height: var(--nav-h);
  background: var(--bg);
  border-bottom: 1px solid var(--border);
  display: flex;
  align-items: center;
  padding: 0 max(24px, calc((100vw - 960px) / 2));
  gap: 2rem;
  transition: background 0.3s, border-color 0.3s;
}

.nav-logo {
  font-family: var(--serif);
  font-size: 22px;
  color: var(--text);
  text-decoration: none;
  letter-spacing: -0.5px;
  margin-right: auto;
}

.nav-logo em {
  font-style: italic;
  color: var(--accent);
}

.nav-links {
  display: flex;
  gap: 2rem;
}

.nav-links a {
  font-size: 13.5px;
  font-weight: 400;
  color: var(--text-muted);
  text-decoration: none;
  letter-spacing: 0.01em;
  transition: color 0.2s;
}

.nav-links a:hover,
.nav-links a.active {
  color: var(--text);
}

.nav-links a.active {
  font-weight: 500;
}

.nav-right {
  display: flex;
  align-items: center;
  gap: 8px;
}

.theme-btn {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 1px solid var(--border);
  background: var(--bg-subtle);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  transition: all 0.2s;
  flex-shrink: 0;
}
.theme-btn:hover {
  background: var(--border);
}

/* Mobile hamburger */
.mobile-menu-btn {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 36px;
  height: 36px;
  background: transparent;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  cursor: pointer;
  padding: 8px;
}

.mobile-menu-btn span {
  display: block;
  width: 100%;
  height: 1.5px;
  background: var(--text-muted);
  border-radius: 2px;
  transition: all 0.2s;
}

.mobile-nav {
  position: fixed;
  top: var(--nav-h);
  left: 0;
  right: 0;
  background: var(--bg);
  border-bottom: 1px solid var(--border);
  display: flex;
  flex-direction: column;
  padding: 16px max(24px, calc((100vw - 960px) / 2));
  gap: 0;
  z-index: 99;
}

.mobile-nav a {
  font-size: 15px;
  color: var(--text-muted);
  text-decoration: none;
  padding: 12px 0;
  border-bottom: 1px solid var(--border);
  transition: color 0.2s;
}

.mobile-nav a:last-child { border-bottom: none; }
.mobile-nav a:hover { color: var(--text); }

/* Slide transition */
.slide-enter-active,
.slide-leave-active {
  transition: opacity 0.2s, transform 0.2s;
}
.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}

/* ── FOOTER ── */
footer {
  border-top: 1px solid var(--border);
  padding: 28px max(24px, calc((100vw - 960px) / 2));
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 12px;
}

.footer-copy {
  font-family: var(--mono);
  font-size: 12px;
  color: var(--text-faint);
}

.footer-links {
  display: flex;
  gap: 20px;
}

.footer-links a {
  font-size: 12px;
  color: var(--text-faint);
  text-decoration: none;
  transition: color 0.2s;
}

.footer-links a:hover {
  color: var(--text-muted);
}

/* ── RESPONSIVE ── */
@media (max-width: 720px) {
  .nav-links { display: none; }
  .mobile-menu-btn { display: flex; }
}
</style>
