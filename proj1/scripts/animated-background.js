const overlay = document.querySelectorAll(".grad");
const text = document.querySelectorAll(".text");
const parallax = document.querySelectorAll(".parallax");

addEventListener("mousemove", ({ clientX, clientY }) => {
  const center = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
  const angle = Math.atan2(clientY - center.y, clientX - center.x) - Math.PI;
  overlay.forEach(
    (o) => (o.style.transform = `translate(-50%, -50%) rotate(${angle}rad)`)
  );

  parallax.forEach((obj) => {
    const v = obj.getAttribute("value");
    const x = v * (clientX / window.innerWidth) * 5 - v * 2 - 50;
    const y = v * (clientY / window.innerHeight) * 5 - v * 2 - 50;
    obj.style.transform = `translate(${x}%, ${y}%)`;
  });
});

setInterval(generateCharacters, 30);

function generateCharacters(length = 40000) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const resultArray = new Array(length);
  for (let i = 0; i < length; i++) {
    resultArray[i] = characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }

  const result = resultArray.join("");
  text.forEach((t) => (t.innerHTML = result));
}

generateCharacters();

parallax.forEach((obj) => {
  const v = obj.getAttribute("value");
  const x = v * 0.7 * 5 - v * 2 - 50;
  const y = v * 0.7 * 5 - v * 2 - 50;
  obj.style.transform = `translate(${x}%, ${y}%)`;
});
