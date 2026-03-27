//JAVASCRIPT -11
 let inp=document.querySelector("input");

inp.addEventListener("keydown",function (event){
    console.log("code=",event.code);
    if(event.code =="ArrowUp"){
        console.log("Character moves forward");
    }else if (event.code == "ArrowDown"){
        console.log("Character moves backward");
    }else if (event.code == "Arrowleft"){
        console.log("Character moves left");
    }else if (event.code == "ArrowRight"){
        console.log("Character moves Right");
    }

});    


/*let form=document.querySelector("form");

form.addEventListener("submit", function (event) {
    event.preventDefault();
    console.dir(form);

    let user=this.element[0];
    let pass=document.querySelector("#pass");

    console.log(user.value);
    console.log(pass.value);

    alert(`Hi ${user.value}, your password is set to ${pass.value}`);

}); */
