// nav
let toggle = document.querySelector('.bar')
let navLink = document.querySelector('.nav-link')
let link = document.querySelector('.link')
let quote = document.querySelector('.quote')

// quote
async function getQuote () {
  let data = await fetch('https://api.quotable.io/random')
  let response = await data.json()

  displayQuote(`${response.content}    ~ ${response.author}`)
  setTimeout(getQuote, 8000)
}
getQuote()

// quote function
function displayQuote (quotes) {
  quote.textContent = quotes
}

// nav
toggle.addEventListener('click', function () {
  let navHeight = navLink.getBoundingClientRect().height
  let linkHeight = link.getBoundingClientRect().height

  if (navHeight === 0) {
    navLink.style.height = `${linkHeight}px`
  } else {
    navLink.style.height = 0
  }
})

let aNav = document.querySelectorAll('link')

aNav.forEach(function (item) {
  item.addEventListener('click', function (e) {
    e.preventDefault()
    let att = e.target.getAttribute('href').slice(1)
    let doc = document.getElementById(att)
    let navHeight = navLink.getBoundingClientRect().height
    let linkHeight = link.getBoundingClientRect().height
    let position = doc.offsetTop - navHeight

    window.scrollTo({
      left: 0,
      top: position
    })
  })
})

// time
let time = document.querySelector('.time')
let date = document.querySelector('.date')
let greeting = document.querySelector('.greeting')

function displayTime () {
  let today = new Date()
  let hour = today.getHours()
  let min = today.getMinutes()
  let sec = today.getSeconds()
  let dd = today.getDate()
  let mm = today.getMonth()
  let yy = today.getFullYear()
  let ww = today.getDay()

  //adding zero in minutes when it is less than 10 1st option
  let minPad = min.toString().padStart(2, '0')
  let hourPad = hour.toString().padStart(2, '0')

  // const hrs = hour >= 12 ? 'PM' : 'AM';
  if (hour >= 12) {
    hrs = 'PM'
  } else {
    hrs = 'AM'
  }

  hour = hour % 12 || 12

  // adding zero in minutes when it is less than 10 2nd option
  // if(min < 10){
  // 	min = '0' + min
  // }

  // if(dd < 10 ){
  //   dd = '0' + dd
  // }else if(mm < 10){
  //   mm = '0' + mm
  // };

  // to get weeks
  let weeks = [
    'SUNDAY',
    'MONDAY',
    'TUESDAY',
    'WEDNESDAY',
    'THURSDAY',
    'FRIDAY',
    'SATURDAY'
  ]
  let months = [
    'JANUARY',
    'FEBRUARY',
    'MARCH',
    'APRIL',
    'MAY',
    'JUNE',
    'JULY',
    'AUGUST',
    'SEPTEMBER',
    'OCTOBER',
    'NOVEMBER',
    'DECEMBER'
  ]

  time.innerHTML = `${hour}<span>:</span>${minPad}<span>:</span>${sec} ${hrs}`
  date.innerHTML = `${weeks[ww]}, ${months[mm]} ${dd}, ${yy}`

  setTimeout(displayTime, 1000)

  function greetings () {
    let today = new Date()
    let hour = today.getHours()
    if (hour < 12) {
      greeting.textContent = 'GOOD MORNING!'
    } else if (hour < 18) {
      greeting.textContent = 'GOOD AFTERNOON!'
    } else {
      greeting.textContent = 'GOOD EVENING!'
    }
  }
  greetings()
}
displayTime()
// time ends

// top-link setup
let upLink = document.querySelector('.top-arrow')
window.addEventListener('scroll', function (e) {
  let size = window.scrollY

  if (size > 650) {
    upLink.classList.add('top')
  } else {
    upLink.classList.remove('top')
  }
})

// closing of navlink when clicked on it
let links = document.querySelectorAll('a')
links.forEach(function (item) {
  item.addEventListener('click', function (e) {
    navLink.style.height = 0
  })
})

// Array of projects
let projects = document.querySelector('.projects')
let project = [
  {
    id: 1,
    name: 'Calculator',
    website: 'https://fortunecalculator.netlify.app/',
    eye: '<i class="fas fa-eye"></i>',
    gitHub: 'https://github.com/iriemena/calculator.git',
    git: '<i class="fab fa-github"></i>',
    html: '<i class="fab fa-html5"></i>',
    css: '<i class="fab fa-css3-alt"></i>',
    javascript: '',
    target: '_blank'
  },

  {
    id: 2,
    name: 'Website',
    website: 'https://fortunatedev.netlify.app/',
    eye: '<i class="fas fa-eye"></i>',
    gitHub: 'https://github.com/iriemena/my-website.git',
    git: '<i class="fab fa-github"></i>',
    html: '<i class="fab fa-html5"></i>',
    css: '<i class="fab fa-css3-alt"></i>',
    javascript: '<i class="fab fa-js"></i>',
    target: '_blank'
  },

  {
    id: 3,
    name: 'Menu Items',
    website: 'https://menushop.netlify.app/',
    eye: '<i class="fas fa-eye"></i>',
    gitHub: 'https://github.com/iriemena/menu-shop.git',
    git: '<i class="fab fa-github"></i>',
    html: '<i class="fab fa-html5"></i>',
    css: '<i class="fab fa-css3-alt"></i>',
    javascript: '<i class="fab fa-js"></i>',
    target: '_blank'
  },

  {
    id: 4,
    name: 'Questions',
    website: 'https://fortunequestion.netlify.app/',
    eye: '<i class="fas fa-eye"></i>',
    gitHub: 'https://github.com/iriemena/question.git',
    git: '<i class="fab fa-github"></i>',
    html: '<i class="fab fa-html5"></i>',
    css: '<i class="fab fa-css3-alt"></i>',
    javascript: '<i class="fab fa-js"></i>',
    target: '_blank'
  },

  {
    id: 5,
    name: 'Item Lister',
    website: 'https://fortunelister.netlify.app/',
    eye: '<i class="fas fa-eye"></i>',
    gitHub: 'https://github.com/iriemena/Item-Lister.git',
    git: '<i class="fab fa-github"></i>',
    html: '<i class="fab fa-html5"></i>',
    css: '<i class="fab fa-css3-alt"></i>',
    javascript: '<i class="fab fa-js"></i>',
    target: '_blank'
  },

  {
    id: 6,
    name: 'Counter',
    website: 'https://fortunecounter.netlify.app/',
    eye: '<i class="fas fa-eye"></i>',
    gitHub: 'https://github.com/iriemena/counter.git',
    git: '<i class="fab fa-github"></i>',
    html: '<i class="fab fa-html5"></i>',
    css: '<i class="fab fa-css3-alt"></i>',
    javascript: '<i class="fab fa-js"></i>',
    target: '_blank'
  },

  {
    id: 7,
    name: 'Reviews',
    website: 'https://fortunereview.netlify.app/',
    eye: '<i class="fas fa-eye"></i>',
    gitHub: 'https://github.com/iriemena/review.git',
    git: '<i class="fab fa-github"></i>',
    html: '<i class="fab fa-html5"></i>',
    css: '<i class="fab fa-css3-alt"></i>',
    javascript: '<i class="fab fa-js"></i>',
    target: '_blank'
  },

  {
    id: 8,
    name: 'Color Selector',
    website: 'https://colorselector.netlify.app/',
    eye: '<i class="fas fa-eye"></i>',
    gitHub: 'https://github.com/iriemena/color-selector.git',
    git: '<i class="fab fa-github"></i>',
    html: '<i class="fab fa-html5"></i>',
    css: '<i class="fab fa-css3-alt"></i>',
    javascript: '<i class="fab fa-js"></i>',
    target: '_blank'
  },

  {
    id: 9,
    name: 'D-Trump Quotes',
    website: 'https://trumpquote.netlify.app/',
    eye: '<i class="fas fa-eye"></i>',
    gitHub: 'https://github.com/iriemena/Donald-Trump-Quotes.git',
    git: '<i class="fab fa-github"></i>',
    html: '<i class="fab fa-html5"></i>',
    css: '<i class="fab fa-css3-alt"></i>',
    javascript: '<i class="fab fa-js"></i>',
    target: '_blank'
  },

  {
    id: 10,
    name: 'Wisdom Quotes',
    website: 'https://fortunequotes.netlify.app/',
    eye: '<i class="fas fa-eye"></i>',
    gitHub: 'https://github.com/iriemena/Random-quotes.git',
    git: '<i class="fab fa-github"></i>',
    html: '<i class="fab fa-html5"></i>',
    css: '<i class="fab fa-css3-alt"></i>',
    javascript: '<i class="fab fa-js"></i>',
    target: '_blank'
  }
]

// Rendering of the projects to the DOM
let items = project
  .map(function (item) {
    return `
  <div class="proj">
  <p>${item.name}</p>
  <a href=${item.website} target=${item.target}>${item.eye}</a>
  <a href=${item.gitHub}  target=${item.target}> ${item.git} </a><br>
  <span>${item.html} </span>
  <span>${item.css} </span>
  <span>${item.javascript}</span>
</div>`
  })
  .join('')
projects.innerHTML = items

// copyright
let copy = document.querySelector('.copy')
copy.innerHTML = new Date().getFullYear()

