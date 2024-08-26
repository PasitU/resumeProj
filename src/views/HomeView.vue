<template>
  <div class="flex flex-wrap gap-3">
    <!-- skills -->
    <div class="max-w-min border order-10 border-black p-4 bg-slate-500 order-4">
      <div class="flex justify-between">
        <div class="text-black font-bold">{{ skillRigidity }} Skills</div>
        <input
          type="checkbox"
          class="toggle"
          :class="
            !toggling
              ? 'border-red-500 bg-red-500 hover:bg-red-700'
              : 'border-blue-500 bg-blue-500 hover:bg-blue-700'
          "
          @input="() => console.log(toggling)"
          checked="checked"
          v-model="toggling"
        />
      </div>

      <div class="border border-black bg-slate-800 p-3 mt-2">
        <ul v-show="!toggling">
          Programming Languages:<span class="flex flex-row gap-2"
            ><div class="badge badge-primary"><v-icon name="la-java" scale="1.5"></v-icon>Java</div>
            <div class="badge badge-primary">
              <v-icon name="co-javascript" scale="1.0"></v-icon>&nbsp;Javascript
            </div>
            <div class="badge badge-primary">
              <v-icon name="co-python" scale="1.0"></v-icon>Python
            </div></span
          ><br />
          Frameworks:<span class="flex flex-row gap-2"
            ><div class="badge badge-secondary">
              <v-icon name="co-spring" scale="1.0s"></v-icon>Spring
            </div>
            <div class="badge badge-secondary">
              <v-icon name="io-logo-vue" scale="1.0"></v-icon>&nbsp;VueJs
            </div>
            <div class="badge badge-secondary">
              <v-icon name="co-react" scale="1.0"></v-icon>ReactJs
            </div></span
          ><br />

          Tools:<span>
            <div class="badge badge-accent"><v-icon name="co-figma" scale="1.0"></v-icon>Figma</div>
            <div class="badge badge-accent"><v-icon name="bi-git" scale="1.0"></v-icon>Git</div>
            <div class="badge badge-accent">
              <v-icon name="co-ubuntu" scale="1.0"></v-icon>Linux
            </div>
            <br />
            <div class="badge badge-accent">
              <v-icon name="co-docker" scale="1.0"></v-icon>Docker
            </div>
            <div class="badge badge-accent">
              <v-icon name="si-apachemaven" scale="1.0"></v-icon>Maven
            </div>
            <div class="badge badge-accent"><v-icon name="co-npm" scale="1.0"></v-icon>NPM</div>
            <br />
            <div class="badge badge-accent">
              <v-icon name="co-trello" scale="1.0"></v-icon>Jira/Trello
            </div>
            <div class="badge badge-accent">
              <v-icon name="si-microsoftoffice" scale="1.0"></v-icon>Microsoft Office
            </div>
            <br />
            <div class="badge badge-accent">
              <v-icon name="si-microsoftazure" scale="1.0"></v-icon>Microsoft Azure
            </div>
            <div class="badge badge-accent">
              <v-icon name="si-cypress" scale="1.0"></v-icon>Cypress
            </div>
            <br />
            <div class="badge badge-accent">
              <v-icon name="co-postman" scale="1.0"></v-icon>Postman
            </div>
          </span>
          <br />
          Language Skills:
          <div class="badge badge-primary">English Language: IELTS Band 7.0</div>
          <span></span
          ><br />
        </ul>
        <ul v-show="toggling">
          <div class="w-72">
            <ul>
              Non-technical skills:
              <div class="">
                <span>
                  Interpersonal:<br />
                  <div class="badge badge-accent">Communication and Collaboration</div>
                  <div class="badge badge-accent">Teaching,Instructing and public speaking</div>
                  <div class="badge badge-accent">Leadership and management</div>
                  <br />
                  Personal skills:<br />
                  <div class="badge badge-primary">Adaptability</div>
                  <div class="badge badge-primary">Discipline</div>
                  <div class="badge badge-primary">Quick learner</div>
                  <br />
                  Work related:<br />
                  <div class="badge badge-secondary">Critical Thinking and Problem solving</div>
                  <div class="badge badge-secondary">Open-mindedness</div>
                  <div class="badge badge-secondary">Attentive</div>
                  <div class="badge badge-secondary">Diligent</div>
                  <div class="badge badge-secondary">Self directed</div>
                  <div class="badge badge-secondary">Curiosity</div>
                </span>
              </div>
            </ul>
          </div>
        </ul>
      </div>
    </div>
    <!-- map -->
    <div class="order-1 border order-last border-black bg-slate-500">
      <div class="text-black font-bold">My location</div>
      <div>
        <body :onload="init()">
          <div id="map" class="w-96 h-80"></div>
        </body>
      </div>
    </div>
    <!-- Projects -->
    <div class="order-2 border border-black bg-slate-800 grow">
      <div class="font-bold text-2xl">My Works & Projects</div>
      <div class="border border-black bg-slate-800 p-3 mt-2">
        <div class="join join-vertical w-full">
          <div class="collapse collapse-arrow join-item border-base-300 border">
            <input type="radio" name="my-accordion-4" checked="checked" />
            <div class="collapse-title">
              <div class="text-xl font-medium italic">KANBAN Board WebApp</div>
            </div>
            <div class="collapse-content">
              <div class="flex gap-3 justify-between">
                <ul class="list-disc pl-4">
                  <li>Worked in a SCRUM team to develop a KANBAN task management board WebApp.</li>
                  <li>
                    Created REST backend with Spring Boot and MySQL with a plan to implement JWT for
                    authentication.
                  </li>
                  <li>Frontend created using Vue.js with reusable components.</li>
                  <li>
                    Appoint and attend daily meetings with a consistent schedule to discuss the
                    progress.
                  </li>
                  <a href="https://github.com/PasitU/ITBBK-Release1" class="text-gray-400">
                    <v-icon name="io-logo-github" scale="2.5"></v-icon>
                  </a>
                </ul>
                <img src="../../public/images/projects/itbkk_thumb.png" style="max-width: 280px" />
              </div>
            </div>
          </div>
          <div class="collapse collapse-arrow join-item border-base-300 border">
            <input type="radio" name="my-accordion-4" />
            <div class="collapse-title">
              <div class="text-xl font-medium italic">Online Markdown Parser</div>
            </div>
            <div class="collapse-content">
              <div class="flex gap-3 justify-between">
                <ul class="list-disc pl-4">
                  <li>
                    Created a real-time markdown editor using Vue.js, with simple backend with JSON
                    Server
                  </li>
                  <li>Allow markdown file management and basic user authentication.</li>
                  <a href="https://github.com/PasitU/ProjectMDParser" class="text-gray-400">
                    <v-icon name="io-logo-github" scale="2.5"></v-icon>
                  </a>
                </ul>
                <img src="../../public/images/projects/mdps_thumb2.png" style="max-width: 400px" />
              </div>
            </div>
          </div>
          <div class="collapse collapse-arrow join-item border-base-300 border">
            <input type="radio" name="my-accordion-4" />
            <div class="collapse-title">
              <div class="text-xl font-medium italic">Picross Game with VueJS</div>
            </div>
            <div class="collapse-content">
              <div class="flex gap-3 justify-between">
                <ul class="list-disc pl-4">
                  <li>
                    Single Page Web Application using Vue.js to deliver games of Picross with
                    varying grid sizes.
                  </li>
                  <li>Developed with Scalable difficulty and level designs.</li>
                  <a href="https://github.com/PasitU/ProjectJS1Picross" class="text-gray-400">
                    <v-icon name="io-logo-github" scale="2.5"></v-icon>
                  </a>
                </ul>
                <img src="../../public/images/projects/nhx.png" style="max-width: 280px" />
              </div>
            </div>
          </div>
          <div class="collapse collapse-arrow join-item border-base-300 border">
            <input type="radio" name="my-accordion-4" />
            <div class="collapse-title">
              <div class="text-xl font-medium italic">Personal Web Diary</div>
            </div>
            <div class="collapse-content">
              <div class="flex gap-3 justify-between">
                <ul class="list-disc pl-4">
                  <li>Static web diary: developed using pure HTML and CSS</li>
                  <li>Layout design utilized mainly Grid and Flexbox</li>
                  <li>Project structure organized for adding new pages to be simple.</li>
                  <a href="https://github.com/PasitU/Static-Web-Diary-Public" class="text-gray-400">
                    <v-icon name="io-logo-github" scale="2.5"></v-icon>
                  </a>
                </ul>
                <img
                  src="../../public/images/projects/wtdiary_thumb.png"
                  style="max-width: 280px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Carousel -->
    <div class="order-1 border border-black">
      <div class="carousel rounded-box w-96">
        <div id="slide1" class="carousel-item relative w-full">
          <div class="card bg-base-100 w-96 shadow-xl">
            <figure>
              <img
                src="../../public/images/activities/SIT--288.JPG"
                alt="me speaking at 2024 orientation"
              />
            </figure>
            <div class="card-body">
              <h2 class="card-title underline">
                SIT Orientation 2024, Speaker
                <div class="badge badge-secondary">NEW</div>
                <div class="badge badge-accent">2024</div>
              </h2>
              <p>
                Delivered a speech highlighting the importance of respect and professionalism in
                college environments to 130 freshman students.
              </p>
              <div class="card-actions justify-end">
                <div class="badge badge-outline">Public Speaking</div>
              </div>
            </div>
          </div>
          <div
            class="absolute left-5 right-5 top-1/4 flex -translate-y-1/2 transform justify-between"
          >
            <a href="#slide4" class="btn btn-circle">❮</a>
            <a href="#slide2" class="btn btn-circle">❯</a>
          </div>
        </div>

        <div id="slide2" class="carousel-item relative w-full">
          <div class="card bg-base-100 w-96 shadow-xl">
            <figure>
              <img
                src="../../public/images/activities/Khing-2-01.jpg"
                alt="me speaking at 2024 orientation"
              />
            </figure>
            <div class="card-body">
              <h2 class="card-title underline">
                SIT Student Starter Pack, 2024: Instructor
                <div class="badge badge-secondary">NEW</div>
                <div class="badge badge-accent">2024</div>
              </h2>
              <p>
                Participated as an instructor: Taught IT fundamentals and design thinking as well as
                planned and oversaw in-class activities.
              </p>
              <div class="card-actions justify-end">
                <div class="badge badge-outline">Public Speaking</div>
                <div class="badge badge-outline">Teaching</div>
                <div class="badge badge-outline">Academic</div>
              </div>
            </div>
          </div>
          <div
            class="absolute left-5 right-5 top-1/4 flex -translate-y-1/2 transform justify-between"
          >
            <a href="#slide1" class="btn btn-circle">❮</a>
            <a href="#slide3" class="btn btn-circle">❯</a>
          </div>
        </div>

        <div id="slide3" class="carousel-item relative w-full">
          <div class="card bg-base-100 w-96 shadow-xl">
            <figure>
              <img
                src="../../public/images/activities/Aum-27.jpg"
                alt="me speaking at 2024 orientation"
              />
            </figure>
            <div class="card-body">
              <h2 class="card-title underline">
                Hello World, Extracurricular Teaching Program, 2023: Instructor
                <div class="badge badge-accent">2023</div>
              </h2>
              <p>
                Participated as an instructor: Taught JS and React framework fundamentals and
                supervised another instructor during teaching sessions.
              </p>
              <div class="card-actions justify-end">
                <div class="badge badge-outline">Public Speaking</div>
                <div class="badge badge-outline">Teaching</div>
                <div class="badge badge-outline">Academic</div>
              </div>
            </div>
          </div>
          <div
            class="absolute left-5 right-5 top-1/4 flex -translate-y-1/2 transform justify-between"
          >
            <a href="#slide2" class="btn btn-circle">❮</a>
            <a href="#slide4" class="btn btn-circle">❯</a>
          </div>
        </div>

        <div id="slide4" class="carousel-item relative w-full">
          <div class="card bg-base-100 w-96 shadow-xl">
            <figure>
              <img
                src="../../public/images/activities/Aum-27.jpg"
                alt="me speaking at 2024 orientation"
              />
            </figure>
            <div class="card-body">
              <h2 class="card-title underline">
                Hello World, Extracurricular Teaching Program, 2023: Instructor
                <div class="badge badge-accent">2023</div>
              </h2>
              <p>
                Participated as an instructor: Taught JS and React framework fundamentals and
                supervised another instructor during teaching sessions.
              </p>
              <div class="card-actions justify-end">
                <div class="badge badge-outline">Public Speaking</div>
                <div class="badge badge-outline">Teaching</div>
                <div class="badge badge-outline">Academic</div>
              </div>
            </div>
          </div>
          <div
            class="absolute left-5 right-5 top-1/4 flex -translate-y-1/2 transform justify-between"
          >
            <a href="#slide3" class="btn btn-circle">❮</a>
            <a href="#slide5" class="btn btn-circle">❯</a>
          </div>
        </div>

        <div id="slide5" class="carousel-item relative w-full">
          <div class="card bg-base-100 w-96 shadow-xl">
            <figure>
              <img
                src="../../public/images/activities/Aum-27.jpg"
                alt="me speaking at 2024 orientation"
              />
            </figure>
            <div class="card-body">
              <h2 class="card-title underline">
                Hello World, Extracurricular Teaching Program, 2023: Instructor
                <div class="badge badge-accent">2023</div>
              </h2>
              <p>
                Participated as an instructor: Taught JS and React framework fundamentals and
                supervised another instructor during teaching sessions.
              </p>
              <div class="card-actions justify-end">
                <div class="badge badge-outline">Public Speaking</div>
                <div class="badge badge-outline">Teaching</div>
                <div class="badge badge-outline">Academic</div>
              </div>
              <div
                class="absolute left-5 right-5 top-1/4 flex -translate-y-1/2 transform justify-between"
              >
                <a href="#slide4" class="btn btn-circle">❮</a>
                <a href="#slide1" class="btn btn-circle">❯</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
/**CoFigma,
  BiGit,
  CoUbuntu,
  CoDocker,
  SiApachemaven,
  CoNpm,
  CoTrello,
  SiMicrosoftoffice,
  SiMicrosoftazure,
  SiCypress,
  CoPostman */
import { ref, computed, onMounted } from 'vue'
import { loadScript } from 'vue-plugin-load-script'
onMounted(async () => {
  try {
    await loadScript('https://api.longdo.com/map/?key=17853246b2589571f118cff66bdd7899')
    init()
  } catch (error) {
    console.error('Failed to load Longdo script:', error)
  }
})

let toggling = ref(false)
const skillRigidity = computed(() => {
  return toggling.value ? 'Soft' : 'Hard'
})
var map

function init() {
  if (typeof longdo === 'undefined') {
    console.error('Longdo API is not available.')
    return
  }

  map = new longdo.Map({
    placeholder: document.getElementById('map')
  })
  var marker = new longdo.Marker({ lon: 100.532, lat: 13.66 })
  map.location({ lon: 100.532, lat: 13.66 }, true)
  map.Overlays.add(marker)
}
</script>
