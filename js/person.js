function btnfun(){
    var value= document.getElementById("liuyan").value;
    console.log(value);
   document.getElementById("liuyan").value="";
    var g=new Date();//获取时间 get time
    var studentid="yo-soul";
    var p= document.createElement("p");//创建新元素，也即结点
    p.innerHTML='<br><p  style="color: azure;margin-left: 5px;text-align: left">'+value+" by: "+'<a href="person.html" style="display: inline; background-color: antiquewhite">'+studentid+'</a></p>'+'<p style="color: whitesmoke">'+g.toUTCString()+'</p>';//往结点里塞内容
    document.getElementById("commend").prepend(p);
    alert("success submitting");
}
