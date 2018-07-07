function simpleSearch(arr,value){
    var position = -1;
    for(var i=0;i<arr.length;i++){
        if(arr[i] === value){
            position = i;
            break;
        }
    }
    return position;
}



var arr = [1,5,4,2,7,8,2,12,63];
var value1 = 5,
value2 = 54;
console.log(`${value1} is at ${simpleSearch(arr,value1)}`);
console.log(`${value2} is at ${simpleSearch(arr,value2)}`);
