//while loop//
let count = 20;
while(count > 5){
    console.log(count);
    count --
}

let count2 = 2;
while(count2 < 30){
    console.log(count2)
    count2 ++
}

let month = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
let count3 = 0;
while(count3 < month.length ){
    console.log(month[count3]);
    count3 ++
}

let name = ["Faisal","Hamda","Faisal","Hamda","Faisal","Hamda","Faisal","Hamda","Faisal","Hamda"];
let nameCount = 0;
while(nameCount < name.length){
    console.log(name[nameCount]);
    nameCount ++
}

console.log("While Loop makes you execute a block of code repeatedly as long as the condition is true");

//For Loop//

for(i = 20; i >= 5; i-- ){
    console.log(i);
}

for(i = 2; i <= 30; i++){
    console.log(i);
}

let mon = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
for(i = 0; i < mon.length; i++){
    console.log(mon[i]);
}

let name2 = ["Faisal","Hamda","Faisal","Hamda","Faisal","Hamda","Faisal","Hamda","Faisal","Hamda"];
for(i = 0; i < name2.length; i++){
    console.log(name2[i]);
}

for(i = 1; i <= 10; i++){
    console.log(i);
    if(i == 5){
        console.log("Welcome to loop");

    }
}