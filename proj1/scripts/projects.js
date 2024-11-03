document.querySelectorAll(".project").forEach((project) => {
  project.addEventListener("mouseenter", () => {
    if (window.innerWidth < 1200) return;
    if (project.dataset.active != 0) return;
    enter();
  });

  project.addEventListener("mouseleave", () => {
    if (window.innerWidth < 1200) return;
    if (project.dataset.active == 1) setTimeout(() => leave(), 1000);
    if (project.dataset.active != 2) return;
    leave();
  });

  function enter() {
    project.dataset.active = 1;
    const resizable = project.querySelector(".resizable");
    resizable.style.width = "40vh";
    setTimeout(() => {
      resizable.querySelectorAll("div").forEach((div) => {
        animate(div);
        console.log(div);
        div.animate([{ opacity: 0 }, { opacity: 1 }], {
          duration: 500,
          iterations: 1,
        });
        div.style.opacity = "1";
        console.log(div);
      });
    }, 500);
    setTimeout(() => {
      project.dataset.active = 2;
    }, 1000);
  }
  function leave() {
    project.dataset.active = 3;
    const resizable = project.querySelector(".resizable");
    resizable.querySelectorAll("div").forEach((div) => {
      div.animate([{ opacity: 1 }, { opacity: 0 }], {
        duration: 500,
        iterations: 1,
      });
      div.style.opacity = "0";
    });
    setTimeout(() => {
      resizable.style.width = "0";
    }, 500);
    setTimeout(() => {
      project.dataset.active = 0;
    }, 1000);
  }
  document.addEventListener("scroll", () => {
    if (window.innerWidth > 1200) return;
    let offsets = project.getBoundingClientRect();
    let top = offsets.top;
    let bottom = offsets.bottom;
    if (
      top - window.innerHeight < -window.innerHeight * 0.4 &&
      project.dataset.active == 0 &&
      bottom > window.innerHeight * 0.4
    ) {
      enter();
    } else if (
      project.dataset.active == 2 &&
      (bottom < window.innerHeight * 0.4 ||
        top - window.innerHeight > -window.innerHeight * 0.4)
    ) {
      leave();
    }
  });
});


function animate(text) {
  let t = text.innerHTML;
  text.style.wordWrap = "break-word";
  for (let i = 0; i < t.length; i += 10) {
    if (t[i] != " ") {
      setTimeout(() => {
        text.innerHTML = t.slice(0, i) + generateCharacters(t.slice(i, t.length - 1));
      }, i * 2);
    }
  }
  setTimeout(() => {
    text.style.wordWrap = "normal";
    text.innerHTML = t;
  }, t.length * 2);
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