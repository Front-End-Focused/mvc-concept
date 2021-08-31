// ==================================
// Window/Document events
// ==================================
let img = document.createElement('img');
img.src = "https://images.unsplash.com/photo-1630278107980-46fde63cdc12?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80";

// onload
img.onload = function() {
  // console.log(`Изображение загружено, размеры ${img.width}x${img.height}`);
};

// onerror
img.onerror = function() {
    // console.log("Ошибка во время загрузки изображения");
};

// onresize
// window.addEventListener('resize', function() {
//     // console.log(`${window.innerWidth}x${window.innerHeight}`)
// }, true);

// scroll
const menuElem = document.querySelector('.menu');

// window.addEventListener('scroll', () => {
//     menuElem.classList.toggle('is_fixed', window.pageYOffset >= 255)
//     // if(window.pageYOffset >=255){
//     //     menuElem.classList.add('is_fixed')
//     // }else{
//     //     menuElem.classList.remove('is_fixed')
//     // }
// })



// ==================================
// Mouse events
// ==================================

const mouseEventElement = document.getElementById('mouseEvents');

function PrintEvent (event){
    console.log(event);
}

// click, onclick
// mouseEventElement.onclick = PrintEvent;
//
// // mouseover, onmouseover
// mouseEventElement.onmouseover = PrintEvent;
//
// // mouseout, onmouseout
//
// mouseEventElement.onmouseout = PrintEvent;
//
// // mousedown, onmousedown
//
// mouseEventElement.onmousedown = PrintEvent;
//
// // mouseup, onmouseup
//
// mouseEventElement.onmouseup= PrintEvent;

// mousemove, onmousemove

// mouseEventElement.onmousemove = PrintEvent;

// ==================================
// Keyboard events
// ==================================

// document.addEventListener('keyup', console.log)

// onkeydown & onkeyup

// ==================================
// Form events
// ==================================

const userNAmeInput = document.querySelector('[name="username"]')

// focus, onfocus

userNAmeInput.focus();

userNAmeInput.onfocus = console.log;



// blur, onblur

// userNAmeInput.onblur = function (event){
//     if(!event.target.value.trim()){
//         alert("Inavlid");
//     }
// }

// change, onchange

userNAmeInput.onchange = function (event){
    console.log('onchage', event.target.value);
}


// submit, onsubmit

const form = document.querySelector('form');
form.onsubmit = function (event){
    event.preventDefault();
    console.log(event);
}

// ==================================
// MutationObserver
// ==================================

const placeHolderElemnts = document.getElementById('placeholder');
const targetNode = document.body;

const  config = {attributes: true, childList: true, subtree: true};

const callback = function (muttationList, pbserved){
    console.log(muttationList);
}

const  observed = new MutationObserver(callback);

observed.observe(targetNode, config);

setTimeout(() =>{
    placeHolderElemnts.innerHTML = "muttation Observed";
}, 2000);

