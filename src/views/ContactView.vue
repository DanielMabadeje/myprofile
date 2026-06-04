<script setup>
import SectionHeader from '@/components/SectionHeader.vue'
import { useFadeIn } from '@/composables/useFadeIn'
useFadeIn()

const socials = [
  { label: 'GitHub',       handle: 'DanielMabadeje',                     url: 'https://github.com/DanielMabadeje' },
  { label: 'X / Twitter',  handle: '@mabadejedanphp',                   url: 'https://x.com/mabadejedanphp' },
  { label: 'LinkedIn',     handle: 'Daniel Mabadeje',                    url: 'https://www.linkedin.com/in/daniel-mabadeje-173b68169/' },
  { label: 'Medium',       handle: '@mabadejedaniel1',                   url: 'https://medium.com/@mabadejedaniel1' },
  { label: 'Community',    handle: 'PHPTalks Nigeria',                   url: 'https://phptalks.community/' },
]
</script>

<template>
  <section class="page-section fade-in contact-section">
    <div class="contact-grid">
      <div class="contact-left">
        <SectionHeader
          label="Contact"
          title="Let's build<br>something."
        />
        <p class="contact-intro">
          Whether it's a product idea, a speaking invite, a collaboration, or just a chat
          about PHP — my inbox is open.
        </p>
        <a href="mailto:mabadejedaniel1@gmail.com" class="contact-email">
          mabadejedaniel1@gmail.com
        </a>
      </div>

      <div class="contact-right">
        <p class="find-me-label">Find me on</p>
        <div class="social-list">
          <a
            v-for="s in socials"
            :key="s.label"
            :href="s.url"
            target="_blank"
            rel="noopener"
            class="social-row"
          >
            <span class="social-label">{{ s.label }}</span>
            <span class="social-handle">{{ s.handle }}</span>
            <svg class="social-arrow" viewBox="0 0 14 10" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
              <path d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact-section { padding-top: 96px; min-height: calc(100vh - var(--nav-h)); }

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: start;
}

.contact-intro {
  font-size: 16px;
  color: var(--text-muted);
  line-height: 1.7;
  margin-bottom: 28px;
  max-width: 380px;
}

.contact-email {
  font-family: var(--serif);
  font-size: clamp(18px, 2.5vw, 28px);
  color: var(--text);
  letter-spacing: -0.5px;
  text-decoration: none;
  border-bottom: 1px solid var(--border);
  padding-bottom: 6px;
  display: inline-block;
  transition: border-color 0.2s, color 0.2s;
}

.contact-email:hover {
  border-color: var(--accent);
  color: var(--accent);
}

.contact-right { padding-top: 56px; }

.find-me-label {
  font-family: var(--mono);
  font-size: 11px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--text-faint);
  margin-bottom: 20px;
}

.social-list { display: flex; flex-direction: column; }

.social-row {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 14px 0;
  border-bottom: 1px solid var(--border);
  text-decoration: none;
  color: var(--text-muted);
  transition: color 0.2s;
}

.social-row:last-child { border-bottom: none; }
.social-row:hover { color: var(--text); }
.social-row:hover .social-arrow { opacity: 1; transform: translateX(3px); }

.social-label {
  font-family: var(--mono);
  font-size: 11.5px;
  color: var(--text-faint);
  min-width: 90px;
}

.social-handle { font-size: 14px; flex: 1; }

.social-arrow {
  width: 12px; height: 12px;
  opacity: 0;
  transition: opacity 0.2s, transform 0.2s;
}

@media (max-width: 720px) {
  .contact-grid { grid-template-columns: 1fr; gap: 40px; }
  .contact-right { padding-top: 0; }
}
</style>
