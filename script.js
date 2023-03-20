let display=document.getElementById ("screen");
function allclear()
{
    display.value="";
}
function clearInput()
{
  var currentValue = display.value;
  display.value = currentValue.slice(0, -1);
}
function show(n){
    display.value+=n;
}
function calc(){
    try{
        display.value=eval(display.value);
    }
    catch(err){
        alert("Invalid Input")
    }
}