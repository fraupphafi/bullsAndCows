console.log('hi');

let randomNum = 1234;
let wrongList = document.querySelector('.wrong');

function getUserNum() {
    let userNum = prompt('Введите четырехзначное число', 0);
    checkUserNum(userNum);
    if (checkUserNum(userNum) === 'wrong') {
        alert('Неправильный формат. Попробуйте ещё');
        getUserNum();
    }

    if (+userNum !== randomNum) {
        alert('Не совпало');
        let wrongItem = document.createElement('li');
        wrongItem.innerHTML = userNum;
        wrongList.appendChild(wrongItem);
        getUserNum();
    }
    alert(`Верно! Загадонное число:${randomNum}! Ваше число:${userNum}`);
}

function checkUserNum(num) {
    let arr = num.split('');    
    if(arr.length !== 4) {
        console.log('wrong length');        
        return 'wrong';
    }
    let obj = {};
    for (let i = 0; i < arr.length; i++) {
        let key = arr[i];
        obj[key] = true;
    }
    let unicueArr = Object.keys(obj);
    if (unicueArr.length !== 4) {
        console.log('wrong unicue');        
        return 'wrong';
    }
    return 'ok';
}

getUserNum();
