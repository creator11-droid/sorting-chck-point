const sortandsearch = (array) =>{
    for(let i = 1; i<array.length; i++){
        for(let j = i ; j > 0 ; j--){
            if (array[j] < array[j-1]){
                [[array[j]] ,[array[j-1]]] = [[array[j-1]] ,[array [j]]];
            }else{
                break;
            }
        }
        
    }
    return array
}
console.log(sortandsearch([1 , 3, 6, 2,45 , 345, 400, 200 ,320 ,7, 9 ,720 ,8]))