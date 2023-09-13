//Clear the localstorage
function Ce(){
    localStorage.clear();
    var tab = document.getElementById("tab");
    var len = tab.getElementsByTagName("tr").length;
    for(var j = len-1; j >0;j--){
        tab.deleteRow(j);
    }
}
//draw the table for information
function Sb(){
    var tab = document.getElementById("tab");
    var len = tab.getElementsByTagName("tr").length;
    for(var j = len-1; j >0;j--){
        tab.deleteRow(j);
    }
    for(var i = 0;i<localStorage.length;i++){
        var time = localStorage.key(i);
        var total = localStorage.getItem(time);
        var strings = total.split("(^&^)");
        var name = strings[0];
        var pas = strings[1];
        var phone =strings[2];
        var em = strings[3];
        document.getElementById("tab").innerHTML += "<tr>" + "<td>"  + time + "</td>" + "<td>"  + name + "</td>"
            + "<td>"  + pas + "</td>" + "<td>"  + phone + "</td>" + "<td>"  + em + "</td>"  +"</tr>"
    }
}