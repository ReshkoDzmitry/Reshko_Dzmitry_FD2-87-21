function century() {
    
    let year = prompt('Введите год');
    cent = parseInt((year-1)/100)+1;
    console.log(year + ' год - это ' + cent + ' век');
    
}

century();

