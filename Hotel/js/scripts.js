// what is the path to the JSON file?
const apiURL = "../hoteldata.json";

//Go fetch it and then wait for a response.
fetch(apiURL)
  .then((response) => response.json())
  .then((myList) => {
    //Once it comes back, display it to the console.
    console.log(myList);

    /*----------- FOOTER --------------*/
    for (i = 0; i < myList.length; i++) {



    let myImageTag = document.createElement("img");
    myImageTag.src = myList[i].photo;
    console.log(myList[i].photo);

    let myCaptionTag = document.createElement("figcaption");
    myCaptionTag.textContent= myList[i].name;
    console.log(myList[i].name);

    let theIcontLeftTag = document.createElement("i");
    theIcontLeftTag.className = "icon ion-md-car";

    let theAddress1Tag = document.createElement("p");
    theAddress1Tag.textContent= myList[i].address[0];
    console.log(myList[i].address[0]);

    let theAddress2tag = document.createElement("p");
    theAddress2tag.textContent= myList[i].address[1];
    console.log(myList[i].address[1]);

    let theIconRightTag = document.createElement("i");
    theIconRightTag.className= "icon ion-md-call";

    let thePhoneTag = document.createElement("p");
    thePhoneTag.textContent= myList[i].phone;
    console.log(myList[i].phone)



//span elements

let theSpanLeftTag = document.createElement("span");
theSpanLeftTag.appendChild(theIcontLeftTag);
theSpanLeftTag.appendChild(theAddress1Tag);
theSpanLeftTag.appendChild(theAddress2tag);

let theSpanRightTag= document.createElement("span");
theSpanRightTag.appendChild(theIconRightTag);
theSpanRightTag.appendChild(thePhoneTag);




// end span
let myFigureTag = document.createElement("figure");
myFigureTag.appendChild(myImageTag);
myFigureTag.appendChild(myCaptionTag);
myFigureTag.appendChild(theIcontLeftTag);
myFigureTag.appendChild(theAddress1Tag);
myFigureTag.appendChild(theAddress2tag);
myFigureTag.appendChild(theIconRightTag);
myFigureTag.appendChild(thePhoneTag);

document.getElementById('inventoryWrapper').appendChild(myFigureTag);  

    }
}); //end of "then" fat arrow function