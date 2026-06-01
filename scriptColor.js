const btnCalClasica = document.getElementById('calBasica')
const btnCalWomen = document.getElementById('calWomen')
const btnCalMan = document.getElementById('calMan')

btnCalWomen.addEventListener("click", () => {

    document.body.classList.remove("infinityTitan");
    document.body.classList.add("infinityRose");

});

btnCalClasica.addEventListener("click", () => {

    document.body.classList.remove("infinityRose");
    document.body.classList.remove("infinityTitan");

});

btnCalMan.addEventListener("click", () => {

    document.body.classList.remove("infinityRose");
    document.body.classList.add("infinityTitan");

});

const tituloCal = document.querySelector(".headCal p");

btnCalWomen.addEventListener("click", () => {
    tituloCal.textContent = "Infinity Rose";
});

btnCalClasica.addEventListener("click", () => {
    tituloCal.textContent = "Infinity Classic";
});

btnCalMan.addEventListener("click", () => {
    tituloCal.textContent = "Infinity Titan";
});