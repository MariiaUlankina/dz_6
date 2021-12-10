function ask(){
const words = [];

    for (let step = 0; ; step++){
        let answer = prompt ('Enter text');
        if (answer === null || answer === ''){
            words.pop(answer); 
            break;
            
        }
        else {
            words.push(answer);
        }  
        
    }

    console.log(words);

}


ask();



function array (){
    const arr = [];
    let arrNew = [];

    for (let i = 0; i< 100;i++){
        arr.push(i);
        arrNew = arr.map(function (i){
            return i*3;
        });
    }
    console.log(arr);
    console.log(arrNew);

}

//array();