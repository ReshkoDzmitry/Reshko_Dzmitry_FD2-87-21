let str = prompt('введите строку');
let a;

 function palindrome() {

    str = str.toLowerCase().replace(/\s/g,'');
    return str === str.split('').reverse().join('');
}

console.log(palindrome(str));

if (palindrome(str) === true) {
    alert('ПАЛИНДРОМ');
}
else 
    alert('НЕ ПАЛИНДРОМ');

