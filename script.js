function validatetextbox(){
    var box1 = document.getElementById("name");
    var box2 = document.getElementById("address-1");
    var box3 = document.getElementById("address-2");
    var box4 = document.getElementById("city");
    var box5 = document.getElementById("state");
    var box6 = document.getElementById("zip");
    var box7 = document.getElementById("country");
    var box8 = document.getElementById("mail");
    var box9 = document.getElementById("phone");
if(box1.value==""||box2.value==""||box3.value==""||box4.value==""||box5.value==""||box6.value==""||box7.value==""||box8.value==""||box9.value=="")
{
    alert("All the boxes should be filled");
    return false;
}
else{
    alert("Thanks");
}
} 

