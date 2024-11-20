function insertionsort(arr){
for (var i=1; i< arr.length; i++){
     var key = arr[i];
     var j = i - 1;
while (j>=0 && arr[j]>key){
    arr[j+1]= arr [j];
    j--
}
arr[j+1]=key 
}
}
var arr=[4,2,10,5,8,9];
insertionsort(arr);
console.log (arr.join (" "))