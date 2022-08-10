function displayNumber(num) {
    let txtbox=document.querySelector("#res")
    txtbox.value+=num
}
function clearBox(){
    res.value=""
}

function evaluateExpression(){
   
    res.value=eval(res.value)
}

function backSpace(){
    res.value=res.value.slice(0,-1)
}