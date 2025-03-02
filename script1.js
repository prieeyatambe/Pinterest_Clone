
// class subtitle

    const subtitle=[
        {
            sub:'chai time snack idea',
            col:'rgb(235, 140, 39)'
        },
        {
            sub:'DIY ideas',
            col:'rgb(145, 97, 255)'
        },
        {
            sub:'Home decore idea',
            col:'rgb(66, 156, 72)'
        },
        {
            sub:'outfit idea',
            col:'rgb(207, 36, 132)'
        }
    ]

let index=0;
function changeSubtitle(){
    const subtitleElement=document.getElementById('subtitle');
    subtitleElement.innerHTML=subtitle[index].sub;
    subtitleElement.style.color=subtitle[index].col;

    index=(index+1) % subtitle.length;
    setTimeout(changeSubtitle,3000);
}
changeSubtitle();

//animation 1
 const firstArr=['images/decore4.jpg',
    'images/diy1.jpg','images/snack1.jpg'];
let a=0;
function changePicone() {
    const divele = document.getElementsByClassName('one'); // This returns an HTMLCollection

    // Loop through elements (if there are multiple)
    for (let i = 0; i < divele.length; i++) {
        divele[i].style.paddingRight='20px';
        divele[i].style.backgroundImage = `url(${firstArr[a]})`;
        divele[i].style.backgroundRepeat='no-repeat';
        divele[i].style.backgroundRepeat='no-repeat';
        divele[i].style.backgroundSize = "cover";        // Options: cover, contain, auto, 100% 100%
        divele[i].style.borderRadius = "10px";
        divele[i].style.transition = "1s ease-in-out";
        divele[i].style.opacity = "1";
    } 

    // Change the index for the next image
    a = (a + 1) % firstArr.length;
}

// Call the function every 3 seconds to change the background
setInterval(changePicone, 3000);
changePicone();

//animation 2
const secondArr=['images/diy2.jpg',
    'images/ot2.jpg','images/decore2.jpg'
];
let b = 0;
function changePictwo() {
    const secondDiv = document.getElementsByClassName('two'); // This returns an HTMLCollection

    // Loop through elements (if there are multiple)
    for (let i = 0; i < secondDiv.length; i++) {
        secondDiv[i].style.paddingRight='20px';
        secondDiv[i].style.backgroundImage = `url(${secondArr[b]})`;
        secondDiv[i].style.backgroundRepeat='no-repeat';
        secondDiv[i].style.backgroundRepeat='no-repeat';
        secondDiv[i].style.backgroundSize = "cover";        // Options: cover, contain, auto, 100% 100%
        secondDiv[i].style.borderRadius = "10px";
        secondDiv[i].style.transition = "1s ease-in-out";
    } 

    // Change the index for the next image
    b = (b + 1) % secondArr.length;
}

// Call the function every 3 seconds to change the background
setInterval(changePictwo, 3000);
changePictwo();

//animation 3
const thirdArr=['images/snack3.jpg',
    'images/diy3.jpg','images/decore3.jpg'
];
let c = 0;
function changePicthree() {
    const thirdDiv = document.getElementsByClassName('three'); // This returns an HTMLCollection

    // Loop through elements (if there are multiple)
    for (let i = 0; i < thirdDiv.length; i++) {
        console.log('ot');
        thirdDiv[i].style.paddingRight='20px';
        thirdDiv[i].style.backgroundImage = `url(${thirdArr[c]})`;
        thirdDiv[i].style.backgroundRepeat='no-repeat';
        thirdDiv[i].style.backgroundRepeat='no-repeat';
        thirdDiv[i].style.backgroundSize = "cover";        // Options: cover, contain, auto, 100% 100%
        thirdDiv[i].style.borderRadius = "10px";
        thirdDiv[i].style.transition = "1s ease-in-out";
        thirdDiv[i].style.opacity = "1";
        
    } 

    // Change the index for the next image
    c = (c + 1) % thirdArr.length;
}

// Call the function every 3 seconds to change the background
setInterval(changePicthree, 3000);
changePicthree();