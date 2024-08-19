<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div class="flex flex-row">
    <aside id="default-sidebar" class="top-0 left-0 z-40 w-96 h-screen" aria-label="Sidebar">
      <!-- side content -->
      <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800"></div>
    </aside>

    <div class="flex-1 flex flex-col">
      <!-- navbar -->
      <div class="bg-white border-gray-200 dark:bg-gray-800 h-16">
        <div class="flex flex-wrap justify-between items-center">
          <a class="flex items-center pt-2 pl-3 pr-3 pb-2 bg-orange-500">
            <v-icon name="io-home-sharp" scale="2.5" />
          </a>

          <div class="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1">
            <ul class="flex flex-col font-medium lg:flex-row lg:space-x-8">
              <li>
                <a class="text-gray-400">Resume</a>
              </li>
              <li>
                <a class="text-gray-400">Portfolio</a>
              </li>
            </ul>
          </div>

          <div class="flex items-center order-2 gap-5">
            <a href="https://www.linkedin.com/in/pasit-udompanich-924791312" class="text-gray-400">
              <img
                src="../public/images/LinkedIn_logo_initials.png"
                alt="linkedin"
                width="35"
                height="35"
              />
            </a>
            <a href="https://www.github.com/pasitu" class="text-gray-400">
              <img src="../public/images/25231.png" alt="github" width="35" height="35" />
            </a>
            <a href="https://www.instagram.com/pasit494/" class="text-gray-400">
              <img
                src="../public/images/Instagram_icon.png.webp"
                alt="Instagram"
                width="35"
                height="35"
              />
            </a>
            <a href="https://www.facebook.com/pasit.udompanich" class="text-gray-400 pr-4">
              <img
                src="../public/images/Facebook_Logo_(2019).png.webp"
                alt="Facebook"
                width="35"
                height="35"
              />
            </a>
          </div>
        </div>
      </div>
      <!-- Content -->
      <div>content</div>
    </div>
  </div>
</template>

<style scoped></style>
