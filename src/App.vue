<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'

</script>

<template>
  <header>
    <nav class="bg-white border-gray-200 dark:bg-transparent">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="" class="flex items-center space-x-3 rtl:space-x-reverse">
          <!-- <h1>DM</h1> -->
          <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">DM</span>
        </a>
        <button data-collapse-toggle="navbar-default" type="button"
          class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
        <div class="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul
            class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <RouterLink to="/"
                class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                aria-current="page">Home</RouterLink>
            </li>
            <li>
              <RouterLink to="/works"
                class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                Work</RouterLink>
            </li>
            <li>
              <RouterLink to="/about"
                class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                About</RouterLink>
            </li>
            <li>
              <RouterLink to="/speaking"
                class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                Speaking</RouterLink>
            </li>
            <li>
              <a href="mailto:mabadejedaniel1@gmail.com"
                class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>

  <RouterView />


  <div class="container m-auto pt-20 p-5 md:w-9/12">
    <div class="py-20">

      <div class="w-full  bg-white dark:bg-transparent  dark:border-gray-700  p-5">
        <div class="py-5">
          <h2 class="text-3xl font-semibold text-gray-900 dark:text-white mb-2">Contact details</h2>
        </div>
        <address
          class="relative bg-gray-50 dark:bg-gray-700 dark:border-gray-600 p-4 rounded-lg  border-gray-200 not-italic grid grid-cols-2">
          <div class="space-y-2 text-gray-500 dark:text-gray-400 leading-loose hidden sm:block">
            Email <br />
          </div>
          <div id="contact-details" class="space-y-2 text-gray-900 dark:text-white font-medium leading-loose">
            mabadejedaniel1@gmail.com <br />
          </div>
          <button data-copy-to-clipboard-target="contact-details" data-copy-to-clipboard-content-type="textContent"
            data-tooltip-target="tooltip-contact-details"
            class="absolute end-2 top-2 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg p-2 inline-flex items-center justify-center">
            <span id="default-icon-contact-details">
              <svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                viewBox="0 0 18 20">
                <path
                  d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z" />
              </svg>
            </span>
            <span id="success-icon-contact-details" class="hidden inline-flex items-center">
              <svg class="w-3.5 h-3.5 text-blue-700 dark:text-blue-500" aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M1 5.917 5.724 10.5 15 1.5" />
              </svg>
            </span>
          </button>
          <div id="tooltip-contact-details" role="tooltip"
            class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
            <span id="default-tooltip-message-contact-details">Copy to clipboard</span>
            <span id="success-tooltip-message-contact-details" class="hidden">Copied!</span>
            <div class="tooltip-arrow" data-popper-arrow></div>
          </div>
        </address>
      </div>

    </div>
  </div>

  <footer class="bg-white dark:bg-gray-900 mt-4">
    <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
      <div class="sm:flex sm:items-center sm:justify-between">
        <a href="" class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
          <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">DM</span>
        </a>
        <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
          <li>
            <a href="https://events.phptalks.community/" class="hover:underline me-4 md:me-6">Community</a>
          </li>
          <li>
            <a href="mailto:mabadejedaniel1@gmail.com" class="hover:underline">Contact</a>
          </li>
        </ul>
      </div>
      <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="https://flowbite.com/"
          class="hover:underline">Daniel Mabadeje</a>. All Rights Reserved.</span>
    </div>
  </footer>


</template>

<style scoped></style>
