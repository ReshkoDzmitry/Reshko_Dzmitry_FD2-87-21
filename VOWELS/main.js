function findVowels() {

    let str=prompt('Введите строку');
    result = 0;
    let count = 0;
    const vowels = ['а', 'у', 'о', 'ы', 'и', 'э', 'я', 'ю', 'ё', 'е'];

    for (let char of str.toLowerCase()){
        if (vowels.includes(char)){
            count+= 1;
        }
    }
    return result = count;
    
}

findVowels();

/*alert(`Вы ввели: ${str}
Гласных букв: ${findVowels(str)}`);
*/
