// array methods	// array methods
let a=[10,20,30,40];	let a=[10,20,30,40];




a.push('shubham');   //insert element at last	a.push('shubham');   //insert element at last
console.log(a);	console.log(a);
a.pop();        //delete element from last	a.pop();        //delete element from last
@@ -49,7 +51,7 @@ console.log(arr)
// }	// }


// 	// 
let arr1=[10,20,30,50];	// let arr1=[10,20,30,50];


// console.log(arr1.slice(0,1))	// console.log(arr1.slice(0,1))
// console.log(arr1.splice(0,3)); 	// console.log(arr1.splice(0,3)); 
@@ -61,19 +63,55 @@ let arr1=[10,20,30,50];


// console.log(val)	// console.log(val)


  arr1=arr1.map(function(item){	  // arr1=arr1.map(function(item){


    if(item<50){	  //   if(item<50){
        return 'fail';	  //       return 'fail';
    }	  //   }
    else{	  //   else{
        return "pass"	  //       return "pass"
  //   }
  //   })

  //   console.log(arr1);


    function filtervalues(){
      return arr.filter(item=>item>50)
    }	    }
    console.log(filtervalues(arr))

    // 
    let b= arr.filter(function(item){
       return item>50;
    })	    })


    console.log(arr1);	    console.log(b)



    //reduce method

    let c=arr.reduce(function(a,b){
      return a+b;

    })
    console.log(c);


    // flat method

    let arr3=[[10,20],[30,40]];

    console.log(arr3.flat())

    console.log(arr3[1][1])


  //  split 

  let str="shubham, yogender, rajesh";
  console.log(str.split(","))

  console.log(arr.join(','))






 13 changes: 13 additions & 0 deletions13  
object.html
@@ -0,0 +1,13 @@
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script src="object.js"></script>


</body>
</html>
 63 changes: 63 additions & 0 deletions63  
object.js
@@ -0,0 +1,63 @@
let a=[

    { name:"shubham",
    age:21,
   },

   {
    name:"shshhs",
    age:21
   }
]
// console.log(a[0].name)
// console.log(a[0].age) 
// console.log(a[1].name);

// for(let i of a){
//     console.log(i.name , i.age)
// }


let arr=[
    {
        name:'shubham',
        age:21
    },
    {
        name:'shubh',
        age:17
    },
    {
        name:'shubham',
        age:19
    },
    {
        name:'rajesh',
        age:20
    },
    {
        name:'yogender',
        age:45 
    }

]
let ans=arr.filter(item=>item.age>18);
console.log(ans)



var [a1,b,c]=[10,20,30,40];
console.log(a1);
console.log(b);
console.log(c);
// console.log(d);

var numbers =[5,[2,3,4],12,14];
var [a2,[x,y,z]]=numbers;
console.log(a2);
console.log(x);
console.log(y);
console.log(z);


