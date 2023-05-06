function question_1(){
    var age = prompt("Enter your age");
    alert("I am "+ age + " years old")
}


function question_2(){
    var visitedSite = +prompt("How Many times you have visited this web page")
    alert("you have visited this site " + visitedSite + " times" )
}

function question_3(){
    var birthYear = 1998;
    document.write("My birth year is " + birthYear + "<br>")
    document.write("Data type of my declared variable is " + typeof(birthYear))
}

function question_4(){
    var visitorName = "Azeem";
    var productTitle = "Shalwar Qameez";
    var quantity = 2;
    document.write(visitorName + " ordered " + quantity + " " + productTitle + "(s)" +" on XYZ Clothing store")
}