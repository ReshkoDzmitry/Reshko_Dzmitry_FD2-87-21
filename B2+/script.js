function rev() {

    let str = prompt('Введите строку');
    console.log(str);

    strRev = str.split('').reverse().join('');
    console.log(strRev);
}

rev();