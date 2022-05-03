// /*for (var i = 0; i < 10; i++) {
//     if(i>1)
//     {
//     console.log("asdad");
//     break;
//     console.log("zzzzz");
//     }
//     console.log("yeeee");
// }*/

// var array= [10,20,30,40,50,60];
// var f= array.find(Fuc);

// function Fuc(index,value,array){ 
//     return value>2;
// }

// console.log(f);


// avi={1:"a",2:"b",3:"c"};
// console.log(avi);
// avi.ab="d";
// console.log(avi); 
//==========================day 17===========================

//let==>local scope and var==> gloabl scope
//spread operator(...)

// const arr1=[1,2,3,4,5,6];
// arr1.splice(1,3,"hi");
// console.log(arr1);
// const arr2=[...arr1,10,23,45];
// console.log(arr2);

//====================day 18=================================

//dom manipulation

//  avi=document.createElement("div");
// avi.classList.add("mystyle");
// document.getElementById("b").appendChild(avi);
// console.log(avi);

//======================day 19==============================
// const obj ={
//     name: "avi",
//     email: "acs",
//     age : 20
// }
// console.log(obj.age);
// let{name,email,age,phoneno="1234"}=obj;
// console.log(`${name} and ${phoneno}`);

// let add = function(a,b) // function as a variable
// {
//     return a+b;
// }
// console.log(add(20,30));

// let Add= (x,y)=> x+y; // arrow function
// console.log(Add(10,20)); 


// //this keyword
// const counter={
//     count: 2,
//     next : function()
//     {
//         return((this.count)*100);
//     }
// }
// console.log(counter.next());
//==========================day 20=======================
// MAP 
let arr=[1,2,3,4,5,6];
// console.log(arr.map((e,index)=>e*100));

/*difference btw map and forEach that map will create a new array for result whereas
for each don't it will never return anything it will only print*/
  

// const newArr = arr.map( (value) => {
//     if(value % 2 == 0){
//         return value;
//     }
// })
// console.log(newArr);

// const newFilterArr = arr.filter( (value) => {
//     if(value % 2 == 0){
//         return value;
//     }
// })
// console.log(newFilterArr);


let concert = false;

const attendConcert = new Promise( function (fulfill, reject){
    setTimeout( () => {
        if(concert){
            fulfill("Atteded the Concert");
        }else{
            reject("Missed concert");
        }
    },1000);
});

// console.log(attendConcert);

// console.log(attendConcert.then( (data) => console.log(data)));
// console.log(attendConcert.catch( (error) => console.log(error)));
// console.log(attendConcert.then( (data) => console.log(data)).catch( (error) => console.log(error)));

// async-await
const fun = async() =>{
    try{
        let  result = await attendConcert;
        console.log(result);
    }catch(e){
        console.log(e);
    }
}

console.log(fun());






