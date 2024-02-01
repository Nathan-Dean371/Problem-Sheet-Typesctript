function functionA(value: string): number
{
    return value.length;
}

function functionB(value: string): number
{
    value = value.trim();
    return value.length;
}

function functionC(inputString: string, countWithWhitespaces: boolean)
{
    if(countWithWhitespaces)
    {
        console.log("Number of characters including whitespaces: " + functionA(inputString));
        return;
    }
    console.log("Number of characters without whitespaces: " + functionB(inputString));
}


console.log(functionC(" test 1 ", true));
console.log(functionC(" test 1 ", false));