//display sign up
function dishow(){
    document.getElementById("PHtd").style.display = "block";
    document.getElementById("Emtd").style.display = "block";
    document.getElementById("em").style.display = "block";
    document.getElementById("ph").style.display = "block";
    document.getElementById("log").innerHTML = "Sign up";
}
//store data to localstorage
function tiaozhuan(){
    var g=new Date();//获取时间
    var name = document.getElementById("na").value;
    var pass =document.getElementById("pa").value;
    var phone = document.getElementById("ph").value;
    var email = document.getElementById("em").value;
    var total = name + "(^&^)" + pass + "(^&^)" + phone + "(^&^)" + email;
    if(!name || !pass || !phone || !email){
        alert("You not input all");
    }
    else {
        localStorage.setItem(g,total);
        alert("successfully signing up");
        window.location.href="person.html";
        window.close();
    }
}