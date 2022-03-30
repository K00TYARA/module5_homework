let arr1 = [1, 1, 1, 1, 1];
let arr2 = [1, 1, 1, 2, 1];

function func(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (i === arr.length - 1) {
            console.log(true);
            break;
        } else if (arr[i] === arr[i+1]){
            continue;
        } else {
            console.log(false);
            break;
        }
    }
}

func(arr1);
func(arr2);
