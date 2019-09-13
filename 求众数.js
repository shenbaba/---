var majorityElement = function(nums) {
    let  most = {};
    let max =0;
    let count;
    for(let i = 0;i<nums.length;i++){
        let a = nums[i];
        most[a] === undefined ? most[a] = 1 : most[a]++;
        if(most[a]>max){
            count = a;
            max = most[a];
        }
    }
    return count;
};