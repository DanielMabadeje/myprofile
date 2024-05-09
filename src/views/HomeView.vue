<script setup>
// import TheWelcome from '../components/TheWelcome.vue'
import TheLandingPage from '../components/TheLandingPage.vue'
import MyWorks from '../components/MyWorks.vue'
import TypeWriterComponent from '../components/TypeWriterComponent.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
// import { byPrefixAndName } from '@awesome.me/kit-KIT_CODE/icons'

library.add(fas);
</script>

<template>
  <main>

    <div class="container m-auto md:pt-20">
      <div class="text-center my-5 pt-7 m-auto md:w-4/5">
        <h1 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
          <span class="text-gray-500">Software Developer.</span>
          Passionate About Solving <span
            class="underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600">Problems</span>
          Through / With The Use Of 
          <TypeWriterComponent :words="['PHP', 'Community']"></TypeWriterComponent>
        </h1>
        <div class="m-auto text-center p-5 md:w-3/5 ">
          <p class="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
            <!-- Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth. -->
          <span class="md:mr-4 md:pr-4 border-r border-gray-200 dark:bg-gray-700 dark:border-gray-600">
            <a class="p-2"  href="https://www.instagram.com/mabadejedaniel/">
              <font-awesome-icon :icon="['fab', 'instagram']" />
            </a>
            <a class="p-2" target="blank" href="https://www.facebook.com/danielmabadeje.56">
              <font-awesome-icon :icon="['fab','facebook']" />
            </a>
            <a class="p-2" target="blank" href="https://github.com/DanielMabadeje">
              <font-awesome-icon :icon="['fab', 'github']" />
            </a>
            <a class="p-2" target="blank" href="https://twitter.com/DanielsMabadeje">
              <font-awesome-icon :icon="['fab', 'twitter']" />
            </a>
            <a class="p-2" target="blank" href="https://www.linkedin.com/in/daniel-mabadeje-173b68169/">
              <font-awesome-icon :icon="['fab', 'linkedin']" />
            </a>
            <a class="p-2" target="blank" href="https://medium.com/@mabadejedaniel1">
              <font-awesome-icon :icon="['fab', 'medium']" />
            </a>

            <!-- <a href="https://dev.to/danielmabadeje">
              <img src="https://d2fltix0v2e0sb.cloudfront.net/dev-badge.svg" alt="Daniel Mabadeje's DEV Profile"
                height="10" width="10"
                >
            </a> -->

          </span>
          <a href="mailto:">mabadejedaniel1@gmail.com</a>
          </p>
        </div>
      </div>
    </div>


    <div class="container m-auto pt-20 p-5 md:w-9/12">
      <MyWorks/>
    </div>
    <TheLandingPage />
  </main>
</template>

<style scoped>

  /* import '@fortawesome/fontawesome-free/css/all.css'; */
</style>