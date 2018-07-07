def linearSearch(arr,value):
    position = -1
    for i in range(0,len(arr)):
        if arr[i] == value:
            position = i
            break
    return str(position)

arr = [1,5,4,2,7,8,2,12,63]
value1 = 8
value2 = 45

print(str(value1) + ' found at ' + linearSearch(arr,value1))
print(str(value2) + ' found at ' + linearSearch(arr,value2))