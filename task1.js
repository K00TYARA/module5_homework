// Является ли введенное значение числом. Если да, то четное или нечетное.

let x = prompt();
x = +x;

if (isNaN(x)){
    console.log("Упс, кажется вы ошиблись!");
} else if (typeof x === "number") {
    if (x % 2 === 0){
        console.log("Число четное!");
    } else {
        console.log("Число нечетное!");
    }
}