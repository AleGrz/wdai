const hoverable = document.querySelectorAll(".hoverable");
const cursor = document.querySelector(".cursor");

document.body.addEventListener("mousemove", onMouseMove);
document.body.addEventListener("mouseleave", hideCursor);
document.body.addEventListener("mouseenter", showCursor);

for (let i = 0; i < hoverable.length; i++) {
  hoverable[i].addEventListener("mouseenter", onMouseHover);
  hoverable[i].addEventListener("mouseleave", onMouseHoverOut);
}

function onMouseMove(e) {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
}

function onMouseHover() {
  cursor.style.transform = "scale(2) translate(-25%, -25%)";
}

function onMouseHoverOut() {
  cursor.style.transform = "scale(1) translate(-50%, -50%)";
}

function hideCursor() {
  cursor.style.display = "none";
}

function showCursor() {
  cursor.style.display = "block";
}
