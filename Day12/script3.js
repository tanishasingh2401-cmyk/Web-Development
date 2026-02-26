function checkString(){

    var str = document.getElementById("text").value;

    if(str[0] == 'a' && str.length > 3){
        document.getElementById("result").innerHTML = "It is a Good String";
    }
    else{
        document.getElementById("result").innerHTML = "Not a Good String";
    }
}
//javafile
