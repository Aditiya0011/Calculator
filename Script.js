function appendvalue(value) {
    document.getElementById ("display").value += value;

}

function clearDisplay() {
    document.getElementById("display").value ="";
}

function calculte(){
    const display = document.getElementById("display");
    try {
        display.value= eval(display.value);
    }catch { 
        display.value="Erorr";
    }
}