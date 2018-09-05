var firstpart = 0;
var secondpart = "0";
var op = 0;
var dot = 0;

function numbers(value) {

    //wherever this functon is called, get the value of what is on the screen
    var screen = document.getElementById("screen");

    //I used top down approach to code this, read from the elseif statement to enable easy understanding  
    //check if the = sign has been pressed. the variable value is where anything that is pressed is stored. it is passed through the function number()
    if (value == "=") {
        //split the input using the split function, which returns it as an array 
        var all = screen.value.split(" ")
        firstpart = parseFloat(all[0]);
        op = all[1];
        secondpart = parseFloat(all[2]);

        var screen = document.getElementById("screen");

        if (secondpart == 0) {
            screen.value = "division by zero!"
        }
        switch (op) {

            case '+':
                result = firstpart + secondpart;
                screen.value = result;
                break;
            case '-':
                result = firstpart - secondpart;
                screen.value = result;
                break;
            case '*':
                result = firstpart * secondpart;
                screen.value = result;
                break;
            case '/':
                result = firstpart / secondpart;
                screen.value = result;

                break;
            case '%':
                result = firstpart % secondpart;
                screen.value = result;
                break;
            default:

                break;
        }
    }

    //if the equals sign wasnt pressed,then the following will be evaluated.
    // checks for what is on the screen and what is pressd
    else if (screen.value == "0" && value == "0") {
        return null;
    }

    //it checks for what is on the screen and what is pressed
    else if (screen.value == "0" && !((value == "*" || value == "/") || ((value == "+" || value == "-") || (value == "%")))) {
        screen.value = value;
        //secondpart+=value;
    }
    //if actually a number was pressed, it will save it on an already decleared variable and on the screen
    else if (!((value == "*" || value == "/") || ((value == "+" || value == "-") || (value == "%")))) {
        screen.value += value;
        //secondpart+=screen.value;
    }

    //when eventually an operation is pressed,it will build this sting as say 2  *  2 with spaces in between to help me split the array
    else if (op == "0" && ((value == "*" || value == "/") || ((value == "+" || value == "-") || (value == "%")))) {
        //
        //building the string
        screen.value += " ";
        screen.value += value;
        screen.value += " ";
        op = value;
    } else {
        return;
    }
}

function deleted(del) {
    var screen = document.getElementById("screen");
    screen.value = '';
    op = 0;
    del = 0;
    var firstpart = "0";
    var secondpart = "0";
    var dot = 0;
}

function dots(dt) {
    if (dot == 0) {
        var screen = document.getElementById("screen");
        screen.value += dt;

        // i changed the value of dot to avoid pressing it two times 
        dot = "recoded"
    } else {
        //returns an empty stuff if you have pressed dot for the first time
        return;
    }
}