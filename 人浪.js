//58笔试题
let w = 'javascript'
function wave(w){
    let arr = w.split('');
    let len = arr.length;
    let les =[];
    let list =[]
    for(let i=0;i<len;i++){
        list = JSON.parse(JSON.stringify(arr));
        list[i] = list[i].toUpperCase();
        les.push(list.join(''))
        list = [];
    }
   return les;
}
console.log(wave(w))
//[ 'Javascript','jAvascript','jaVascript','javAscript','javaScript','javasCript','javascRipt','javascrIpt','javascriPt','javascripT' ]