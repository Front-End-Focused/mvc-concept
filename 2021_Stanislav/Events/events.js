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
window.addEventListener('resize', function() {
    console.log(`${window.innerWidth}x${window.innerHeight}`)
}, true);

// scroll

// ==================================
// Mouse events
// ==================================

// click, onclick

// mouseover, onmouseover

// mouseout, onmouseout

// mousedown, onmousedown

// mouseup, onmouseup

// mousemove, onmousemove

// ==================================
// Keyboard events
// ==================================

// onkeydown & onkeyup

// ==================================
// Form events
// ==================================

// focus, onfocus

// submit, onsubmit

// blur, onblur

// change, onchange

// ==================================
// MutationObserver
// ==================================

