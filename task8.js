// Выводит пару ключ-значение из ассициотивного массива

let myMap = new Map([
    ["key1", "value1"],
    ["key2", "value2"],
    ["key3", "value3"],
    ["apple", "green"],
    ["strawberry", "red"],
    ["blueberry",    "blue"]
]);

for (let values of myMap){
    console.log(`Ключ - ${values[0]}, значение - ${values[1]}`);
}