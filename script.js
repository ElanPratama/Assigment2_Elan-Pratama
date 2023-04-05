document.getElementById("buttonSubmit").addEventListener("click", handleSubmit);
const editBtnE1 = document.getElementById("edit")

const mainPageE1 = document.querySelector(".main-page")
const formPageE1 = document.querySelector(".form-page")
const submitBtnE1 = document.querySelector("#buttonSubmit")


    editBtnE1.addEventListener("click", function(){
        mainPageE1.style.display = "none";
        formPageE1.style.display = "block";
    });

    submitBtnE1.addEventListener("click", function(){
        mainPageE1.style.display = "block";
        formPageE1.style.display = "none";
    });

    

function handleSubmit(){
    const nameValue = document.getElementById('nameInput').value;
    const skillValue = document.getElementById('roleInput').value;
    const availabilityValue = document.getElementById('availabilityInput').value;
    const ageValue = document.getElementById('ageInput').value;
    const lokasiValue = document.getElementById('lokasiInput').value;
    const yearsValue = document.getElementById('yearsInput').value;
    const emailValue = document.getElementById('emailInput').value;

    document.getElementById("name").innerHTML = nameValue;
    document.getElementById("name").style.fontSize = "40px";
    document.getElementById("name").style.marginTop = "30px";

    document.getElementById("skill").innerHTML = skillValue;
    document.getElementById("availabillity").innerHTML += availabilityValue;
    document.getElementById("age").innerHTML += ageValue;
    document.getElementById("lokasi").innerHTML += lokasiValue;
    document.getElementById("years").innerHTML += yearsValue;
    document.getElementById("email").innerHTML += emailValue;
}