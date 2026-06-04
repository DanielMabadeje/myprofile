<script setup>
import SectionHeader from '@/components/SectionHeader.vue'
import { packages } from '@/data/portfolio'
import { useFadeIn } from '@/composables/useFadeIn'
useFadeIn()
</script>

<template>
  <section class="page-section fade-in packages-section">
    <SectionHeader
      label="Open Source"
      title="Packages I've built."
      desc='Libraries and tools I\'ve published to Packagist and GitHub — built out of need, curiosity, and a desire to push PHP further.'
    />

    <div class="packages-grid">
      <a
        v-for="pkg in packages"
        :key="pkg.name"
        :href="pkg.link"
        target="_blank"
        rel="noopener"
        class="pkg-card"
      >
        <div class="pkg-card-top">
          <div class="pkg-icon">{{ pkg.icon }}</div>
          <span class="pkg-badge" :class="{ wip: pkg.status === 'wip' }">
            {{ pkg.status === 'wip' ? 'In Progress' : 'Published' }}
          </span>
        </div>
        <div class="pkg-name">{{ pkg.name }}</div>
        <div class="pkg-desc">{{ pkg.desc }}</div>
        <div class="pkg-meta">
          <span v-for="tag in pkg.tags" :key="tag" class="pkg-tag">{{ tag }}</span>
        </div>
      </a>
    </div>

    <div class="packages-cta">
      <p>
        All my open source work lives on
        <a href="https://github.com/DanielMabadeje" target="_blank" rel="noopener">GitHub →</a>
        and
        <a href="https://packagist.org/packages/danielmabadeje/" target="_blank" rel="noopener">Packagist →</a>
      </p>
    </div>
  </section>
</template>

<style scoped>
.packages-section { padding-top: 96px; }

.packages-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 16px;
}

.pkg-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 22px 24px;
  transition: border-color 0.2s, transform 0.2s;
  text-decoration: none;
  display: block;
}

.pkg-card:hover {
  border-color: var(--border-strong);
  transform: translateY(-2px);
}

.pkg-card-top {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 12px;
}

.pkg-icon {
  width: 36px;
  height: 36px;
  background: var(--bg-code);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
}

.pkg-badge {
  font-family: var(--mono);
  font-size: 10px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  padding: 3px 9px;
  border-radius: 99px;
  background: var(--green-bg);
  color: var(--green);
}

.pkg-badge.wip {
  background: var(--amber-bg);
  color: var(--amber);
}

.pkg-name {
  font-family: var(--mono);
  font-size: 13.5px;
  font-weight: 500;
  color: var(--text);
  margin-bottom: 8px;
  letter-spacing: 0.01em;
  word-break: break-all;
}

.pkg-desc {
  font-size: 13.5px;
  color: var(--text-muted);
  line-height: 1.6;
  margin-bottom: 14px;
}

.pkg-meta {
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
}

.pkg-tag {
  font-family: var(--mono);
  font-size: 10.5px;
  color: var(--text-faint);
  background: var(--bg-subtle);
  padding: 2px 8px;
  border-radius: 4px;
}

.packages-cta {
  margin-top: 32px;
}

.packages-cta p {
  font-size: 14px;
  color: var(--text-muted);
}

.packages-cta a {
  color: var(--accent);
  text-decoration: none;
}
</style>
