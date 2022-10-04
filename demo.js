// MAR 28th 1998 is time 0

//ENTER YOUR BIRTH DAY AND TIME
let ms_born = new Date("3/28/1998 4:15 am"); //born time
let ms_current = new Date(); //current time 

console.log("BORN: " + ms_born.toLocaleString()) //.toLocaleString() ->human readable
console.log("NOW: " + ms_current.toLocaleString())

console.log("DIFF")
let ms_alive = ms_current.getTime() - ms_born.getTime();
let ms_day = 24 * 60 * 60 * 1000; //MS IN A DAY 
console.log("ms in a day " + ms_day)

let days_alive = ms_alive / ms_day;
console.log("DAYS ALIVE: " + days_alive)