// https://www.codewars.com/kata/find-the-smallest-integer-in-the-array/train/javascript

function findSmallestInt(arr) {

    small = arr[0];
    
    for ( let i = 1; i < arr.length; i++){
        if (arr[i] < small){
            small = arr[i]
        }

    }

    return small;
}



console.log(findSmallestInt([1, 2 ,4, -21]))
