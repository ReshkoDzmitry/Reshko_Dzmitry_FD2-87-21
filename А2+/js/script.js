function result(){
    let str = prompt('введите строку');

    strNew = str.split(' ').filter(function(n){ return n != '' }).join(' ');
    console.log('!' + strNew + '!');
}

result();