<script setup>
import SectionHeader from '@/components/SectionHeader.vue'
import { useMediumFeed } from '@/composables/useMediumFeed'
import { useFadeIn } from '@/composables/useFadeIn'

const { posts, loading, error } = useMediumFeed('mabadejedaniel1', 6)
useFadeIn()
</script>

<template>
  <section class="page-section fade-in blog-section">
    <SectionHeader
      label="Writing"
      title="From the blog."
      desc='Thoughts on PHP, software architecture, open source, and building things. Read everything on <a href="https://medium.com/@mabadejedaniel1" target="_blank" rel="noopener">Medium →</a>'
    />

    <!-- Loading skeleton -->
    <div v-if="loading" class="blog-grid">
      <div v-for="i in 6" :key="i" class="blog-skeleton">
        <div class="skel skel-date"></div>
        <div class="skel skel-title"></div>
        <div class="skel skel-title short"></div>
        <div class="skel skel-line"></div>
        <div class="skel skel-line"></div>
        <div class="skel skel-line short"></div>
      </div>
    </div>

    <!-- Error state -->
    <div v-else-if="error" class="blog-error">
      <p>Couldn't load posts automatically.</p>
      <a href="https://medium.com/@mabadejedaniel1" target="_blank" rel="noopener" class="btn btn-ghost">
        Read on Medium →
      </a>
    </div>

    <!-- Posts -->
    <div v-else class="blog-grid">
      <a
        v-for="post in posts"
        :key="post.link"
        :href="post.link"
        target="_blank"
        rel="noopener"
        class="blog-card"
      >
        <div class="blog-date">{{ post.date }}</div>
        <h3 class="blog-title">{{ post.title }}</h3>
        <p class="blog-excerpt">{{ post.excerpt }}</p>
        <span class="blog-read-more">Read on Medium →</span>
      </a>
    </div>
  </section>
</template>

<style scoped>
.blog-section { padding-top: 96px; }

.blog-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 16px;
}

.blog-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 20px 22px;
  transition: border-color 0.2s, transform 0.2s;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.blog-card:hover {
  border-color: var(--border-strong);
  transform: translateY(-2px);
}

.blog-date {
  font-family: var(--mono);
  font-size: 10.5px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--text-faint);
}

.blog-title {
  font-size: 15px;
  font-weight: 500;
  color: var(--text);
  line-height: 1.4;
}

.blog-excerpt {
  font-size: 13px;
  color: var(--text-muted);
  line-height: 1.6;
  flex: 1;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.blog-read-more {
  font-family: var(--mono);
  font-size: 11px;
  color: var(--accent);
  margin-top: 4px;
}

/* Skeleton loader */
.blog-skeleton {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 20px 22px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.skel {
  background: var(--bg-subtle);
  border-radius: 4px;
  animation: shimmer 1.5s ease-in-out infinite;
}

.skel-date   { height: 10px; width: 80px; }
.skel-title  { height: 14px; width: 90%; }
.skel-title.short { width: 60%; }
.skel-line   { height: 11px; width: 100%; }
.skel-line.short { width: 75%; }

@keyframes shimmer {
  0%, 100% { opacity: 0.5; }
  50%       { opacity: 1; }
}

/* Error state */
.blog-error {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  padding: 40px 0;
}

.blog-error p {
  font-size: 15px;
  color: var(--text-muted);
}
</style>
