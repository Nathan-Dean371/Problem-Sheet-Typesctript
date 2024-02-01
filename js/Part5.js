"use strict";
function functionA(value) {
    return value.length;
}
function functionB(value) {
    value = value.trim();
    return value.length;
}
function functionC(inputString, countWithWhitespaces) {
    if (countWithWhitespaces) {
        console.log("Number of characters including whitespaces: " + functionA(inputString));
        return;
    }
    console.log("Number of characters without whitespaces: " + functionB(inputString));
}
functionC(" test 1 ", true);
functionC(" test 1 ", false);
