window.onload=function (){
document.getElementById("btn").onclick=function(){send()};//Set the button to trigger the event（函数send（））
function send(){
    var g=new Date();//get time
    var studentid="yo-soul";
    var value= document.getElementById("typing").value;//获得文本框里的内容
    var p= document.createElement("p");//new p to add创建新元素，也即结点
    p.innerHTML='<br><p  style="color: #a3bbdb;margin-left: -15px;text-align: left">'+value+" by: "+'<a href="person.html" style="display: inline; background-color: #a3bbab">'+studentid+'</a></p>'+'<p style="color: gray">'+g.toUTCString()+'</p>';//往结点里塞内容
    document.getElementById("commend").prepend(p);
}
//hidden advertising
function my(id){
    return document.getElementById(id);
}
my("btng").onclick=function (){
    my("ground").style.display="none";
}

}
//right bar menu
window.addEventListener('load', function () {
    const social = this.document.querySelector('.social')
    window.onscroll = function() { scrollFun() };
    function scrollFun() {
        if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
            social.style.display = 'block';
        } else {
            social.style.display = 'none';
        }
    }
    let social__btn_on = this.document.querySelector('.social__btn_on')
    let social__btn_off = document.querySelector('.social__btn_off')
    let social__btn_on_img1 = document.querySelector('.social__btn_on_img1')
    let social__btn_on_img2 = document.querySelector('.social__btn_on_img2')
    social__btn_off.addEventListener('click',function(){
        social__btn_off.style.display = 'none'
        social__btn_on.style.display = 'block'
        animaters(social,1520);
        social__btn_on_img2.classList = 'socialrotate'
    })

    social__btn_on.addEventListener('click',function(){
        social__btn_off.style.display = 'block'
        social__btn_on.style.display = 'none'
        animaters(social,1345);
    })
})
//right shown and close animaters
function animaters(obj, target, callback) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function(){
        var step = (target - obj.offsetLeft) / 5;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        if (obj.offsetLeft == target) {
            clearInterval(obj.timer);
            if(callback) {
                callback();
            }
        }
        obj.style.left = obj.offsetLeft + step + 'px';
    },15);
}
