var str =('4 3 1 1 2 3 0 0 1 1 0 0 0 0 0 0'.split(" "));
var arr =[4];
let arr1 = [];
//转化为二维数组
for(let i = 0 ;i<str.length;i+3){
    let item = [];
    item = str.splice(i,4);
    arr1.push(item);
}
//对操作数组运动方向进行判断；
for(let i =0;i<arr.length; i++){
    if(arr[i] == 1){
        point('left');
    }else if(arr[i] == 2){
        point('right');
    }else if(arr[i] == 3){
        point('top');
    }else if(arr[i] == 4){
        point('bottom');
    }else{
        console.log('err');
    }
}
//方向函数
function point(p){
    if(p ==='left'){
        for(let i =0;i<arr1.length;i++){
            let s = arr1[i]
            for(let j = s.length-1; j>=0;j--){
                if(s[j] == s[j-1]){
                    s[j-1] = JSON.stringify(Number(s[j])+Number(s[j-1]));
                    s[j] = '0';
                }
            }
        }
    }else if(p === 'right'){
        for(let i =0;i<arr1.length;i++){
            let s = arr1[i]
            for(let j = 0; j<arr1.length;j++){
                if(s[j] == s[j+1]){
                    s[j+1] = JSON.stringify(Number(s[j])+Number(s[j+1]));
                    s[j] = '0';
                }
            }
        }
    }else if(p === 'bottom'){
        for(let i =0;i<arr1.length-1;i++){
            for(let j =0;j<arr1.length;j++){
                if(arr1[i][j] == arr1[i+1][j]){
                    arr1[i+1][j] = JSON.stringify(Number(arr1[i][j])+Number(arr1[i+1][j]));
                    arr1[i][j] = '0';
                }
            }
        }

    }else if(p === 'top'){
        for(let i =arr1.length-1;i>0;i--){
            for(let j = 0;j<arr1.length;j++){
                if(arr1[i][j] == arr1[i-1][j]){
                    arr1[i-1][j] = JSON.stringify(Number(arr1[i][j])+Number(arr1[i-1][j]));
                    arr1[i][j] = '0';
                }
            }
        }
    }
    //console.log ([].concat(...arr1));
    console.log(arr1);
}