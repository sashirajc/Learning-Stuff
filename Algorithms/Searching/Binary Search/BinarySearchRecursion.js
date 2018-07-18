function BinarySearchRecursion(arr,val,start=0,end=arr.length){
    let mid=Math.round((start+end)/2);
    if(start>end){
        return -1;
    }
    if(arr[mid]<val){
        return BinarySearchRecursion(arr,val,mid+1,end);
    }else if(arr[mid]>val){
        return BinarySearchRecursion(arr,val,start,mid-1);
    }else if(arr[mid] == val){
        return mid;
    } else {
        return -1;
    }
}


var arr = [1,2,4,5,7,8,12,63];
var value1 = 5,
value2 = 54,
value3 = 4;
console.log(`${value1} is at ${BinarySearchRecursion(arr,value1)}`);
console.log(`${value2} is at ${BinarySearchRecursion(arr,value2)}`);
console.log(`${value3} is at ${BinarySearchRecursion(arr,value3)}`);