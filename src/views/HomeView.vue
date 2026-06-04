<script setup>
import TypeWriter from '@/components/TypeWriter.vue'
import { onMounted } from 'vue'

onMounted(() => {
  // Fade in hero on load
  document.querySelector('.hero')?.classList.add('visible')
})
</script>

<template>
  <section class="hero page-section fade-in">
    <div class="hero-eyebrow">
      <span class="eyebrow-line"></span>
      Based in Lagos, Nigeria
    </div>

    <h1>
      Full-Stack <em>Software</em><br />
      Developer &amp; Community<br />
      Builder.<TypeWriter :words="['', ' PHP Evangelist.', ' Open Sourcer.', ' Speaker.']" :pauseMs="1600" />
    </h1>

    <p class="hero-sub">
      I build products that solve real problems — across fintech, healthcare, mobile,
      and the open web. Co-founder of
      <a href="https://phptalks.community/" target="_blank" rel="noopener">PHPTalks Nigeria</a>,
      a community of 1,400+ PHP developers.
    </p>

    <div class="hero-actions">
      <RouterLink to="/works" class="btn btn-primary">View my work →</RouterLink>
      <RouterLink to="/contact" class="btn btn-ghost">Get in touch</RouterLink>
    </div>

    <div class="hero-social">
      <a href="https://github.com/DanielMabadeje" target="_blank" rel="noopener">GitHub</a>
      <a href="https://twitter.com/DanielsMabadeje" target="_blank" rel="noopener">Twitter/X</a>
      <a href="https://www.linkedin.com/in/daniel-mabadeje-173b68169/" target="_blank" rel="noopener">LinkedIn</a>
      <a href="https://medium.com/@mabadejedaniel1" target="_blank" rel="noopener">Medium</a>
      <a href="https://phptalks.community/" target="_blank" rel="noopener">PHPTalks</a>
    </div>
  </section>
</template>

<style scoped>
.hero {
  min-height: calc(100vh - var(--nav-h));
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 96px;
}

.hero-eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-family: var(--mono);
  font-size: 11.5px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--text-faint);
  margin-bottom: 28px;
}

.eyebrow-line {
  display: inline-block;
  width: 24px;
  height: 1px;
  background: var(--text-faint);
}

h1 {
  font-family: var(--serif);
  font-size: clamp(42px, 6vw, 72px);
  line-height: 1.08;
  letter-spacing: -2px;
  color: var(--text);
  max-width: 780px;
  margin-bottom: 24px;
}

h1 em {
  font-style: italic;
  color: var(--text-muted);
}

.hero-sub {
  font-size: 17px;
  color: var(--text-muted);
  max-width: 520px;
  line-height: 1.7;
  margin-bottom: 36px;
}

.hero-sub a {
  color: var(--accent);
  text-decoration: none;
}

.hero-actions {
  display: flex;
  gap: 12px;
  align-items: center;
  flex-wrap: wrap;
}

.hero-social {
  display: flex;
  gap: 20px;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 52px;
  padding-top: 32px;
  border-top: 1px solid var(--border);
}

.hero-social a {
  font-family: var(--mono);
  font-size: 11.5px;
  letter-spacing: 0.04em;
  color: var(--text-faint);
  text-decoration: none;
  transition: color 0.2s;
}

.hero-social a:hover {
  color: var(--accent);
}

@media (max-width: 600px) {
  h1 { letter-spacing: -1px; }
}
</style>
