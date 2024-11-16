const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");
canvas.width = 1680;
canvas.height = 1050;
c.font = "80px Arial";
c.fillStyle = "white";

class Zombie {
    constructor(height, y, speed) {
        this.x = canvas.width;
        this.y = y;
        this.height = height;
        this.speed = speed;
        this.stage = 9;
        this.lastTime;
    }
    draw() {
        let animationSpeed = this.height / (10 * this.speed);
        c.drawImage(assets.zombie,
            Math.floor(this.stage / animationSpeed) * 200, 0,
            200, 312,
            this.x, this.y,
            0.641 * this.height, this.height
        );
        this.stage = (this.stage + 1) % (10 * animationSpeed);
    }
    update(delta) {
        this.x -= this.speed * delta / 10;
        this.draw();
        if (this.x < -this.height) {
            lives--;
            zombieList.splice(zombieList.indexOf(this), 1);
        }
    }
    checkKill(mX, mY) {
        if (mX > this.x && mX < this.x + this.height * 0.641 && mY > this.y && mY < this.y + this.height) {
            zombieList.splice(zombieList.indexOf(this), 1);
            return true;
        }
        return false;
    }
}

class Heart {
    constructor(id) {
        this.id = id;
        this.x = 20 + (id - 1) * 90;
        this.y = 20;
    }
    draw() {
        c.drawImage(lives >= this.id ? assets.fullHeart : assets.emptyHeart, this.x, this.y, 80, 80);
    }
}

var assets;
var lives;
var score;
var mX, mY;
var showCursor;
var now, delta;
var lastTime = Date.now();
const zombieList = [];
const heartList = [new Heart(1), new Heart(2), new Heart(3)];
const overlay = document.querySelector(".overlay");
const audio = new Audio('sad-music.mp3');

function randomBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

Promise.all([
    fetch("images/board-bg.jpg").then(res => res.blob()).then(createImageBitmap),
    fetch("images/walkingdead.png").then(res => res.blob()).then(createImageBitmap),
    fetch("images/empty_heart.png").then(res => res.blob()).then(createImageBitmap),
    fetch("images/full_heart.png").then(res => res.blob()).then(createImageBitmap),
    fetch("images/aim.png").then(res => res.blob()).then(createImageBitmap),
]).then(([background, zombie, emptyHeart, fullHeart, aim]) => {
    assets = { background, zombie, emptyHeart, fullHeart, aim };
    start();
});

function draw() {
    now = Date.now();
    delta = now - lastTime;
    lastTime = now;
    if (lives < 0 || score <= 0) {
        c.drawImage(assets.background, 0, 0, canvas.width, canvas.height);
        audio.currentTime = 0;
        audio.play();
        overlay.style.display = "flex";
        overlay.querySelector("h1").textContent = "Koniec gry! Wynik: " + score;
        return;
    }
    window.requestAnimationFrame(draw);
    c.drawImage(assets.background, 0, 0, canvas.width, canvas.height);
    zombieList.forEach(zombie => {
        zombie.update(delta);
    });
    if (showCursor) {
        c.drawImage(assets.aim, mX - 150, mY - 150, 300, 300);
    }
    heartList.forEach(heart => {
        heart.draw();
    });
    c.fillText(String(score).padStart(5, "0"), 1420, 100);
}

canvas.addEventListener("click", function (e) {
    let killed;
    zombieList.forEach(zombie => {
        killed = killed || zombie.checkKill(mX, mY);
    });
    if (!killed) {
        score -= 5;
    } else {
        score += 20;
    }
});

canvas.addEventListener("mousemove", function (e) {
    mX = e.offsetX / canvas.offsetWidth * 1680;
    mY = e.offsetY / canvas.offsetHeight * 1050;
});
canvas.addEventListener("mouseenter", function (e) {
    showCursor = true;
});
canvas.addEventListener("mouseleave", function (e) {
    showCursor = false;
});

function start() {
    audio.pause();
    lives = 3;
    score = 20;
    overlay.style.display = "none";
    zombieList.length = 0;
    (function loop() {
        if (lives < 0 || score <= 0) {
            return;
        }
        let interval = randomBetween(100, 800);
        zombieList.sort((a, b) => a.y + a.height - b.y - b.height);
        setTimeout(function () {
            if (document.hasFocus()) {
                zombieList.push(
                    new Zombie(
                        randomBetween(100, 400),
                        randomBetween(600, 800),
                        randomBetween(3, 10)
                    )
                );
            }
            loop();
        }, interval);
    }());
    draw();
}