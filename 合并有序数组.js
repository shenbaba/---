/* 初始化 nums1 和 nums2 的元素数量分别为 m 和 n。
你可以假设 nums1 有足够的空间（空间大小大于或等于 m + n）来保存 nums2 中的元素 */
var nums1 = [1,2,3,0,0,0];
var m=3;
var nums2 = [2,5,6];
var n=3;

function merge(){
    let len=nums1.length;
    nums1.splice(m,len-m);
    for(let i=0;i<n;i++){
        nums1.push(nums2[i]);
    }
    console.log(nums1);
    nums1.sort((a,b)=>{
        return a-b;
    });
    return nums1;
};
var s =merge();
console.log(s);