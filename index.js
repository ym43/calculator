let CalcDi = document.getElementById("CalcDi")

function appendNumber(number){
    CalcDi.value += number;
}

function clearall() {
    CalcDi.value = ""
}

function equal() {
    let Calc = eval(CalcDi.value)
    CalcDi.value = Calc
}