function ask() {
    const words = [];

    for (let step = 0; ; step++) {
        let answer = prompt('Enter text');
        if (answer === 'exit'){
            break;
        }


        if (answer === null || answer === '') {
            words.pop();
        }
        else {
            words.push(answer);
        }
        console.log(words);
    }
}


ask();



function array() {
    const arr = [];
    let arrNew = [];

    for (let i = 1; i <= 100; i++) {
        arr.push(i);
        
    }
    console.log(arr);
    arrNew = arr.map(function (item) {
        return item * 3;
    });
    console.log(arrNew);

}

array();