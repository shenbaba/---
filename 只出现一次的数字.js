let nums = [2,2,1];
function  test(nums) {
    //先对数组排序
    nums.sort();
    for(let i=0; i<nums.length;i++){
        //找到没有重复的就返回
        if(nums[i] !=nums[i+1]){
            return nums[i];
        }
    }
    //如果一直没有不重复的就返回最后一项
    return nums[nums.length-1];
};
console.log(test(nums));
