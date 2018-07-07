def BinarySearch(arr,val):
    start = 0
    end=len(arr)
    mid=end/2
    while (arr[mid] != val and start < end):
        if arr[mid] > val:
            end=mid-1
        else:
            start = mid + 1
        mid = (start+end)/2
    return str(mid) if (arr[mid]==val) else '-1'


arr = [1,5,4,2,7,8,2,12,63]
value1 = 7
value3 = 1
value2 = 45
print(str(value1) + ' is found at '+ BinarySearch(arr,value1))
print(str(value2) + ' is found at '+ BinarySearch(arr,value2))
print(str(value3) + ' is found at '+ BinarySearch(arr,value3))