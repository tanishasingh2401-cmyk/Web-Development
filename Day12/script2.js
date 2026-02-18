function checkPrice(){

    var size = document.getElementById("size").value.toUpperCase();
    var price;

    if(size == "XL"){
        price = 250;
    }
    else if(size == "L"){
        price = 200;
    }
    else if(size == "M"){
        price = 100;
    }
    else if(size == "S"){
        price = 50;
    }
    else{
        document.getElementById("result").innerHTML = "Invalid Size!";
        return;
    }

    document.getElementById("result").innerHTML = 
        "Price is Rs. " + price;
}
