let screen = document.getElementById('screen');
let button = document.querySelectorAll('button');
let inputVal = "";
for(item of button)
{
    item.addEventListener('click',(e) =>
    {
        buttonText = e.target.innerText;
        // console.log(buttonText);
        if(buttonText == "X")
        {
            buttonText ="*";
            inputVal += buttonText;
            screen.value = inputVal;
        }
        else if(buttonText == "C")
        {
            inputVal  = "";
            screen.value = inputVal;
        }
        else if(buttonText == "=")
        {
            screen.value = eval(inputVal);
        }
        else{
            inputVal += buttonText;
            screen.value = inputVal;
        }
    })
}
//else if(buttonText == '1' ||buttonText == '2' ||buttonText == '3' ||buttonText == '4' ||buttonText == '5' ||
// buttonText == '6' ||buttonText == '7' ||buttonText == '8' ||buttonText == '9' ||buttonText == '0' ||buttonText == '-' ||buttonText == '/' 
// ||buttonText == '%' ||buttonText == '+' ){
//     inputVal += buttonText;
//     screen.value = inputVal;
// }