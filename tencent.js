//腾讯笔试题
let arr = [1,3,2,4];
//碰碰数
let s = [3,2];
let b = [2,4];
let arr3 = []
for(let i = 0; i<arr.length;i++){
    let arr2 = [];
    arr2.push(arr[i]);
    arr3.push(arr2);
    let arr4=[];
    arr4 = JSON.parse(JSON.stringify(arr2));
    for(let j = i+1 ; j<arr.length ; j++){
        if(arr2.indexOf(arr[j])===-1){
           arr4 =JSON.parse(JSON.stringify(arr4));
           arr4.push(arr[j]);
           arr3.push(arr4);
        }
       
    }
}
for(let i =0;i<arr3.length;i++){
    let str =arr3[i]
    for(let j = 0;j<str.length;j++){
        if(str[j] == b[0] && str[j+1] == b[1] || str[j] == s[0] && str[j+1] == s[1]){
            arr3[i] = undefined;
        }
    }
}
let le = 0;
for(let i = 0;i<arr3.length;i++){

    if(arr3[i] != null){
        le++;
    }   
}
console.log(le);