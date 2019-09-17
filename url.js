var str ='https://ones.sankuai.com/api/proxy/field/remoteList?objectId=13110&objectType=PROJECT&fieldType=COMPONENT_MODULE&subType=DEFECT&name=&id=&nameList=&factKeyChain=1565948457870&objectId=13110&objectType=PROJECT&fieldType=COMPONENT_MODULE&subType=DEFECT&sn=50&sn=40' 
function question(str){
    let arr = str.split('?');
    let arr1 = arr[1].split('&');
    let json={}
    for(let i =0; i<arr1.length; i++){
        let item = arr1[i].split('=');
        if( json[item[0]] === undefined){
            json[item[0]]=item[1]; 
        }else{
            let arr2 = [json[item[0]]];
            arr2.push(item[1]);
            json[item[0]] = arr2;
 
        }
         
    }
    console.log(JSON.stringify(json));
}
question(str);