let slider_item = document.querySelectorAll(".slider_item"),
  slider_itemImg = document.querySelectorAll(".slider_item img"),
  prev = document.querySelector(".prev"),
  next = document.querySelector(".next"),
  current = document.querySelector(".current"),
  sliderItemLength = document.querySelector(".length");

son = 0;

function sliderFunc(p) {
  slider_itemImg.forEach((item) => {
    item.style.opacity = 0;
  });
  slider_item.forEach((item) => {
    item.style.cssText = `
            transform: translate(${p * -100}% );
        `;
  });
}

function currentFunc() {
  current.innerHTML = son + 1;
  sliderItemLength.innerHTML = "/" + slider_item.length;
}
currentFunc();
prev.addEventListener("click", () => {
  son -= 1;
  if (son < 0) {
    son = slider_item.length - 1;
  }
  currentFunc();
  sliderFunc(son);
  slider_itemImg[son].style.cssText = `
        opacity:1
    `;
  console.log(son);
});

next.addEventListener("click", () => {
  son += 1;
  if (son >= slider_item.length) {
    son = 0;
  }
  currentFunc();
  sliderFunc(son);

  slider_itemImg[son].style.cssText = `
            opacity:1
          `;
  console.log(son);
});
