function result(){
    let res = document.getElementById("inputs").value;

    document.getElementById("inputs").value = eval(res);
}

function clearInput(){
    document.getElementById("inputs").value = '';
}

function root(){
    let cor = document.getElementById("inputs").value;
    document.getElementById("inputs").value = Math.sqrt(cor);
}

function procent(){
    let x = document.getElementById("inputs").value;
    let y = x / 100;
    document.getElementById("inputs").value = y;
}

function copir(){
    let copyText = document.getElementById("inputs");
    copyText.select();
    document.execCommand("copy");
}
