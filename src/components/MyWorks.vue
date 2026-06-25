<script setup>
import { ref, computed, onMounted } from 'vue'
import { works, catLabels } from '@/data/portfolio'

const filters = [
  { key: 'all',      label: 'All' },
  { key: 'team',     label: 'With Teams' },
  { key: 'freelance',label: 'Freelance' },
  { key: 'personal', label: 'Personal / OSS' },
]

const activeFilter = ref('all')

const shuffled = ref([...works].sort(() => Math.random() - 0.5))

const filtered = computed(() =>
  activeFilter.value === 'all'
    ? shuffled.value
    : shuffled.value.filter((w) => w.cat === activeFilter.value)
)
</script>

<template>
  <div class="my-works">
    <!-- Filter bar -->
    <div class="works-filter">
      <button
        v-for="f in filters"
        :key="f.key"
        class="filter-btn"
        :class="{ active: activeFilter === f.key }"
        @click="activeFilter = f.key"
      >
        {{ f.label }}
      </button>
    </div>

    <!-- Grid -->
    <TransitionGroup name="cards" tag="div" class="works-grid">
      <a
        v-for="work in filtered"
        :key="work.title"
        :href="work.link"
        target="_blank"
        rel="noopener"
        class="work-card"
      >
        <img :src="work.img" :alt="work.title" @error="$event.target.style.display = 'none'" />
        <div class="work-card-body">
          <div class="work-card-cat">{{ catLabels[work.cat] || work.cat }}</div>
          <div class="work-card-title">{{ work.title }}</div>
          <div class="work-card-desc">{{ work.desc }}</div>
        </div>
      </a>
    </TransitionGroup>

    <!-- Other projects -->
    <div class="other-projects">
      <p>
        Other projects:
        <a href="https://veohmo.com/" target="_blank">Veo HMO</a>,
        <a href="https://myazabox.com/" target="_blank">Azabox Africa</a>,
        <a href="https://github.com/DanielMabadeje/recruitment-app-group-12" target="_blank">Recruitment App</a>,
        <a href="https://app.workforyou.ch/" target="_blank">WorkForYou</a>,
        <a href="https://github.com/DanielMabadeje/Mvc-Framework" target="_blank">MVC Framework</a>,
        <a href="https://getmotf.vercel.app/" target="_blank">Motf</a>,
        SmileSwap, Halo, Rimplenet Plugin, Learnali
      </p>
    </div>
  </div>
</template>

<style scoped>
.works-filter {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-bottom: 32px;
}

.filter-btn {
  padding: 6px 16px;
  border-radius: 99px;
  font-size: 13px;
  font-weight: 400;
  border: 1px solid var(--border);
  background: transparent;
  color: var(--text-muted);
  cursor: pointer;
  transition: all 0.2s;
  font-family: var(--sans);
}

.filter-btn:hover {
  border-color: var(--border-strong);
  color: var(--text);
}

.filter-btn.active {
  background: var(--text);
  color: var(--bg);
  border-color: var(--text);
}

.works-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 16px;
}

.work-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  overflow: hidden;
  transition: transform 0.2s, border-color 0.2s, box-shadow 0.2s;
  text-decoration: none;
  display: block;
}

.work-card:hover {
  transform: translateY(-3px);
  border-color: var(--border-strong);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
}

.work-card img {
  width: 100%;
  aspect-ratio: 16/9;
  object-fit: cover;
  border-bottom: 1px solid var(--border);
  display: block;
}

.work-card-body {
  padding: 16px 18px 20px;
}

.work-card-cat {
  font-family: var(--mono);
  font-size: 10.5px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--text-faint);
  margin-bottom: 6px;
}

.work-card-title {
  font-weight: 500;
  font-size: 15.5px;
  color: var(--text);
  margin-bottom: 6px;
}

.work-card-desc {
  font-size: 13.5px;
  color: var(--text-muted);
  line-height: 1.55;
}

.other-projects {
  margin-top: 28px;
}

.other-projects p {
  font-size: 14px;
  color: var(--text-muted);
}

.other-projects a {
  color: var(--accent);
  text-decoration: none;
}

.other-projects a:hover {
  text-decoration: underline;
}

/* Card transition */
.cards-enter-active,
.cards-leave-active {
  transition: opacity 0.25s, transform 0.25s;
}

.cards-enter-from,
.cards-leave-to {
  opacity: 0;
  transform: scale(0.97);
}
</style>
