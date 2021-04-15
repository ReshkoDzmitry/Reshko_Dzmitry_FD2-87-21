function reverseStr() {
    let str = prompt('Введите строку');

        str = str.replace(/[\s.,%]/g, '')
        str = str.replace(/ё/g, 'е');
        str = str.replace(/ъ/g, 'ь');

        let str1 = str.split('').reverse().join('');

        str1 = str1.split(' ').join('');

        if (str.toUpperCase() == str1.toUpperCase()) {
            alert('Полиндром');
        }
        else {
            alert('Не полиндром');
        }

        console.log(str);
        console.log(str1);

}

    reverseStr();
    