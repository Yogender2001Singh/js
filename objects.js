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
