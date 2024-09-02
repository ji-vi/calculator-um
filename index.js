// DEFINITIONS
let input = document.getElementById("screen");
let buttons = document.querySelectorAll(".buttons");
let string = " ";
let arr = Array.from(buttons);

var offScreen = () => {
    input.value = ""
    input.style.background = "#61677A";
    input.style.border = "1px solid #636361";

    buttons.forEach((btn) =>{
        btn.disabled = true;
    })
    input.value = " ";
}
offScreen()

function s_off(){
    offScreen();
    
}

function s_on(){
    input.style.background = "rgb(241, 241, 241)";
    input.style.border = "2px solid #c0c0c0";
    
    buttons.forEach((btn) =>{
        btn.disabled = false;
    })
}

document.querySelector("#off-btn").addEventListener('click', () => {
    if (string != ""){
        string = ""
    }
    
})


// DISPLAYING NUMBERS,OPERATORS & PERFORMING CALCULATIONS
arr.forEach(b => {
    b.addEventListener('click', (e)=> {
        if(e.target.innerHTML == '='){
            string = eval(string);
            input.value = string;
        }

        else if (e.target.innerHTML == 'AC') {
            string = " ";
            input.value = string;
        }

        else if (e.target.innerHTML == 'DEL') {
            string = string.substring(0, string.length - 1);
            input.value = string;
        }

        else if (e.target.innerHTML == 'x!') {
            var i,num,f;
            f = 1;
            num = input.value;
            for(i=1; i<=num; i++){
                f = f*i
            }
            string = f;
            input.value = string;
        }

        else if (e.target.innerHTML == '+/-') {
            var num, neg ;
            num = input.value ; 
            neg = -parseFloat(num) ;
            input.value = neg ;
        }

        else if (e.target.innerHTML == '%') {
            var num, per;
            num = input.value;
            per = eval(num/100);
            input.value = per;
        }

        else if (e.target.innerHTML == 'x²') {
            input.value = Math.pow(input.value, 2);
        }

        else if (e.target.innerHTML == '√') {
            input.value = Math.sqrt(input.value) ;
        }

        else if (e.target.innerHTML == 'Abs') {
            input.value = Math.abs(input.value);
        }

        else {
            string += e.target.innerHTML;
            input.value = string;
            
        }
    })
})



// DARK - LIGHT MODE

const checkbox = document.getElementById("checkbox")
checkbox.addEventListener("change", () => {
  document.body.classList.toggle("dark")
})