<script setup>
import { RouterLink, RouterView, useRoute } from 'vue-router'
import { ref } from 'vue'
import home from './views/HomeView.vue'
let copyIcon = ref(null)
function copyText(text) {
  navigator.clipboard.writeText(text)
}
</script>

<template>
  <div class="flex flex-row" style="background-color: rgb(29, 35, 42)">
    <aside id="default-sidebar" class="top-0 left-0 z-40 w-96 .h-screen" aria-label="Sidebar">
      <!-- side content -->
      <div class="h-full px-3 py-4 overflow-visible dark:bg-gray-800 flex flex-col items-center">
        <h1 class="self-start text-3xl font-lost">
          <span class="underline underline-offset-4">Phasit</span> Udompanish
        </h1>
        <h2 class="self-start text-xl underline font-mono">Full-Stack Developer</h2>
        <img class="mt-4" src="../public/images/SIT288cropped.png" style="max-width: 280px" />
        <div class="-ml-64 pt-4">
          <ul class="timeline timeline-vertical">
            <li>
              <div class="timeline-middle">
                <v-icon name="gi-plain-circle" scale="1.1"></v-icon>
              </div>
              <div class="timeline-end timeline-box w-max">Junior Student at SIT KMUTT</div>
              <hr />
            </li>
            <li>
              <hr />
              <div class="timeline-middle">
                <v-icon name="gi-plain-circle" scale="1.1"></v-icon>
              </div>
              <div class="timeline-end timeline-box w-max">Major: Information Technology</div>
              <hr />
            </li>
            <li>
              <hr />
              <div class="timeline-middle">
                <v-icon name="gi-plain-circle" scale="1.1"></v-icon>
              </div>
              <div
                class="timeline-end timeline-box w-max cursor-pointer"
                @click="copyText('pasit8707@gmail.com')"
              >
                Email: pasit8707@gmail.com<v-icon
                  name="co-copy"
                  scale="1.2"
                  ref="copyIcon"
                ></v-icon>
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div class="timeline-middle">
                <v-icon name="gi-plain-circle" scale="1.1"></v-icon>
              </div>
              <div class="timeline-end timeline-box w-max">Phone: 095-957-2121</div>
              <hr />
            </li>
            <li>
              <hr />
              <div class="timeline-middle">
                <v-icon name="gi-plain-circle" scale="1.1"></v-icon>
              </div>
              <div class="timeline-end timeline-box text-sm w-max">
                Location: Samutprakarn-Bangkok,<br />
                Thailand
              </div>
            </li>
          </ul>
        </div>
        <div class="mt-4">
          <div class="w-max font-bold text-xl underline">Education & Job Experience</div>
          <div>hover for more details</div>
          <ul class="-mt-16 timeline">
            <li>
              <div class="timeline-start italic">2016-2021<br /></div>
              <div class="timeline-middle">
                <v-icon name="bi-check-circle-fill" fill="#3fc380"></v-icon>
              </div>
              <div
                data-tip="middle school - high school: received 3 consecutive annual awards for academic excellence and honor student awards"
                class="tooltip tooltip-right timeline-end timeline-box bg-red-500 text-black font-bold text-center before:whitespace-pre-wrap before:content-[attr(data-tip)]"
              >
                <span class="underline">Study</span><br /><span class="text-xl">ACSP</span
                ><br /><span class="text-xs">GPAX:3.98</span>
              </div>
              <hr style="background-color: #3fc380" />
            </li>
            <li>
              <hr style="background-color: #3fc380" />
              <div class="timeline-start italic">2022</div>
              <div class="timeline-middle">
                <v-icon name="bi-check-circle-fill" fill="#3fc380"></v-icon>
              </div>
              <div
                data-tip="Taught High-school level Mathmatics, Physics, Chemitry, Biology, English and more to highschool students"
                class="lg:tooltip timeline-end timeline-box bg-blue-500 text-black font-bold underline-offset-2s"
              >
                <span class="underline">Work</span><br /><span class="text-lg"
                  >Freelance<br />
                  Tutor</span
                >
              </div>
              <hr style="background-color: #3fc380" />
            </li>
            <li>
              <hr style="background-color: #3fc380" />
              <div class="timeline-start italic">2022-2025</div>
              <div class="timeline-middle">
                <v-icon name="hi-dots-circle-horizontal" fill="#7480ff"></v-icon>
              </div>
              <div
                data-tip="Awarded 2 consecutive scholarships award for excellent academic performance"
                class="tooltip timeline-end timeline-box bg-orange-400 text-black font-bold text-center"
              >
                <span class="underline">Study</span><br /><span class="text-xl">SIT KMUTT</span
                ><br /><span class="text-xs">GPAX:3.99</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </aside>

    <div class="flex-1 flex flex-col">
      <!-- navbar -->
      <div class="border-gray-200 bg-zinc-400 h-16">
        <div class="flex flex-wrap pt-4 justify-between items-center">
          <div class="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1">
            <ul class="flex font-medium">
              <li>
                <RouterLink
                  :to="{ name: 'resume' }"
                  class="font-lost text-neutral-800 pt-6 pl-6 pr-6 pb-6"
                  :style="
                    $route.name === 'resume'
                      ? 'background-color: rgb(29, 35, 42); color:white;'
                      : ''
                  "
                  >Resume
                </RouterLink>
              </li>
              <li>
                <RouterLink
                  :to="{ name: 'portfolio' }"
                  class="font-lost text-neutral-800 pt-6 pl-6 pr-6 pb-6"
                  :style="
                    $route.name === 'portfolio'
                      ? 'background-color: rgb(29, 35, 42); color:white;'
                      : ''
                  "
                >
                  <a class="pt-2 pl-3 pr-3 pb-2">Portfolio (Under Construction)</a>
                </RouterLink>
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
      <div><RouterView /></div>
    </div>
  </div>
</template>

<style scoped>
@font-face {
  font-family: 'dragalia';
  src: url(../public/fonts/dragalia.otf);
}
</style>
