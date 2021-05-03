var a = document.getElementById('display');
function getNum(num){
    a.value += num    
}

function calculatorNumber(){
    var b = a.value
    a.value = eval(b)
}

function clearValue(){
    a.value = ''
}