function BinarySearch(arr,val){
    var start = 0;
    var end = arr.length;
    var mid = Math.floor(end/2);

    while(arr[mid]!= val && start < end){
        if(arr[mid] < val){
            start = mid + 1;
        }else{
            end = mid - 1;
        }
        mid = Math.floor((start+end)/2)
    }
    return (arr[mid]==val)? mid: -1;
}

var arr = [1,2,4,5,7,8,12,63];
var value1 = 5,
value2 = 54,
value3 = 4;
console.log(`${value1} is at ${BinarySearch(arr,value1)}`);
console.log(`${value2} is at ${BinarySearch(arr,value2)}`);
console.log(`${value3} is at ${BinarySearch(arr,value3)}`);