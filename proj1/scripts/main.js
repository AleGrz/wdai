window.addEventListener("scroll", function () {
  let scrollDistance = window.scrollY;
  let rm = 1000;
  if (scrollDistance < rm) {
    loadContent("home");
  } else if (scrollDistance >= rm && scrollDistance < 3 * rm) {
    loadContent("planet");
  } else if (scrollDistance >= 3 * rm && scrollDistance < 5 * rm) {
    loadContent("agh");
  }
  scaleObjects(
    [0, 1000, 3000, 5400, 5500 + document.querySelector(".pr").offsetHeight],
    document.querySelectorAll("nav div"),
    scrollDistance
  );
});
let previous = "home";

const transition = document.querySelector(".transition");
function loadContent(name) {
  if (name === previous) {
    return;
  }
  let p_c = previous;
  previous = name;
  if (window.scrollY < 4000) {
    transition.style.opacity = 1;
  }
  setTimeout(() => {
    document.querySelector("#" + p_c).style.display = "none";
    document.querySelector("#" + name).style.display = "flex";
  }, 250);

  setTimeout(() => {
    transition.style.opacity = 0;
    document
      .querySelector("#" + name)
      .querySelectorAll(".animated")
      .forEach((t) => {
        animate(t);
      });
  }, 500);
}

function generateCharacters(t) {
  const length = t.length;
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const resultArray = new Array(length);
  for (let i = 0; i < length; i++) {
    if (t[i] != " ") {
      resultArray[i] = characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    else {
      resultArray[i] = " ";
    }
  }
  return resultArray.join("");
}

function scaleObjects(heights, objects, targetHeight) {
  for (let i = 0; i < objects.length; i++) {
    objects[i].style.transform = `scale(0.25)`;

    let lowerBound = heights[i - 1] || -Infinity;
    let upperBound = heights[i + 1] || Infinity;
    if (lowerBound < targetHeight && targetHeight < upperBound) {
      objects[i].style.transform = `scale(1)`;

      if (i > 0) {
        objects[i - 1].style.transform = `scale(0.5)`;
      }
      if (i < objects.length - 1) {
        objects[i + 1].style.transform = `scale(0.5)`;
      }
      i++;
    }
  }
}

document.querySelector("#home").style.display = "flex";
document.querySelector("#planet").style.display = "none";
document.querySelector("#agh").style.display = "none";

scaleObjects(
  [0, 1000, 3000, 5400, 5500 + document.querySelector(".pr").offsetHeight],
  document.querySelectorAll("nav div"),
  0
);

function animate(text) {
  let t = text.innerHTML;
  text.style.wordWrap = "break-word";
  for (let i = 0; i < t.length; i++) {
    if (t[i] != " ") {
      setTimeout(() => {
        text.innerHTML = t.slice(0, i) + generateCharacters(t.slice(i, t.length - 1));
      }, i * 20);
    }
  }
  setTimeout(() => {
    text.style.wordWrap = "normal";
    text.innerHTML = t;
  }, 20 * t.length);
}

document.querySelector(".mobile-menu").addEventListener("click", () => {
  document.querySelectorAll(".mobile-overlay .animated").forEach((t) => {
    console.log(t);
    animate(t);
  });
});
