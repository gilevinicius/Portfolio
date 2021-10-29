var vm = new Vue({
  vuetify: new Vuetify(),
  el: "#app",
  data: function data() {
    return {
      containerMenu: true,
      bttMenu: true,
      drawer: false,

      section0: true,
      section1: true,
      section2: true,
      section3: true,
      section4: true,

      iconX: "fa-times",

      dialog1: false,
      dialog2: false,
      dialog3: false,
      dialog4: false,
      dialog5: false,
      dialog6: false,
    }
  },
  methods: {

   
    
  },
  watch: {
    
  },
})

function preLoader() {
  var preLoad = document.querySelector("#preLoad")
  preLoad.style.display = "none"
}
setTimeout(preLoader, 4000)

// Animacao digitando
let i = 0
let message = 'Olá! Meu nome é Gileade Vinicius e sou desenvolvedor web.'
function anima() {
  if (i < message.length) {
    document.getElementById('text').innerHTML += message.charAt(i);
    i++;
    setTimeout(anima, 100);
  }
}
setTimeout(anima, 5000)

// Scroll para os links internos
const linksInternos = document.querySelectorAll(".scroll a[href^='#']");

function scrollToSection(event) {
  event.preventDefault()
  const href = event.currentTarget.getAttribute("href")
  const section = document.querySelector(href)
  section.scrollIntoView({
    behavior: "smooth",
    block: "start",
  })
}
linksInternos.forEach((link) => {
  link.addEventListener("click", scrollToSection)
})


