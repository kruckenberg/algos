def should_move(value, comparand, position, asc=True):
    return position >= 0 and (comparand > value if asc else comparand < value)

def insert_sort(arr, asc=True):
    for i in range(1, len(arr)):
        key = arr[i]
        insert_point = i - 1
        while should_move(key, arr[insert_point], insert_point, asc):
            arr[insert_point + 1] = arr[insert_point]
            insert_point -= 1
        arr[insert_point + 1] = key
    return arr

assert insert_sort([3, 1, 7, 2, 1, 9]) == [1, 1, 2, 3, 7, 9]
assert insert_sort([3, 1, 7, 2, 1, 9], asc=False) == [9, 7, 3, 2, 1, 1]
