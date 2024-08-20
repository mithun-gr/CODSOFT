var res = document.getElementById("result");
 function dis(input){
    res.value += input;
 }
 
 function allclear(){
    res.value="";
 }
 function calculate(){
    try {
        res.value=eval(res.value);
    } 
    catch (error) {
        res.value= "MathError"
    }
 }
 function backspace(){
    res.value = res.value.slice(0, -1);
 }