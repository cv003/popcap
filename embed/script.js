let mouseDown = false;
let startX, scrollLeft;
const slider = document.querySelector('.list');

const startDragging = (e) => {
  mouseDown = true;
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
}

const stopDragging = (e) => {
  mouseDown = false;
}

const move = (e) => {
  e.preventDefault();
  if(!mouseDown) { return; }
  const x = e.pageX - slider.offsetLeft;
  const scroll = x - startX;
  slider.scrollLeft = scrollLeft - scroll;
}

slider.addEventListener('mousemove', move, false);
slider.addEventListener('mousedown', startDragging, false);
slider.addEventListener('mouseup', stopDragging, false);
slider.addEventListener('mouseleave', stopDragging, false);

currentEl = document.querySelector('#screen');

// optimized iframe swapper! wowie
function startgame(x) {
  currentEl = document.querySelector('#screen');
  newElement = "<iframe id='screen' src='https://s.soggy.cat/popcap/games/"+ x +"/index.html' width='366' height='275' style='border:none;' scrolling='no' title='what the hell are you playing on?? (iframes not supported)'>";
  currentEl.outerHTML = newElement;
  console.log("ⓘ \""+ x +"\" is starting...");
}

function clipboard() {
  var copyText = document.getElementById("framecode");
  copyText.select();
  copyText.setSelectionRange(0, 99999); // mobile device fix from w3
  navigator.clipboard.writeText(copyText.value);
}

// for popups
function hide(className) {
  const elements = document.querySelectorAll(className);
  elements.forEach(element => {
    element.style.display = 'none';
  });
}

function unhide(className) {
  const elements = document.querySelectorAll(className);
  elements.forEach(element => {
    element.style.display = 'flex';
  });
}

hide(".popone"); hide(".dark"); 
hide(".poptwo"); hide(".popthree");