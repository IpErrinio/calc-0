//funkcje(

function plusy(a, b) {
    return a + b;
}

function minos(a, b) {
    return a - b;
}

function mnosz(a, b) {
    return a * b;
}

function dziel(a, b) {
    return a / b;
}

function poteg(a, b) {
    return a ** b;
}
// const wynik = plus(a, b)
a = prompt("cyfra 1");
b = prompt("cyfra 2");
// )koniec funkcji
dostepne_dzialania = ["+", "-", "*", "/", "**"]
if (dostepne_dzialania.includes(rodzaj))

    if (rodzaj = "+") {
    wynik = plusy(a, b)
} else if (rodzaj = "-") {
    wynik = minos(a, b)
} else if (rodzaj = "*") {
    wynik = mnosz(a, b)
} else if (rodzaj = "/") {
    wynik = dziel(a, b)
} else if (rodzaj = "**") {
    wynik = poteg(a, b)
}
console.log("wynik", wynik)
}
console.log("wynik", wynik)











// a = prompt("cyfra 1")
// b = prompt("cyfra 2")

// } else if (rodzaj === "-") {
//     wynik = minos(a, b)
// } else if (rodzaj === "*") {
//     wynik = mnosz(a, b)
// } else if (rodzaj === "/") {
//     wynik = dziel(a, b)
// } else if (rodzaj === "**") {
//     wynik = poteg(a, b)

// console.log("wynik", wynik) // wywolaj wynik


// function pierwis2(a) {
//     return Math.sqrt(aa)
// }

// function pierwis3(a) {
//     return Math.cbrt(aa)
// }

//, "pr2", "pr3"

// if (rodzaj === "aa") {
//     aa = prompt("Stopien pierwiastka")
//     if ("aa" === 2) {
//         wynik = pierwis2("pr2")
//     } else if (rodzaj === 3) {