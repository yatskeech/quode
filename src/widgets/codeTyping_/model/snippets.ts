export const SNIPPETS = [
  {
    language: 'javascript',
    code: `function bubbleSort(arr) {
  const n = arr.length;
  let swapped;
  do {
    swapped = false;
    for (let i = 1; i < n; i++) {
      if (arr[i - 1] > arr[i]) {
        [arr[i - 1], arr[i]] = [arr[i], arr[i - 1]];
        swapped = true;
      }
    }
  } while (swapped);
  return arr;
}`,
  },
  {
    language: 'python',
    code: `def bubble_sort(lst):
    n = len(lst)
    swapped = True
    while swapped:
        swapped = False
        for i in range(1, n):
            if lst[i - 1] > lst[i]:
                lst[i - 1], lst[i] = lst[i], lst[i - 1]
                swapped = True
    return lst`,
  },
  {
    language: 'java',
    code: `public class BubbleSort {
    public static void bubbleSort(int[] arr) {
        int n = arr.length;
        boolean swapped;
        do {
            swapped = false;
            for (int i = 1; i < n; i++) {
                if (arr[i - 1] > arr[i]) {
                    int temp = arr[i - 1];
                    arr[i - 1] = arr[i];
                    arr[i] = temp;
                    swapped = true;
                }
            }
        } while (swapped);
}`,
  },
];
