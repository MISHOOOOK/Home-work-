var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]; 
function myBlend(arr){
    for(let h = arr.length - 1; h > 0; h--){
        const g = Math.floor(Math.random() * (h + 1)); 
        [arr[h], arr[g]] = [arr[g], arr[h]]; 

    }
}
myBlend(arr);
console.log("Після перемішування:", arr);