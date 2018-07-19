
def BinarySearchRecursion(arr,val,start,end):
    mid = int((start+end)/2)
    if(start>end):
        return str(-1)
    
    if(arr[mid]>val):
        end = mid-1
        return BinarySearchRecursion(arr,val,start,end)
    elif(arr[mid]<val):
        start = mid+1
        return BinarySearchRecursion(arr,val,start,end)
    elif(arr[mid]==val):
        return str(mid)


arr = [1,5,4,2,7,8,2,12,63]
value1 = 7
value3 = 1
value2 = 45

print(str(value1) + ' is found at '+ BinarySearchRecursion(arr,value1,0,len(arr)))
print(str(value2) + ' is found at '+ BinarySearchRecursion(arr,value2,0,len(arr)))
print(str(value3) + ' is found at '+ BinarySearchRecursion(arr,value3,0,len(arr)))