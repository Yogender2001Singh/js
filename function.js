isprime=(num)=>{
    let count=0;
    //5 = 1 2 3 4 5
    for(let i=1; i<=num; i++){
        
        if(num%i===0){
            count++;  //2
        }
    }
    if(count!=2){
        return "not a prime";
    }

    return "prime";
}

const a=isprime(13);
console.log(a);


       
prime=(num1)=>{


    for(let i=2; i<=num1; i++){

        if(num1%i===0){
            return 1
        }
    }
    return 0;
}

let val=prime();

if(val===1){
    console.log('not prime')
}
else{
    console.log('prime')
}

let arr=[10,20,true, 'buffalo'];
for(let i=0; i<arr.length; ++i){
    console.log(arr[i])
}

for(let yogender of arr){
    console.log(yogender);
}
