// ==================================
// Window/Document events
// ==================================
let img = document.createElement('img');
img.src = "https://images.unsplash.com/photo-1630278107980-46fde63cdc12?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80";

// onload
img.onload = function () {
  console.log(`Изображение загружено, размеры ${img.width}x${img.height}`);
};

// onerror
img.onerror = function () {
  console.log("Ошибка во время загрузки изображения");
};

// onresize
window.addEventListener('resize', function () {
  console.log(`${window.innerWidth}x${window.innerHeight}`)
}, true);

// scroll
const menuElement = document.querySelector('.menu')
window.addEventListener('scroll', function () {

  menuElement.classList.toggle('is-fixed', window.pageYOffset >= 255)

})
// ==================================
// Mouse events
// ==================================

// click, onclick
function printEvent(event) {
  console.log(event)
}

const mouseeventElement = document.getElementById('mouseevents')

mouseeventElement.onclick = printEvent

// mouseover, onmouseover
mouseeventElement.onmouseover = printEvent
// mouseout, onmouseout

// mousedown, onmousedown

// mouseup, onmouseup

// mousemove, onmousemove

// ==================================
// Keyboard events
// ==================================

document.addEventListener('keyup', function (event) {
  if (event.code === 'Space') {
    alert('Space has')
  }
})

// onkeydown & onkeyup

// ==================================
// Form events
// ==================================
const usernameInput = document.querySelector('[name="username"]')
const form = document.querySelector('form')
// focus, onfocus
usernameInput.focus()


// submit, onsubmit
form.onsubmit = function (event) {
  event.preventDefault();
  console.log(event)
}

// blur, onblur
usernameInput.onblur = function (event) {
  if (!event.target.value.trim()) {
    alert('invalid')
  }
}
// change, onchange
usernameInput.onchange = function (event) {
  console.log('onchange', event.target.value)
}

// ==================================
// MutationObserver
// ==================================
const placeholderElement = document.getElementById('placeholder')
const targetNode = document.body

const config = { attributes: true, childlist: true, subtree: true }

const collback = function (mutationsList, observer) {
  console.log(mutationsList)
}

const observer = new MutationObserver(collback);
observer.observer(targetNode, config);

setTimeout(() => {
  placeholderElement.innerHTML = 'MutationObserver'
}, 2000)