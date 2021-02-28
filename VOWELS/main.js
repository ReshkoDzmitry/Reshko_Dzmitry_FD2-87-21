let str=prompt('Введите строку');



function findVowels(str) {
    let count = 0;
    const vowels = ['а', 'у', 'о', 'ы', 'и', 'э', 'я', 'ю', 'ё', 'е'];

    for (let char of str.toLowerCase()){
        if (vowels.includes(char)){
            count+= 1;
        }
    }
    return count;
}

alert(`Вы ввели: ${str}
Гласных букв: ${findVowels(str)}`);

