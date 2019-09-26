/*百度笔试题，给定一个范围，求这个范围内最小公倍数与最大公约数的差的最大值 */
var n = 5;
function test(){
    let max =0;
    for(let i =0; i<=n; i++) {
        for(let j = i+1;j<=n;j++ ){
            let a1 = i,a2=j;
            while(a2!=0){
                let temp = a1%a2;
                a1 = a2;
                a2 = temp;
            }
            let beishu = (i*j/a1);
            if(beishu-a1>max){
                max = beishu-a1;
            }
        }
    }
    return max;
}
console.log(test());
