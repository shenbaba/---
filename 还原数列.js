/* 还原数列，找出长度为n的数组中的最大值减去n, 其余n-1个数加1，直至所有数小于n,最少需要几次这样的操作*/
let n = 3;
let arr= [4,0,7];
let count = 0;
function test(arr) {
    arr.sort((a,b)=>{
        a-b;
    })
    if(arr[n-1]<n){
        console.log(count);
    }else{
        arr[n-1] = arr[n-1]-n;
        for(let i = 0;i<n-1;i++){
            arr[i] = arr[i]+1;
        }
        arr.sort((a,b)=>{ return a-b});
        console.log(arr);
        count ++;
        test(arr);
    }
    
}
test(arr);