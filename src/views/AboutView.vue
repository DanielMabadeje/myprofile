<script setup>
import SectionHeader from '@/components/SectionHeader.vue'
import { useFadeIn } from '@/composables/useFadeIn'
useFadeIn()
</script>

<template>
  <section class="page-section fade-in about-section">
    <div class="about-grid">
      <!-- Photo mosaic -->
      <div class="photo-mosaic">
        <img
          class="photo-main"
          src="https://media.licdn.com/dms/image/D5603AQENUCMOjhlLyA/profile-displayphoto-shrink_400_400/0/1704105364250?e=2147483647&v=beta&t=JsAYr4EUbTxZ3B7NBVQBBmkznltr3lZkTiuvjgGgSJU"
          alt="Daniel Mabadeje"
        />
        <img
          src="https://pbs.twimg.com/media/GCf0c_rXQAAha9W?format=jpg&name=medium"
          alt="Speaking at event"
        />
        <img
          src="https://instagram.flos5-3.fna.fbcdn.net/v/t51.29350-15/463136320_1261397385279824_8350760975730724955_n.webp?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0NDAuc2RyLmYyOTM1MC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.flos5-3.fna.fbcdn.net&_nc_cat=108&_nc_ohc=1Coenf_VH3cQ7kNvgHoF-ou&_nc_gid=3b16788657da453abfc8a79e72a37517&edm=AP4sbd4BAAAA&ccb=7-5&ig_cache_key=MzQ3NzQzOTUzMzI3OTE5MDk5MA%3D%3D.3-ccb7-5&oh=00_AYBWdSKHftT_U1OFYx5piiof39Rfu4GTc0HsKqvQa97vCg&oe=6756B9B2&_nc_sid=7a9f4b"
          alt="Community event"
        />
        <img
          src="https://pbs.twimg.com/media/F4-cXi2XwAEIAZF?format=jpg&name=large"
          alt="Conference"
        />
      </div>

      <!-- Content -->
      <div class="about-content">
        <SectionHeader label="About" title="Developer.<br>Speaker. Builder." />

        <p>
          I'm <strong>Daniel Mabadeje</strong>, a full-stack software developer with a deep love for
          PHP, Laravel, and building things that matter. I work across the stack — mobile, web,
          blockchain, and wherever the problem takes me.
        </p>
        <p>
          Beyond client work, I co-founded <strong>PHPTalks Nigeria</strong>, a growing community
          of 1,400+ developers where I help organize events, facilitate learning, and push PHP into
          unconventional domains.
        </p>
        <p>
          I've shipped products in fintech, healthcare, insurance, and SaaS — and I still believe
          the best code is code that solves a real problem for a real person.
        </p>
        <p>
          When I'm not coding, I'm probably playing drums, speaking at a conference, or writing
          about things I've learned on
          <a href="https://medium.com/@mabadejedaniel1" target="_blank" rel="noopener">Medium</a>.
        </p>

        <div class="skill-pills">
          <span class="pill accent">PHP / Laravel</span>
          <span class="pill accent">Vue.js / TypeScript</span>
          <span class="pill accent">.NET / C#</span>
          <span class="pill accent">NativePHP</span>
          <span class="pill">Open Source</span>
          <span class="pill">WebRTC</span>
          <span class="pill">Blockchain</span>
          <span class="pill">Livewire</span>
          <span class="pill">Filament</span>
          <span class="pill">Community</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-section { padding-top: 96px; }

.about-grid {
  display: grid;
  grid-template-columns: 1fr 1.4fr;
  gap: 60px;
  align-items: start;
}

/* Photo mosaic */
.photo-mosaic {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto;
  gap: 8px;
}

.photo-mosaic img {
  width: 100%;
  aspect-ratio: 1;
  object-fit: cover;
  border-radius: var(--radius);
  filter: grayscale(15%);
  transition: filter 0.3s, transform 0.3s;
}

.photo-mosaic img:hover {
  filter: grayscale(0%);
  transform: scale(1.02);
}

.photo-main {
  grid-row: span 2;
  aspect-ratio: unset !important;
  height: 100%;
}

/* Content */
.about-content p {
  color: var(--text-muted);
  line-height: 1.75;
  margin-bottom: 16px;
  font-size: 16px;
}

.about-content p strong { color: var(--text); font-weight: 500; }

.about-content a {
  color: var(--accent);
  text-decoration: none;
}

.skill-pills {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 28px;
}

@media (max-width: 720px) {
  .about-grid { grid-template-columns: 1fr; }
  .photo-main { grid-row: span 1; aspect-ratio: 1 !important; }
}
</style>
