let changeUserButton = document.querySelector('button');
let userHeading = document.querySelector('h3');
if (!(localStorage.getItem('userName'))) {
    setUserHeading();
}
else {
    userHeading.textContent = 'Hi, ' + localStorage.getItem('userName');
}

changeUserButton.onclick = function () {
    setUserHeading();
}

function setUserHeading() {
    let userName = prompt('Please enter your name: ');
    // In prompt, if user clicks on 'Ok' without entering a name it results in empty string
    // In prompt, if user clicks on 'Cancel' it results in null
    console.log(userName);
    if (userName === '') {
        // if (!(localStorage.getItem('userName'))) {
            console.log('In First Condition. LocalStorage value is null and UserName is empty.');
            console.log(localStorage.getItem('userName'));
            console.log(userName);
            alert('Please enter your name to proceed accessing website.');
            setUserHeading();
        // }
        // else if (localStorage.getItem('userName')) {
        //     console.log('In Second Condition. LocalStorage value is defined and UserName is empty.');
        //     console.log(localStorage.getItem('userName'));
        //     console.log(userName);
        //     alert('Please enter your name to change user name.');
        //     setUserHeading();
        // }
    }
    else if (userName === null) {
        if (!(localStorage.getItem('userName'))) {
            console.log('In Third Condition. LocalStorage value is null and UserName is null.');
            console.log(localStorage.getItem('userName'));
            console.log(userName);
            alert('Please enter your name to proceed accessing website.');
            setUserHeading();
        }
        else if (localStorage.getItem('userName')) {
            console.log('In Fourth Condition. LocalStorage value is defined and UserName is null.');
            console.log(localStorage.getItem('userName'));
            console.log(userName);
        }
    }
    else {
        console.log('In Fifth Condition.');
        console.log(localStorage.getItem('userName'));
        console.log(userName);
        localStorage.setItem('userName', userName);
        userHeading.textContent = 'Hi, ' + userName;
    }

}



// const myHeading = document.querySelector('h2');
// myHeading.textContent = "Jai Ganesha";
// alert('Jai Ganesha')
// document.querySelector('html').onclick = function() {
//     alert('Jai Ganesha');
// }

// let imageElement = document.querySelector('img');
// imageElement.onclick = 
// let imageTimer = setInterval(changeImage, 1000);
// function changeImage() {
//     let imageSource = imageElement.getAttribute('src');
//     if(imageSource === 'images/lord-ganesh.jpg') {
//         imageSource = 'images/ganesh-1.png';
//     }
//     else if(imageSource === 'images/ganesh-1.png') {
//         imageSource = 'images/ganesh-2.png';
//     }
//     else {
//         imageSource = 'images/lord-ganesh.jpg';
//     }
//     imageElement.setAttribute('src', imageSource);
// }