// ==================================
// Window/Document events
// ==================================
let img = document.createElement('img');
img.src = "https://images.unsplash.com/photo-1630278107980-46fde63cdc12?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80";

// onload
img.onload = function() {
  console.log(`Изображение загружено, размеры ${img.width}x${img.height}`);
};

// onerror
img.onerror = function() {
    console.log("Ошибка во время загрузки изображения");
};

// onresize
// window.addEventListener('resize', function() {
//     console.log(`${window.innerWidth}x${window.innerHeight}`)
// }, true);

// const menuElement = document.querySelector('.menu');
// // scroll
// window.addEventListener('scroll', () => {
//   menuElement.classList.toggle('is-fixed', window.pageYOffset >= 255)
// })
// toggle(nameClass, true / false)


// ==================================
// Mouse events
// ==================================

// click, onclick

// mouseover, onmouseover

// function printEvent(event) {
//   console.log(event)
// }


// const mouseEvents = document.getElementById('mouseEvents');
// mouseEvents.onmousemove = printEvent;

// mouseout, onmouseout

// mousedown, onmousedown

// mouseup, onmouseup

// mousemove, onmousemove

// ==================================
// Keyboard events

// document.addEventListener('keydown', (event) => {
//   if (event.code === 'Space') {
//     alert('Space')
//   }
// })
// ==================================

// onkeydown & onkeyup

// ==================================
// Form events
// ==================================

// focus, onfocus
// const userNameInput = document.querySelector('[name="userName"]')

// // userNameInput.focus()

// // userNameInput.onfocus = console.log
// // submit, onsubmit

// // blur, onblur

// userNameInput.onchange = function (event) {
//   console.log(event.target)
// }

// const form = document.querySelector('form');

// form.onsubmit = function (event) {
//   event.preventDefault()
//   console.log(event)
// }

// userNameInput.addEventListener('onchange', (event)=>console.log(event.target.value))

// change, onchange

// ==================================
// MutationObserver

// const placeholder = document.getElementById('placeholder')

// setTimeout(() => {
//   placeholder.innerHTML
// },1000)
// // ==================================

