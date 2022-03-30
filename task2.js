// Какого типа данных введенное значение

let x = prompt();

if (isNaN(+x)) {
    if (x === "True" || x === "False"){
        console.log("X - логического типа!");
    } else {
        console.log("X - строка!");
    }
} else {
    console.log("X - число!");
}