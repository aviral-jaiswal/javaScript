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
const obj ={
    name: "avi",
    email: "acs",
    age : 20
}
console.log(obj.age);
let{name,email,age,phoneno="1234"}=obj;
console.log(`${name} and ${phoneno}`);
 





