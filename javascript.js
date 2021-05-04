function myfunction()//function
{
    let  a=25;
    console.log(a);

}
myfunction();
function myfunctions(z)
{
    let a=25;
    let b=z;
    let c=a+b;
    return c;
    
}
console.log(myfunctions(5));
//object
let username ={
    firstname:"gayathri",
    lastname:"p nair"
};
console.log(username);
//array
let myname=["gayathri","arya","arathy"];
console.log(myname);
//string methods
let names="gayathri";
//length
console.log(names.length);
//indexof
console.log(names.indexOf("y"));
//includes
console.log(names.includes("y"));
//slice
console.log(names.slice(0,5));
//Number method
let a="25";
let b=25;
//paresint
console.log(parseInt(a));
//tostring
console.log(b.toString());
//Array methods
let myarrya=["a","b","c"];
myarrya[0]="v";
//push
myarrya.push("n");
//pop
myarrya.pop();
//shift
myarrya.shift();
//unshift
myarrya.unshift("p");
console.log(myarrya.length);
let myarry=["a","b","c"];
//splice
myarry.splice(1,2);
console.log(myarry);
//sort
let myarrys=["l","b","e"];
myarrys.sort();
console.log(myarrys);
//reverse
myarrys.reverse();
console.log(myarrys);
//object method
let usernames ={
    firstname:"gayathri",
    lastname:"p nair"
};
usernames.firstname="kavya";
delete usernames.firstname;
console.log(usernames);
//if elseif
let myage=23;
if(myage===23)
{
    console.log("you are strong enough");
}
else if (myage>=20 && myage<=30) {
    
    console.log("you are okay");
} 
    

else{
    console.log("you  not strong enough");
}
//switch
let fruits="apple";
switch(fruits)
{
    case "apple":
        console.log("this is apple");
        break;
        case "banana":
        console.log("this is banana");
        break;
        case "orange":
        console.log("this is orange");
        break;
        default:
            console.log("no items");
}
//for loop

let count=10;
for( let i=0;i<=10;i++)
{
    console.log(i);
}
//while loop
let counts=0;
while(counts<10)
{
    console.log(counts);
    counts++;
}
//do while
do{
    console.log(counts);
    counts++;
}
while(counts<10)

//for loop in arry
let myarryss=["gayathri","arya","arathy"];
for( let i=0;i<myarryss.length;i++)
{
    console.log(myarryss[i]);
}