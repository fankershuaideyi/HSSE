var stop, staticx; // eslint-disable-line no-unused-vars
var img = new Image();
img.src="img/flower.png"
function Sakura(x, y, s, r, fn) {
    this.x = x;
    this.y = y;
    this.s = s;
    this.r = r;
    this.fn = fn;
}
Sakura.prototype.draw = function(cxt) {
    cxt.save();
    cxt.translate(this.x, this.y);
    cxt.rotate(this.r);
    cxt.drawImage(img, 0, 0, 40 * this.s, 40 * this.s)
    cxt.restore();
}
//location flowers
Sakura.prototype.update = function() {
    this.x = this.fn.x(this.x, this.y);
    this.y = this.fn.y(this.y, this.y);
    this.r = this.fn.r(this.r);
    if(this.x > window.innerWidth ||
        this.x < 0 ||
        this.y > window.innerHeight ||
        this.y < 0
    ) {
        this.r = getRandom('fnr');
        if(Math.random() > 0.4) {
            this.x = getRandom('x');
            this.y = 0;
            this.s = getRandom('s');
            this.r = getRandom('r');
        } else {
            this.x = window.innerWidth;
            this.y = getRandom('y');
            this.s = getRandom('s');
            this.r = getRandom('r');
        }
    }
}

SakuraList = function() {
    this.list = [];
}
SakuraList.prototype.push = function(sakura) {
    this.list.push(sakura);
}
SakuraList.prototype.update = function() {
    let i = 0, len = this.list.length;
    for(; i < len; i++) {
        this.list[i].update();
    }
}
SakuraList.prototype.draw = function(cxt) {
    let i = 0, len = this.list.length;
    for(; i < len; i++) {
        this.list[i].draw(cxt);
    }
}
SakuraList.prototype.get = function(i) {
    return this.list[i];
}
SakuraList.prototype.size = function() {
    return this.list.length;
}
//random for the x,y for flowers
function getRandom(option) {
    let ret, random;
    switch(option) {
        case 'x':
            ret = Math.random() * window.innerWidth;
            break;
        case 'y':
            ret = Math.random() * window.innerHeight;
            break;
        case 's':
            ret = Math.random();
            break;
        case 'r':
            ret = Math.random() * 6;
            break;
        case 'fnx':
            random = -0.5 + Math.random();
            ret = function(x, y) {
                return x + 0.5 * random - 1.7;
            };
            break;
        case 'fny':
            random = 1.5 + Math.random() * 0.7
            ret = function(x, y) {
                return y + random;
            };
            break;
        case 'fnr':
            random = Math.random() * 0.03;
            ret = function(r) {
                return r + random;
            };
            break;
    }
    return ret;
}

function startSakura() {

    requestAnimationFrame = window.requestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        window.oRequestAnimationFrame;
    let canvas = document.createElement('canvas'),
        cxt;
    staticx = true;
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
    canvas.setAttribute('style', 'position: fixed;left: 0;top: 0;pointer-events: none;');
    canvas.setAttribute('id', 'canvas_sakura');
    document.getElementsByTagName('body')[0].appendChild(canvas);
    cxt = canvas.getContext('2d');
    var sakuraList = new SakuraList();
    let randomFnR;
    for (let i = 0; i < 50; i++) {
        var sakura, randomX, randomY, randomS, randomR, randomFnx, randomFny;
        randomX = getRandom('x');
        randomY = getRandom('y');
        randomR = getRandom('r');
        randomS = getRandom('s');
        randomFnx = getRandom('fnx');
        randomFny = getRandom('fny');
        randomFnR = getRandom('fnr');
        sakura = new Sakura(randomX, randomY, randomS, randomR, {
            x: randomFnx,
            y: randomFny,
            r: randomFnR
        });
        sakura.draw(cxt);
        sakuraList.push(sakura);
    }
    stop = requestAnimationFrame(function() {
        cxt.clearRect(0, 0, canvas.width, canvas.height);
        sakuraList.update();
        sakuraList.draw(cxt);
        stop = requestAnimationFrame(arguments.callee);
    })
}

window.onresize = function() {
    const canvasSnow = document.getElementById('canvas_sakura');
    canvasSnow.width = window.innerWidth;
    canvasSnow.height = window.innerHeight;
}

img.onload = function() {
    startSakura();
}
setInterval(function()
{
    //draw rain
    var rain = document.createElement("div");

    let myAuto = document.getElementById('audio');
    myAuto.volume=0.3;
    myAuto.play();//this control audio play : Bugs will be reported here unless the user has an interaction on the page followed by an autoplay function.
    //初始化rain属性


    rain.style.position = "fixed";
    rain.style.height = "150px";
    rain.style.width = "2px";
    rain.style.backgroundImage = "linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(255, 255, 255, 1))";
    rain.style.filter = "blur(" + Math.random() * 4 + "px)";	//模糊雨滴，突出层次感
    rain.style.top = "0px";
    rain.style.left = Math.random() * 1920 + "px";
    rain.style.opacity = parseInt(Math.random() * 10) / 10 + "";

    document.body.appendChild(rain);

    let timer = setInterval(function () {
        let height = parseInt(rain.style.top);
        let k = 1;
        k++;

        rain.style.top = height + 5 * Math.pow(k, 2) + "px";	//模拟重力加速度

        //delete rain when it get end
        if (rain.style.top >= "900px") {
            clearInterval(timer);
            rain.parentNode.removeChild(rain);
        }
    }, 10);	//每隔一段时间雨滴下落一次 time for rain fall
}, 50)		//每隔一段时间生成一次雨滴 time for rain draw



