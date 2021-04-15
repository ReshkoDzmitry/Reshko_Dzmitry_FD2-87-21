let str = prompt('Введите строку');

function arrForEach(str) {
    const arrVowel = ['а', 'у', 'о', 'ы', 'и', 'э', 'я', 'ю', 'ё', 'е'];
    strEditedFE = str.toLowerCase().split('');
    let count = 0;
    strEditedFE.forEach(act => {
        if (arrVowel.includes(act))
            count++;
    });

    return count;
}

arrForEach(str);




function arrFilter(str) {
    const arrVowel = ['а', 'у', 'о', 'ы', 'и', 'э', 'я', 'ю', 'ё', 'е'];
    let strEditedFil = str.toLowerCase().split('');

    return strEditedFil.filter(actFil => arrVowel.includes(actFil)).length;
}

arrFilter(str);




function arrReduce (str) {
    const arrVowel = ['а', 'у', 'о', 'ы', 'и', 'э', 'я', 'ю', 'ё', 'е'];
    let strEditedR = str.toLowerCase().split('');
    countReduce = strEditedR.reduce((a, b) => arrVowel.includes(b) ? a + 1 : a, 0);

    return countReduce;

}

arrReduce(str);