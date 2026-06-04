<script setup>
import SectionHeader from '@/components/SectionHeader.vue'
import { speakingEvents } from '@/data/portfolio'
import { useFadeIn } from '@/composables/useFadeIn'
useFadeIn()
</script>

<template>
  <section class="page-section fade-in speaking-section">
    <SectionHeader label="Speaking" title="On stage &amp; online.">
      <template #desc>
        Events I've spoken at. Want me at yours?
        <a href="https://twitter.com/mabadejedanphp" target="_blank" rel="noopener">Reach out on X →</a>
      </template>
    </SectionHeader>

    <ol class="timeline">
      <li v-for="event in speakingEvents" :key="event.title" class="tl-item">
        <div class="tl-dot"></div>
        <div class="tl-date">{{ event.date }}</div>
        <h3 class="tl-title">{{ event.title }}</h3>
        <p class="tl-desc">{{ event.desc }}</p>
        <a v-if="event.link" :href="event.link" target="_blank" rel="noopener" class="tl-link">
          {{ event.linkLabel }}
          <svg viewBox="0 0 14 10" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path d="M1 5h12m0 0L9 1m4 4L9 9" />
          </svg>
        </a>
      </li>
    </ol>
  </section>
</template>

<style scoped>
.speaking-section { padding-top: 96px; }

.timeline {
  list-style: none;
  position: relative;
  padding-left: 20px;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 0;
  top: 8px;
  bottom: 0;
  width: 1px;
  background: var(--border);
}

.tl-item {
  position: relative;
  padding: 0 0 36px 28px;
}

.tl-dot {
  position: absolute;
  left: -24px;
  top: 7px;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--bg);
  border: 1.5px solid var(--border-strong);
  transition: border-color 0.2s, background 0.2s;
}

.tl-item:hover .tl-dot {
  background: var(--accent);
  border-color: var(--accent);
}

.tl-date {
  font-family: var(--mono);
  font-size: 11.5px;
  letter-spacing: 0.04em;
  color: var(--text-faint);
  margin-bottom: 4px;
}

.tl-title {
  font-size: 16px;
  font-weight: 500;
  color: var(--text);
  margin-bottom: 6px;
  line-height: 1.35;
}

.tl-desc {
  font-size: 14px;
  color: var(--text-muted);
  line-height: 1.65;
  margin-bottom: 10px;
}

.tl-link {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  font-size: 12.5px;
  font-weight: 500;
  color: var(--accent);
  text-decoration: none;
  transition: opacity 0.2s;
}

.tl-link:hover { opacity: 0.7; }

.tl-link svg {
  width: 11px;
  height: 11px;
}
</style>
