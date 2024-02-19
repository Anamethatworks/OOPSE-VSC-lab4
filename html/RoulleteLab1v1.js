"use strict";

function roulleteRoll() {

let A = [0, 34, 10, 21, 28, 4, 18, 9, 27, 22, 12, 3, 17, 20, 11, 33, 2, 10, 32, -1, 15, 8, 25, 1, 31, 20, 14, 30, 7, 24, 29, 35, 6, 13, 23, 19, 5, 36];

let selectedInt = (Math.random()*37)-1;

let selectedIntIndex = 0;

let i = 0;

//console.log(A.length);

selectedInt = Math.round(selectedInt);

for(i = 0; i < A.length; i++) {

    //console.log(A[i]);
    //console.log(selectedInt);

    if (A[i] == selectedInt) {

        selectedIntIndex = i;
        //console.log(selectedIntIndex);


    }


}

selectedIntIndex++;

//selectedInt = -0.6

let selectedString = "";

if (selectedInt == -1) { 
    selectedString = selectedString + "00"}

else {

    if (selectedInt < 0.1) {selectedInt = 0;}

    selectedString = selectedString + selectedInt; //Integer.toString(selectedInt)

}

let Rouge = " Rouge";
let Noir = " Noir";

if((selectedIntIndex % 2 ) == 1) 
{
    selectedString = selectedString + Rouge;
    //console.log(selectedIntIndex);
}

if((selectedIntIndex % 2 ) == 0) 
{
    selectedString = selectedString + Noir;
}

let Impair = " Impair";
let Pair = " Pair";

if (selectedInt == 0) {selectedString = selectedString + Impair;}

if (selectedInt == -1) {selectedString = selectedString + Pair;}

if (selectedInt > 0) {

    if((selectedInt % 2)==1) {
        selectedString = selectedString + Impair;
    }

    if((selectedInt % 2)==0) {
        selectedString = selectedString + Pair;
    }


}

let Passe = " Passe";
let Manque = " Manque";

if (selectedInt == -1) {selectedString = selectedString + Passe;}

if ((selectedInt >= 0) && (selectedInt <= 18)) {selectedString = selectedString + Manque;}

if (selectedInt > 18) {selectedString = selectedString + Passe;}


return selectedString;


}

let div1 = document.getElementById("Results");

let sock;
sock = new WebSocket("ws://"+document.location.host+"/sock");

function gamble() {

    let div2 = document.createElement("div");
    let str = roulleteRoll();
    let T = document.createTextNode(str);
    div2.appendChild(T);
    div1.appendChild(div2);
    sock.send(str)

}



 

