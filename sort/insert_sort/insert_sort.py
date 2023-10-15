def insert_sort(arr, reverse=False):
    for i in range(1, len(arr)):
        key = arr[i]
        insert_point = i - 1
        while insert_point >= 0 and (arr[insert_point] < key if reverse else arr[insert_point] > key):
            arr[insert_point + 1] = arr[insert_point]
            insert_point -= 1
        arr[insert_point + 1] = key
    return arr

assert insert_sort([3, 1, 7, 2, 1, 9]) == [1, 1, 2, 3, 7, 9]
assert insert_sort([3, 1, 7, 2, 1, 9], reverse=True) == [9, 7, 3, 2, 1, 1]
