const arr = [1, 2, 3, 1];

let isSame = false;

for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] === arr[j]) {
            isSame = true;
        }
    }
}

if (isSame) {
    console.log('true');
} else {
    console.log('false');
}