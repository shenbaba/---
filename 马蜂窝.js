var str = '34839946-beijing 34839946-shanghai 42342124-hongkong 42342124-guilin 42342124-guilin 12312344-shanghai 12312344-shanghai 22341234-nanjing'

function test() {
  let arr = str.split(' ');
  let item=[];
  let json={};
  for(let i = 0; i<arr.length; i++){
    let list = arr[i].split('-');
    let a = list[1];
    item.push(a);
  }
  let most = [];
  let max = 0;
  for(let i = 0; i<item.length;i++){
      let s = item[i];
      json[s] === undefined ? json[s] =1 : json[s]++;
      if(json[s]>max){
        max = json[s];
        most.push(s);
        delete json[s];
      }
  }
  console.log(most.reverse());
}
test();