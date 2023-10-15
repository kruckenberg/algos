fn insertion_sort(arr: &mut [i32], reverse: bool) -> () {
    for i in 1..arr.len() {
        let mut j = i;
        while j > 0
            && (if reverse {
                arr[j] > arr[j - 1]
            } else {
                arr[j] < arr[j - 1]
            })
        {
            arr.swap(j, j - 1);
            j = j - 1;
        }
    }
}

fn main() {
    let mut arr = vec![3, 6, 1, 2, 8, 2, 4];
    insertion_sort(&mut arr, true);
    assert_eq!(arr, vec![8, 6, 4, 3, 2, 2, 1]);

    let mut arr2 = vec![3, 6, 1, 2, 8, 2, 4];
    insertion_sort(&mut arr2, false);
    assert_eq!(arr2, vec![1, 2, 2, 3, 4, 6, 8]);
}
