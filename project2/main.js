    var arr = [5,7,
        [4,[2],8,[1,3],2],
        [9,[]],
        1,8];

        let arrStr = 0;


    function arraySum(){

        var arrStr = arr.join().split(',');
        console.log(arrStr)
    
        arrStr = arrStr.map(Number);    

        var sum = 0;
        for(var i = 0; i < arrStr.length; i++){
            sum += arrStr[i];
            }
        console.log(sum);
        
        }
        arraySum();


